/**
 * 自定义事件列表
 * @author tengge / https://github.com/tengge1
 */
var EventList = [
    // dom事件
    'click', // 点击
    'contextmenu', // 右键
    'dblclick', // 双击
    'keydown', // 按下键盘按键
    'keyup', // 抬起键盘按键
    'mousedown', // 按下鼠标按键
    'mousemove', // 鼠标移动
    'mouseup', // 抬起鼠标按键
    'mousewheel', // 鼠标滚轮
    'resize', // 窗口大小改变
    'dragover', // 拖动到某元素上
    'drop', // 放置到某元素上

    // app事件
    'appStart', // 应用程序开始前调用
    'appStarted', // 应用程序开始后调用
    'appStop', // 程序开始结束前调用
    'appStoped', // 程序结束后调用

    // 配置
    'optionsChanged', // 配置改变事件

    // 菜单栏事件
    'mAddPhysicsPlane', // 添加平板
    'mAddPhysicsWall', // 添加墙
    'mAddPhysicsCloth', // 添加布料
    'mThrowBall', // 探测小球
    'sceneSaved', // 场景保存成功

    // 工具栏事件
    'changeMode', // 改变模式（select, translate, rotate, scale, delete）

    // editor事件
    'select', // 选中事件
    'clear', // 清空场景
    'load', // 加载场景
    'log', // 日志事件
    'intersect', // 碰撞事件

    'editScript', // 编辑脚本事件
    'editorCleared', // 编辑器已经清空事件

    'snapChanged', // 对齐单元格事件
    'spaceChanged', // 空间坐标系改变事件

    'sceneGraphChanged', // 场景内容改变事件

    'cameraChanged', // 相机改变事件

    'geometryChanged', // 几何体改变事件

    'objectSelected', // 物体选中改变
    'objectFocused', // 物体交点改变事件

    'objectAdded', // 添加物体事件
    'objectChanged', // 物体改变事件
    'objectRemoved', // 物体移除事件

    'materialChanged', // 材质改变事件

    'scriptAdded', // 添加脚本事件
    'scriptChanged', // 脚本改变事件
    'scriptRemoved', // 脚本移除事件

    'historyChanged', // 历史改变事件
    'refreshScriptEditor', // 刷新脚本编辑器事件

    'sceneLoaded', // 场景载入

    // 场景编辑区
    'transformControlsChange', // 变形控件改变
    'transformControlsMouseDown', // 变形控件按下鼠标键
    'transformControlsMouseUp', // 变形控件抬起鼠标键
    'render', // 渲染一次场景
    'animate', // 进行动画

    // 侧边栏
    'tabSelected', // 选项卡选中事件
    'animationSelected', // 动画选中事件
    'animationChanged', // 动画发生改变事件
    'resetAnimation', // 重制动画时间轴
    'startAnimation', // 开始播放动画
    'animationTime', // 时间轴发送当前动画时间

    // 底部面板事件
    'selectBottomPanel', // 点击选择某个面板
    'showBottomPanel', // 显示某个底部面板以后
    'selectModel', // 选择模型
    'selectMap', // 选择贴图
    'selectMaterial', // 选择材质
    'selectAudio', // 选择音频
    'selectParticle', // 选择粒子
];

export default EventList;