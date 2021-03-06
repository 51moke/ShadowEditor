import PackageList from './PackageList';
import CssLoader from '../utils/CssLoader';
import JsLoader from '../utils/JsLoader';

const loaded = new Map();

/**
 * 包管理器
 * @author tengge / https://github.com/tengge1
 */
function PackageManager() {

};

/**
 * 加载包
 * @param {*} names 包名或包名列表
 * @param {*} sort 资源是否按顺序下载
 */
PackageManager.prototype.require = function (names, sort = false) {
    names = Array.isArray(names) ? names : [names];

    var assets = [];

    names.forEach(n => {
        if (loaded.has(n)) { // 该包已经加载
            return true;
        }

        loaded.set(n, true);

        var packages = PackageList.filter(m => m.name === n);
        if (packages.length === 0) {
            console.warn(`PackageManager: 包${n}不存在！`);
            return true;
        } else if (packages.length > 1) {
            console.warn(`PackageManager: 包名${n}重复！`);
        }
        packages.forEach(m => {
            assets.push.apply(assets, m.assets);
        });
    });

    if (assets.length === 0) {
        return new Promise(resolve => {
            resolve();
        });
    }

    return this._load(assets, sort);
};

PackageManager.prototype._load = function (assets = [], sort = false) {
    var cssLoader = new CssLoader();
    var jsLoader = new JsLoader();

    if (sort) {
        return new Promise(resolve => {
            (function loadBySort(list) {
                if (list.length === 0) {
                    resolve();
                    return;
                }
                var n = list.shift();
                if (n.toLowerCase().endsWith('.css')) {
                    cssLoader.load(n).then(() => {
                        loadBySort(list);
                    });
                } else if (n.toLowerCase().endsWith('.js')) {
                    jsLoader.load(n).then(() => {
                        loadBySort(list);
                    });
                } else {
                    console.warn(`PackageManager: 未知资源类型${n}。`);
                    loadBySort(list);
                }
            })(assets);
        });
    } else {
        return Promise.all(assets.map(n => {
            if (n.toLowerCase().endsWith('.css')) {
                return cssLoader.load(n);
            }

            if (n.toLowerCase().endsWith('.js')) {
                return jsLoader.load(n);
            }

            return new Promise(resolve => {
                console.warn(`PackageManager: 未知资源类型${n}。`);
                resolve(null);
            });
        }));
    }
};

export default PackageManager;