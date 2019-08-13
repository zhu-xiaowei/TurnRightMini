(function outer(modules, cache, entry) {
  function newRequire(name, jumped) {
    var module = cache[name];
    if (!module) {
      var moduleData = modules[name];
      if (!moduleData) return;
      var exports = {};
      module = cache[name] = {
        exports: exports
      };
      moduleData[0]((function(x) {
        return newRequire(moduleData[1][x] || x);
      }), module, exports);
    }
    return module.exports;
  }
  for (var i = 0; i < entry.length; i++) newRequire(entry[i]);
  return newRequire;
})({
  1: [ (function(require, module, exports) {
    module.exports = {
      1001: "cocos2d: removeAction: Target not found",
      1002: "cc.ActionManager.removeActionByTag(): an invalid tag",
      1003: "cc.ActionManager.removeActionByTag(): target must be non-null",
      1004: "cc.ActionManager.getActionByTag(): an invalid tag",
      1005: "cocos2d : getActionByTag(tag = %s): Action not found",
      1006: "[Action step]. override me",
      1007: "[Action update]. override me",
      1008: "cocos2d: FiniteTimeAction#reverse: Implement me",
      1009: "cc.EaseElastic.reverse(): it should be overridden in subclass.",
      1010: "cc.IntervalAction: reverse not implemented.",
      1011: "cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.",
      1012: "cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.",
      1013: "The speed parameter error",
      1014: "The repeat parameter error",
      1015: "parameters should not be ending with null in Javascript",
      1016: "cc.RotateTo.reverse(): it should be overridden in subclass.",
      1019: "Failed to construct, Sequence construction needs two or more actions.",
      1020: "Failed to construct, Spawn construction needs two or more actions.",
      1021: "cc.Speed.initWithAction(): action must be non nil",
      1022: "cc.Follow.initWithAction(): followedNode must be non nil",
      1023: "cc.ActionEase.initWithAction(): action must be non nil",
      1024: "Invalid configuration. It must at least have one control point",
      1025: "cc.Sequence.initWithTwoActions(): arguments must all be non nil",
      1026: "cc.RepeatForever.initWithAction(): action must be non null",
      1027: "cc.Spawn.initWithTwoActions(): arguments must all be non null",
      1028: "cc.ReverseTime.initWithAction(): action must be non null",
      1029: "cc.ReverseTime.initWithAction(): the action was already passed in.",
      1030: "cc.Animate.initWithAnimation(): animation must be non-NULL",
      1100: "Expected 'data' dict, but not found. Config file: %s",
      1101: "Please load the resource first : %s",
      1200: "cocos2d: Director: Error in gettimeofday",
      1201: "cocos2d: Director: unrecognized projection",
      1203: "cocos2d: Director: Error in gettimeofday",
      1204: "running scene should not null",
      1205: "the scene should not null",
      1206: "loadScene: The scene index to load (%s) is out of range.",
      1207: "loadScene: Unknown name type to load: '%s'",
      1208: "loadScene: Failed to load scene '%s' because '%s' is already loading",
      1209: "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
      1210: "Failed to preload '%s', %s",
      1211: "loadScene: The scene index to load (%s) is out of range.",
      1212: "loadScene: Unknown name type to load: '%s'",
      1213: "loadScene: Failed to load scene '%s' because '%s' is already loading",
      1214: "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
      1215: "Failed to preload '%s', %s",
      1216: "Director.runSceneImmediate: scene is not valid",
      1300: "element type is wrong!",
      1400: "'%s' is deprecated, please use '%s' instead.",
      1401: "The first argument should be the destination object",
      1402: "The 'visible' property of %s is deprecated, use 'enabled' instead please.",
      1403: "Sorry, cc.audioEngine.willPlayMusic is removed.",
      1404: "cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.",
      1405: "The '%s' will be removed in v2.0, please use '%s' instead.",
      1406: "'%s.%s' is removed",
      1407: "cc.pool is being removed from v2.0, you are getting cc.js.Pool instead",
      1502: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
      1503: "cc.Scheduler.pauseTarget():target should be non-null",
      1504: "cc.Scheduler.resumeTarget():target should be non-null",
      1505: "cc.Scheduler.isTargetPaused():target should be non-null",
      1506: "warning: you CANNOT change update priority in scheduled function",
      1507: "CCScheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f",
      1508: "Argument callback must not be empty",
      1509: "Argument target must be non-nullptr",
      1510: "cc.Scheduler: Illegal target which doesn't have uuid or instanceId.",
      1511: "cc.Scheduler: pause state of the scheduled task doesn't match the element pause state in Scheduler, the given paused state will be ignored.",
      1512: "cc.Scheduler: updateFunc parameter is deprecated in scheduleUpdate function, and will be removed in v2.0",
      1513: "cc.Scheduler: scheduler stopped using `__instanceId` as id since v2.0, you should do scheduler.enableForTarget(target) before all scheduler API usage on target",
      1600: "getZOrder is deprecated. Please use getLocalZOrder instead.",
      1601: "setZOrder is deprecated. Please use setLocalZOrder instead.",
      1602: "RotationX != RotationY. Don't know which one to return",
      1603: "ScaleX != ScaleY. Don't know which one to return",
      1605: "child already added. It can't be added again",
      1606: "child must be non-null",
      1607: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
      1608: "boundingBox is deprecated. Use getBoundingBox instead",
      1609: "argument tag is an invalid tag",
      1610: "cocos2d: removeChildByTag(tag = %s): child not found!",
      1612: "cc.Node.stopActionBy(): argument tag an invalid tag",
      1613: "cc.Node.getActionByTag(): argument tag is an invalid tag",
      1614: "resumeSchedulerAndActions is deprecated, please use resume instead.",
      1615: "pauseSchedulerAndActions is deprecated, please use pause instead.",
      1617: "child must be non-null",
      1618: "cc.Node.runAction(): action must be non-null",
      1619: "callback function must be non-null",
      1620: "interval must be positive",
      1623: "Set '%s' to normal node (not persist root node).",
      1624: "Replacing with the same sgNode",
      1625: "The replacement sgNode should not contain any child.",
      1626: "Should not set alpha via 'color', set 'opacity' please.",
      1627: "Not support for asynchronous creating node in SG",
      1632: "Node name can not include '/'.",
      1633: "Internal error, should not remove unknown node from parent.",
      1634: "addChild: The child to add must be instance of cc.Node, not %s.",
      1635: "reorderChild: this child is not in children list.",
      1636: "Node's zIndex value can't be greater than cc.macro.MAX_ZINDEX, setting to the maximum value",
      1637: "Node's zIndex value can't be smaller than cc.macro.MIN_ZINDEX, setting to the minimum value",
      1638: "Private node's zIndex can't be set, it will keep cc.macro.MIN_ZINDEX as its value",
      1800: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
      1801: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
      1802: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
      1803: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",
      1900: "Invalid parameter.",
      2000: "Don't call this method if the event is for touch.",
      2200: "Resolution not valid",
      2201: "should set resolutionPolicy",
      2300: "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
      2400: "WebGL error %s",
      2602: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",
      2603: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",
      2604: "setDisplayFrame is deprecated, please use setSpriteFrame instead.",
      2606: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
      2607: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null",
      2608: "%s is null, please check.",
      2609: "cc.Sprite.initWithFile(): filename should be non-null",
      2610: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",
      2614: "cc.Sprite.addChild(): child should be non-null",
      2616: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
      2617: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
      2618: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
      2619: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
      2623: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
      2625: "too many tiles, only 16384 tiles will be show",
      2626: "Unrecognized fill type in bar fill",
      2627: "Can not generate quad",
      2628: "%s does not exist",
      2710: "Sprite.initWithTexture(): Argument must be non-nil",
      2712: "Invalid spriteFrameName",
      3002: "textureForKey is deprecated. Please use getTextureForKey instead.",
      3005: "cocos2d: '%s' id=%s %s x %s",
      3006: "cocos2d: '%s' id= HTMLCanvasElement %s x %s",
      3007: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
      3103: "cc.Texture.addImage(): path should be non-null",
      3112: "cc.Texture.addImage(): path should be non-null",
      3113: "NSInternalInconsistencyException",
      3116: "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures",
      3117: "Mimpap texture only works in POT textures",
      3118: "contentSize parameter is deprecated and ignored for cc.Texture2D initWithData function.",
      3119: "Lazy init texture with image element failed due to image loading failure: %s",
      3300: "Rect width exceeds maximum margin: %s",
      3400: "Rect height exceeds maximum margin: %s",
      3500: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
      3501: "Invalid listener type!",
      3502: "Can't set fixed priority with scene graph based listener.",
      3503: "Invalid parameters.",
      3504: "listener must be a cc.EventListener object when adding a fixed priority listener",
      3505: "The listener has been registered, please don't register it again.",
      3506: "Unsupported listener target.",
      3507: "Invalid scene graph priority!",
      3508: "If program goes here, there should be event in dispatch.",
      3509: "_inDispatch should be 1 here.",
      3510: "%s's scene graph node not contains in the parent's children",
      3511: "event is undefined",
      3600: "cc.Class will automatically call super constructor of %s, you should not call it manually.",
      3601: "The editor property 'playOnFocus' should be used with 'executeInEditMode' in class '%s'",
      3602: "Unknown editor property '%s' in class '%s'.",
      3603: "Use 'cc.Float' or 'cc.Integer' instead of 'cc.Number' please.",
      3604: "Can only indicate one type attribute for %s.",
      3605: "The default value of %s is not instance of %s.",
      3606: "No needs to indicate the '%s' attribute for %s, which its default value is type of %s.",
      3607: "The default value of %s must be an empty string.",
      3608: "The type of %s must be cc.String, not String.",
      3609: "The type of %s must be cc.Boolean, not Boolean.",
      3610: "The type of %s must be cc.Float or cc.Integer, not Number.",
      3611: "Can not indicate the '%s' attribute for %s, which its default value is type of %s.",
      3612: "%s Just set the default value to 'new %s()' and it will be handled properly.",
      3613: "'No need to use 'serializable: false' or 'editorOnly: true' for the getter of '%s.%s', every getter is actually non-serialized.",
      3614: "Should not define constructor for cc.Component %s.",
      3615: "Each script can have at most one Component.",
      3616: "Should not specify class name %s for Component which defines in project.",
      3617: "Can not instantiate CCClass '%s' with arguments.",
      3618: "ctor of '%s' can not be another CCClass",
      3619: "ctor of '%s' must be function type",
      3620: "this._super declared in '%s.%s' but no super method defined",
      3621: "Unknown type of %s.%s, maybe you want is '%s'.",
      3622: "Unknown type of %s.%s, property should be defined in 'properties' or 'ctor'",
      3623: "Can not use 'editor' attribute, '%s' not inherits from Components.",
      3624: "'%s' overrided '%s' but '%s' is defined as 'false' so the super method will not be called. You can set '%s' to null to disable this warning.",
      3625: "[isChildClassOf] superclass should be function type, not",
      3626: "Can't remove '%s' because '%s' depends on it.",
      3627: "Should not add renderer component (%s) to a Canvas node.",
      3628: "Should not add %s to a node which size is already used by its other component.",
      3629: "attribute must be type object",
      3633: "Properties function of '%s' should return an object!",
      3634: "Disallow to use '.' in property name",
      3635: "Default array must be empty, set default value of %s.%s to [], and initialize in 'onLoad' or 'ctor' please. (just like 'this.%s = [...];')",
      3636: "Do not set default value to non-empty object, unless the object defines its own 'clone' function. Set default value of %s.%s to null or {}, and initialize in 'onLoad' or 'ctor' please. (just like 'this.%s = {foo: bar};')",
      3637: "Can not declare %s.%s, it is already defined in the prototype of %s",
      3638: "'%s': the getter of '%s' is already defined!",
      3639: "Can not apply the specified attribute to the getter of '%s.%s', attribute index: %s",
      3640: "'%s': the setter of '%s' is already defined!",
      3641: "Can not construct %s because it contains object property.",
      3642: "Cannot define %s.%s because static member name can not be '%s'.",
      3643: "Can not define a member called 'constructor' in the class '%s', please use 'ctor' instead.",
      3644: "Please define 'type' parameter of %s.%s as the actual constructor.",
      3645: "Please define 'type' parameter of %s.%s as the constructor of %s.",
      3646: "Unknown 'type' parameter of %s.%s\uff1a%s",
      3647: "The length of range array must be equal or greater than 2",
      3648: "Can not declare %s.%s method, it is already defined in the properties of %s.",
      3649: "CCClass %s have conflict between its ctor and __ctor__.",
      3651: 'Can not call `_super` or `prototype.ctor` in ES6 Classes "%s", use `super` instead please.',
      3652: 'Failed to construct a dummy instance of the "%s" class using `new` behind the scenes. This is for getting default values declared in TypeScript. Please ensure the class will be able to construct during script\'s initialization. %s.',
      3653: 'Please do not specifiy "default" attribute in decorator of "%s" property in "%s" class.  \nDefault value must be initialized at their declaration:\n \n// Before:\n@property({\n  type: cc.Integer\n  default: 0  // <--\n})\nvalue;\n// After:\n@property({\n  type: cc.Integer\n})\nvalue = 0;    // <--',
      3654: 'Please specifiy a default value for "%s" property at its declaration:\n \n// Before:\n@property(...)\nvalue; \n// After:\n@property(...)\nvalue = 0',
      3655: 'Can not specifiy "get" or "set"  attribute in decorator for "%s" property in "%s" class.  \nPlease use:\n \n@property(...)\nget %s () {\n    ...\n}\n@property\nset %s (value) {\n    ...\n}',
      3656: "The default value of %s.%s must be an empty string. (changed since 1.8)",
      3657: "The value assigned to %s should be Texture2D object, not url string. Since 1.8,  \nyou can declare a texture object directly in properties by using:  \n \n{\n    default: null,\n    type: cc.Texture2D  // use 'type:' instead of 'url:'\n}",
      3658: "browser does not support getters",
      3700: "internal error: _prefab is undefined",
      3701: "Failed to load prefab asset for node '%s'",
      3800: "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
      3801: "The node can not be made persist because it's not under root node.",
      3802: "The node can not be made persist because it's not in current scene.",
      3803: "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
      3804: "getComponent: Type must be non-nil",
      3805: "Can't add component '%s' because %s already contains the same component.",
      3806: "Can't add component '%s' to %s because it conflicts with the existing '%s' derived component.",
      3807: "addComponent: Failed to get class '%s'",
      3808: "addComponent: Should not add component ('%s') when the scripts are still loading.",
      3809: "addComponent: The component to add must be a constructor",
      3810: "addComponent: The component to add must be child class of cc.Component",
      3811: "_addComponentAt: The component to add must be a constructor",
      3812: "_addComponentAt: Index out of range",
      3813: "removeComponent: Component must be non-nil",
      3814: "Argument must be non-nil",
      3815: "Component not owned by this entity",
      3816: "Node '%s' is already activating",
      3817: "Sorry, the component of '%s' which with an index of %s is corrupted! It has been removed.",
      3818: "Failed to read or parse project.json",
      3819: "Warning: target element is not a DIV or CANVAS",
      3820: "The renderer doesn't support the renderMode %s",
      3821: "Cannot change hierarchy while activating or deactivating the parent.",
      3900: "Invalid clip to add",
      3901: "Invalid clip to remove",
      3902: "clip is defaultClip, set force to true to force remove clip and animation state",
      3903: "animation state is playing, set force to true to force stop and remove clip and animation state",
      3904: "motion path of target [%s] in prop [%s] frame [%s] is not valid",
      3905: "sprite frames must be an Array.",
      3906: "Can't find easing type [%s]",
      3907: "animator not added or already removed",
      3908: "animation not added or already removed",
      3912: "already-playing",
      4000: "Sorry, the cc.Font has been modified from Raw Asset to Asset. Please load the font asset before using.",
      4003: "Label font size can't be shirnked less than 0!",
      4004: "force notify all fonts loaded!",
      4011: "Property spriteFrame of Font '%s' is invalid. Using system font instead.",
      4012: "The texture of Font '%s' must be already loaded on JSB. Using system font instead.",
      4013: "Sorry, lineHeight of system font not supported on JSB.",
      4100: "Property padding is deprecated, please use paddingLeft, paddingRight, paddingTop and paddingBottom instead",
      4200: "MaskType: IMAGE_STENCIL only support WebGL mode.",
      4201: "The alphaThreshold invalid in Canvas Mode.",
      4202: "The inverted invalid in Canvas Mode.",
      4300: "can not found the %s page.",
      4400: "Invalid RichText img tag! The sprite frame name can't be found in the ImageAtlas!",
      4600: "Script attached to '%s' is missing or invalid.",
      4700: "The dom control is not created!",
      4800: "unknown asset type",
      4901: "loadRes: should not specify the extname in %s %s",
      4902: "No need to release non-cached asset.",
      4903: "Can not get class '%s'",
      4914: "Resources url '%s' does not exist.",
      4915: "Pack indices and data do not match in size",
      4916: "Failed to download package for %s",
      4920: "Sorry, you shouldn't use id as item identity any more, please use url or uuid instead, the current id is being set as url: (%s)",
      4921: "Invalid pipe or invalid index provided!",
      4922: "The pipe to be inserted is already in the pipeline!",
      4923: "Uuid Loader: Parse asset [ %s ] failed : %s",
      4924: "JSON Loader: Input item doesn't contain string content",
      4925: "Uuid Loader: Deserialize asset [ %s ] failed : %s",
      4926: "Audio Downloader: no web audio context.",
      4927: "Audio Downloader: audio not supported on this browser!",
      4928: "Load %s failed!",
      4929: "Load Webp ( %s ) failed",
      4930: "Load image ( %s ) failed",
      4931: "Download Uuid: can not find type of raw asset[ %s ]: %s",
      4932: 'Since v1.10, for any atlas ("%s") in the "resources" directory, it is not possible to find the contained SpriteFrames via `loadRes`, `getRes` or `releaseRes`. Load the SpriteAtlas first and then use `spriteAtlas.getSpriteFrame(name)` instead please.',
      4933: "Download Font [ %s ] failed, using Arial or system default font instead",
      5000: "object already destroyed",
      5001: "object not yet destroyed",
      5100: "Not a plist file!",
      5200: "Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option",
      5201: "browser don't support web audio",
      5202: "This feature supports WebGL render mode only.",
      5300: "Type of target to deserialize not matched with data: target is %s, data is %s",
      5301: "Can not find script '%s'",
      5302: "Can not find class '%s'",
      5400: "'%s' is deprecated, use '%s' instead please.",
      5401: "'%s' is deprecated, use '%s' instead please.",
      5402: "cc.js.addon called on non-object:",
      5403: "cc.js.mixin: arguments must be type object:",
      5404: "The base class to extend from must be non-nil",
      5405: "The class to extend must be non-nil",
      5406: "Class should be extended before assigning any prototype members.",
      5500: "'notify' can't work with 'get/set' !",
      5501: "'notify' must work with 'default' !",
      5502: "Invalid url of %s.%s",
      5503: "The 'url' attribute of '%s.%s' is undefined when loading script.",
      5504: "The 'url' type of '%s.%s' must be child class of cc.RawAsset.",
      5505: "The 'url' type of '%s.%s' must not be child class of cc.Asset, otherwise you should use 'type: %s' instead.",
      5506: "Can not specify 'type' attribute for '%s.%s', because its 'url' is already defined.",
      5507: "The 'default' attribute of '%s.%s' must be an array",
      5508: "Invalid type of %s.%s",
      5510: "The 'type' attribute of '%s.%s' can not be 'Number', use 'Float' or 'Integer' instead please.",
      5511: "The 'type' attribute of '%s.%s' is undefined when loading script",
      5512: "Can not serialize '%s.%s' because the specified type is anonymous, please provide a class name or set the 'serializable' attribute of '%s.%s' to 'false'.",
      5513: "The 'default' value of '%s.%s' should not be used with a 'get' function.",
      5514: "The 'default' value of '%s.%s' should not be used with a 'set' function.",
      5515: "The 'default' value of '%s.%s' can not be an constructor. Set default to null please.",
      5516: "Property '%s.%s' must define at least one of 'default', 'get' or 'set'.",
      5517: "'%s.%s' hides inherited property '%s.%s'. To make the current property override that implementation, add the `override: true` attribute please.",
      5600: "Argument must be non-nil",
      5601: "Can not get current scene.",
      5602: "Scene is destroyed",
      5603: "reference node is destroyed",
      5700: "no %s or %s on %s",
      5800: "%s.lerp not yet implemented.",
      5801: "%s.clone not yet implemented.",
      5802: "%s.equals not yet implemented.",
      5900: "MotionStreak only support WebGL mode.",
      5901: "cc.MotionStreak.getOpacity has not been supported.",
      5902: "cc.MotionStreak.setOpacity has not been supported.",
      6000: "Custom should not be false if file is not specified.",
      6001: "The new %s must not be NaN",
      6017: "Incomplete or corrupt PNG file",
      6018: "Invalid filter algorithm: %s",
      6019: "Invalid byte order value.",
      6020: "You forgot your towel!",
      6021: "Unknown Field Tag: %s",
      6022: "Too many bits requested",
      6023: "No bits requested",
      6024: "Cannot recover from missing StripByteCounts",
      6025: "Cannot handle sub-byte bits per sample",
      6026: "Cannot handle sub-byte bits per pixel",
      6027: "Palette image missing color map",
      6028: "Unknown Photometric Interpretation: %s",
      6029: "Unkown error",
      6030: "cc.ParticleSystem: error decoding or ungzipping textureImageData",
      6031: "cc.ParticleSystem: unknown image format with Data",
      6032: "cc.ParticleSystem.initWithDictionary() : error loading the texture",
      6200: "Canvas doesn't support mesh slot!",
      6300: "only cc.DrawNode is accepted as stencil",
      6301: "Stencil buffer is not enabled.",
      6302: "Nesting more than %d stencils is not supported. Everything will be drawn without stencil for this node and its children.",
      6400: "asset.url is not usable in core process",
      6401: "asset.urls is not usable in core process",
      6402: "AssetLibrary has already been initialized!",
      6500: "Widget target must be one of the parent nodes of it",
      6600: "collider not added or already removed",
      6601: "Can't find testFunc for (%s, $s).",
      6700: "Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time",
      6701: "Should not add Canvas to a node which already contains a renderer component (%s).",
      6702: "Should not add Canvas to a node which size is already used by its other component.",
      6703: "Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext",
      6704: "Polygon's point must greater than 2",
      6705: "Argument must be non-nil",
      6800: "Callback of event must be non-nil",
      6801: "The message must be provided",
      6900: "The thing you want to instantiate must be an object",
      6901: "The thing you want to instantiate is nil",
      6902: "The thing you want to instantiate is destroyed",
      6903: "The instantiate method for given asset do not implemented",
      6904: "Can not instantiate array",
      6905: "Can not instantiate DOM element",
      7000: "Failed to init asset's raw path.",
      7001: "Should not load '%s' from script dynamically, unless it is placed in the 'resources' folder.",
      7002: "Sorry can not load '%s' because it is not placed in the 'resources' folder.",
      7003: "Failed to init builtin asset's raw path.",
      7100: "%s already defined in Enum.",
      7101: "Sorry, 'cc.Enum' not available on this platform, please report this error here: https://github.com/cocos-creator/engine/issues/new",
      7200: "Method 'initWithTMXFile' is no effect now, please set property 'tmxAsset' instead.",
      7201: "Method 'initWithXML' is no effect now, please set property 'tmxAsset' instead.",
      7202: "Add component TiledLayer into node failed.",
      7203: "Property 'mapLoaded' is unused now. Please write the logic to the callback 'start'.",
      7210: "TMX Hexa zOrder not supported",
      7211: "TMX invalid value",
      7214: "propertiesForGID is deprecated. Please use getPropertiesForGID instead.",
      7215: "cocos2d: Warning: TMX Layer %s has no tiles",
      7216: "cocos2d: TMXFormat: Unsupported TMX version: %s",
      7217: "cocos2d: TMXFomat: Unsupported orientation: %s",
      7218: "cc.TMXMapInfo.parseXMLFile(): unsupported compression method",
      7219: "cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported",
      7221: "cc.TMXMapInfo.parseXMLFile(): Texture '%s' not found.",
      7222: "Parse %s failed.",
      7236: "cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released",
      7237: "cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released",
      7238: "cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released",
      7239: "cc.TMXLayer.setTileGID(): invalid gid: %s",
      7240: "cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released",
      7241: "cc.TiledMap.initWithXML(): Map not found. Please check the filename.",
      7401: "Failed to set _defaultArmatureIndex for '%s' because the index is out of range.",
      7402: "Failed to set _animationIndex for '%s' because the index is out of range.",
      7501: "Failed to set _defaultSkinIndex for '%s' because the index is out of range.",
      7502: "Failed to set _animationIndex for '%s' because its skeletonData is invalid.",
      7503: "Failed to set _animationIndex for '%s' because the index is out of range.",
      7504: "Can not render dynamic created SkeletonData",
      7505: "Invalid type of atlasFile, atlas should be registered as raw asset.",
      7506: "Failed to load spine atlas '$s'",
      7507: "Please re-import '%s' because its textures is not initialized! (This workflow will be improved in the future.)",
      7508: "The atlas asset of '%s' is not exists!",
      7509: "Spine: Animation not found: %s",
      7510: "Spine: Animation not found: %s",
      7600: "The context of RenderTexture is invalid.",
      7601: "cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;",
      7602: "Could not attach texture to the framebuffer",
      7603: "clearDepth isn't supported on Cocos2d-Html5",
      7604: "saveToFile isn't supported on Cocos2d-Html5",
      7605: "newCCImage isn't supported on Cocos2d-Html5",
      7700: "On the web is always keep the aspect ratio",
      7701: "Can't know status",
      7702: "Video player's duration is not ready to get now!",
      7800: "Web does not support loading",
      7801: "Web does not support query history",
      7802: "Web does not support query history",
      7803: "The current browser does not support the GoBack",
      7804: "The current browser does not support the GoForward",
      7805: "Web does not support zoom",
      7900: "cc.math.Matrix3.assign(): current matrix equals matIn",
      7901: "cc.math.mat4Assign(): pOut equals pIn",
      7902: "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
      7903: "cc.math.Matrix4 equal: pMat1 and pMat2 are same object.",
      7904: "cc.math.Matrix4.extractPlane: Invalid plane index",
      7905: "cc.math.mat4Assign(): pOut equals pIn",
      7906: "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
      7907: "cc.math.Matrix4 equals: pMat1 and pMat2 are same object.",
      7908: "Invalid matrix mode specified",
      7909: "current quaternion is an invalid value",
      8000: "Can't handle this field type or size",
      8001: "No bytes requested",
      8002: "Too many bytes requested",
      8003: "Missing StripByteCounts!",
      8103: "cc.GLProgram.link(): Cannot link invalid program",
      8104: "cocos2d: ERROR: Failed to link program: %s",
      8105: "cocos2d: cc.shaderCache._loadDefaultShader, error shader type",
      8106: "Please load the resource firset : %s",
      8107: "cc.GLProgram.getUniformLocationForName(): uniform name should be non-null",
      8108: "cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized",
      8109: "modelView matrix is undefined.",
      8200: "Please set node's active instead of rigidbody's enabled.",
      8300: "Should only one camera exists, please check your project.",
      8301: "Camera does not support Canvas Mode.",
      8400: "Wrong type arguments, 'filePath' must be a String.",
      8401: "Since 1.10, `%s` accept %s instance directly, not a URL string. Please directly reference the %s object in your script, or load %s by loader first. Don't use %s's URL anymore.",
      9000: "Stencil manager does not support level bigger than %d in this device.",
      9001: "Stencil manager is already empty, cannot pop any mask",
      "0100": "%s not yet implemented."
    };
  }), {} ],
  2: [ (function(require, module, exports) {
    var Node = require("../CCNode");
    var EventType = Node.EventType;
    var DirtyFlag = Node._LocalDirtyFlag;
    var math = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
    var RenderFlow = require("../renderer/render-flow");
    var ONE_DEGREE = Math.PI / 180;
    var POSITION_ON = 1;
    var SCALE_ON = 2;
    var ERR_INVALID_NUMBER = false;
    function _updateLocalMatrix3d() {
      if (this._localMatDirty) {
        var t = this._matrix;
        math.mat4.fromRTS(t, this._quat, this._position, this._scale);
        if (this._skewX || this._skewY) {
          var a = t.m00, b = t.m01, c = t.m04, d = t.m05;
          var skx = Math.tan(this._skewX * ONE_DEGREE);
          var sky = Math.tan(this._skewY * ONE_DEGREE);
          Infinity === skx && (skx = 99999999);
          Infinity === sky && (sky = 99999999);
          t.m00 = a + c * sky;
          t.m01 = b + d * sky;
          t.m04 = c + a * skx;
          t.m05 = d + b * skx;
        }
        this._localMatDirty = 0;
        this._worldMatDirty = true;
      }
    }
    function _calculWorldMatrix3d() {
      this._localMatDirty && this._updateLocalMatrix();
      if (this._parent) {
        var parentMat = this._parent._worldMatrix;
        math.mat4.mul(this._worldMatrix, parentMat, this._matrix);
      } else math.mat4.copy(this._worldMatrix, this._matrix);
      this._worldMatDirty = false;
    }
    function setPosition(newPosOrX, y, z) {
      var x = void 0;
      if (void 0 === y) {
        x = newPosOrX.x;
        y = newPosOrX.y;
        z = newPosOrX.z || 0;
      } else {
        x = newPosOrX;
        z = z || 0;
      }
      var pos = this._position;
      if (pos.x === x && pos.y === y && pos.z === z) return;
      var oldPosition;
      false;
      pos.x = x;
      pos.y = y;
      pos.z = z;
      this.setLocalDirty(DirtyFlag.POSITION);
      this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
      if (this._eventMask & POSITION_ON) {
        false;
        this.emit(EventType.POSITION_CHANGED);
      }
    }
    function setScale(x, y, z) {
      if (x && "number" !== typeof x) {
        y = x.y;
        z = x.z || 1;
        x = x.x;
      } else if (void 0 !== x && void 0 === y) {
        y = x;
        z = x;
      } else void 0 === z && (z = 1);
      if (this._scale.x !== x || this._scale.y !== y || this._scale.z !== z) {
        this._scale.x = x;
        this._scale.y = y;
        this._scale.z = z;
        this.setLocalDirty(DirtyFlag.SCALE);
        this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
        this._eventMask & SCALE_ON && this.emit(EventType.SCALE_CHANGED);
      }
    }
    function _update3DFunction() {
      if (this._is3DNode) {
        this._updateLocalMatrix = _updateLocalMatrix3d;
        this._calculWorldMatrix = _calculWorldMatrix3d;
        this._mulMat = cc.vmath.mat4.mul;
      } else {
        this._updateLocalMatrix = _updateLocalMatrix2d;
        this._calculWorldMatrix = _calculWorldMatrix2d;
        this._mulMat = _mulMat2d;
      }
      this._renderComponent && this._renderComponent._on3DNodeChanged && this._renderComponent._on3DNodeChanged();
      this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
      this._localMatDirty = DirtyFlag.ALL;
    }
    function _upgrade_1x_to_2x() {
      this._is3DNode && this._update3DFunction();
      _upgrade_1x_to_2x_2d.call(this);
    }
    var proto = cc.Node.prototype;
    var _updateLocalMatrix2d = proto._updateLocalMatrix;
    var _calculWorldMatrix2d = proto._calculWorldMatrix;
    var _upgrade_1x_to_2x_2d = proto._upgrade_1x_to_2x;
    var _mulMat2d = proto._mulMat;
    proto.setPosition = setPosition;
    proto.setScale = setScale;
    proto._upgrade_1x_to_2x = _upgrade_1x_to_2x;
    proto._update3DFunction = _update3DFunction;
    cc.js.getset(proto, "position", proto.getPosition, setPosition, false, true);
    cc.js.getset(proto, "is3DNode", (function() {
      return this._is3DNode;
    }), (function(v) {
      if (this._is3DNode === v) return;
      this._is3DNode = v;
      this._update3DFunction();
    }));
    cc.js.getset(proto, "scaleZ", (function() {
      return this._scale.z;
    }), (function(v) {
      if (this._scale.z !== v) {
        this._scale.z = v;
        this.setLocalDirty(DirtyFlag.SCALE);
        this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
        this._eventMask & SCALE_ON && this.emit(EventType.SCALE_CHANGED);
      }
    }));
    cc.js.getset(proto, "z", (function() {
      return this._position.z;
    }), (function(value) {
      var localPosition = this._position;
      if (value !== localPosition.z) {
        true;
        localPosition.z = value;
        this.setLocalDirty(DirtyFlag.POSITION);
        this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
        this._eventMask & POSITION_ON && this.emit(EventType.POSITION_CHANGED);
      }
    }));
    cc.js.getset(proto, "eulerAngles", (function() {
      false;
      return this._quat.toEuler(cc.v3());
    }), (function(v) {
      false;
      this._quat.fromEuler(v);
      this.setLocalDirty(DirtyFlag.ROTATION);
      this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
    }));
    cc.js.getset(proto, "quat", (function() {
      return this._quat;
    }), proto.setRotation);
  }), {
    "../CCNode": 6,
    "../renderer/render-flow": 129,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  3: [ (function(require, module, exports) {
    var debugInfos = require("../../DebugInfos") || {};
    var ERROR_MAP_URL = "https://github.com/cocos-creator/engine/blob/master/EngineErrorMap.md";
    var logList = void 0;
    cc.log = cc.warn = cc.error = cc.assert = console.log;
    var resetDebugSetting = function(mode) {
      cc.log = cc.warn = cc.error = cc.assert = function() {};
      if (mode === DebugMode.NONE) return;
      if (mode > DebugMode.ERROR) (function() {
        function logToWebPage(msg) {
          if (!cc.game.canvas) return;
          if (!logList) {
            var logDiv = document.createElement("Div");
            logDiv.setAttribute("id", "logInfoDiv");
            logDiv.setAttribute("width", "200");
            logDiv.setAttribute("height", cc.game.canvas.height);
            var logDivStyle = logDiv.style;
            logDivStyle.zIndex = "99999";
            logDivStyle.position = "absolute";
            logDivStyle.top = logDivStyle.left = "0";
            logList = document.createElement("textarea");
            logList.setAttribute("rows", "20");
            logList.setAttribute("cols", "30");
            logList.setAttribute("disabled", "true");
            var logListStyle = logList.style;
            logListStyle.backgroundColor = "transparent";
            logListStyle.borderBottom = "1px solid #cccccc";
            logListStyle.borderTopWidth = logListStyle.borderLeftWidth = logListStyle.borderRightWidth = "0px";
            logListStyle.borderTopStyle = logListStyle.borderLeftStyle = logListStyle.borderRightStyle = "none";
            logListStyle.padding = "0px";
            logListStyle.margin = 0;
            logDiv.appendChild(logList);
            cc.game.canvas.parentNode.appendChild(logDiv);
          }
          logList.value = logList.value + msg + "\r\n";
          logList.scrollTop = logList.scrollHeight;
        }
        cc.error = function() {
          logToWebPage("ERROR :  " + cc.js.formatStr.apply(null, arguments));
        };
        cc.assert = function(cond, msg) {
          "use strict";
          if (!cond && msg) {
            msg = cc.js.formatStr.apply(null, cc.js.shiftArguments.apply(null, arguments));
            logToWebPage("ASSERT: " + msg);
          }
        };
        mode !== DebugMode.ERROR_FOR_WEB_PAGE && (cc.warn = function() {
          logToWebPage("WARN :  " + cc.js.formatStr.apply(null, arguments));
        });
        mode === DebugMode.INFO_FOR_WEB_PAGE && (cc.log = function() {
          logToWebPage(cc.js.formatStr.apply(null, arguments));
        });
      })(); else if (console && console.log.apply) {
        console.error || (console.error = console.log);
        console.warn || (console.warn = console.log);
        false;
        console.error.bind ? cc.error = console.error.bind(console) : cc.error = function() {
          return console.error.apply(console, arguments);
        };
        cc.assert = function(cond, msg) {
          if (!cond) {
            msg && (msg = cc.js.formatStr.apply(null, cc.js.shiftArguments.apply(null, arguments)));
            false;
            false;
            throw new Error(msg);
          }
        };
      }
      if (mode !== DebugMode.ERROR) {
        false;
        console.warn.bind ? cc.warn = console.warn.bind(console) : cc.warn = function() {
          return console.warn.apply(console, arguments);
        };
      }
      false;
      if (mode === DebugMode.INFO) {
        false;
        console.log.bind ? cc.log = console.log.bind(console) : cc.log = function() {
          return console.log.apply(console, arguments);
        };
      }
    };
    cc._throw = function(error) {
      var stack = error.stack;
      stack ? cc.error(stack) : cc.error(error);
    };
    function getTypedFormatter(type) {
      return function() {
        var id = arguments[0];
        var msg = debugInfos[id] || "unknown id";
        if (1 === arguments.length) return msg;
        if (2 === arguments.length) return cc.js.formatStr(msg, arguments[1]);
        var argsArray = cc.js.shiftArguments.apply(null, arguments);
        return cc.js.formatStr.apply(null, [ msg ].concat(argsArray));
      };
    }
    var logFormatter = getTypedFormatter("Log");
    cc.logID = function() {
      cc.log(logFormatter.apply(null, arguments));
    };
    var warnFormatter = getTypedFormatter("Warning");
    cc.warnID = function() {
      cc.warn(warnFormatter.apply(null, arguments));
    };
    var errorFormatter = getTypedFormatter("Error");
    cc.errorID = function() {
      cc.error(errorFormatter.apply(null, arguments));
    };
    var assertFormatter = getTypedFormatter("Assert");
    cc.assertID = function(cond) {
      "use strict";
      if (cond) return;
      cc.assert(false, assertFormatter.apply(null, cc.js.shiftArguments.apply(null, arguments)));
    };
    var DebugMode = cc.Enum({
      NONE: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      INFO_FOR_WEB_PAGE: 4,
      WARN_FOR_WEB_PAGE: 5,
      ERROR_FOR_WEB_PAGE: 6
    });
    module.exports = cc.debug = {
      DebugMode: DebugMode,
      _resetDebugSetting: resetDebugSetting,
      getError: getTypedFormatter("ERROR"),
      isDisplayStats: function() {
        return !!cc.profiler && cc.profiler.isShowingStats();
      },
      setDisplayStats: function(displayStats) {
        if (cc.profiler) {
          displayStats ? cc.profiler.showStats() : cc.profiler.hideStats();
          cc.game.config.showFPS = !!displayStats;
        }
      }
    };
  }), {
    "../../DebugInfos": 1
  } ],
  4: [ (function(require, module, exports) {
    var EventTarget = require("./event/event-target");
    var AutoReleaseUtils = require("./load-pipeline/auto-release-utils");
    var ComponentScheduler = require("./component-scheduler");
    var NodeActivator = require("./node-activator");
    var Obj = require("./platform/CCObject");
    var game = require("./CCGame");
    var renderer = require("./renderer");
    var eventManager = require("./event-manager");
    var Scheduler = require("./CCScheduler");
    cc.Director = function() {
      EventTarget.call(this);
      this.invalid = false;
      this._paused = false;
      this._purgeDirectorInNextLoop = false;
      this._winSizeInPoints = null;
      this._loadingScene = "";
      this._scene = null;
      this._totalFrames = 0;
      this._lastUpdate = 0;
      this._deltaTime = 0;
      this._scheduler = null;
      this._compScheduler = null;
      this._nodeActivator = null;
      this._actionManager = null;
      var self = this;
      game.on(game.EVENT_SHOW, (function() {
        self._lastUpdate = performance.now();
      }));
      game.once(game.EVENT_ENGINE_INITED, this.init, this);
    };
    cc.Director.prototype = {
      constructor: cc.Director,
      init: function() {
        this._totalFrames = 0;
        this._lastUpdate = performance.now();
        this._paused = false;
        this._purgeDirectorInNextLoop = false;
        this._winSizeInPoints = cc.size(0, 0);
        this._scheduler = new Scheduler();
        if (cc.ActionManager) {
          this._actionManager = new cc.ActionManager();
          this._scheduler.scheduleUpdate(this._actionManager, Scheduler.PRIORITY_SYSTEM, false);
        } else this._actionManager = null;
        this.sharedInit();
        return true;
      },
      sharedInit: function() {
        this._compScheduler = new ComponentScheduler();
        this._nodeActivator = new NodeActivator();
        eventManager && eventManager.setEnabled(true);
        if (cc.AnimationManager) {
          this._animationManager = new cc.AnimationManager();
          this._scheduler.scheduleUpdate(this._animationManager, Scheduler.PRIORITY_SYSTEM, false);
        } else this._animationManager = null;
        if (cc.CollisionManager) {
          this._collisionManager = new cc.CollisionManager();
          this._scheduler.scheduleUpdate(this._collisionManager, Scheduler.PRIORITY_SYSTEM, false);
        } else this._collisionManager = null;
        if (cc.PhysicsManager) {
          this._physicsManager = new cc.PhysicsManager();
          this._scheduler.scheduleUpdate(this._physicsManager, Scheduler.PRIORITY_SYSTEM, false);
        } else this._physicsManager = null;
        cc._widgetManager && cc._widgetManager.init(this);
        cc.loader.init(this);
      },
      calculateDeltaTime: function() {
        var now = performance.now();
        this._deltaTime = (now - this._lastUpdate) / 1e3;
        (true, this._deltaTime > 1) && (this._deltaTime = 1 / 60);
        this._lastUpdate = now;
      },
      convertToGL: function(uiPoint) {
        var container = game.container;
        var view = cc.view;
        var box = container.getBoundingClientRect();
        var left = box.left + window.pageXOffset - container.clientLeft;
        var top = box.top + window.pageYOffset - container.clientTop;
        var x = view._devicePixelRatio * (uiPoint.x - left);
        var y = view._devicePixelRatio * (top + box.height - uiPoint.y);
        return view._isRotated ? cc.v2(view._viewportRect.width - y, x) : cc.v2(x, y);
      },
      convertToUI: function(glPoint) {
        var container = game.container;
        var view = cc.view;
        var box = container.getBoundingClientRect();
        var left = box.left + window.pageXOffset - container.clientLeft;
        var top = box.top + window.pageYOffset - container.clientTop;
        var uiPoint = cc.v2(0, 0);
        if (view._isRotated) {
          uiPoint.x = left + glPoint.y / view._devicePixelRatio;
          uiPoint.y = top + box.height - (view._viewportRect.width - glPoint.x) / view._devicePixelRatio;
        } else {
          uiPoint.x = left + glPoint.x * view._devicePixelRatio;
          uiPoint.y = top + box.height - glPoint.y * view._devicePixelRatio;
        }
        return uiPoint;
      },
      end: function() {
        this._purgeDirectorInNextLoop = true;
      },
      getWinSize: function() {
        return cc.size(cc.winSize);
      },
      getWinSizeInPixels: function() {
        return cc.size(cc.winSize);
      },
      pause: function() {
        if (this._paused) return;
        this._paused = true;
      },
      purgeCachedData: function() {
        cc.loader.releaseAll();
      },
      purgeDirector: function() {
        this._scheduler.unscheduleAll();
        this._compScheduler.unscheduleAll();
        this._nodeActivator.reset();
        eventManager && eventManager.setEnabled(false);
        cc.renderer.clear();
        true;
        cc.isValid(this._scene) && this._scene.destroy();
        this._scene = null;
        this.stopAnimation();
        cc.loader.releaseAll();
      },
      reset: function() {
        this.purgeDirector();
        eventManager && eventManager.setEnabled(true);
        this._actionManager && this._scheduler.scheduleUpdate(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        this._animationManager && this._scheduler.scheduleUpdate(this._animationManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        this._collisionManager && this._scheduler.scheduleUpdate(this._collisionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        this._physicsManager && this._scheduler.scheduleUpdate(this._physicsManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        this.startAnimation();
      },
      runSceneImmediate: function(scene, onBeforeLoadScene, onLaunched) {
        cc.assertID(scene instanceof cc.Scene, 1216);
        (true, true) && console.time("InitScene");
        scene._load();
        (true, true) && console.timeEnd("InitScene");
        (true, true) && console.time("AttachPersist");
        var persistNodeList = Object.keys(game._persistRootNodes).map((function(x) {
          return game._persistRootNodes[x];
        }));
        for (var i = 0; i < persistNodeList.length; i++) {
          var node = persistNodeList[i];
          var existNode = scene.getChildByUuid(node.uuid);
          if (existNode) {
            var index = existNode.getSiblingIndex();
            existNode._destroyImmediate();
            scene.insertChild(node, index);
          } else node.parent = scene;
        }
        (true, true) && console.timeEnd("AttachPersist");
        var oldScene = this._scene;
        true;
        (true, true) && console.time("AutoRelease");
        var autoReleaseAssets = oldScene && oldScene.autoReleaseAssets && oldScene.dependAssets;
        AutoReleaseUtils.autoRelease(autoReleaseAssets, scene.dependAssets, persistNodeList);
        (true, true) && console.timeEnd("AutoRelease");
        (true, true) && console.time("Destroy");
        cc.isValid(oldScene) && oldScene.destroy();
        this._scene = null;
        Obj._deferredDestroy();
        (true, true) && console.timeEnd("Destroy");
        onBeforeLoadScene && onBeforeLoadScene();
        this.emit(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, scene);
        this._scene = scene;
        (true, true) && console.time("Activate");
        scene._activate();
        (true, true) && console.timeEnd("Activate");
        this.startAnimation();
        onLaunched && onLaunched(null, scene);
        this.emit(cc.Director.EVENT_AFTER_SCENE_LAUNCH, scene);
      },
      runScene: function(scene, onBeforeLoadScene, onLaunched) {
        cc.assertID(scene, 1205);
        cc.assertID(scene instanceof cc.Scene, 1216);
        scene._load();
        this.once(cc.Director.EVENT_AFTER_UPDATE, (function() {
          this.runSceneImmediate(scene, onBeforeLoadScene, onLaunched);
        }), this);
      },
      _getSceneUuid: function(key) {
        var scenes = game._sceneInfos;
        if ("string" === typeof key) {
          key.endsWith(".fire") || (key += ".fire");
          "/" === key[0] || key.startsWith("db://") || (key = "/" + key);
          for (var i = 0; i < scenes.length; i++) {
            var info = scenes[i];
            if (info.url.endsWith(key)) return info;
          }
        } else if ("number" === typeof key) {
          if (0 <= key && key < scenes.length) return scenes[key];
          cc.errorID(1206, key);
        } else cc.errorID(1207, key);
        return null;
      },
      loadScene: function(sceneName, onLaunched, _onUnloaded) {
        if (this._loadingScene) {
          cc.errorID(1208, sceneName, this._loadingScene);
          return false;
        }
        var info = this._getSceneUuid(sceneName);
        if (info) {
          var uuid = info.uuid;
          this.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
          this._loadingScene = sceneName;
          this._loadSceneByUuid(uuid, onLaunched, _onUnloaded);
          return true;
        }
        cc.errorID(1209, sceneName);
        return false;
      },
      preloadScene: function(sceneName, onProgress, onLoaded) {
        if (void 0 === onLoaded) {
          onLoaded = onProgress;
          onProgress = null;
        }
        var info = this._getSceneUuid(sceneName);
        if (info) {
          this.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
          cc.loader.load({
            uuid: info.uuid,
            type: "uuid"
          }, onProgress, (function(error, asset) {
            error && cc.errorID(1210, sceneName, error.message);
            onLoaded && onLoaded(error, asset);
          }));
        } else {
          var error = 'Can not preload the scene "' + sceneName + '" because it is not in the build settings.';
          onLoaded(new Error(error));
          cc.error("preloadScene: " + error);
        }
      },
      _loadSceneByUuid: function(uuid, onLaunched, onUnloaded, dontRunScene) {
        false;
        console.time("LoadScene " + uuid);
        cc.AssetLibrary.loadAsset(uuid, (function(error, sceneAsset) {
          console.timeEnd("LoadScene " + uuid);
          var self = cc.director;
          self._loadingScene = "";
          if (error) {
            error = "Failed to load scene: " + error;
            cc.error(error);
          } else {
            if (sceneAsset instanceof cc.SceneAsset) {
              var scene = sceneAsset.scene;
              scene._id = sceneAsset._uuid;
              scene._name = sceneAsset._name;
              false;
              self.runSceneImmediate(scene, onUnloaded, onLaunched);
              return;
            }
            error = "The asset " + uuid + " is not a scene";
            cc.error(error);
          }
          onLaunched && onLaunched(error);
        }));
      },
      resume: function() {
        if (!this._paused) return;
        this._lastUpdate = performance.now();
        this._lastUpdate || cc.logID(1200);
        this._paused = false;
        this._deltaTime = 0;
      },
      setDepthTest: function(value) {
        if (!cc.Camera.main) return;
        cc.Camera.main.depth = !!value;
      },
      setClearColor: function(clearColor) {
        if (!cc.Camera.main) return;
        cc.Camera.main.backgroundColor = clearColor;
      },
      getRunningScene: function() {
        return this._scene;
      },
      getScene: function() {
        return this._scene;
      },
      getAnimationInterval: function() {
        return 1e3 / game.getFrameRate();
      },
      setAnimationInterval: function(value) {
        game.setFrameRate(Math.round(1e3 / value));
      },
      getDeltaTime: function() {
        return this._deltaTime;
      },
      getTotalFrames: function() {
        return this._totalFrames;
      },
      isPaused: function() {
        return this._paused;
      },
      getScheduler: function() {
        return this._scheduler;
      },
      setScheduler: function(scheduler) {
        this._scheduler !== scheduler && (this._scheduler = scheduler);
      },
      getActionManager: function() {
        return this._actionManager;
      },
      setActionManager: function(actionManager) {
        if (this._actionManager !== actionManager) {
          this._actionManager && this._scheduler.unscheduleUpdate(this._actionManager);
          this._actionManager = actionManager;
          this._scheduler.scheduleUpdate(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        }
      },
      getAnimationManager: function() {
        return this._animationManager;
      },
      getCollisionManager: function() {
        return this._collisionManager;
      },
      getPhysicsManager: function() {
        return this._physicsManager;
      },
      startAnimation: function() {
        this.invalid = false;
        this._lastUpdate = performance.now();
      },
      stopAnimation: function() {
        this.invalid = true;
      },
      mainLoop: function() {
        if (this._purgeDirectorInNextLoop) {
          this._purgeDirectorInNextLoop = false;
          this.purgeDirector();
        } else if (!this.invalid) {
          this.calculateDeltaTime();
          if (!this._paused) {
            this.emit(cc.Director.EVENT_BEFORE_UPDATE);
            this._compScheduler.startPhase();
            this._compScheduler.updatePhase(this._deltaTime);
            this._scheduler.update(this._deltaTime);
            this._compScheduler.lateUpdatePhase(this._deltaTime);
            this.emit(cc.Director.EVENT_AFTER_UPDATE);
            Obj._deferredDestroy();
          }
          this.emit(cc.Director.EVENT_BEFORE_DRAW);
          renderer.render(this._scene);
          this.emit(cc.Director.EVENT_AFTER_DRAW);
          eventManager.frameUpdateListeners();
          this._totalFrames++;
        }
      },
      __fastOn: function(type, callback, target) {
        this.add(type, callback, target);
      },
      __fastOff: function(type, callback, target) {
        this.remove(type, callback, target);
      }
    };
    cc.js.addon(cc.Director.prototype, EventTarget.prototype);
    cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
    cc.Director.EVENT_BEFORE_SCENE_LOADING = "director_before_scene_loading";
    cc.Director.EVENT_BEFORE_SCENE_LAUNCH = "director_before_scene_launch";
    cc.Director.EVENT_AFTER_SCENE_LAUNCH = "director_after_scene_launch";
    cc.Director.EVENT_BEFORE_UPDATE = "director_before_update";
    cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
    cc.Director.EVENT_BEFORE_VISIT = "director_before_draw";
    cc.Director.EVENT_AFTER_VISIT = "director_before_draw";
    cc.Director.EVENT_BEFORE_DRAW = "director_before_draw";
    cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
    cc.Director.PROJECTION_2D = 0;
    cc.Director.PROJECTION_3D = 1;
    cc.Director.PROJECTION_CUSTOM = 3;
    cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_2D;
    cc.director = new cc.Director();
    module.exports = cc.director;
  }), {
    "./CCGame": 5,
    "./CCScheduler": 9,
    "./component-scheduler": 28,
    "./event-manager": 48,
    "./event/event-target": 50,
    "./load-pipeline/auto-release-utils": 63,
    "./node-activator": 83,
    "./platform/CCObject": 92,
    "./renderer": 127
  } ],
  5: [ (function(require, module, exports) {
    var EventTarget = require("./event/event-target");
    require("../audio/CCAudioEngine");
    var debug = require("./CCDebug");
    var renderer = require("./renderer/index.js");
    var inputManager = require("./platform/CCInputManager");
    var dynamicAtlasManager = require("../core/renderer/utils/dynamic-atlas/manager");
    var game = {
      EVENT_HIDE: "game_on_hide",
      EVENT_SHOW: "game_on_show",
      EVENT_GAME_INITED: "game_inited",
      EVENT_ENGINE_INITED: "engine_inited",
      EVENT_RENDERER_INITED: "engine_inited",
      RENDER_TYPE_CANVAS: 0,
      RENDER_TYPE_WEBGL: 1,
      RENDER_TYPE_OPENGL: 2,
      _persistRootNodes: {},
      _paused: true,
      _configLoaded: false,
      _isCloning: false,
      _prepared: false,
      _rendererInitialized: false,
      _renderContext: null,
      _intervalId: null,
      _lastTime: null,
      _frameTime: null,
      _sceneInfos: [],
      frame: null,
      container: null,
      canvas: null,
      renderType: -1,
      config: null,
      onStart: null,
      setFrameRate: function(frameRate) {
        var config = this.config;
        config.frameRate = frameRate;
        this._intervalId && window.cancelAnimFrame(this._intervalId);
        this._intervalId = 0;
        this._paused = true;
        this._setAnimFrame();
        this._runMainLoop();
      },
      getFrameRate: function() {
        return this.config.frameRate;
      },
      step: function() {
        cc.director.mainLoop();
      },
      pause: function() {
        if (this._paused) return;
        this._paused = true;
        cc.audioEngine && cc.audioEngine._break();
        this._intervalId && window.cancelAnimFrame(this._intervalId);
        this._intervalId = 0;
      },
      resume: function() {
        if (!this._paused) return;
        this._paused = false;
        cc.audioEngine && cc.audioEngine._restore();
        this._runMainLoop();
      },
      isPaused: function() {
        return this._paused;
      },
      restart: function() {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, (function() {
          for (var id in game._persistRootNodes) game.removePersistRootNode(game._persistRootNodes[id]);
          cc.director.getScene().destroy();
          cc.Object._deferredDestroy();
          cc.director.purgeDirector();
          cc.audioEngine && cc.audioEngine.uncacheAll();
          cc.director.reset();
          game.onStart();
        }));
      },
      end: function() {
        close();
      },
      _initEngine: function() {
        if (this._rendererInitialized) return;
        this._initRenderer();
        true;
        this._initEvents();
        this.emit(this.EVENT_ENGINE_INITED);
      },
      _prepareFinished: function(cb) {
        this._prepared = true;
        this._initEngine();
        console.log("Cocos Creator v" + cc.ENGINE_VERSION);
        this._setAnimFrame();
        this._runMainLoop();
        this.emit(this.EVENT_GAME_INITED);
        cb && cb();
      },
      eventTargetOn: EventTarget.prototype.on,
      eventTargetOnce: EventTarget.prototype.once,
      on: function(type, callback, target) {
        this._prepared && type === this.EVENT_ENGINE_INITED ? callback.call(target) : this.eventTargetOn(type, callback, target);
      },
      once: function(type, callback, target) {
        this._prepared && type === this.EVENT_ENGINE_INITED ? callback.call(target) : this.eventTargetOnce(type, callback, target);
      },
      prepare: function(cb) {
        if (this._prepared) {
          cb && cb();
          return;
        }
        var jsList = this.config.jsList;
        if (jsList && jsList.length > 0) {
          var self = this;
          cc.loader.load(jsList, (function(err) {
            if (err) throw new Error(JSON.stringify(err));
            self._prepareFinished(cb);
          }));
        } else this._prepareFinished(cb);
      },
      run: function(config, onStart) {
        this._initConfig(config);
        this.onStart = onStart;
        this.prepare(game.onStart && game.onStart.bind(game));
      },
      addPersistRootNode: function(node) {
        if (!cc.Node.isNode(node) || !node.uuid) {
          cc.warnID(3800);
          return;
        }
        var id = node.uuid;
        if (!this._persistRootNodes[id]) {
          var scene = cc.director._scene;
          if (cc.isValid(scene)) if (node.parent) {
            if (!(node.parent instanceof cc.Scene)) {
              cc.warnID(3801);
              return;
            }
            if (node.parent !== scene) {
              cc.warnID(3802);
              return;
            }
          } else node.parent = scene;
          this._persistRootNodes[id] = node;
          node._persistNode = true;
        }
      },
      removePersistRootNode: function(node) {
        var id = node.uuid || "";
        if (node === this._persistRootNodes[id]) {
          delete this._persistRootNodes[id];
          node._persistNode = false;
        }
      },
      isPersistRootNode: function(node) {
        return node._persistNode;
      },
      _setAnimFrame: function() {
        this._lastTime = new Date();
        var frameRate = game.config.frameRate;
        this._frameTime = 1e3 / frameRate;
        false;
        if (60 !== frameRate && 30 !== frameRate) {
          window.requestAnimFrame = this._stTime;
          window.cancelAnimFrame = this._ctTime;
        } else {
          window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || this._stTime;
          window.cancelAnimFrame = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || this._ctTime;
        }
      },
      _stTime: function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, game._frameTime - (currTime - game._lastTime));
        var id = window.setTimeout((function() {
          callback();
        }), timeToCall);
        game._lastTime = currTime + timeToCall;
        return id;
      },
      _ctTime: function(id) {
        window.clearTimeout(id);
      },
      _runMainLoop: function() {
        var self = this, callback, config = self.config, director = cc.director, skip = true, frameRate = config.frameRate;
        debug.setDisplayStats(config.showFPS);
        callback = function() {
          if (!self._paused) {
            self._intervalId = window.requestAnimFrame(callback);
            if ((true, 30 === frameRate) && (skip = !skip)) return;
            director.mainLoop();
          }
        };
        self._intervalId = window.requestAnimFrame(callback);
        self._paused = false;
      },
      _initConfig: function(config) {
        "number" !== typeof config.debugMode && (config.debugMode = 0);
        config.exposeClassName = !!config.exposeClassName;
        "number" !== typeof config.frameRate && (config.frameRate = 60);
        var renderMode = config.renderMode;
        ("number" !== typeof renderMode || renderMode > 2 || renderMode < 0) && (config.renderMode = 0);
        "boolean" !== typeof config.registerSystemEvent && (config.registerSystemEvent = true);
        config.showFPS = !!config.showFPS;
        this._sceneInfos = config.scenes || [];
        this.collisionMatrix = config.collisionMatrix || [];
        this.groupList = config.groupList || [];
        debug._resetDebugSetting(config.debugMode);
        this.config = config;
        this._configLoaded = true;
      },
      _determineRenderType: function() {
        var config = this.config, userRenderMode = parseInt(config.renderMode) || 0;
        this.renderType = this.RENDER_TYPE_CANVAS;
        var supportRender = false;
        if (0 === userRenderMode) {
          if (cc.sys.capabilities["opengl"]) {
            this.renderType = this.RENDER_TYPE_WEBGL;
            supportRender = true;
          } else if (cc.sys.capabilities["canvas"]) {
            this.renderType = this.RENDER_TYPE_CANVAS;
            supportRender = true;
          }
        } else if (1 === userRenderMode && cc.sys.capabilities["canvas"]) {
          this.renderType = this.RENDER_TYPE_CANVAS;
          supportRender = true;
        } else if (2 === userRenderMode && cc.sys.capabilities["opengl"]) {
          this.renderType = this.RENDER_TYPE_WEBGL;
          supportRender = true;
        }
        if (!supportRender) throw new Error(debug.getError(3820, userRenderMode));
      },
      _initRenderer: function() {
        if (this._rendererInitialized) return;
        var el = this.config.id, width = void 0, height = void 0, localCanvas = void 0, localContainer = void 0;
        var element;
        var addClass;
        true;
        this.container = localContainer = document.createElement("DIV");
        this.frame = localContainer.parentNode === document.body ? document.documentElement : localContainer.parentNode;
        if (cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) localCanvas = window.sharedCanvas || wx.getSharedCanvas(); else {
          false;
          localCanvas = canvas;
        }
        this.canvas = localCanvas;
        this._determineRenderType();
        if (this.renderType === this.RENDER_TYPE_WEBGL) {
          var opts = {
            stencil: true,
            antialias: cc.macro.ENABLE_WEBGL_ANTIALIAS,
            alpha: cc.macro.ENABLE_TRANSPARENT_CANVAS
          };
          true;
          opts["preserveDrawingBuffer"] = true;
          renderer.initWebGL(localCanvas, opts);
          this._renderContext = renderer.device._gl;
          !cc.macro.CLEANUP_IMAGE_CACHE && dynamicAtlasManager && (dynamicAtlasManager.enabled = true);
          cc.sys.browserType == cc.sys.BROWSER_TYPE_CHROME && parseFloat(cc.sys.browserVersion) >= 69 && (dynamicAtlasManager.enabled = false);
        }
        if (!this._renderContext) {
          this.renderType = this.RENDER_TYPE_CANVAS;
          renderer.initCanvas(localCanvas);
          this._renderContext = renderer.device._ctx;
        }
        this.canvas.oncontextmenu = function() {
          if (!cc._isContextMenuEnable) return false;
        };
        this._rendererInitialized = true;
      },
      _initEvents: function() {
        var win = window, hiddenPropName;
        this.config.registerSystemEvent && inputManager.registerSystemEvent(this.canvas);
        "undefined" !== typeof document.hidden ? hiddenPropName = "hidden" : "undefined" !== typeof document.mozHidden ? hiddenPropName = "mozHidden" : "undefined" !== typeof document.msHidden ? hiddenPropName = "msHidden" : "undefined" !== typeof document.webkitHidden && (hiddenPropName = "webkitHidden");
        var hidden = false;
        function onHidden() {
          if (!hidden) {
            hidden = true;
            game.emit(game.EVENT_HIDE);
          }
        }
        function onShown(arg0, arg1, arg2, arg3, arg4) {
          if (hidden) {
            hidden = false;
            game.emit(game.EVENT_SHOW, arg0, arg1, arg2, arg3, arg4);
          }
        }
        if (hiddenPropName) {
          var changeList = [ "visibilitychange", "mozvisibilitychange", "msvisibilitychange", "webkitvisibilitychange", "qbrowserVisibilityChange" ];
          for (var i = 0; i < changeList.length; i++) document.addEventListener(changeList[i], (function(event) {
            var visible = document[hiddenPropName];
            visible = visible || event["hidden"];
            visible ? onHidden() : onShown();
          }));
        } else {
          win.addEventListener("blur", onHidden);
          win.addEventListener("focus", onShown);
        }
        navigator.userAgent.indexOf("MicroMessenger") > -1 && (win.onfocus = onShown);
        if (true, cc.sys.browserType !== cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
          wx.onShow && wx.onShow(onShown);
          wx.onHide && wx.onHide(onHidden);
        }
        if ("onpageshow" in window && "onpagehide" in window) {
          win.addEventListener("pagehide", onHidden);
          win.addEventListener("pageshow", onShown);
          document.addEventListener("pagehide", onHidden);
          document.addEventListener("pageshow", onShown);
        }
        this.on(game.EVENT_HIDE, (function() {
          game.pause();
        }));
        this.on(game.EVENT_SHOW, (function() {
          game.resume();
        }));
      }
    };
    EventTarget.call(game);
    cc.js.addon(game, EventTarget.prototype);
    cc.game = module.exports = game;
  }), {
    "../audio/CCAudioEngine": void 0,
    "../core/renderer/utils/dynamic-atlas/manager": void 0,
    "./CCDebug": 3,
    "./event/event-target": 50,
    "./platform/BKInputManager": 84,
    "./platform/CCInputManager": 90,
    "./renderer/index.js": 127
  } ],
  6: [ (function(require, module, exports) {
    "use strict";
    var BaseNode = require("./utils/base-node");
    var PrefabHelper = require("./utils/prefab-helper");
    var mathPools = require("./utils/math-pools");
    var math = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
    var AffineTrans = require("./utils/affine-transform");
    var eventManager = require("./event-manager");
    var macro = require("./platform/CCMacro");
    var misc = require("./utils/misc");
    var js = require("./platform/js");
    var Event = require("./event/event");
    var EventTarget = require("./event/event-target");
    var RenderFlow = require("./renderer/render-flow");
    var Flags = cc.Object.Flags;
    var Destroying = Flags.Destroying;
    var ERR_INVALID_NUMBER = false;
    var ONE_DEGREE = Math.PI / 180;
    var ActionManagerExist = !!cc.ActionManager;
    var emptyFunc = function() {};
    var _vec2a = cc.v2();
    var _vec2b = cc.v2();
    var _mat4_temp = math.mat4.create();
    var _vec3_temp = math.vec3.create();
    var _quat_temp = math.quat.create();
    var _globalOrderOfArrival = 1;
    var _cachedArray = new Array(16);
    _cachedArray.length = 0;
    var POSITION_ON = 1;
    var SCALE_ON = 2;
    var ROTATION_ON = 4;
    var SIZE_ON = 8;
    var ANCHOR_ON = 16;
    var COLOR_ON = 32;
    var BuiltinGroupIndex = cc.Enum({
      DEBUG: 31
    });
    var LocalDirtyFlag = cc.Enum({
      POSITION: 1,
      SCALE: 2,
      ROTATION: 4,
      SKEW: 8,
      RT: 7,
      ALL: 65535
    });
    var EventType = cc.Enum({
      TOUCH_START: "touchstart",
      TOUCH_MOVE: "touchmove",
      TOUCH_END: "touchend",
      TOUCH_CANCEL: "touchcancel",
      MOUSE_DOWN: "mousedown",
      MOUSE_MOVE: "mousemove",
      MOUSE_ENTER: "mouseenter",
      MOUSE_LEAVE: "mouseleave",
      MOUSE_UP: "mouseup",
      MOUSE_WHEEL: "mousewheel",
      POSITION_CHANGED: "position-changed",
      ROTATION_CHANGED: "rotation-changed",
      SCALE_CHANGED: "scale-changed",
      SIZE_CHANGED: "size-changed",
      ANCHOR_CHANGED: "anchor-changed",
      COLOR_CHANGED: "color-changed",
      CHILD_ADDED: "child-added",
      CHILD_REMOVED: "child-removed",
      CHILD_REORDER: "child-reorder",
      GROUP_CHANGED: "group-changed"
    });
    var _touchEvents = [ EventType.TOUCH_START, EventType.TOUCH_MOVE, EventType.TOUCH_END, EventType.TOUCH_CANCEL ];
    var _mouseEvents = [ EventType.MOUSE_DOWN, EventType.MOUSE_ENTER, EventType.MOUSE_MOVE, EventType.MOUSE_LEAVE, EventType.MOUSE_UP, EventType.MOUSE_WHEEL ];
    var _currentHovered = null;
    var _touchStartHandler = function(touch, event) {
      var pos = touch.getLocation();
      var node = this.owner;
      if (node._hitTest(pos, this)) {
        event.type = EventType.TOUCH_START;
        event.touch = touch;
        event.bubbles = true;
        node.dispatchEvent(event);
        return true;
      }
      return false;
    };
    var _touchMoveHandler = function(touch, event) {
      var node = this.owner;
      event.type = EventType.TOUCH_MOVE;
      event.touch = touch;
      event.bubbles = true;
      node.dispatchEvent(event);
    };
    var _touchEndHandler = function(touch, event) {
      var pos = touch.getLocation();
      var node = this.owner;
      node._hitTest(pos, this) ? event.type = EventType.TOUCH_END : event.type = EventType.TOUCH_CANCEL;
      event.touch = touch;
      event.bubbles = true;
      node.dispatchEvent(event);
    };
    var _touchCancelHandler = function(touch, event) {
      var pos = touch.getLocation();
      var node = this.owner;
      event.type = EventType.TOUCH_CANCEL;
      event.touch = touch;
      event.bubbles = true;
      node.dispatchEvent(event);
    };
    var _mouseDownHandler = function(event) {
      var pos = event.getLocation();
      var node = this.owner;
      if (node._hitTest(pos, this)) {
        event.type = EventType.MOUSE_DOWN;
        event.bubbles = true;
        node.dispatchEvent(event);
      }
    };
    var _mouseMoveHandler = function(event) {
      var pos = event.getLocation();
      var node = this.owner;
      var hit = node._hitTest(pos, this);
      if (hit) {
        if (!this._previousIn) {
          if (_currentHovered && _currentHovered._mouseListener) {
            event.type = EventType.MOUSE_LEAVE;
            _currentHovered.dispatchEvent(event);
            _currentHovered._mouseListener._previousIn = false;
          }
          _currentHovered = this.owner;
          event.type = EventType.MOUSE_ENTER;
          node.dispatchEvent(event);
          this._previousIn = true;
        }
        event.type = EventType.MOUSE_MOVE;
        event.bubbles = true;
        node.dispatchEvent(event);
      } else {
        if (!this._previousIn) return;
        event.type = EventType.MOUSE_LEAVE;
        node.dispatchEvent(event);
        this._previousIn = false;
        _currentHovered = null;
      }
      event.stopPropagation();
    };
    var _mouseUpHandler = function(event) {
      var pos = event.getLocation();
      var node = this.owner;
      if (node._hitTest(pos, this)) {
        event.type = EventType.MOUSE_UP;
        event.bubbles = true;
        node.dispatchEvent(event);
        event.stopPropagation();
      }
    };
    var _mouseWheelHandler = function(event) {
      var pos = event.getLocation();
      var node = this.owner;
      if (node._hitTest(pos, this)) {
        event.type = EventType.MOUSE_WHEEL;
        event.bubbles = true;
        node.dispatchEvent(event);
        event.stopPropagation();
      }
    };
    function _searchMaskInParent(node) {
      var Mask = cc.Mask;
      if (Mask) {
        var index = 0;
        for (var curr = node; curr && cc.Node.isNode(curr); curr = curr._parent, ++index) if (curr.getComponent(Mask)) return {
          index: index,
          node: curr
        };
      }
      return null;
    }
    function _checkListeners(node, events) {
      if (!(node._objFlags & Destroying)) {
        var i = 0;
        if (node._bubblingListeners) for (;i < events.length; ++i) if (node._bubblingListeners.hasEventListener(events[i])) return true;
        if (node._capturingListeners) for (;i < events.length; ++i) if (node._capturingListeners.hasEventListener(events[i])) return true;
        return false;
      }
      return true;
    }
    function _doDispatchEvent(owner, event) {
      var target, i;
      event.target = owner;
      _cachedArray.length = 0;
      owner._getCapturingTargets(event.type, _cachedArray);
      event.eventPhase = 1;
      for (i = _cachedArray.length - 1; i >= 0; --i) {
        target = _cachedArray[i];
        if (target._capturingListeners) {
          event.currentTarget = target;
          target._capturingListeners.emit(event.type, event, _cachedArray);
          if (event._propagationStopped) {
            _cachedArray.length = 0;
            return;
          }
        }
      }
      _cachedArray.length = 0;
      event.eventPhase = 2;
      event.currentTarget = owner;
      owner._capturingListeners && owner._capturingListeners.emit(event.type, event);
      !event._propagationImmediateStopped && owner._bubblingListeners && owner._bubblingListeners.emit(event.type, event);
      if (!event._propagationStopped && event.bubbles) {
        owner._getBubblingTargets(event.type, _cachedArray);
        event.eventPhase = 3;
        for (i = 0; i < _cachedArray.length; ++i) {
          target = _cachedArray[i];
          if (target._bubblingListeners) {
            event.currentTarget = target;
            target._bubblingListeners.emit(event.type, event);
            if (event._propagationStopped) {
              _cachedArray.length = 0;
              return;
            }
          }
        }
      }
      _cachedArray.length = 0;
    }
    var NodeDefines = {
      name: "cc.Node",
      extends: BaseNode,
      properties: {
        _opacity: 255,
        _color: cc.Color.WHITE,
        _contentSize: cc.Size,
        _anchorPoint: cc.v2(.5, .5),
        _position: cc.Vec3,
        _scale: cc.Vec3,
        _quat: cc.Quat,
        _skewX: 0,
        _skewY: 0,
        _localZOrder: {
          default: 0,
          serializable: false
        },
        _zIndex: 0,
        _is3DNode: false,
        groupIndex: {
          default: 0,
          type: cc.Integer
        },
        group: {
          get: function() {
            return cc.game.groupList[this.groupIndex] || "";
          },
          set: function(value) {
            this.groupIndex = cc.game.groupList.indexOf(value);
            this.emit(EventType.GROUP_CHANGED, this);
          }
        },
        x: {
          get: function() {
            return this._position.x;
          },
          set: function(value) {
            var localPosition = this._position;
            if (value !== localPosition.x) {
              true;
              var oldValue;
              false;
              localPosition.x = value;
              this.setLocalDirty(LocalDirtyFlag.POSITION);
              this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
              if (this._eventMask & POSITION_ON) {
                false;
                this.emit(EventType.POSITION_CHANGED);
              }
            }
          }
        },
        y: {
          get: function() {
            return this._position.y;
          },
          set: function(value) {
            var localPosition = this._position;
            if (value !== localPosition.y) {
              true;
              var oldValue;
              false;
              localPosition.y = value;
              this.setLocalDirty(LocalDirtyFlag.POSITION);
              this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
              if (this._eventMask & POSITION_ON) {
                false;
                this.emit(EventType.POSITION_CHANGED);
              }
            }
          }
        },
        rotation: {
          get: function() {
            return -this.angle;
          },
          set: function(value) {
            this.angle = -value;
          }
        },
        angle: {
          get: function() {
            return this._eulerAngles.z;
          },
          set: function(value) {
            math.vec3.set(this._eulerAngles, 0, 0, value);
            this._fromEuler();
            this.setLocalDirty(LocalDirtyFlag.ROTATION);
            this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
            this._eventMask & ROTATION_ON && this.emit(EventType.ROTATION_CHANGED);
          }
        },
        rotationX: {
          get: function() {
            return this._eulerAngles.x;
          },
          set: function(value) {
            if (this._eulerAngles.x !== value) {
              this._eulerAngles.x = value;
              this._eulerAngles.x === this._eulerAngles.y ? math.quat.fromEuler(this._quat, 0, 0, -value) : math.quat.fromEuler(this._quat, value, this._eulerAngles.y, 0);
              this.setLocalDirty(LocalDirtyFlag.ROTATION);
              this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
              this._eventMask & ROTATION_ON && this.emit(EventType.ROTATION_CHANGED);
            }
          }
        },
        rotationY: {
          get: function() {
            return this._eulerAngles.y;
          },
          set: function(value) {
            if (this._eulerAngles.y !== value) {
              this._eulerAngles.y = value;
              this._eulerAngles.x === this._eulerAngles.y ? math.quat.fromEuler(this._quat, 0, 0, -value) : math.quat.fromEuler(this._quat, this._eulerAngles.x, value, 0);
              this.setLocalDirty(LocalDirtyFlag.ROTATION);
              this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
              this._eventMask & ROTATION_ON && this.emit(EventType.ROTATION_CHANGED);
            }
          }
        },
        scale: {
          get: function() {
            return this._scale.x;
          },
          set: function(v) {
            this.setScale(v);
          }
        },
        scaleX: {
          get: function() {
            return this._scale.x;
          },
          set: function(value) {
            if (this._scale.x !== value) {
              this._scale.x = value;
              this.setLocalDirty(LocalDirtyFlag.SCALE);
              this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
              this._eventMask & SCALE_ON && this.emit(EventType.SCALE_CHANGED);
            }
          }
        },
        scaleY: {
          get: function() {
            return this._scale.y;
          },
          set: function(value) {
            if (this._scale.y !== value) {
              this._scale.y = value;
              this.setLocalDirty(LocalDirtyFlag.SCALE);
              this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
              this._eventMask & SCALE_ON && this.emit(EventType.SCALE_CHANGED);
            }
          }
        },
        skewX: {
          get: function() {
            return this._skewX;
          },
          set: function(value) {
            this._skewX = value;
            this.setLocalDirty(LocalDirtyFlag.SKEW);
            this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
          }
        },
        skewY: {
          get: function() {
            return this._skewY;
          },
          set: function(value) {
            this._skewY = value;
            this.setLocalDirty(LocalDirtyFlag.SKEW);
            this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
          }
        },
        opacity: {
          get: function() {
            return this._opacity;
          },
          set: function(value) {
            if (this._opacity !== value) {
              this._opacity = value;
              this._renderFlag |= RenderFlow.FLAG_OPACITY | RenderFlow.FLAG_COLOR;
            }
          },
          range: [ 0, 255 ]
        },
        color: {
          get: function() {
            return this._color.clone();
          },
          set: function(value) {
            if (!this._color.equals(value)) {
              this._color.set(value);
              false;
              this._renderComponent && (this._renderFlag |= RenderFlow.FLAG_COLOR);
              this._eventMask & COLOR_ON && this.emit(EventType.COLOR_CHANGED, value);
            }
          }
        },
        anchorX: {
          get: function() {
            return this._anchorPoint.x;
          },
          set: function(value) {
            var anchorPoint = this._anchorPoint;
            if (anchorPoint.x !== value) {
              anchorPoint.x = value;
              this._eventMask & ANCHOR_ON && this.emit(EventType.ANCHOR_CHANGED);
            }
          }
        },
        anchorY: {
          get: function() {
            return this._anchorPoint.y;
          },
          set: function(value) {
            var anchorPoint = this._anchorPoint;
            if (anchorPoint.y !== value) {
              anchorPoint.y = value;
              this._eventMask & ANCHOR_ON && this.emit(EventType.ANCHOR_CHANGED);
            }
          }
        },
        width: {
          get: function() {
            return this._contentSize.width;
          },
          set: function(value) {
            if (value !== this._contentSize.width) {
              var clone;
              false;
              this._contentSize.width = value;
              if (this._eventMask & SIZE_ON) {
                false;
                this.emit(EventType.SIZE_CHANGED);
              }
            }
          }
        },
        height: {
          get: function() {
            return this._contentSize.height;
          },
          set: function(value) {
            if (value !== this._contentSize.height) {
              var clone;
              false;
              this._contentSize.height = value;
              if (this._eventMask & SIZE_ON) {
                false;
                this.emit(EventType.SIZE_CHANGED);
              }
            }
          }
        },
        zIndex: {
          get: function() {
            return this._zIndex;
          },
          set: function(value) {
            if (value > macro.MAX_ZINDEX) {
              cc.warnID(1636);
              value = macro.MAX_ZINDEX;
            } else if (value < macro.MIN_ZINDEX) {
              cc.warnID(1637);
              value = macro.MIN_ZINDEX;
            }
            if (this._zIndex !== value) {
              this._zIndex = value;
              this._localZOrder = 65535 & this._localZOrder | value << 16;
              this._parent && this._parent._delaySort();
            }
          }
        }
      },
      ctor: function() {
        this._reorderChildDirty = false;
        this._widget = null;
        this._renderComponent = null;
        this._capturingListeners = null;
        this._bubblingListeners = null;
        this._touchListener = null;
        this._mouseListener = null;
        this._scale.x = 1;
        this._scale.y = 1;
        this._scale.z = 1;
        this._matrix = mathPools.mat4.get();
        this._worldMatrix = mathPools.mat4.get();
        this._localMatDirty = LocalDirtyFlag.ALL;
        this._worldMatDirty = true;
        this._eventMask = 0;
        this._cullingMask = 1 << this.groupIndex;
        this._eulerAngles = cc.v3();
      },
      statics: {
        EventType: EventType,
        _LocalDirtyFlag: LocalDirtyFlag,
        isNode: function(obj) {
          return obj instanceof Node && (obj.constructor === Node || !(obj instanceof cc.Scene));
        },
        BuiltinGroupIndex: BuiltinGroupIndex
      },
      _onSiblingIndexChanged: function(index) {
        var parent = this._parent;
        var siblings = parent._children;
        var i = 0, len = siblings.length, sibling;
        for (;i < len; i++) {
          sibling = siblings[i];
          sibling._updateOrderOfArrival();
          eventManager._setDirtyForNode(sibling);
        }
        parent._delaySort();
      },
      _onPreDestroy: function() {
        var destroyByParent = this._onPreDestroyBase();
        ActionManagerExist && cc.director.getActionManager().removeAllActionsFromTarget(this);
        _currentHovered === this && (_currentHovered = null);
        if (this._touchListener || this._mouseListener) {
          eventManager.removeListeners(this);
          if (this._touchListener) {
            this._touchListener.owner = null;
            this._touchListener.mask = null;
            this._touchListener = null;
          }
          if (this._mouseListener) {
            this._mouseListener.owner = null;
            this._mouseListener.mask = null;
            this._mouseListener = null;
          }
        }
        mathPools.mat4.put(this._matrix);
        mathPools.mat4.put(this._worldMatrix);
        this._matrix = this._worldMatrix = null;
        this._reorderChildDirty && cc.director.__fastOff(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
        destroyByParent || false;
      },
      _onPostActivated: function(active) {
        var actionManager = ActionManagerExist ? cc.director.getActionManager() : null;
        if (active) {
          this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
          actionManager && actionManager.resumeTarget(this);
          eventManager.resumeTarget(this);
          if (this._touchListener) {
            var mask = this._touchListener.mask = _searchMaskInParent(this);
            this._mouseListener && (this._mouseListener.mask = mask);
          } else this._mouseListener && (this._mouseListener.mask = _searchMaskInParent(this));
        } else {
          actionManager && actionManager.pauseTarget(this);
          eventManager.pauseTarget(this);
        }
      },
      _onHierarchyChanged: function(oldParent) {
        this._updateOrderOfArrival();
        this._parent && this._parent._delaySort();
        this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
        this._onHierarchyChangedBase(oldParent);
        cc._widgetManager && (cc._widgetManager._nodesOrderDirty = true);
      },
      _toEuler: function() {
        if (this.is3DNode) this._quat.toEuler(this._eulerAngles); else {
          var z = Math.asin(this._quat.z) / ONE_DEGREE * 2;
          math.vec3.set(this._eulerAngles, 0, 0, z);
        }
      },
      _fromEuler: function() {
        this.is3DNode ? this._quat.fromEuler(this._eulerAngles) : math.quat.fromEuler(this._quat, 0, 0, this._eulerAngles.z);
      },
      _upgrade_1x_to_2x: function() {
        if (void 0 !== this._scaleX) {
          this._scale.x = this._scaleX;
          this._scaleX = void 0;
        }
        if (void 0 !== this._scaleY) {
          this._scale.y = this._scaleY;
          this._scaleY = void 0;
        }
        0 !== this._localZOrder && (this._zIndex = (4294901760 & this._localZOrder) >> 16);
        var quat = this._quat;
        if ((this._rotationX || this._rotationY) && 0 === quat.x && 0 === quat.y && 0 === quat.z && 1 === quat.w) {
          this._rotationX === this._rotationY ? math.quat.fromEuler(quat, 0, 0, -this._rotationX) : math.quat.fromEuler(quat, this._rotationX, this._rotationY, 0);
          this._rotationX = this._rotationY = void 0;
        }
        this._toEuler();
        if (this._color.a < 255 && 255 === this._opacity) {
          this._opacity = this._color.a;
          this._color.a = 255;
        }
      },
      _onBatchCreated: function() {
        this._upgrade_1x_to_2x();
        this._updateOrderOfArrival();
        var prefabInfo = this._prefab;
        if (prefabInfo && prefabInfo.sync && prefabInfo.root === this) {
          false;
          PrefabHelper.syncWithPrefab(this);
        }
        if (!this._activeInHierarchy) {
          ActionManagerExist && cc.director.getActionManager().pauseTarget(this);
          eventManager.pauseTarget(this);
        }
        var children = this._children;
        for (var i = 0, len = children.length; i < len; i++) children[i]._onBatchCreated();
        children.length > 0 && (this._renderFlag |= RenderFlow.FLAG_CHILDREN);
      },
      _onBatchRestored: function() {
        this._upgrade_1x_to_2x();
        if (!this._activeInHierarchy) {
          var manager = cc.director.getActionManager();
          manager && manager.pauseTarget(this);
          eventManager.pauseTarget(this);
        }
        var children = this._children;
        for (var i = 0, len = children.length; i < len; i++) children[i]._onBatchRestored();
        children.length > 0 && (this._renderFlag |= RenderFlow.FLAG_CHILDREN);
      },
      _checknSetupSysEvent: function(type) {
        var newAdded = false;
        var forDispatch = false;
        if (-1 !== _touchEvents.indexOf(type)) {
          if (!this._touchListener) {
            this._touchListener = cc.EventListener.create({
              event: cc.EventListener.TOUCH_ONE_BY_ONE,
              swallowTouches: true,
              owner: this,
              mask: _searchMaskInParent(this),
              onTouchBegan: _touchStartHandler,
              onTouchMoved: _touchMoveHandler,
              onTouchEnded: _touchEndHandler,
              onTouchCancelled: _touchCancelHandler
            });
            eventManager.addListener(this._touchListener, this);
            newAdded = true;
          }
          forDispatch = true;
        } else if (-1 !== _mouseEvents.indexOf(type)) {
          if (!this._mouseListener) {
            this._mouseListener = cc.EventListener.create({
              event: cc.EventListener.MOUSE,
              _previousIn: false,
              owner: this,
              mask: _searchMaskInParent(this),
              onMouseDown: _mouseDownHandler,
              onMouseMove: _mouseMoveHandler,
              onMouseUp: _mouseUpHandler,
              onMouseScroll: _mouseWheelHandler
            });
            eventManager.addListener(this._mouseListener, this);
            newAdded = true;
          }
          forDispatch = true;
        }
        newAdded && !this._activeInHierarchy && cc.director.getScheduler().schedule((function() {
          this._activeInHierarchy || eventManager.pauseTarget(this);
        }), this, 0, 0, 0, false);
        return forDispatch;
      },
      on: function(type, callback, target, useCapture) {
        var forDispatch = this._checknSetupSysEvent(type);
        if (forDispatch) return this._onDispatch(type, callback, target, useCapture);
        switch (type) {
         case EventType.POSITION_CHANGED:
          this._eventMask |= POSITION_ON;
          break;

         case EventType.SCALE_CHANGED:
          this._eventMask |= SCALE_ON;
          break;

         case EventType.ROTATION_CHANGED:
          this._eventMask |= ROTATION_ON;
          break;

         case EventType.SIZE_CHANGED:
          this._eventMask |= SIZE_ON;
          break;

         case EventType.ANCHOR_CHANGED:
          this._eventMask |= ANCHOR_ON;
          break;

         case EventType.COLOR_CHANGED:
          this._eventMask |= COLOR_ON;
        }
        this._bubblingListeners || (this._bubblingListeners = new EventTarget());
        return this._bubblingListeners.on(type, callback, target);
      },
      once: function(type, callback, target, useCapture) {
        var _this = this;
        var forDispatch = this._checknSetupSysEvent(type);
        var eventType_hasOnceListener = "__ONCE_FLAG:" + type;
        var listeners = null;
        listeners = forDispatch && useCapture ? this._capturingListeners = this._capturingListeners || new EventTarget() : this._bubblingListeners = this._bubblingListeners || new EventTarget();
        var hasOnceListener = listeners.hasEventListener(eventType_hasOnceListener, callback, target);
        hasOnceListener || (function() {
          var self = _this;
          var onceWrapper = function(arg1, arg2, arg3, arg4, arg5) {
            self.off(type, onceWrapper, target);
            listeners.remove(eventType_hasOnceListener, callback, target);
            callback.call(this, arg1, arg2, arg3, arg4, arg5);
          };
          _this.on(type, onceWrapper, target);
          listeners.add(eventType_hasOnceListener, callback, target);
        })();
      },
      _onDispatch: function(type, callback, target, useCapture) {
        if ("boolean" === typeof target) {
          useCapture = target;
          target = void 0;
        } else useCapture = !!useCapture;
        if (!callback) {
          cc.errorID(6800);
          return;
        }
        var listeners = null;
        listeners = useCapture ? this._capturingListeners = this._capturingListeners || new EventTarget() : this._bubblingListeners = this._bubblingListeners || new EventTarget();
        if (!listeners.hasEventListener(type, callback, target)) {
          listeners.add(type, callback, target);
          target && target.__eventTargets && target.__eventTargets.push(this);
        }
        return callback;
      },
      off: function(type, callback, target, useCapture) {
        var touchEvent = -1 !== _touchEvents.indexOf(type);
        var mouseEvent = !touchEvent && -1 !== _mouseEvents.indexOf(type);
        if (touchEvent || mouseEvent) {
          this._offDispatch(type, callback, target, useCapture);
          if (touchEvent) {
            if (this._touchListener && !_checkListeners(this, _touchEvents)) {
              eventManager.removeListener(this._touchListener);
              this._touchListener = null;
            }
          } else if (mouseEvent && this._mouseListener && !_checkListeners(this, _mouseEvents)) {
            eventManager.removeListener(this._mouseListener);
            this._mouseListener = null;
          }
        } else if (this._bubblingListeners) {
          this._bubblingListeners.off(type, callback, target);
          var hasListeners = this._bubblingListeners.hasEventListener(type);
          if (!hasListeners) switch (type) {
           case EventType.POSITION_CHANGED:
            this._eventMask &= ~POSITION_ON;
            break;

           case EventType.SCALE_CHANGED:
            this._eventMask &= ~SCALE_ON;
            break;

           case EventType.ROTATION_CHANGED:
            this._eventMask &= ~ROTATION_ON;
            break;

           case EventType.SIZE_CHANGED:
            this._eventMask &= ~SIZE_ON;
            break;

           case EventType.ANCHOR_CHANGED:
            this._eventMask &= ~ANCHOR_ON;
            break;

           case EventType.COLOR_CHANGED:
            this._eventMask &= ~COLOR_ON;
          }
        }
      },
      _offDispatch: function(type, callback, target, useCapture) {
        if ("boolean" === typeof target) {
          useCapture = target;
          target = void 0;
        } else useCapture = !!useCapture;
        if (callback) {
          var listeners = useCapture ? this._capturingListeners : this._bubblingListeners;
          if (listeners) {
            listeners.remove(type, callback, target);
            target && target.__eventTargets && js.array.fastRemove(target.__eventTargets, this);
          }
        } else {
          this._capturingListeners && this._capturingListeners.removeAll(type);
          this._bubblingListeners && this._bubblingListeners.removeAll(type);
        }
      },
      targetOff: function(target) {
        var listeners = this._bubblingListeners;
        if (listeners) {
          listeners.targetOff(target);
          this._eventMask & POSITION_ON && !listeners.hasEventListener(EventType.POSITION_CHANGED) && (this._eventMask &= ~POSITION_ON);
          this._eventMask & SCALE_ON && !listeners.hasEventListener(EventType.SCALE_CHANGED) && (this._eventMask &= ~SCALE_ON);
          this._eventMask & ROTATION_ON && !listeners.hasEventListener(EventType.ROTATION_CHANGED) && (this._eventMask &= ~ROTATION_ON);
          this._eventMask & SIZE_ON && !listeners.hasEventListener(EventType.SIZE_CHANGED) && (this._eventMask &= ~SIZE_ON);
          this._eventMask & ANCHOR_ON && !listeners.hasEventListener(EventType.ANCHOR_CHANGED) && (this._eventMask &= ~ANCHOR_ON);
          this._eventMask & COLOR_ON && !listeners.hasEventListener(EventType.COLOR_CHANGED) && (this._eventMask &= ~COLOR_ON);
        }
        this._capturingListeners && this._capturingListeners.targetOff(target);
        if (this._touchListener && !_checkListeners(this, _touchEvents)) {
          eventManager.removeListener(this._touchListener);
          this._touchListener = null;
        }
        if (this._mouseListener && !_checkListeners(this, _mouseEvents)) {
          eventManager.removeListener(this._mouseListener);
          this._mouseListener = null;
        }
      },
      hasEventListener: function(type) {
        var has = false;
        this._bubblingListeners && (has = this._bubblingListeners.hasEventListener(type));
        !has && this._capturingListeners && (has = this._capturingListeners.hasEventListener(type));
        return has;
      },
      emit: function(type, arg1, arg2, arg3, arg4, arg5) {
        this._bubblingListeners && this._bubblingListeners.emit(type, arg1, arg2, arg3, arg4, arg5);
      },
      dispatchEvent: function(event) {
        _doDispatchEvent(this, event);
        _cachedArray.length = 0;
      },
      pauseSystemEvents: function(recursive) {
        eventManager.pauseTarget(this, recursive);
      },
      resumeSystemEvents: function(recursive) {
        eventManager.resumeTarget(this, recursive);
      },
      _hitTest: function(point, listener) {
        var w = this._contentSize.width, h = this._contentSize.height, cameraPt = _vec2a, testPt = _vec2b;
        var camera = cc.Camera.findCamera(this);
        camera ? camera.getCameraToWorldPoint(point, cameraPt) : cameraPt.set(point);
        this._updateWorldMatrix();
        math.mat4.invert(_mat4_temp, this._worldMatrix);
        math.vec2.transformMat4(testPt, cameraPt, _mat4_temp);
        testPt.x += this._anchorPoint.x * w;
        testPt.y += this._anchorPoint.y * h;
        if (testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h) {
          if (listener && listener.mask) {
            var mask = listener.mask;
            var parent = this;
            for (var i = 0; parent && i < mask.index; ++i, parent = parent.parent) ;
            if (parent === mask.node) {
              var comp = parent.getComponent(cc.Mask);
              return !comp || !comp.enabledInHierarchy || comp._hitTest(cameraPt);
            }
            listener.mask = null;
            return true;
          }
          return true;
        }
        return false;
      },
      _getCapturingTargets: function(type, array) {
        var parent = this.parent;
        while (parent) {
          parent._capturingListeners && parent._capturingListeners.hasEventListener(type) && array.push(parent);
          parent = parent.parent;
        }
      },
      _getBubblingTargets: function(type, array) {
        var parent = this.parent;
        while (parent) {
          parent._bubblingListeners && parent._bubblingListeners.hasEventListener(type) && array.push(parent);
          parent = parent.parent;
        }
      },
      runAction: ActionManagerExist ? function(action) {
        if (!this.active) return;
        cc.assertID(action, 1618);
        cc.director.getActionManager().addAction(action, this, false);
        return action;
      } : emptyFunc,
      pauseAllActions: ActionManagerExist ? function() {
        cc.director.getActionManager().pauseTarget(this);
      } : emptyFunc,
      resumeAllActions: ActionManagerExist ? function() {
        cc.director.getActionManager().resumeTarget(this);
      } : emptyFunc,
      stopAllActions: ActionManagerExist ? function() {
        cc.director.getActionManager().removeAllActionsFromTarget(this);
      } : emptyFunc,
      stopAction: ActionManagerExist ? function(action) {
        cc.director.getActionManager().removeAction(action);
      } : emptyFunc,
      stopActionByTag: ActionManagerExist ? function(tag) {
        if (tag === cc.Action.TAG_INVALID) {
          cc.logID(1612);
          return;
        }
        cc.director.getActionManager().removeActionByTag(tag, this);
      } : emptyFunc,
      getActionByTag: ActionManagerExist ? function(tag) {
        if (tag === cc.Action.TAG_INVALID) {
          cc.logID(1613);
          return null;
        }
        return cc.director.getActionManager().getActionByTag(tag, this);
      } : function() {
        return null;
      },
      getNumberOfRunningActions: ActionManagerExist ? function() {
        return cc.director.getActionManager().getNumberOfRunningActionsInTarget(this);
      } : function() {
        return 0;
      },
      getPosition: function(out) {
        out = out || cc.v3();
        return out.set(this._position);
      },
      setPosition: function(newPosOrX, y) {
        var x;
        if (void 0 === y) {
          x = newPosOrX.x;
          y = newPosOrX.y;
        } else x = newPosOrX;
        var locPosition = this._position;
        if (locPosition.x === x && locPosition.y === y) return;
        var oldPosition;
        false;
        true;
        locPosition.x = x;
        true;
        locPosition.y = y;
        this.setLocalDirty(LocalDirtyFlag.POSITION);
        this._renderFlag |= RenderFlow.FLAG_WORLD_TRANSFORM;
        if (this._eventMask & POSITION_ON) {
          false;
          this.emit(EventType.POSITION_CHANGED);
        }
      },
      getScale: function(out) {
        if (void 0 !== out) return out.set(this._scale);
        cc.warnID(1400, "cc.Node.getScale", "cc.Node.scale or cc.Node.getScale(cc.Vec3)");
        return this._scale.x;
      },
      setScale: function(x, y) {
        if (x && "number" !== typeof x) {
          y = x.y;
          x = x.x;
        } else void 0 === y && (y = x);
        if (this._scale.x !== x || this._scale.y !== y) {
          this._scale.x = x;
          this._scale.y = y;
          this.setLocalDirty(LocalDirtyFlag.SCALE);
          this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
          this._eventMask & SCALE_ON && this.emit(EventType.SCALE_CHANGED);
        }
      },
      getRotation: function(out) {
        if (out instanceof cc.Quat) return out.set(this._quat);
        cc.warnID(1400, "cc.Node.getRotation", "cc.Node.angle or cc.Node.getRotation(cc.Quat)");
        return -this.angle;
      },
      setRotation: function(quat, y, z, w) {
        if ("number" === typeof quat && void 0 === y) {
          cc.warnID(1400, "cc.Node.setRotation(Number)", "cc.Node.angle or cc.Node.setRotation(quat)");
          this.angle = -quat;
        } else {
          var x = quat;
          if (void 0 === y) {
            x = quat.x;
            y = quat.y;
            z = quat.z;
            w = quat.w;
          }
          var old = this._quat;
          if (old.x !== x || old.y !== y || old.z !== z || old.w !== w) {
            old.x = x;
            old.y = y;
            old.z = z;
            old.w = w;
            this.setLocalDirty(LocalDirtyFlag.ROTATION);
            this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
            this._eventMask & ROTATION_ON && this.emit(EventType.ROTATION_CHANGED);
            false;
          }
        }
      },
      getContentSize: function() {
        return cc.size(this._contentSize.width, this._contentSize.height);
      },
      setContentSize: function(size, height) {
        var locContentSize = this._contentSize;
        var clone;
        if (void 0 === height) {
          if (size.width === locContentSize.width && size.height === locContentSize.height) return;
          false;
          locContentSize.width = size.width;
          locContentSize.height = size.height;
        } else {
          if (size === locContentSize.width && height === locContentSize.height) return;
          false;
          locContentSize.width = size;
          locContentSize.height = height;
        }
        if (this._eventMask & SIZE_ON) {
          false;
          this.emit(EventType.SIZE_CHANGED);
        }
      },
      getAnchorPoint: function() {
        return cc.v2(this._anchorPoint);
      },
      setAnchorPoint: function(point, y) {
        var locAnchorPoint = this._anchorPoint;
        if (void 0 === y) {
          if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y) return;
          locAnchorPoint.x = point.x;
          locAnchorPoint.y = point.y;
        } else {
          if (point === locAnchorPoint.x && y === locAnchorPoint.y) return;
          locAnchorPoint.x = point;
          locAnchorPoint.y = y;
        }
        this.setLocalDirty(LocalDirtyFlag.POSITION);
        this._eventMask & ANCHOR_ON && this.emit(EventType.ANCHOR_CHANGED);
      },
      _invTransformPoint: function(out, pos) {
        this._parent ? this._parent._invTransformPoint(out, pos) : math.vec3.copy(out, pos);
        math.vec3.sub(out, out, this._position);
        math.quat.conjugate(_quat_temp, this._quat);
        math.vec3.transformQuat(out, out, _quat_temp);
        math.vec3.inverseSafe(_vec3_temp, this._scale);
        math.vec3.mul(out, out, _vec3_temp);
        return out;
      },
      getWorldPosition: function(out) {
        math.vec3.copy(out, this._position);
        var curr = this._parent;
        while (curr) {
          math.vec3.mul(out, out, curr._scale);
          math.vec3.transformQuat(out, out, curr._quat);
          math.vec3.add(out, out, curr._position);
          curr = curr._parent;
        }
        return out;
      },
      setWorldPosition: function(pos) {
        var oldPosition;
        false;
        this._parent ? this._parent._invTransformPoint(this._position, pos) : math.vec3.copy(this._position, pos);
        this.setLocalDirty(LocalDirtyFlag.POSITION);
        if (this._eventMask & POSITION_ON) {
          false;
          this.emit(EventType.POSITION_CHANGED);
        }
      },
      getWorldRotation: function(out) {
        math.quat.copy(out, this._quat);
        var curr = this._parent;
        while (curr) {
          math.quat.mul(out, curr._quat, out);
          curr = curr._parent;
        }
        return out;
      },
      setWorldRotation: function(quat) {
        if (this._parent) {
          this._parent.getWorldRotation(this._quat);
          math.quat.conjugate(this._quat, this._quat);
          math.quat.mul(this._quat, this._quat, quat);
        } else math.quat.copy(this._quat, quat);
        this._toEuler();
        this.setLocalDirty(LocalDirtyFlag.ROTATION);
      },
      getWorldScale: function(out) {
        math.vec3.copy(out, this._scale);
        var curr = this._parent;
        while (curr) {
          math.vec3.mul(out, out, curr._scale);
          curr = curr._parent;
        }
        return out;
      },
      setWorldScale: function(scale) {
        if (this._parent) {
          this._parent.getWorldScale(this._scale);
          math.vec3.div(this._scale, scale, this._scale);
        } else math.vec3.copy(this._scale, scale);
        this.setLocalDirty(LocalDirtyFlag.SCALE);
      },
      getWorldRT: function(out) {
        var opos = _vec3_temp;
        var orot = _quat_temp;
        math.vec3.copy(opos, this._position);
        math.quat.copy(orot, this._quat);
        var curr = this._parent;
        while (curr) {
          math.vec3.mul(opos, opos, curr._scale);
          math.vec3.transformQuat(opos, opos, curr._quat);
          math.vec3.add(opos, opos, curr._position);
          math.quat.mul(orot, curr._quat, orot);
          curr = curr._parent;
        }
        math.mat4.fromRT(out, orot, opos);
        return out;
      },
      lookAt: function(pos, up) {
        this.getWorldPosition(_vec3_temp);
        math.vec3.sub(_vec3_temp, _vec3_temp, pos);
        math.vec3.normalize(_vec3_temp, _vec3_temp);
        math.quat.fromViewUp(_quat_temp, _vec3_temp, up);
        this.setWorldRotation(_quat_temp);
      },
      _updateLocalMatrix: function() {
        var dirtyFlag = this._localMatDirty;
        if (!dirtyFlag) return;
        var t = this._matrix;
        if (dirtyFlag & (LocalDirtyFlag.RT | LocalDirtyFlag.SKEW)) {
          var rotation = -this._eulerAngles.z;
          var hasSkew = this._skewX || this._skewY;
          var sx = this._scale.x, sy = this._scale.y;
          if (rotation || hasSkew) {
            var a = 1, b = 0, c = 0, d = 1;
            if (rotation) {
              var rotationRadians = rotation * ONE_DEGREE;
              c = Math.sin(rotationRadians);
              d = Math.cos(rotationRadians);
              a = d;
              b = -c;
            }
            t.m00 = a *= sx;
            t.m01 = b *= sx;
            t.m04 = c *= sy;
            t.m05 = d *= sy;
            if (hasSkew) {
              var _a = t.m00, _b = t.m01, _c = t.m04, _d = t.m05;
              var skx = Math.tan(this._skewX * ONE_DEGREE);
              var sky = Math.tan(this._skewY * ONE_DEGREE);
              Infinity === skx && (skx = 99999999);
              Infinity === sky && (sky = 99999999);
              t.m00 = _a + _c * sky;
              t.m01 = _b + _d * sky;
              t.m04 = _c + _a * skx;
              t.m05 = _d + _b * skx;
            }
          } else {
            t.m00 = sx;
            t.m01 = 0;
            t.m04 = 0;
            t.m05 = sy;
          }
        }
        t.m12 = this._position.x;
        t.m13 = this._position.y;
        this._localMatDirty = 0;
        this._worldMatDirty = true;
      },
      _calculWorldMatrix: function() {
        this._localMatDirty && this._updateLocalMatrix();
        var parent = this._parent;
        parent ? this._mulMat(this._worldMatrix, parent._worldMatrix, this._matrix) : math.mat4.copy(this._worldMatrix, this._matrix);
        this._worldMatDirty = false;
      },
      _mulMat: function(out, a, b) {
        var aa = a.m00, ab = a.m01, ac = a.m04, ad = a.m05, atx = a.m12, aty = a.m13;
        var ba = b.m00, bb = b.m01, bc = b.m04, bd = b.m05, btx = b.m12, bty = b.m13;
        if (0 !== ab || 0 !== ac) {
          out.m00 = ba * aa + bb * ac;
          out.m01 = ba * ab + bb * ad;
          out.m04 = bc * aa + bd * ac;
          out.m05 = bc * ab + bd * ad;
          out.m12 = aa * btx + ac * bty + atx;
          out.m13 = ab * btx + ad * bty + aty;
        } else {
          out.m00 = ba * aa;
          out.m01 = bb * ad;
          out.m04 = bc * aa;
          out.m05 = bd * ad;
          out.m12 = aa * btx + atx;
          out.m13 = ad * bty + aty;
        }
      },
      _updateWorldMatrix: function() {
        this._parent && this._parent._updateWorldMatrix();
        if (this._worldMatDirty) {
          this._calculWorldMatrix();
          var children = this._children;
          for (var i = 0, l = children.length; i < l; i++) children[i]._worldMatDirty = true;
        }
      },
      setLocalDirty: function(flag) {
        this._localMatDirty = this._localMatDirty | flag;
        this._worldMatDirty = true;
      },
      setWorldDirty: function() {
        this._worldMatDirty = true;
      },
      getLocalMatrix: function(out) {
        this._updateLocalMatrix();
        return math.mat4.copy(out, this._matrix);
      },
      getWorldMatrix: function(out) {
        this._updateWorldMatrix();
        return math.mat4.copy(out, this._worldMatrix);
      },
      convertToNodeSpace: function(worldPoint) {
        this._updateWorldMatrix();
        math.mat4.invert(_mat4_temp, this._worldMatrix);
        var out = new cc.Vec2();
        math.vec2.transformMat4(out, worldPoint, _mat4_temp);
        out.x += this._anchorPoint.x * this._contentSize.width;
        out.y += this._anchorPoint.y * this._contentSize.height;
        return out;
      },
      convertToWorldSpace: function(nodePoint) {
        this._updateWorldMatrix();
        var out = new cc.Vec2(nodePoint.x - this._anchorPoint.x * this._contentSize.width, nodePoint.y - this._anchorPoint.y * this._contentSize.height);
        return math.vec2.transformMat4(out, out, this._worldMatrix);
      },
      convertToNodeSpaceAR: function(worldPoint) {
        this._updateWorldMatrix();
        math.mat4.invert(_mat4_temp, this._worldMatrix);
        var out = new cc.Vec2();
        return math.vec2.transformMat4(out, worldPoint, _mat4_temp);
      },
      convertToWorldSpaceAR: function(nodePoint) {
        this._updateWorldMatrix();
        var out = new cc.Vec2();
        return math.vec2.transformMat4(out, nodePoint, this._worldMatrix);
      },
      getNodeToParentTransform: function(out) {
        out || (out = AffineTrans.identity());
        this._updateLocalMatrix();
        var contentSize = this._contentSize;
        _vec3_temp.x = -this._anchorPoint.x * contentSize.width;
        _vec3_temp.y = -this._anchorPoint.y * contentSize.height;
        math.mat4.copy(_mat4_temp, this._matrix);
        math.mat4.translate(_mat4_temp, _mat4_temp, _vec3_temp);
        return AffineTrans.fromMat4(out, _mat4_temp);
      },
      getNodeToParentTransformAR: function(out) {
        out || (out = AffineTrans.identity());
        this._updateLocalMatrix();
        return AffineTrans.fromMat4(out, this._matrix);
      },
      getNodeToWorldTransform: function(out) {
        out || (out = AffineTrans.identity());
        this._updateWorldMatrix();
        var contentSize = this._contentSize;
        _vec3_temp.x = -this._anchorPoint.x * contentSize.width;
        _vec3_temp.y = -this._anchorPoint.y * contentSize.height;
        math.mat4.copy(_mat4_temp, this._worldMatrix);
        math.mat4.translate(_mat4_temp, _mat4_temp, _vec3_temp);
        return AffineTrans.fromMat4(out, _mat4_temp);
      },
      getNodeToWorldTransformAR: function(out) {
        out || (out = AffineTrans.identity());
        this._updateWorldMatrix();
        return AffineTrans.fromMat4(out, this._worldMatrix);
      },
      getParentToNodeTransform: function(out) {
        out || (out = AffineTrans.identity());
        this._updateLocalMatrix();
        math.mat4.invert(_mat4_temp, this._matrix);
        return AffineTrans.fromMat4(out, _mat4_temp);
      },
      getWorldToNodeTransform: function(out) {
        out || (out = AffineTrans.identity());
        this._updateWorldMatrix();
        math.mat4.invert(_mat4_temp, this._worldMatrix);
        return AffineTrans.fromMat4(out, _mat4_temp);
      },
      convertTouchToNodeSpace: function(touch) {
        return this.convertToNodeSpace(touch.getLocation());
      },
      convertTouchToNodeSpaceAR: function(touch) {
        return this.convertToNodeSpaceAR(touch.getLocation());
      },
      getBoundingBox: function() {
        this._updateLocalMatrix();
        var width = this._contentSize.width;
        var height = this._contentSize.height;
        var rect = cc.rect(-this._anchorPoint.x * width, -this._anchorPoint.y * height, width, height);
        return rect.transformMat4(rect, this._matrix);
      },
      getBoundingBoxToWorld: function() {
        if (this._parent) {
          this._parent._updateWorldMatrix();
          return this._getBoundingBoxTo(this._parent._worldMatrix);
        }
        return this.getBoundingBox();
      },
      _getBoundingBoxTo: function(parentMat) {
        this._updateLocalMatrix();
        var width = this._contentSize.width;
        var height = this._contentSize.height;
        var rect = cc.rect(-this._anchorPoint.x * width, -this._anchorPoint.y * height, width, height);
        var parentMat = math.mat4.mul(this._worldMatrix, parentMat, this._matrix);
        rect.transformMat4(rect, parentMat);
        if (!this._children) return rect;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
          var child = locChildren[i];
          if (child && child.active) {
            var childRect = child._getBoundingBoxTo(parentMat);
            childRect && rect.union(rect, childRect);
          }
        }
        return rect;
      },
      _updateOrderOfArrival: function() {
        var arrivalOrder = ++_globalOrderOfArrival;
        this._localZOrder = 4294901760 & this._localZOrder | arrivalOrder;
      },
      addChild: function(child, zIndex, name) {
        false;
        cc.assertID(child, 1606);
        cc.assertID(null === child._parent, 1605);
        child.parent = this;
        void 0 !== zIndex && (child.zIndex = zIndex);
        void 0 !== name && (child.name = name);
      },
      cleanup: function() {
        ActionManagerExist && cc.director.getActionManager().removeAllActionsFromTarget(this);
        eventManager.removeListeners(this);
        var i, len = this._children.length, node;
        for (i = 0; i < len; ++i) {
          node = this._children[i];
          node && node.cleanup();
        }
      },
      sortAllChildren: function() {
        if (this._reorderChildDirty) {
          this._reorderChildDirty = false;
          var _children = this._children;
          if (_children.length > 1) {
            var len = _children.length, i, j, child;
            for (i = 1; i < len; i++) {
              child = _children[i];
              j = i - 1;
              while (j >= 0) {
                if (!(child._localZOrder < _children[j]._localZOrder)) break;
                _children[j + 1] = _children[j];
                j--;
              }
              _children[j + 1] = child;
            }
            this.emit(EventType.CHILD_REORDER, this);
          }
          cc.director.__fastOff(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
        }
      },
      _delaySort: function() {
        if (!this._reorderChildDirty) {
          this._reorderChildDirty = true;
          cc.director.__fastOn(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
        }
      },
      _restoreProperties: false,
      onRestore: false
    };
    false;
    var Node = cc.Class(NodeDefines);
    var _p = Node.prototype;
    js.getset(_p, "position", _p.getPosition, _p.setPosition, false, true);
    cc.Node = module.exports = Node;
  }), {
    "./event-manager": 48,
    "./event/event": 51,
    "./event/event-target": 50,
    "./platform/CCMacro": 91,
    "./platform/js": 106,
    "./renderer/render-flow": 129,
    "./utils/affine-transform": 133,
    "./utils/base-node": 134,
    "./utils/math-pools": 138,
    "./utils/misc": 139,
    "./utils/prefab-helper": 141,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  7: [ (function(require, module, exports) {
    "use strict";
    var Node = require("./CCNode");
    var RenderFlow = require("./renderer/render-flow");
    var math = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
    var LocalDirtyFlag = Node._LocalDirtyFlag;
    var POSITION_ON = 1;
    var _vec3_temp = math.vec3.create();
    var PrivateNode = cc.Class({
      name: "cc.PrivateNode",
      extends: Node,
      properties: {
        x: {
          get: function() {
            return this._originPos.x;
          },
          set: function(value) {
            var localPosition = this._originPos;
            if (value !== localPosition.x) {
              localPosition.x = value;
              this._posDirty(true);
            }
          },
          override: true
        },
        y: {
          get: function() {
            return this._originPos.y;
          },
          set: function(value) {
            var localPosition = this._originPos;
            if (value !== localPosition.y) {
              localPosition.y = value;
              this._posDirty(true);
            }
          },
          override: true
        },
        zIndex: {
          get: function() {
            return cc.macro.MIN_ZINDEX;
          },
          set: function() {
            cc.warnID(1638);
          },
          override: true
        }
      },
      ctor: function(name) {
        this._localZOrder = cc.macro.MIN_ZINDEX << 16;
        this._originPos = cc.v2();
      },
      _posDirty: function(sendEvent) {
        this.setLocalDirty(LocalDirtyFlag.POSITION);
        this._renderFlag |= RenderFlow.FLAG_TRANSFORM;
        true === sendEvent && this._eventMask & POSITION_ON && this.emit(Node.EventType.POSITION_CHANGED);
      },
      _updateLocalMatrix: function() {
        if (!this._localMatDirty) return;
        var parent = this.parent;
        if (parent) {
          this._position.x = this._originPos.x - (parent._anchorPoint.x - .5) * parent._contentSize.width;
          this._position.y = this._originPos.y - (parent._anchorPoint.y - .5) * parent._contentSize.height;
        }
        this._super();
      },
      getPosition: function() {
        return new cc.Vec2(this._originPos);
      },
      setPosition: function(x, y) {
        if (void 0 === y) {
          x = x.x;
          y = x.y;
        }
        var pos = this._originPos;
        if (pos.x === x && pos.y === y) return;
        pos.x = x;
        pos.y = y;
        this._posDirty(true);
      },
      setParent: function(value) {
        var oldParent = this._parent;
        this._super(value);
        if (oldParent !== value) {
          oldParent && oldParent.off(Node.EventType.ANCHOR_CHANGED, this._posDirty, this);
          value && value.on(Node.EventType.ANCHOR_CHANGED, this._posDirty, this);
        }
      },
      _updateOrderOfArrival: function() {}
    });
    cc.js.getset(PrivateNode.prototype, "parent", PrivateNode.prototype.getParent, PrivateNode.prototype.setParent);
    cc.js.getset(PrivateNode.prototype, "position", PrivateNode.prototype.getPosition, PrivateNode.prototype.setPosition);
    cc.PrivateNode = module.exports = PrivateNode;
  }), {
    "./CCNode": 6,
    "./renderer/render-flow": 129,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  8: [ (function(require, module, exports) {
    var NIL = function() {};
    cc.Scene = cc.Class({
      name: "cc.Scene",
      extends: require("./CCNode"),
      properties: {
        _is3DNode: {
          default: true,
          override: true
        },
        autoReleaseAssets: {
          default: void 0,
          type: cc.Boolean
        }
      },
      ctor: function() {
        this._anchorPoint.x = 0;
        this._anchorPoint.y = 0;
        this._activeInHierarchy = false;
        this._inited = !cc.game._isCloning;
        false;
        this.dependAssets = null;
      },
      destroy: function() {
        if (cc.Object.prototype.destroy.call(this)) {
          var children = this._children;
          for (var i = 0; i < children.length; ++i) children[i].active = false;
        }
        this._active = false;
        this._activeInHierarchy = false;
      },
      _onHierarchyChanged: NIL,
      _instantiate: null,
      _load: function() {
        if (!this._inited) {
          false;
          false;
          this._onBatchCreated();
          this._inited = true;
        }
      },
      _activate: function(active) {
        active = false !== active;
        false, false;
        cc.director._nodeActivator.activateNode(this, active);
      }
    });
    module.exports = cc.Scene;
  }), {
    "./CCNode": 6
  } ],
  9: [ (function(require, module, exports) {
    var js = require("./platform/js");
    var IdGenerater = require("./platform/id-generater");
    var MAX_POOL_SIZE = 20;
    var idGenerater = new IdGenerater("Scheduler");
    var ListEntry = function(target, priority, paused, markedForDeletion) {
      this.target = target;
      this.priority = priority;
      this.paused = paused;
      this.markedForDeletion = markedForDeletion;
    };
    var _listEntries = [];
    ListEntry.get = function(target, priority, paused, markedForDeletion) {
      var result = _listEntries.pop();
      if (result) {
        result.target = target;
        result.priority = priority;
        result.paused = paused;
        result.markedForDeletion = markedForDeletion;
      } else result = new ListEntry(target, priority, paused, markedForDeletion);
      return result;
    };
    ListEntry.put = function(entry) {
      if (_listEntries.length < MAX_POOL_SIZE) {
        entry.target = null;
        _listEntries.push(entry);
      }
    };
    var HashUpdateEntry = function(list, entry, target, callback) {
      this.list = list;
      this.entry = entry;
      this.target = target;
      this.callback = callback;
    };
    var _hashUpdateEntries = [];
    HashUpdateEntry.get = function(list, entry, target, callback) {
      var result = _hashUpdateEntries.pop();
      if (result) {
        result.list = list;
        result.entry = entry;
        result.target = target;
        result.callback = callback;
      } else result = new HashUpdateEntry(list, entry, target, callback);
      return result;
    };
    HashUpdateEntry.put = function(entry) {
      if (_hashUpdateEntries.length < MAX_POOL_SIZE) {
        entry.list = entry.entry = entry.target = entry.callback = null;
        _hashUpdateEntries.push(entry);
      }
    };
    var HashTimerEntry = function(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
      var _t = this;
      _t.timers = timers;
      _t.target = target;
      _t.timerIndex = timerIndex;
      _t.currentTimer = currentTimer;
      _t.currentTimerSalvaged = currentTimerSalvaged;
      _t.paused = paused;
    };
    var _hashTimerEntries = [];
    HashTimerEntry.get = function(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused) {
      var result = _hashTimerEntries.pop();
      if (result) {
        result.timers = timers;
        result.target = target;
        result.timerIndex = timerIndex;
        result.currentTimer = currentTimer;
        result.currentTimerSalvaged = currentTimerSalvaged;
        result.paused = paused;
      } else result = new HashTimerEntry(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused);
      return result;
    };
    HashTimerEntry.put = function(entry) {
      if (_hashTimerEntries.length < MAX_POOL_SIZE) {
        entry.timers = entry.target = entry.currentTimer = null;
        _hashTimerEntries.push(entry);
      }
    };
    function CallbackTimer() {
      this._lock = false;
      this._scheduler = null;
      this._elapsed = -1;
      this._runForever = false;
      this._useDelay = false;
      this._timesExecuted = 0;
      this._repeat = 0;
      this._delay = 0;
      this._interval = 0;
      this._target = null;
      this._callback = null;
    }
    var proto = CallbackTimer.prototype;
    proto.initWithCallback = function(scheduler, callback, target, seconds, repeat, delay) {
      this._lock = false;
      this._scheduler = scheduler;
      this._target = target;
      this._callback = callback;
      this._elapsed = -1;
      this._interval = seconds;
      this._delay = delay;
      this._useDelay = this._delay > 0;
      this._repeat = repeat;
      this._runForever = this._repeat === cc.macro.REPEAT_FOREVER;
      return true;
    };
    proto.getInterval = function() {
      return this._interval;
    };
    proto.setInterval = function(interval) {
      this._interval = interval;
    };
    proto.update = function(dt) {
      if (-1 === this._elapsed) {
        this._elapsed = 0;
        this._timesExecuted = 0;
      } else {
        this._elapsed += dt;
        if (this._runForever && !this._useDelay) {
          if (this._elapsed >= this._interval) {
            this.trigger();
            this._elapsed = 0;
          }
        } else {
          if (this._useDelay) {
            if (this._elapsed >= this._delay) {
              this.trigger();
              this._elapsed -= this._delay;
              this._timesExecuted += 1;
              this._useDelay = false;
            }
          } else if (this._elapsed >= this._interval) {
            this.trigger();
            this._elapsed = 0;
            this._timesExecuted += 1;
          }
          this._callback && !this._runForever && this._timesExecuted > this._repeat && this.cancel();
        }
      }
    };
    proto.getCallback = function() {
      return this._callback;
    };
    proto.trigger = function() {
      if (this._target && this._callback) {
        this._lock = true;
        this._callback.call(this._target, this._elapsed);
        this._lock = false;
      }
    };
    proto.cancel = function() {
      this._scheduler.unschedule(this._callback, this._target);
    };
    var _timers = [];
    CallbackTimer.get = function() {
      return _timers.pop() || new CallbackTimer();
    };
    CallbackTimer.put = function(timer) {
      if (_timers.length < MAX_POOL_SIZE && !timer._lock) {
        timer._scheduler = timer._target = timer._callback = null;
        _timers.push(timer);
      }
    };
    cc.Scheduler = function() {
      this._timeScale = 1;
      this._updatesNegList = [];
      this._updates0List = [];
      this._updatesPosList = [];
      this._hashForUpdates = js.createMap(true);
      this._hashForTimers = js.createMap(true);
      this._currentTarget = null;
      this._currentTargetSalvaged = false;
      this._updateHashLocked = false;
      this._arrayForTimers = [];
    };
    cc.Scheduler.prototype = {
      constructor: cc.Scheduler,
      _removeHashElement: function(element) {
        delete this._hashForTimers[element.target._id];
        var arr = this._arrayForTimers;
        for (var i = 0, l = arr.length; i < l; i++) if (arr[i] === element) {
          arr.splice(i, 1);
          break;
        }
        HashTimerEntry.put(element);
      },
      _removeUpdateFromHash: function(entry) {
        var targetId = entry.target._id;
        var self = this, element = self._hashForUpdates[targetId];
        if (element) {
          var list = element.list, listEntry = element.entry;
          for (var i = 0, l = list.length; i < l; i++) if (list[i] === listEntry) {
            list.splice(i, 1);
            break;
          }
          delete self._hashForUpdates[targetId];
          ListEntry.put(listEntry);
          HashUpdateEntry.put(element);
        }
      },
      _priorityIn: function(ppList, listElement, priority) {
        for (var i = 0; i < ppList.length; i++) if (priority < ppList[i].priority) {
          ppList.splice(i, 0, listElement);
          return;
        }
        ppList.push(listElement);
      },
      _appendIn: function(ppList, listElement) {
        ppList.push(listElement);
      },
      enableForTarget: function(target) {
        target._id || (target.__instanceId ? cc.warnID(1513) : target._id = idGenerater.getNewId());
      },
      setTimeScale: function(timeScale) {
        this._timeScale = timeScale;
      },
      getTimeScale: function() {
        return this._timeScale;
      },
      update: function(dt) {
        this._updateHashLocked = true;
        1 !== this._timeScale && (dt *= this._timeScale);
        var i, list, len, entry;
        for (i = 0, list = this._updatesNegList, len = list.length; i < len; i++) {
          entry = list[i];
          entry.paused || entry.markedForDeletion || entry.target.update(dt);
        }
        for (i = 0, list = this._updates0List, len = list.length; i < len; i++) {
          entry = list[i];
          entry.paused || entry.markedForDeletion || entry.target.update(dt);
        }
        for (i = 0, list = this._updatesPosList, len = list.length; i < len; i++) {
          entry = list[i];
          entry.paused || entry.markedForDeletion || entry.target.update(dt);
        }
        var elt, arr = this._arrayForTimers;
        for (i = 0; i < arr.length; i++) {
          elt = arr[i];
          this._currentTarget = elt;
          this._currentTargetSalvaged = false;
          if (!elt.paused) for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; ++elt.timerIndex) {
            elt.currentTimer = elt.timers[elt.timerIndex];
            elt.currentTimerSalvaged = false;
            elt.currentTimer.update(dt);
            elt.currentTimer = null;
          }
          if (this._currentTargetSalvaged && 0 === this._currentTarget.timers.length) {
            this._removeHashElement(this._currentTarget);
            --i;
          }
        }
        for (i = 0, list = this._updatesNegList; i < list.length; ) {
          entry = list[i];
          entry.markedForDeletion ? this._removeUpdateFromHash(entry) : i++;
        }
        for (i = 0, list = this._updates0List; i < list.length; ) {
          entry = list[i];
          entry.markedForDeletion ? this._removeUpdateFromHash(entry) : i++;
        }
        for (i = 0, list = this._updatesPosList; i < list.length; ) {
          entry = list[i];
          entry.markedForDeletion ? this._removeUpdateFromHash(entry) : i++;
        }
        this._updateHashLocked = false;
        this._currentTarget = null;
      },
      schedule: function(callback, target, interval, repeat, delay, paused) {
        "use strict";
        if ("function" !== typeof callback) {
          var tmp = callback;
          callback = target;
          target = tmp;
        }
        if (4 === arguments.length || 5 === arguments.length) {
          paused = !!repeat;
          repeat = cc.macro.REPEAT_FOREVER;
          delay = 0;
        }
        cc.assertID(target, 1502);
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var element = this._hashForTimers[targetId];
        if (element) element.paused !== paused && cc.warnID(1511); else {
          element = HashTimerEntry.get(null, target, 0, null, null, paused);
          this._arrayForTimers.push(element);
          this._hashForTimers[targetId] = element;
        }
        var timer, i;
        if (null == element.timers) element.timers = []; else for (i = 0; i < element.timers.length; ++i) {
          timer = element.timers[i];
          if (timer && callback === timer._callback) {
            cc.logID(1507, timer.getInterval(), interval);
            timer._interval = interval;
            return;
          }
        }
        timer = CallbackTimer.get();
        timer.initWithCallback(this, callback, target, interval, repeat, delay);
        element.timers.push(timer);
        this._currentTarget === element && this._currentTargetSalvaged && (this._currentTargetSalvaged = false);
      },
      scheduleUpdate: function(target, priority, paused) {
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var hashElement = this._hashForUpdates[targetId];
        if (hashElement && hashElement.entry) {
          if (hashElement.entry.priority === priority) {
            hashElement.entry.markedForDeletion = false;
            hashElement.entry.paused = paused;
            return;
          }
          if (this._updateHashLocked) {
            cc.logID(1506);
            hashElement.entry.markedForDeletion = false;
            hashElement.entry.paused = paused;
            return;
          }
          this.unscheduleUpdate(target);
        }
        var listElement = ListEntry.get(target, priority, paused, false);
        var ppList;
        if (0 === priority) {
          ppList = this._updates0List;
          this._appendIn(ppList, listElement);
        } else {
          ppList = priority < 0 ? this._updatesNegList : this._updatesPosList;
          this._priorityIn(ppList, listElement, priority);
        }
        this._hashForUpdates[targetId] = HashUpdateEntry.get(ppList, listElement, target, null);
      },
      unschedule: function(callback, target) {
        if (!target || !callback) return;
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var self = this, element = self._hashForTimers[targetId];
        if (element) {
          var timers = element.timers;
          for (var i = 0, li = timers.length; i < li; i++) {
            var timer = timers[i];
            if (callback === timer._callback) {
              timer !== element.currentTimer || element.currentTimerSalvaged || (element.currentTimerSalvaged = true);
              timers.splice(i, 1);
              CallbackTimer.put(timer);
              element.timerIndex >= i && element.timerIndex--;
              0 === timers.length && (self._currentTarget === element ? self._currentTargetSalvaged = true : self._removeHashElement(element));
              return;
            }
          }
        }
      },
      unscheduleUpdate: function(target) {
        if (!target) return;
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var element = this._hashForUpdates[targetId];
        element && (this._updateHashLocked ? element.entry.markedForDeletion = true : this._removeUpdateFromHash(element.entry));
      },
      unscheduleAllForTarget: function(target) {
        if (!target) return;
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var element = this._hashForTimers[targetId];
        if (element) {
          var timers = element.timers;
          timers.indexOf(element.currentTimer) > -1 && !element.currentTimerSalvaged && (element.currentTimerSalvaged = true);
          for (var i = 0, l = timers.length; i < l; i++) CallbackTimer.put(timers[i]);
          timers.length = 0;
          this._currentTarget === element ? this._currentTargetSalvaged = true : this._removeHashElement(element);
        }
        this.unscheduleUpdate(target);
      },
      unscheduleAll: function() {
        this.unscheduleAllWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
      },
      unscheduleAllWithMinPriority: function(minPriority) {
        var i, element, arr = this._arrayForTimers;
        for (i = arr.length - 1; i >= 0; i--) {
          element = arr[i];
          this.unscheduleAllForTarget(element.target);
        }
        var entry;
        var temp_length = 0;
        if (minPriority < 0) for (i = 0; i < this._updatesNegList.length; ) {
          temp_length = this._updatesNegList.length;
          entry = this._updatesNegList[i];
          entry && entry.priority >= minPriority && this.unscheduleUpdate(entry.target);
          temp_length == this._updatesNegList.length && i++;
        }
        if (minPriority <= 0) for (i = 0; i < this._updates0List.length; ) {
          temp_length = this._updates0List.length;
          entry = this._updates0List[i];
          entry && this.unscheduleUpdate(entry.target);
          temp_length == this._updates0List.length && i++;
        }
        for (i = 0; i < this._updatesPosList.length; ) {
          temp_length = this._updatesPosList.length;
          entry = this._updatesPosList[i];
          entry && entry.priority >= minPriority && this.unscheduleUpdate(entry.target);
          temp_length == this._updatesPosList.length && i++;
        }
      },
      isScheduled: function(callback, target) {
        cc.assertID(callback, 1508);
        cc.assertID(target, 1509);
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var element = this._hashForTimers[targetId];
        if (!element) return false;
        if (null == element.timers) return false;
        var timers = element.timers;
        for (var i = 0; i < timers.length; ++i) {
          var timer = timers[i];
          if (callback === timer._callback) return true;
        }
        return false;
      },
      pauseAllTargets: function() {
        return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
      },
      pauseAllTargetsWithMinPriority: function(minPriority) {
        var idsWithSelectors = [];
        var self = this, element, locArrayForTimers = self._arrayForTimers;
        var i, li;
        for (i = 0, li = locArrayForTimers.length; i < li; i++) {
          element = locArrayForTimers[i];
          if (element) {
            element.paused = true;
            idsWithSelectors.push(element.target);
          }
        }
        var entry;
        if (minPriority < 0) for (i = 0; i < this._updatesNegList.length; i++) {
          entry = this._updatesNegList[i];
          if (entry && entry.priority >= minPriority) {
            entry.paused = true;
            idsWithSelectors.push(entry.target);
          }
        }
        if (minPriority <= 0) for (i = 0; i < this._updates0List.length; i++) {
          entry = this._updates0List[i];
          if (entry) {
            entry.paused = true;
            idsWithSelectors.push(entry.target);
          }
        }
        for (i = 0; i < this._updatesPosList.length; i++) {
          entry = this._updatesPosList[i];
          if (entry && entry.priority >= minPriority) {
            entry.paused = true;
            idsWithSelectors.push(entry.target);
          }
        }
        return idsWithSelectors;
      },
      resumeTargets: function(targetsToResume) {
        if (!targetsToResume) return;
        for (var i = 0; i < targetsToResume.length; i++) this.resumeTarget(targetsToResume[i]);
      },
      pauseTarget: function(target) {
        cc.assertID(target, 1503);
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var self = this, element = self._hashForTimers[targetId];
        element && (element.paused = true);
        var elementUpdate = self._hashForUpdates[targetId];
        elementUpdate && (elementUpdate.entry.paused = true);
      },
      resumeTarget: function(target) {
        cc.assertID(target, 1504);
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var self = this, element = self._hashForTimers[targetId];
        element && (element.paused = false);
        var elementUpdate = self._hashForUpdates[targetId];
        elementUpdate && (elementUpdate.entry.paused = false);
      },
      isTargetPaused: function(target) {
        cc.assertID(target, 1505);
        var targetId = target._id;
        if (!targetId) if (target.__instanceId) {
          cc.warnID(1513);
          targetId = target._id = target.__instanceId;
        } else cc.errorID(1510);
        var element = this._hashForTimers[targetId];
        if (element) return element.paused;
        var elementUpdate = this._hashForUpdates[targetId];
        if (elementUpdate) return elementUpdate.entry.paused;
        return false;
      }
    };
    cc.Scheduler.PRIORITY_SYSTEM = 1 << 31;
    cc.Scheduler.PRIORITY_NON_SYSTEM = cc.Scheduler.PRIORITY_SYSTEM + 1;
    module.exports = cc.Scheduler;
  }), {
    "./platform/id-generater": 102,
    "./platform/js": 106
  } ],
  10: [ (function(require, module, exports) {
    var RawAsset = require("./CCRawAsset");
    cc.Asset = cc.Class({
      name: "cc.Asset",
      extends: RawAsset,
      ctor: function() {
        this.loaded = true;
      },
      properties: {
        nativeUrl: {
          get: function() {
            if (this._native) {
              var name = this._native;
              if (47 === name.charCodeAt(0)) return name.slice(1);
              if (cc.AssetLibrary) {
                var base = cc.AssetLibrary.getLibUrlNoExt(this._uuid, true);
                return 46 === name.charCodeAt(0) ? base + name : base + "/" + name;
              }
              cc.errorID(6400);
            }
            return "";
          },
          visible: false
        },
        _native: "",
        _nativeAsset: {
          get: function() {},
          set: function(obj) {}
        }
      },
      statics: {
        deserialize: false,
        preventDeferredLoadDependents: false,
        preventPreloadNativeObject: false
      },
      toString: function() {
        return this.nativeUrl;
      },
      serialize: false,
      createNode: null,
      _setRawAsset: function(filename, inLibrary) {
        this._native = false !== inLibrary ? filename || void 0 : "/" + filename;
      }
    });
    module.exports = cc.Asset;
  }), {
    "./CCRawAsset": 18
  } ],
  11: [ (function(require, module, exports) {
    var Asset = require("./CCAsset");
    var EventTarget = require("../event/event-target");
    var LoadMode = cc.Enum({
      WEB_AUDIO: 0,
      DOM_AUDIO: 1
    });
    var AudioClip = cc.Class({
      name: "cc.AudioClip",
      extends: Asset,
      mixins: [ EventTarget ],
      ctor: function() {
        this.loaded = false;
        this._audio = null;
      },
      properties: {
        loadMode: {
          default: LoadMode.WEB_AUDIO,
          type: LoadMode
        },
        _nativeAsset: {
          get: function() {
            return this._audio;
          },
          set: function(value) {
            this._audio = value;
            if (value) {
              this.loaded = true;
              this.emit("load");
            }
          },
          override: true
        }
      },
      statics: {
        LoadMode: LoadMode,
        _loadByUrl: function(url, callback) {
          var item = cc.loader.getItem(url) || cc.loader.getItem(url + "?useDom=1");
          item && item.complete ? item._owner instanceof AudioClip ? callback(null, item._owner) : callback(null, item.content) : cc.loader.load(url, (function(error, downloadUrl) {
            if (error) return callback(error);
            item = cc.loader.getItem(url) || cc.loader.getItem(url + "?useDom=1");
            callback(null, item.content);
          }));
        }
      },
      destroy: function() {
        cc.audioEngine.uncache(this);
        this._super();
      }
    });
    cc.AudioClip = AudioClip;
    module.exports = AudioClip;
  }), {
    "../event/event-target": 50,
    "./CCAsset": 10
  } ],
  12: [ (function(require, module, exports) {
    var BitmapFont = cc.Class({
      name: "cc.BitmapFont",
      extends: cc.Font,
      properties: {
        fntDataStr: {
          default: ""
        },
        spriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        fontSize: {
          default: -1
        },
        _fntConfig: null
      }
    });
    cc.BitmapFont = BitmapFont;
    module.exports = BitmapFont;
  }), {} ],
  13: [ (function(require, module, exports) {
    var BufferAsset = cc.Class({
      name: "cc.BufferAsset",
      extends: cc.Asset,
      ctor: function() {
        this._buffer = null;
      },
      properties: {
        _nativeAsset: {
          get: function() {
            return this._buffer;
          },
          set: function(bin) {
            this._buffer = bin.buffer || bin;
          },
          override: true
        }
      }
    });
    cc.BufferAsset = module.exports = BufferAsset;
  }), {} ],
  14: [ (function(require, module, exports) {
    var Font = cc.Class({
      name: "cc.Font",
      extends: cc.Asset
    });
    cc.Font = module.exports = Font;
  }), {} ],
  15: [ (function(require, module, exports) {
    var JsonAsset = cc.Class({
      name: "cc.JsonAsset",
      extends: cc.Asset,
      properties: {
        json: null
      }
    });
    module.exports = cc.JsonAsset = JsonAsset;
  }), {} ],
  16: [ (function(require, module, exports) {
    var LabelAtlas = cc.Class({
      name: "cc.LabelAtlas",
      extends: cc.BitmapFont
    });
    cc.LabelAtlas = LabelAtlas;
    module.exports = LabelAtlas;
  }), {} ],
  17: [ (function(require, module, exports) {
    var OptimizationPolicy = cc.Enum({
      AUTO: 0,
      SINGLE_INSTANCE: 1,
      MULTI_INSTANCE: 2
    });
    var Prefab = cc.Class({
      name: "cc.Prefab",
      extends: cc.Asset,
      ctor: function() {
        this._createFunction = null;
        this._instantiatedTimes = 0;
      },
      properties: {
        data: null,
        optimizationPolicy: OptimizationPolicy.AUTO,
        asyncLoadAssets: false,
        readonly: {
          default: false,
          editorOnly: true
        }
      },
      statics: {
        OptimizationPolicy: OptimizationPolicy,
        OptimizationPolicyThreshold: 3
      },
      createNode: false,
      compileCreateFunction: function() {
        var jit = require("../platform/instantiate-jit");
        this._createFunction = jit.compile(this.data);
      },
      _doInstantiate: function(rootToRedirect) {
        this.data._prefab ? this.data._prefab._synced = true : cc.warnID(3700);
        this._createFunction || this.compileCreateFunction();
        return this._createFunction(rootToRedirect);
      },
      _instantiate: function() {
        var node, useJit = false;
        false;
        if (useJit) {
          node = this._doInstantiate();
          this.data._instantiate(node);
        } else {
          this.data._prefab._synced = true;
          node = this.data._instantiate();
        }
        ++this._instantiatedTimes;
        var PrefabUtils;
        false, false;
        return node;
      }
    });
    cc.Prefab = module.exports = Prefab;
    cc.js.obsolete(cc, "cc._Prefab", "Prefab");
  }), {
    "../platform/instantiate-jit": 104
  } ],
  18: [ (function(require, module, exports) {
    var CCObject = require("../platform/CCObject");
    var js = require("../platform/js");
    cc.RawAsset = cc.Class({
      name: "cc.RawAsset",
      extends: CCObject,
      ctor: function() {
        Object.defineProperty(this, "_uuid", {
          value: "",
          writable: true
        });
      }
    });
    js.value(cc.RawAsset, "isRawAssetType", (function(ctor) {
      return js.isChildClassOf(ctor, cc.RawAsset) && !js.isChildClassOf(ctor, cc.Asset);
    }));
    js.value(cc.RawAsset, "wasRawAssetType", (function(ctor) {
      return ctor === cc.Texture2D || ctor === cc.AudioClip || ctor === cc.ParticleAsset || ctor === cc.Asset;
    }));
    module.exports = cc.RawAsset;
  }), {
    "../platform/CCObject": 92,
    "../platform/js": 106
  } ],
  19: [ (function(require, module, exports) {
    var Scene = cc.Class({
      name: "cc.SceneAsset",
      extends: cc.Asset,
      properties: {
        scene: null,
        asyncLoadAssets: void 0
      }
    });
    cc.SceneAsset = Scene;
    module.exports = Scene;
  }), {} ],
  20: [ (function(require, module, exports) {
    var Script = cc.Class({
      name: "cc.Script",
      extends: cc.Asset
    });
    cc._Script = Script;
    var JavaScript = cc.Class({
      name: "cc.JavaScript",
      extends: Script
    });
    cc._JavaScript = JavaScript;
    var CoffeeScript = cc.Class({
      name: "cc.CoffeeScript",
      extends: Script
    });
    cc._CoffeeScript = CoffeeScript;
    var TypeScript = cc.Class({
      name: "cc.TypeScript",
      extends: Script
    });
    cc._TypeScript = TypeScript;
  }), {} ],
  21: [ (function(require, module, exports) {
    var SpriteAtlas = cc.Class({
      name: "cc.SpriteAtlas",
      extends: cc.Asset,
      properties: {
        _spriteFrames: {
          default: {}
        }
      },
      getTexture: function() {
        var keys = Object.keys(this._spriteFrames);
        if (keys.length > 0) {
          var spriteFrame = this._spriteFrames[keys[0]];
          return spriteFrame ? spriteFrame.getTexture() : null;
        }
        return null;
      },
      getSpriteFrame: function(key) {
        var sf = this._spriteFrames[key];
        if (!sf) return null;
        sf.name || (sf.name = key);
        return sf;
      },
      getSpriteFrames: function() {
        var frames = [];
        var spriteFrames = this._spriteFrames;
        for (var key in spriteFrames) frames.push(this.getSpriteFrame(key));
        return frames;
      }
    });
    cc.SpriteAtlas = SpriteAtlas;
    module.exports = SpriteAtlas;
  }), {} ],
  22: [ (function(require, module, exports) {
    var EventTarget = require("../event/event-target");
    var textureUtil = require("../utils/texture-util");
    var INSET_LEFT = 0;
    var INSET_TOP = 1;
    var INSET_RIGHT = 2;
    var INSET_BOTTOM = 3;
    var temp_uvs = [ {
      u: 0,
      v: 0
    }, {
      u: 0,
      v: 0
    }, {
      u: 0,
      v: 0
    }, {
      u: 0,
      v: 0
    } ];
    var SpriteFrame = cc.Class({
      name: "cc.SpriteFrame",
      extends: require("../assets/CCAsset"),
      mixins: [ EventTarget ],
      properties: {
        _textureSetter: {
          set: function(texture) {
            if (texture) {
              false;
              this._texture !== texture && this._refreshTexture(texture);
              this._textureFilename = texture.url;
            }
          }
        },
        insetTop: {
          get: function() {
            return this._capInsets[INSET_TOP];
          },
          set: function(value) {
            this._capInsets[INSET_TOP] = value;
            this._texture && this._calculateSlicedUV();
          }
        },
        insetBottom: {
          get: function() {
            return this._capInsets[INSET_BOTTOM];
          },
          set: function(value) {
            this._capInsets[INSET_BOTTOM] = value;
            this._texture && this._calculateSlicedUV();
          }
        },
        insetLeft: {
          get: function() {
            return this._capInsets[INSET_LEFT];
          },
          set: function(value) {
            this._capInsets[INSET_LEFT] = value;
            this._texture && this._calculateSlicedUV();
          }
        },
        insetRight: {
          get: function() {
            return this._capInsets[INSET_RIGHT];
          },
          set: function(value) {
            this._capInsets[INSET_RIGHT] = value;
            this._texture && this._calculateSlicedUV();
          }
        }
      },
      ctor: function() {
        EventTarget.call(this);
        var filename = arguments[0];
        var rect = arguments[1];
        var rotated = arguments[2];
        var offset = arguments[3];
        var originalSize = arguments[4];
        this._rect = null;
        this._offset = null;
        this._originalSize = null;
        this._rotated = false;
        this.vertices = null;
        this._capInsets = [ 0, 0, 0, 0 ];
        this.uv = [];
        this.uvSliced = [];
        this._texture = null;
        this._textureFilename = "";
        this._original = null;
        false;
        void 0 !== filename && this.setTexture(filename, rect, rotated, offset, originalSize);
      },
      textureLoaded: function() {
        return this._texture && this._texture.loaded;
      },
      isRotated: function() {
        return this._rotated;
      },
      setRotated: function(bRotated) {
        this._rotated = bRotated;
        this._texture && this._calculateUV();
      },
      getRect: function() {
        return cc.rect(this._rect);
      },
      setRect: function(rect) {
        this._rect = rect;
        this._texture && this._calculateUV();
      },
      getOriginalSize: function() {
        return cc.size(this._originalSize);
      },
      setOriginalSize: function(size) {
        if (this._originalSize) {
          this._originalSize.width = size.width;
          this._originalSize.height = size.height;
        } else this._originalSize = cc.size(size);
      },
      getTexture: function() {
        return this._texture;
      },
      _textureLoadedCallback: function() {
        var self = this;
        var texture = this._texture;
        if (!texture) return;
        var w = texture.width, h = texture.height;
        if (self._rotated && cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
          self._rotated = false;
          w = self._texture.width;
          h = self._texture.height;
          self._rect = cc.rect(0, 0, w, h);
        }
        self._rect ? self._checkRect(self._texture) : self._rect = cc.rect(0, 0, w, h);
        self._originalSize || self.setOriginalSize(cc.size(w, h));
        self._offset || self.setOffset(cc.v2(0, 0));
        self._calculateUV();
        self.emit("load");
      },
      _refreshTexture: function(texture) {
        this._texture = texture;
        texture.loaded ? this._textureLoadedCallback() : texture.once("load", this._textureLoadedCallback, this);
      },
      getOffset: function() {
        return cc.v2(this._offset);
      },
      setOffset: function(offsets) {
        this._offset = cc.v2(offsets);
      },
      clone: function() {
        return new SpriteFrame(this._texture || this._textureFilename, this._rect, this._rotated, this._offset, this._originalSize);
      },
      setTexture: function(textureOrTextureFile, rect, rotated, offset, originalSize) {
        this._rect = rect || null;
        offset ? this.setOffset(offset) : this._offset = null;
        originalSize ? this.setOriginalSize(originalSize) : this._originalSize = null;
        this._rotated = rotated || false;
        var texture = textureOrTextureFile;
        if ("string" === typeof texture && texture) {
          this._textureFilename = texture;
          this._loadTexture();
        }
        texture instanceof cc.Texture2D && this._texture !== texture && this._refreshTexture(texture);
        return true;
      },
      _loadTexture: function() {
        if (this._textureFilename) {
          var texture = textureUtil.loadImage(this._textureFilename);
          this._refreshTexture(texture);
        }
      },
      ensureLoadTexture: function() {
        if (this._texture) {
          if (!this._texture.loaded) {
            this._refreshTexture(this._texture);
            textureUtil.postLoadTexture(this._texture);
          }
        } else this._textureFilename && this._loadTexture();
      },
      clearTexture: function() {
        this._texture = null;
      },
      _checkRect: function(texture) {
        var rect = this._rect;
        var maxX = rect.x, maxY = rect.y;
        if (this._rotated) {
          maxX += rect.height;
          maxY += rect.width;
        } else {
          maxX += rect.width;
          maxY += rect.height;
        }
        maxX > texture.width && cc.errorID(3300, texture.url + "/" + this.name, maxX, texture.width);
        maxY > texture.height && cc.errorID(3400, texture.url + "/" + this.name, maxY, texture.height);
      },
      _calculateSlicedUV: function() {
        var rect = this._rect;
        var atlasWidth = this._texture.width;
        var atlasHeight = this._texture.height;
        var leftWidth = this._capInsets[INSET_LEFT];
        var rightWidth = this._capInsets[INSET_RIGHT];
        var centerWidth = rect.width - leftWidth - rightWidth;
        var topHeight = this._capInsets[INSET_TOP];
        var bottomHeight = this._capInsets[INSET_BOTTOM];
        var centerHeight = rect.height - topHeight - bottomHeight;
        var uvSliced = this.uvSliced;
        uvSliced.length = 0;
        if (this._rotated) {
          temp_uvs[0].u = rect.x / atlasWidth;
          temp_uvs[1].u = (rect.x + bottomHeight) / atlasWidth;
          temp_uvs[2].u = (rect.x + bottomHeight + centerHeight) / atlasWidth;
          temp_uvs[3].u = (rect.x + rect.height) / atlasWidth;
          temp_uvs[3].v = rect.y / atlasHeight;
          temp_uvs[2].v = (rect.y + leftWidth) / atlasHeight;
          temp_uvs[1].v = (rect.y + leftWidth + centerWidth) / atlasHeight;
          temp_uvs[0].v = (rect.y + rect.width) / atlasHeight;
          for (var row = 0; row < 4; ++row) {
            var rowD = temp_uvs[row];
            for (var col = 0; col < 4; ++col) {
              var colD = temp_uvs[3 - col];
              uvSliced.push({
                u: rowD.u,
                v: colD.v
              });
            }
          }
        } else {
          temp_uvs[0].u = rect.x / atlasWidth;
          temp_uvs[1].u = (rect.x + leftWidth) / atlasWidth;
          temp_uvs[2].u = (rect.x + leftWidth + centerWidth) / atlasWidth;
          temp_uvs[3].u = (rect.x + rect.width) / atlasWidth;
          temp_uvs[3].v = rect.y / atlasHeight;
          temp_uvs[2].v = (rect.y + topHeight) / atlasHeight;
          temp_uvs[1].v = (rect.y + topHeight + centerHeight) / atlasHeight;
          temp_uvs[0].v = (rect.y + rect.height) / atlasHeight;
          for (var _row = 0; _row < 4; ++_row) {
            var _rowD = temp_uvs[_row];
            for (var _col = 0; _col < 4; ++_col) {
              var _colD = temp_uvs[_col];
              uvSliced.push({
                u: _colD.u,
                v: _rowD.v
              });
            }
          }
        }
      },
      _calculateUV: function() {
        var rect = this._rect, texture = this._texture, uv = this.uv, texw = texture.width, texh = texture.height;
        if (this._rotated) {
          var l = 0 === texw ? 0 : rect.x / texw;
          var r = 0 === texw ? 0 : (rect.x + rect.height) / texw;
          var b = 0 === texh ? 0 : (rect.y + rect.width) / texh;
          var t = 0 === texh ? 0 : rect.y / texh;
          uv[0] = l;
          uv[1] = t;
          uv[2] = l;
          uv[3] = b;
          uv[4] = r;
          uv[5] = t;
          uv[6] = r;
          uv[7] = b;
        } else {
          var _l = 0 === texw ? 0 : rect.x / texw;
          var _r = 0 === texw ? 0 : (rect.x + rect.width) / texw;
          var _b = 0 === texh ? 0 : (rect.y + rect.height) / texh;
          var _t = 0 === texh ? 0 : rect.y / texh;
          uv[0] = _l;
          uv[1] = _b;
          uv[2] = _r;
          uv[3] = _b;
          uv[4] = _l;
          uv[5] = _t;
          uv[6] = _r;
          uv[7] = _t;
        }
        var vertices = this.vertices;
        if (vertices) {
          vertices.nu.length = 0;
          vertices.nv.length = 0;
          for (var i = 0; i < vertices.u.length; i++) {
            vertices.nu[i] = vertices.u[i] / texw;
            vertices.nv[i] = vertices.v[i] / texh;
          }
        }
        this._calculateSlicedUV();
      },
      _serialize: false,
      _deserialize: function(data, handle) {
        var rect = data.rect;
        rect && (this._rect = new cc.Rect(rect[0], rect[1], rect[2], rect[3]));
        data.offset && this.setOffset(new cc.Vec2(data.offset[0], data.offset[1]));
        data.originalSize && this.setOriginalSize(new cc.Size(data.originalSize[0], data.originalSize[1]));
        this._rotated = 1 === data.rotated;
        this._name = data.name;
        var capInsets = data.capInsets;
        if (capInsets) {
          this._capInsets[INSET_LEFT] = capInsets[INSET_LEFT];
          this._capInsets[INSET_TOP] = capInsets[INSET_TOP];
          this._capInsets[INSET_RIGHT] = capInsets[INSET_RIGHT];
          this._capInsets[INSET_BOTTOM] = capInsets[INSET_BOTTOM];
        }
        false;
        this.vertices = data.vertices;
        if (this.vertices) {
          this.vertices.nu = [];
          this.vertices.nv = [];
        }
        var textureUuid = data.texture;
        textureUuid && handle.result.push(this, "_textureSetter", textureUuid);
      }
    });
    var proto = SpriteFrame.prototype;
    proto.copyWithZone = proto.clone;
    proto.copy = proto.clone;
    proto.initWithTexture = proto.setTexture;
    cc.SpriteFrame = SpriteFrame;
    module.exports = SpriteFrame;
  }), {
    "../assets/CCAsset": 10,
    "../event/event-target": 50,
    "../utils/texture-util": 146
  } ],
  23: [ (function(require, module, exports) {
    var Font = require("./CCFont");
    var TTFFont = cc.Class({
      name: "cc.TTFFont",
      extends: Font,
      properties: {
        _fontFamily: null,
        _nativeAsset: {
          type: cc.String,
          get: function() {
            return this._fontFamily;
          },
          set: function(value) {
            this._fontFamily = value || "Arial";
          },
          override: true
        }
      }
    });
    cc.TTFFont = module.exports = TTFFont;
  }), {
    "./CCFont": 14
  } ],
  24: [ (function(require, module, exports) {
    var TextAsset = cc.Class({
      name: "cc.TextAsset",
      extends: cc.Asset,
      properties: {
        text: ""
      },
      toString: function() {
        return this.text;
      }
    });
    module.exports = cc.TextAsset = TextAsset;
  }), {} ],
  25: [ (function(require, module, exports) {
    var EventTarget = require("../event/event-target");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var renderer = require("../renderer");
    require("../platform/CCClass");
    var gfx = renderEngine.gfx;
    var GL_NEAREST = 9728;
    var GL_LINEAR = 9729;
    var GL_REPEAT = 10497;
    var GL_CLAMP_TO_EDGE = 33071;
    var GL_MIRRORED_REPEAT = 33648;
    var CHAR_CODE_0 = 48;
    var CHAR_CODE_1 = 49;
    var idGenerater = new (require("../platform/id-generater"))("Tex");
    var PixelFormat = cc.Enum({
      RGB565: gfx.TEXTURE_FMT_R5_G6_B5,
      RGB5A1: gfx.TEXTURE_FMT_R5_G5_B5_A1,
      RGBA4444: gfx.TEXTURE_FMT_R4_G4_B4_A4,
      RGB888: gfx.TEXTURE_FMT_RGB8,
      RGBA8888: gfx.TEXTURE_FMT_RGBA8,
      RGBA32F: gfx.TEXTURE_FMT_RGBA32F,
      A8: gfx.TEXTURE_FMT_A8,
      I8: gfx.TEXTURE_FMT_L8,
      AI8: gfx.TEXTURE_FMT_L8_A8,
      RGB_PVRTC_2BPPV1: gfx.TEXTURE_FMT_RGB_PVRTC_2BPPV1,
      RGBA_PVRTC_2BPPV1: gfx.TEXTURE_FMT_RGBA_PVRTC_2BPPV1,
      RGB_PVRTC_4BPPV1: gfx.TEXTURE_FMT_RGB_PVRTC_4BPPV1,
      RGBA_PVRTC_4BPPV1: gfx.TEXTURE_FMT_RGBA_PVRTC_4BPPV1
    });
    var WrapMode = cc.Enum({
      REPEAT: GL_REPEAT,
      CLAMP_TO_EDGE: GL_CLAMP_TO_EDGE,
      MIRRORED_REPEAT: GL_MIRRORED_REPEAT
    });
    var Filter = cc.Enum({
      LINEAR: GL_LINEAR,
      NEAREST: GL_NEAREST
    });
    var FilterIndex = {
      9728: 0,
      9729: 1
    };
    var _images = [];
    var _sharedOpts = {
      width: void 0,
      height: void 0,
      minFilter: void 0,
      magFilter: void 0,
      wrapS: void 0,
      wrapT: void 0,
      format: void 0,
      mipmap: void 0,
      images: void 0,
      image: void 0,
      flipY: void 0,
      premultiplyAlpha: void 0
    };
    function _getSharedOptions() {
      for (var key in _sharedOpts) _sharedOpts[key] = void 0;
      _images.length = 0;
      _sharedOpts.images = _images;
      _sharedOpts.flipY = false;
      return _sharedOpts;
    }
    var Texture2D = cc.Class({
      name: "cc.Texture2D",
      extends: require("../assets/CCAsset"),
      mixins: [ EventTarget ],
      properties: {
        _nativeAsset: {
          get: function() {
            return this._image;
          },
          set: function(data) {
            data._compressed && data._data ? this.initWithData(data._data, this._format, data.width, data.height) : this.initWithElement(data);
          },
          override: true
        },
        _hasMipmap: false,
        _format: PixelFormat.RGBA8888,
        _premultiplyAlpha: false,
        _flipY: false,
        _minFilter: Filter.LINEAR,
        _magFilter: Filter.LINEAR,
        _wrapS: WrapMode.CLAMP_TO_EDGE,
        _wrapT: WrapMode.CLAMP_TO_EDGE
      },
      statics: {
        PixelFormat: PixelFormat,
        WrapMode: WrapMode,
        Filter: Filter,
        _FilterIndex: FilterIndex,
        extnames: [ ".png", ".jpg", ".jpeg", ".bmp", ".webp", ".pvr", ".etc" ],
        _isCompressed: function(texture) {
          return texture._format >= PixelFormat.RGB_PVRTC_2BPPV1 && texture._format <= PixelFormat.RGBA_PVRTC_4BPPV1;
        }
      },
      ctor: function() {
        this._id = idGenerater.getNewId();
        this.url = "";
        this.loaded = false;
        this.width = 0;
        this.height = 0;
        this._texture = null;
        false;
      },
      getImpl: function() {
        return this._texture;
      },
      getId: function() {
        return this._id;
      },
      toString: function() {
        return this.url || "";
      },
      update: function(options) {
        if (options) {
          var updateImg = false;
          void 0 !== options.width && (this.width = options.width);
          void 0 !== options.height && (this.height = options.height);
          if (void 0 !== options.minFilter) {
            this._minFilter = options.minFilter;
            options.minFilter = FilterIndex[options.minFilter];
          }
          if (void 0 !== options.magFilter) {
            this._magFilter = options.magFilter;
            options.magFilter = FilterIndex[options.magFilter];
          }
          void 0 !== options.wrapS && (this._wrapS = options.wrapS);
          void 0 !== options.wrapT && (this._wrapT = options.wrapT);
          void 0 !== options.format && (this._format = options.format);
          if (void 0 !== options.flipY) {
            this._flipY = options.flipY;
            updateImg = true;
          }
          if (void 0 !== options.premultiplyAlpha) {
            this._premultiplyAlpha = options.premultiplyAlpha;
            updateImg = true;
          }
          void 0 !== options.mipmap && (this._hasMipmap = options.mipmap);
          updateImg && this._image && (options.image = this._image);
          if (options.images && options.images.length > 0) this._image = options.images[0]; else if (void 0 !== options.image) {
            this._image = options.image;
            if (!options.images) {
              _images.length = 0;
              options.images = _images;
            }
            options.images.push(options.image);
          }
          options.images && options.images.length > 0 && this._texture.update(options);
        }
      },
      initWithElement: function(element) {
        if (!element) return;
        this._image = element;
        var self;
        true;
        this.handleLoadedTexture();
      },
      initWithData: function(data, pixelFormat, pixelsWidth, pixelsHeight) {
        var opts = _getSharedOptions();
        opts.image = data;
        opts.images = [ opts.image ];
        opts.hasMipmap = this._hasMipmap;
        opts.premultiplyAlpha = this._premultiplyAlpha;
        opts.flipY = this._flipY;
        opts.minFilter = FilterIndex[this._minFilter];
        opts.magFilter = FilterIndex[this._magFilter];
        opts.wrapS = this._wrapS;
        opts.wrapT = this._wrapT;
        opts.format = pixelFormat;
        opts.width = pixelsWidth;
        opts.height = pixelsHeight;
        this._texture ? this._texture.update(opts) : this._texture = new renderer.Texture2D(renderer.device, opts);
        this.width = pixelsWidth;
        this.height = pixelsHeight;
        this.loaded = true;
        this.emit("load");
        return true;
      },
      getHtmlElementObj: function() {
        return this._image;
      },
      destroy: function() {
        this._image = null;
        this._texture && this._texture.destroy();
        this._super();
      },
      getPixelFormat: function() {
        return this._format;
      },
      hasPremultipliedAlpha: function() {
        return this._premultiplyAlpha || false;
      },
      hasMipmap: function() {
        return this._hasMipmap || false;
      },
      handleLoadedTexture: function() {
        if (!this._image || !this._image.width || !this._image.height) return;
        this.width = this._image.width;
        this.height = this._image.height;
        var opts = _getSharedOptions();
        opts.image = this._image;
        opts.images = [ opts.image ];
        opts.width = this.width;
        opts.height = this.height;
        opts.hasMipmap = this._hasMipmap;
        opts.format = this._format;
        opts.premultiplyAlpha = this._premultiplyAlpha;
        opts.flipY = this._flipY;
        opts.minFilter = FilterIndex[this._minFilter];
        opts.magFilter = FilterIndex[this._magFilter];
        opts.wrapS = this._wrapS;
        opts.wrapT = this._wrapT;
        this._texture ? this._texture.update(opts) : this._texture = new renderer.Texture2D(renderer.device, opts);
        this.loaded = true;
        this.emit("load");
        if (cc.macro.CLEANUP_IMAGE_CACHE && this._image instanceof HTMLImageElement) {
          this._image.src = "";
          cc.loader.removeItem(this._image.id);
        }
      },
      description: function() {
        return "<cc.Texture2D | Name = " + this.url + " | Dimensions = " + this.width + " x " + this.height + ">";
      },
      releaseTexture: function() {
        this._image = null;
        this._texture && this._texture.destroy();
      },
      setWrapMode: function(wrapS, wrapT) {
        if (this._wrapS !== wrapS || this._wrapT !== wrapT) {
          var opts = _getSharedOptions();
          opts.wrapS = wrapS;
          opts.wrapT = wrapT;
          this.update(opts);
        }
      },
      setFilters: function(minFilter, magFilter) {
        if (this._minFilter !== minFilter || this._magFilter !== magFilter) {
          var opts = _getSharedOptions();
          opts.minFilter = minFilter;
          opts.magFilter = magFilter;
          this.update(opts);
        }
      },
      setFlipY: function(flipY) {
        if (this._flipY !== flipY) {
          var opts = _getSharedOptions();
          opts.flipY = flipY;
          this.update(opts);
        }
      },
      setPremultiplyAlpha: function(premultiply) {
        if (this._premultiplyAlpha !== premultiply) {
          var opts = _getSharedOptions();
          opts.premultiplyAlpha = premultiply;
          this.update(opts);
        }
      },
      setMipmap: function(mipmap) {
        if (this._hasMipmap !== mipmap) {
          var opts = _getSharedOptions();
          opts.hasMipmap = mipmap;
          this.update(opts);
        }
      },
      _serialize: (false, false) && function() {
        var extId = "";
        var exportedExts = this._exportedExts;
        !exportedExts && this._native && (exportedExts = [ this._native ]);
        if (exportedExts) {
          var exts = [];
          for (var i = 0; i < exportedExts.length; i++) {
            var _extId = "";
            var ext = exportedExts[i];
            if (ext) {
              var extFormat = ext.split("@");
              _extId = Texture2D.extnames.indexOf(extFormat[0]);
              _extId < 0 && (_extId = ext);
              extFormat[1] && (_extId += "@" + extFormat[1]);
            }
            exts.push(_extId);
          }
          extId = exts.join("_");
        }
        var asset = extId + "," + this._minFilter + "," + this._magFilter + "," + this._wrapS + "," + this._wrapT + "," + (this._premultiplyAlpha ? 1 : 0);
        return asset;
      },
      _deserialize: function(data, handle) {
        var fields = data.split(",");
        var extIdStr = fields[0];
        if (extIdStr) {
          var extIds = extIdStr.split("_");
          var extId = 999;
          var ext = "";
          var format = this._format;
          var SupportTextureFormats = cc.macro.SUPPORT_TEXTURE_FORMATS;
          for (var i = 0; i < extIds.length; i++) {
            var extFormat = extIds[i].split("@");
            var tmpExt = extFormat[0];
            tmpExt = tmpExt.charCodeAt(0) - CHAR_CODE_0;
            tmpExt = Texture2D.extnames[tmpExt] || extFormat;
            var index = SupportTextureFormats.indexOf(tmpExt);
            if (-1 !== index && index < extId) {
              extId = index;
              ext = tmpExt;
              format = extFormat[1] ? parseInt(extFormat[1]) : this._format;
            }
          }
          if (ext) {
            this._setRawAsset(ext);
            this._format = format;
          }
          var loadingItem = handle.customEnv;
          var uuid = loadingItem && loadingItem.uuid;
          if (uuid) {
            this._uuid = uuid;
            var url = this.nativeUrl;
            this.url = url;
          }
        }
        if (6 === fields.length) {
          this._minFilter = parseInt(fields[1]);
          this._magFilter = parseInt(fields[2]);
          this._wrapS = parseInt(fields[3]);
          this._wrapT = parseInt(fields[4]);
          this._premultiplyAlpha = fields[5].charCodeAt(0) === CHAR_CODE_1;
        }
      }
    });
    cc.Texture2D = module.exports = Texture2D;
  }), {
    "../assets/CCAsset": 10,
    "../event/event-target": 50,
    "../platform/CCClass": 86,
    "../platform/id-generater": 102,
    "../renderer": 127,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  26: [ (function(require, module, exports) {
    require("./CCRawAsset");
    require("./CCAsset");
    require("./CCFont");
    require("./CCPrefab");
    require("./CCAudioClip");
    require("./CCScripts");
    require("./CCSceneAsset");
    require("./CCSpriteFrame");
    require("./CCTexture2D");
    require("./CCRenderTexture");
    require("./CCTTFFont");
    require("./CCSpriteAtlas");
    require("./CCBitmapFont");
    require("./CCLabelAtlas");
    require("./CCTextAsset");
    require("./CCJsonAsset");
    require("./CCBufferAsset");
  }), {
    "./CCAsset": 10,
    "./CCAudioClip": 11,
    "./CCBitmapFont": 12,
    "./CCBufferAsset": 13,
    "./CCFont": 14,
    "./CCJsonAsset": 15,
    "./CCLabelAtlas": 16,
    "./CCPrefab": 17,
    "./CCRawAsset": 18,
    "./CCRenderTexture": void 0,
    "./CCSceneAsset": 19,
    "./CCScripts": 20,
    "./CCSpriteAtlas": 21,
    "./CCSpriteFrame": 22,
    "./CCTTFFont": 23,
    "./CCTextAsset": 24,
    "./CCTexture2D": 25
  } ],
  27: [ (function(require, module, exports) {
    var AffineTrans = require("../utils/affine-transform");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var renderer = require("../renderer/index");
    var game = require("../CCGame");
    var ray = require("../3d/geom-utils/ray");
    var mat4 = cc.vmath.mat4;
    var vec2 = cc.vmath.vec2;
    var vec3 = cc.vmath.vec3;
    var _mat4_temp_1 = mat4.create();
    var _mat4_temp_2 = mat4.create();
    var _v3_temp_1 = vec3.create();
    var _v3_temp_2 = vec3.create();
    var _v3_temp_3 = vec3.create();
    var _cameras = [];
    var _debugCamera = null;
    function repositionDebugCamera() {
      if (!_debugCamera) return;
      var node = _debugCamera._node;
      var canvas = cc.game.canvas;
      node.z = canvas.height / 1.1566;
      node.x = canvas.width / 2;
      node.y = canvas.height / 2;
    }
    var ClearFlags = cc.Enum({
      COLOR: 1,
      DEPTH: 2,
      STENCIL: 4
    });
    var Camera = cc.Class({
      name: "cc.Camera",
      extends: cc.Component,
      ctor: function() {
        if (game.renderType !== game.RENDER_TYPE_CANVAS) {
          var camera = new renderEngine.Camera();
          camera.setStages([ "transparent" ]);
          var view = new renderEngine.View();
          camera.view = view;
          camera.dirty = true;
          this._inited = false;
          this._camera = camera;
        } else this._inited = true;
      },
      editor: false,
      properties: {
        _cullingMask: 4294967295,
        _clearFlags: ClearFlags.DEPTH | ClearFlags.STENCIL,
        _backgroundColor: cc.color(0, 0, 0, 255),
        _depth: 0,
        _zoomRatio: 1,
        _targetTexture: null,
        _fov: 60,
        _orthoSize: 10,
        _nearClip: .1,
        _farClip: 4096,
        _ortho: true,
        _rect: cc.rect(0, 0, 1, 1),
        zoomRatio: {
          get: function() {
            return this._zoomRatio;
          },
          set: function(value) {
            this._zoomRatio = value;
          }
        },
        fov: {
          get: function() {
            return this._fov;
          },
          set: function(v) {
            this._fov = v;
          }
        },
        orthoSize: {
          get: function() {
            return this._orthoSize;
          },
          set: function(v) {
            this._orthoSize = v;
          }
        },
        nearClip: {
          get: function() {
            return this._nearClip;
          },
          set: function(v) {
            this._nearClip = v;
            this._updateClippingpPlanes();
          }
        },
        farClip: {
          get: function() {
            return this._farClip;
          },
          set: function(v) {
            this._farClip = v;
            this._updateClippingpPlanes();
          }
        },
        ortho: {
          get: function() {
            return this._ortho;
          },
          set: function(v) {
            this._ortho = v;
            this._updateProjection();
          }
        },
        rect: {
          get: function() {
            return this._rect;
          },
          set: function(v) {
            this._rect = v;
            this._updateRect();
          }
        },
        cullingMask: {
          get: function() {
            return this._cullingMask;
          },
          set: function(value) {
            this._cullingMask = value;
            this._updateCameraMask();
          }
        },
        clearFlags: {
          get: function() {
            return this._clearFlags;
          },
          set: function(value) {
            this._clearFlags = value;
            this._camera && this._camera.setClearFlags(value);
          }
        },
        backgroundColor: {
          get: function() {
            return this._backgroundColor;
          },
          set: function(value) {
            this._backgroundColor = value;
            this._updateBackgroundColor();
          }
        },
        depth: {
          get: function() {
            return this._depth;
          },
          set: function(value) {
            this._depth = value;
            this._camera && (this._camera._sortDepth = value);
          }
        },
        targetTexture: {
          get: function() {
            return this._targetTexture;
          },
          set: function(value) {
            this._targetTexture = value;
            this._updateTargetTexture();
          }
        },
        _is3D: {
          get: function() {
            return this.node._is3DNode;
          }
        }
      },
      statics: {
        main: null,
        cameras: _cameras,
        ClearFlags: ClearFlags,
        findCamera: function(node) {
          for (var i = 0, l = _cameras.length; i < l; i++) {
            var camera = _cameras[i];
            if (camera.containsNode(node)) return camera;
          }
          return null;
        },
        _setupDebugCamera: function() {
          if (_debugCamera) return;
          if (game.renderType === game.RENDER_TYPE_CANVAS) return;
          var camera = new renderEngine.Camera();
          _debugCamera = camera;
          camera.setStages([ "transparent" ]);
          camera.setFov(60 * Math.PI / 180);
          camera.setNear(.1);
          camera.setFar(4096);
          var view = new renderEngine.View();
          camera.view = view;
          camera.dirty = true;
          camera._cullingMask = camera.view._cullingMask = 1 << cc.Node.BuiltinGroupIndex.DEBUG;
          camera._sortDepth = cc.macro.MAX_ZINDEX;
          camera.setClearFlags(0);
          camera.setColor(0, 0, 0, 0);
          var node = new cc.Node();
          camera.setNode(node);
          repositionDebugCamera();
          cc.view.on("design-resolution-changed", repositionDebugCamera);
          renderer.scene.addCamera(camera);
        }
      },
      _updateCameraMask: function() {
        if (this._camera) {
          var mask = this._cullingMask & ~(1 << cc.Node.BuiltinGroupIndex.DEBUG);
          this._camera._cullingMask = mask;
          this._camera.view._cullingMask = mask;
        }
      },
      _updateBackgroundColor: function() {
        if (!this._camera) return;
        var color = this._backgroundColor;
        this._camera.setColor(color.r / 255, color.g / 255, color.b / 255, color.a / 255);
      },
      _updateTargetTexture: function() {
        if (!this._camera) return;
        var texture = this._targetTexture;
        this._camera._framebuffer = texture ? texture._framebuffer : null;
      },
      _updateClippingpPlanes: function() {
        if (!this._camera) return;
        this._camera.setNear(this._nearClip);
        this._camera.setFar(this._farClip);
      },
      _updateProjection: function() {
        if (!this._camera) return;
        var type = this._ortho ? 1 : 0;
        this._camera.setType(type);
      },
      _updateRect: function() {
        if (!this._camera) return;
        this._camera.setRect(this._rect);
      },
      _init: function() {
        if (this._inited) return;
        this._inited = true;
        var camera = this._camera;
        if (!camera) return;
        camera.setNode(this.node);
        camera.setClearFlags(this._clearFlags);
        camera._sortDepth = this._depth;
        this._updateBackgroundColor();
        this._updateCameraMask();
        this._updateTargetTexture();
        this._updateClippingpPlanes();
        this._updateProjection();
      },
      onLoad: function() {
        this._init();
      },
      onEnable: function() {
        if (game.renderType !== game.RENDER_TYPE_CANVAS) {
          cc.director.on(cc.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
          renderer.scene.addCamera(this._camera);
        }
        _cameras.push(this);
      },
      onDisable: function() {
        if (game.renderType !== game.RENDER_TYPE_CANVAS) {
          cc.director.off(cc.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
          renderer.scene.removeCamera(this._camera);
        }
        cc.js.array.remove(_cameras, this);
      },
      getNodeToCameraTransform: function(node) {
        var out = AffineTrans.identity();
        node.getWorldMatrix(_mat4_temp_2);
        if (this.containsNode(node)) {
          this.getWorldToCameraMatrix(_mat4_temp_1);
          mat4.mul(_mat4_temp_2, _mat4_temp_2, _mat4_temp_1);
        }
        AffineTrans.fromMat4(out, _mat4_temp_2);
        return out;
      },
      getCameraToWorldPoint: function(point, out) {
        out = out || cc.v2();
        this.getCameraToWorldMatrix(_mat4_temp_1);
        vec2.transformMat4(out, point, _mat4_temp_1);
        return out;
      },
      getWorldToCameraPoint: function(point, out) {
        out = out || cc.v2();
        this.getWorldToCameraMatrix(_mat4_temp_1);
        vec2.transformMat4(out, point, _mat4_temp_1);
        return out;
      },
      getCameraToWorldMatrix: function(out) {
        this.getWorldToCameraMatrix(out);
        mat4.invert(out, out);
        return out;
      },
      getWorldToCameraMatrix: function(out) {
        this.node.getWorldRT(_mat4_temp_1);
        var zoomRatio = this.zoomRatio;
        _mat4_temp_1.m00 *= zoomRatio;
        _mat4_temp_1.m01 *= zoomRatio;
        _mat4_temp_1.m04 *= zoomRatio;
        _mat4_temp_1.m05 *= zoomRatio;
        var m12 = _mat4_temp_1.m12;
        var m13 = _mat4_temp_1.m13;
        var center = cc.visibleRect.center;
        _mat4_temp_1.m12 = center.x - (_mat4_temp_1.m00 * m12 + _mat4_temp_1.m04 * m13);
        _mat4_temp_1.m13 = center.y - (_mat4_temp_1.m01 * m12 + _mat4_temp_1.m05 * m13);
        out !== _mat4_temp_1 && mat4.copy(out, _mat4_temp_1);
        return out;
      },
      getRay: function(screenPos) {
        if (!ray) return screenPos;
        vec3.set(_v3_temp_3, screenPos.x, screenPos.y, 1);
        this._camera.screenToWorld(_v3_temp_2, _v3_temp_3, cc.visibleRect.width, cc.visibleRect.height);
        if (this.ortho) {
          vec3.set(_v3_temp_3, screenPos.x, screenPos.y, -1);
          this._camera.screenToWorld(_v3_temp_1, _v3_temp_3, cc.visibleRect.width, cc.visibleRect.height);
        } else this.node.getWorldPosition(_v3_temp_1);
        return ray.fromPoints(ray.create(), _v3_temp_1, _v3_temp_2);
      },
      containsNode: function(node) {
        return node._cullingMask & this.cullingMask;
      },
      render: function(root) {
        root = root || cc.director.getScene();
        if (!root) return null;
        this.node.getWorldMatrix(_mat4_temp_1);
        this.beforeDraw();
        renderer._walker.visit(root);
        renderer._forward.renderCamera(this._camera, renderer.scene);
      },
      _layout: function() {
        var height = cc.game.canvas.height / cc.view._scaleY;
        var targetTexture = this._targetTexture;
        targetTexture && (height = targetTexture.height);
        var fov = this._fov * cc.macro.RAD;
        this.node.z = height / (2 * Math.tan(fov / 2));
        fov = 2 * Math.atan(Math.tan(fov / 2) / this.zoomRatio);
        this._camera.setFov(fov);
        this._camera.setOrthoHeight(height / 2 / this.zoomRatio);
      },
      beforeDraw: function() {
        if (!this._camera) return;
        if (this.node._is3DNode) {
          this._camera.setFov(this._fov * cc.macro.RAD);
          this._camera.setOrthoHeight(this._orthoSize);
        } else this._layout();
        this._camera.dirty = true;
      }
    });
    module.exports = cc.Camera = Camera;
  }), {
    "../3d/geom-utils/ray": void 0,
    "../CCGame": 5,
    "../renderer/index": 127,
    "../utils/affine-transform": 133,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  28: [ (function(require, module, exports) {
    require("./platform/CCClass");
    var Flags = require("./platform/CCObject").Flags;
    var jsArray = require("./platform/js").array;
    var IsStartCalled = Flags.IsStartCalled;
    var IsOnEnableCalled = Flags.IsOnEnableCalled;
    var IsEditorOnEnableCalled = Flags.IsEditorOnEnableCalled;
    var callerFunctor = false;
    var callOnEnableInTryCatch = false;
    var callStartInTryCatch = false;
    var callUpdateInTryCatch = false;
    var callLateUpdateInTryCatch = false;
    var callOnDisableInTryCatch = false;
    var callStart = function(c) {
      c.start();
      c._objFlags |= IsStartCalled;
    };
    var callUpdate = function(c, dt) {
      c.update(dt);
    };
    var callLateUpdate = function(c, dt) {
      c.lateUpdate(dt);
    };
    function sortedIndex(array, comp) {
      var order = comp.constructor._executionOrder;
      var id = comp._id;
      for (var l = 0, h = array.length - 1, m = h >>> 1; l <= h; m = l + h >>> 1) {
        var test = array[m];
        var testOrder = test.constructor._executionOrder;
        if (testOrder > order) h = m - 1; else if (testOrder < order) l = m + 1; else {
          var testId = test._id;
          if (testId > id) h = m - 1; else {
            if (!(testId < id)) return m;
            l = m + 1;
          }
        }
      }
      return ~l;
    }
    function stableRemoveInactive(iterator, flagToClear) {
      var array = iterator.array;
      var next = iterator.i + 1;
      while (next < array.length) {
        var comp = array[next];
        if (comp._enabled && comp.node._activeInHierarchy) ++next; else {
          iterator.removeAt(next);
          flagToClear && (comp._objFlags &= ~flagToClear);
        }
      }
    }
    var LifeCycleInvoker = cc.Class({
      __ctor__: function(invokeFunc) {
        var Iterator = jsArray.MutableForwardIterator;
        this._zero = new Iterator([]);
        this._neg = new Iterator([]);
        this._pos = new Iterator([]);
        false;
        this._invoke = invokeFunc;
      },
      statics: {
        stableRemoveInactive: stableRemoveInactive
      },
      add: null,
      remove: null,
      invoke: null
    });
    function compareOrder(a, b) {
      return a.constructor._executionOrder - b.constructor._executionOrder;
    }
    var OneOffInvoker = cc.Class({
      extends: LifeCycleInvoker,
      add: function(comp) {
        var order = comp.constructor._executionOrder;
        (0 === order ? this._zero : order < 0 ? this._neg : this._pos).array.push(comp);
      },
      remove: function(comp) {
        var order = comp.constructor._executionOrder;
        (0 === order ? this._zero : order < 0 ? this._neg : this._pos).fastRemove(comp);
      },
      cancelInactive: function(flagToClear) {
        stableRemoveInactive(this._zero, flagToClear);
        stableRemoveInactive(this._neg, flagToClear);
        stableRemoveInactive(this._pos, flagToClear);
      },
      invoke: function() {
        var compsNeg = this._neg;
        if (compsNeg.array.length > 0) {
          compsNeg.array.sort(compareOrder);
          this._invoke(compsNeg);
          compsNeg.array.length = 0;
        }
        this._invoke(this._zero);
        this._zero.array.length = 0;
        var compsPos = this._pos;
        if (compsPos.array.length > 0) {
          compsPos.array.sort(compareOrder);
          this._invoke(compsPos);
          compsPos.array.length = 0;
        }
      }
    });
    var ReusableInvoker = cc.Class({
      extends: LifeCycleInvoker,
      add: function(comp) {
        var order = comp.constructor._executionOrder;
        if (0 === order) this._zero.array.push(comp); else {
          var array = order < 0 ? this._neg.array : this._pos.array;
          var i = sortedIndex(array, comp);
          i < 0 && array.splice(~i, 0, comp);
        }
      },
      remove: function(comp) {
        var order = comp.constructor._executionOrder;
        if (0 === order) this._zero.fastRemove(comp); else {
          var iterator = order < 0 ? this._neg : this._pos;
          var i = sortedIndex(iterator.array, comp);
          i >= 0 && iterator.removeAt(i);
        }
      },
      invoke: function(dt) {
        this._neg.array.length > 0 && this._invoke(this._neg, dt);
        this._invoke(this._zero, dt);
        this._pos.array.length > 0 && this._invoke(this._pos, dt);
      }
    });
    function enableInEditor(comp) {
      if (!(comp._objFlags & IsEditorOnEnableCalled)) {
        cc.engine.emit("component-enabled", comp.uuid);
        comp._objFlags |= IsEditorOnEnableCalled;
      }
    }
    function createInvokeImpl(funcOrCode, useDt) {
      if ("function" === typeof funcOrCode) return useDt ? function(iterator, dt) {
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var comp = array[iterator.i];
          funcOrCode(comp, dt);
        }
      } : function(iterator) {
        var array = iterator.array;
        for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
          var comp = array[iterator.i];
          funcOrCode(comp);
        }
      };
      var body = "var a=it.array;for(it.i=0;it.i<a.length;++it.i){var c=a[it.i];" + funcOrCode + "}";
      return useDt ? Function("it", "dt", body) : Function("it", body);
    }
    function ctor() {
      this.startInvoker = new OneOffInvoker(createInvokeImpl(callStart));
      this.updateInvoker = new ReusableInvoker(createInvokeImpl(callUpdate, true));
      this.lateUpdateInvoker = new ReusableInvoker(createInvokeImpl(callLateUpdate, true));
      this.scheduleInNextFrame = [];
      this._updating = false;
    }
    var ComponentScheduler = cc.Class({
      ctor: ctor,
      unscheduleAll: ctor,
      statics: {
        LifeCycleInvoker: LifeCycleInvoker,
        OneOffInvoker: OneOffInvoker,
        createInvokeImpl: createInvokeImpl,
        invokeOnEnable: function(iterator) {
          var compScheduler = cc.director._compScheduler;
          var array = iterator.array;
          for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
            var comp = array[iterator.i];
            if (comp._enabled) {
              comp.onEnable();
              var deactivatedDuringOnEnable = !comp.node._activeInHierarchy;
              deactivatedDuringOnEnable || compScheduler._onEnabled(comp);
            }
          }
        }
      },
      _onEnabled: function(comp) {
        cc.director.getScheduler().resumeTarget(comp);
        comp._objFlags |= IsOnEnableCalled;
        this._updating ? this.scheduleInNextFrame.push(comp) : this._scheduleImmediate(comp);
      },
      _onDisabled: function(comp) {
        cc.director.getScheduler().pauseTarget(comp);
        comp._objFlags &= ~IsOnEnableCalled;
        var index = this.scheduleInNextFrame.indexOf(comp);
        if (index >= 0) {
          jsArray.fastRemoveAt(this.scheduleInNextFrame, index);
          return;
        }
        !comp.start || comp._objFlags & IsStartCalled || this.startInvoker.remove(comp);
        comp.update && this.updateInvoker.remove(comp);
        comp.lateUpdate && this.lateUpdateInvoker.remove(comp);
      },
      enableComp: function(comp, invoker) {
        if (!(comp._objFlags & IsOnEnableCalled)) {
          if (comp.onEnable) {
            if (invoker) {
              invoker.add(comp);
              return;
            }
            comp.onEnable();
            var deactivatedDuringOnEnable = !comp.node._activeInHierarchy;
            if (deactivatedDuringOnEnable) return;
          }
          this._onEnabled(comp);
        }
      },
      disableComp: function(comp) {
        if (comp._objFlags & IsOnEnableCalled) {
          comp.onDisable && comp.onDisable();
          this._onDisabled(comp);
        }
      },
      _scheduleImmediate: function(comp) {
        !comp.start || comp._objFlags & IsStartCalled || this.startInvoker.add(comp);
        comp.update && this.updateInvoker.add(comp);
        comp.lateUpdate && this.lateUpdateInvoker.add(comp);
      },
      _deferredSchedule: function() {
        var comps = this.scheduleInNextFrame;
        for (var i = 0, len = comps.length; i < len; i++) {
          var comp = comps[i];
          this._scheduleImmediate(comp);
        }
        comps.length = 0;
      },
      startPhase: function() {
        this._updating = true;
        this.scheduleInNextFrame.length > 0 && this._deferredSchedule();
        this.startInvoker.invoke();
      },
      updatePhase: function(dt) {
        this.updateInvoker.invoke(dt);
      },
      lateUpdatePhase: function(dt) {
        this.lateUpdateInvoker.invoke(dt);
        this._updating = false;
      }
    });
    module.exports = ComponentScheduler;
  }), {
    "./platform/CCClass": 86,
    "./platform/CCObject": 92,
    "./platform/js": 106,
    "./utils/misc": 139
  } ],
  29: [ (function(require, module, exports) {
    var BlockEvents = [ "touchstart", "touchmove", "touchend", "mousedown", "mousemove", "mouseup", "mouseenter", "mouseleave", "mousewheel" ];
    function stopPropagation(event) {
      event.stopPropagation();
    }
    var BlockInputEvents = cc.Class({
      name: "cc.BlockInputEvents",
      extends: require("./CCComponent"),
      editor: {
        menu: "i18n:MAIN_MENU.component.ui/Block Input Events",
        inspector: "packages://inspector/inspectors/comps/block-input-events.js",
        help: "i18n:COMPONENT.help_url.block_input_events"
      },
      onEnable: function() {
        for (var i = 0; i < BlockEvents.length; i++) this.node.on(BlockEvents[i], stopPropagation, this);
      },
      onDisable: function() {
        for (var i = 0; i < BlockEvents.length; i++) this.node.off(BlockEvents[i], stopPropagation, this);
      }
    });
    cc.BlockInputEvents = module.exports = BlockInputEvents;
  }), {
    "./CCComponent": 31
  } ],
  30: [ (function(require, module, exports) {
    var Camera = require("../camera/CCCamera");
    var Component = require("./CCComponent");
    var Canvas = cc.Class({
      name: "cc.Canvas",
      extends: Component,
      editor: false,
      resetInEditor: false,
      statics: {
        instance: null
      },
      properties: {
        _designResolution: cc.size(960, 640),
        designResolution: {
          get: function() {
            return cc.size(this._designResolution);
          },
          set: function(value) {
            this._designResolution.width = value.width;
            this._designResolution.height = value.height;
            this.applySettings();
            this.alignWithScreen();
          },
          tooltip: false
        },
        _fitWidth: false,
        _fitHeight: true,
        fitHeight: {
          get: function() {
            return this._fitHeight;
          },
          set: function(value) {
            if (this._fitHeight !== value) {
              this._fitHeight = value;
              this.applySettings();
              this.alignWithScreen();
            }
          },
          tooltip: false
        },
        fitWidth: {
          get: function() {
            return this._fitWidth;
          },
          set: function(value) {
            if (this._fitWidth !== value) {
              this._fitWidth = value;
              this.applySettings();
              this.alignWithScreen();
            }
          },
          tooltip: false
        }
      },
      ctor: function() {
        this._thisOnResized = this.alignWithScreen.bind(this);
      },
      __preload: function() {
        var Flags;
        false;
        if (Canvas.instance) return cc.errorID(6700, this.node.name, Canvas.instance.node.name);
        Canvas.instance = this;
        false;
        cc.sys.isMobile ? window.addEventListener("resize", this._thisOnResized) : cc.view.on("canvas-resize", this._thisOnResized);
        this.applySettings();
        this.alignWithScreen();
        var cameraNode = cc.find("Main Camera", this.node);
        if (!cameraNode) {
          cameraNode = new cc.Node("Main Camera");
          cameraNode.parent = this.node;
          cameraNode.setSiblingIndex(0);
        }
        var camera = cameraNode.getComponent(Camera);
        if (!camera) {
          camera = cameraNode.addComponent(Camera);
          var ClearFlags = Camera.ClearFlags;
          camera.clearFlags = ClearFlags.COLOR | ClearFlags.DEPTH | ClearFlags.STENCIL;
          camera.depth = -1;
        }
        Camera.main = camera;
      },
      onDestroy: function() {
        false;
        cc.sys.isMobile ? window.removeEventListener("resize", this._thisOnResized) : cc.view.off("canvas-resize", this._thisOnResized);
        Canvas.instance === this && (Canvas.instance = null);
      },
      alignWithScreen: function() {
        var designSize, nodeSize;
        false;
        var canvasSize = nodeSize = cc.visibleRect;
        designSize = cc.view.getDesignResolutionSize();
        var clipTopRight = !this.fitHeight && !this.fitWidth;
        var offsetX = 0;
        var offsetY = 0;
        if (clipTopRight) {
          offsetX = .5 * (designSize.width - canvasSize.width);
          offsetY = .5 * (designSize.height - canvasSize.height);
        }
        this.node.setPosition(.5 * canvasSize.width + offsetX, .5 * canvasSize.height + offsetY);
        this.node.width = nodeSize.width;
        this.node.height = nodeSize.height;
      },
      applySettings: function() {
        var ResolutionPolicy = cc.ResolutionPolicy;
        var policy;
        policy = this.fitHeight && this.fitWidth ? ResolutionPolicy.SHOW_ALL : this.fitHeight || this.fitWidth ? this.fitWidth ? ResolutionPolicy.FIXED_WIDTH : ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.NO_BORDER;
        var designRes = this._designResolution;
        false;
        cc.view.setDesignResolutionSize(designRes.width, designRes.height, policy);
      }
    });
    cc.Canvas = module.exports = Canvas;
  }), {
    "../camera/CCCamera": 27,
    "./CCComponent": 31
  } ],
  31: [ (function(require, module, exports) {
    var CCObject = require("../platform/CCObject");
    var js = require("../platform/js");
    var idGenerater = new (require("../platform/id-generater"))("Comp");
    var IsOnEnableCalled = CCObject.Flags.IsOnEnableCalled;
    var IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
    var Component = cc.Class({
      name: "cc.Component",
      extends: CCObject,
      ctor: function() {
        this._id = idGenerater.getNewId();
        this.__eventTargets = [];
      },
      properties: {
        node: {
          default: null,
          visible: false
        },
        name: {
          get: function() {
            if (this._name) return this._name;
            var className = cc.js.getClassName(this);
            var trimLeft = className.lastIndexOf(".");
            trimLeft >= 0 && (className = className.slice(trimLeft + 1));
            return this.node.name + "<" + className + ">";
          },
          set: function(value) {
            this._name = value;
          },
          visible: false
        },
        uuid: {
          get: function() {
            return this._id;
          },
          visible: false
        },
        __scriptAsset: false,
        _enabled: true,
        enabled: {
          get: function() {
            return this._enabled;
          },
          set: function(value) {
            if (this._enabled !== value) {
              this._enabled = value;
              if (this.node._activeInHierarchy) {
                var compScheduler = cc.director._compScheduler;
                value ? compScheduler.enableComp(this) : compScheduler.disableComp(this);
              }
            }
          },
          visible: false
        },
        enabledInHierarchy: {
          get: function() {
            return (this._objFlags & IsOnEnableCalled) > 0;
          },
          visible: false
        },
        _isOnLoadCalled: {
          get: function() {
            return this._objFlags & IsOnLoadCalled;
          }
        }
      },
      update: null,
      lateUpdate: null,
      __preload: null,
      onLoad: null,
      start: null,
      onEnable: null,
      onDisable: null,
      onDestroy: null,
      onFocusInEditor: null,
      onLostFocusInEditor: null,
      resetInEditor: null,
      addComponent: function(typeOrClassName) {
        return this.node.addComponent(typeOrClassName);
      },
      getComponent: function(typeOrClassName) {
        return this.node.getComponent(typeOrClassName);
      },
      getComponents: function(typeOrClassName) {
        return this.node.getComponents(typeOrClassName);
      },
      getComponentInChildren: function(typeOrClassName) {
        return this.node.getComponentInChildren(typeOrClassName);
      },
      getComponentsInChildren: function(typeOrClassName) {
        return this.node.getComponentsInChildren(typeOrClassName);
      },
      _getLocalBounds: null,
      onRestore: null,
      destroy: function() {
        var depend;
        false;
        this._super() && this._enabled && this.node._activeInHierarchy && cc.director._compScheduler.disableComp(this);
      },
      _onPreDestroy: function() {
        this.unscheduleAllCallbacks();
        var eventTargets = this.__eventTargets;
        for (var i = 0, l = eventTargets.length; i < l; ++i) {
          var target = eventTargets[i];
          target && target.targetOff(this);
        }
        eventTargets.length = 0;
        false;
        cc.director._nodeActivator.destroyComp(this);
        this.node._removeComponent(this);
      },
      _instantiate: function(cloned) {
        cloned || (cloned = cc.instantiate._clone(this, this));
        cloned.node = null;
        return cloned;
      },
      schedule: function(callback, interval, repeat, delay) {
        cc.assertID(callback, 1619);
        cc.assertID(interval >= 0, 1620);
        interval = interval || 0;
        repeat = isNaN(repeat) ? cc.macro.REPEAT_FOREVER : repeat;
        delay = delay || 0;
        var scheduler = cc.director.getScheduler();
        var paused = scheduler.isTargetPaused(this);
        scheduler.schedule(callback, this, interval, repeat, delay, paused);
      },
      scheduleOnce: function(callback, delay) {
        this.schedule(callback, 0, 0, delay);
      },
      unschedule: function(callback_fn) {
        if (!callback_fn) return;
        cc.director.getScheduler().unschedule(callback_fn, this);
      },
      unscheduleAllCallbacks: function() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
      }
    });
    Component._requireComponent = null;
    Component._executionOrder = 0;
    false, false;
    js.value(Component, "_registerEditorProps", (function(cls, props) {
      var reqComp = props.requireComponent;
      reqComp && (cls._requireComponent = reqComp);
      var order = props.executionOrder;
      order && "number" === typeof order && (cls._executionOrder = order);
      var name;
      var key;
      var val;
      var willExecuteInEditMode;
      false, false;
    }));
    Component.prototype.__scriptUuid = "";
    cc.Component = module.exports = Component;
  }), {
    "../platform/CCObject": 92,
    "../platform/id-generater": 102,
    "../platform/js": 106
  } ],
  32: [ (function(require, module, exports) {
    cc.Component.EventHandler = cc.Class({
      name: "cc.ClickEvent",
      properties: {
        target: {
          default: null,
          type: cc.Node
        },
        component: "",
        _componentId: "",
        _componentName: {
          get: function() {
            this._genCompIdIfNeeded();
            return this._compId2Name(this._componentId);
          },
          set: function(value) {
            this._componentId = this._compName2Id(value);
          }
        },
        handler: {
          default: ""
        },
        customEventData: {
          default: ""
        }
      },
      statics: {
        emitEvents: function(events) {
          "use strict";
          var args = void 0;
          if (arguments.length > 0) {
            args = new Array(arguments.length - 1);
            for (var i = 0, l = args.length; i < l; i++) args[i] = arguments[i + 1];
          }
          for (var _i = 0, _l = events.length; _i < _l; _i++) {
            var event = events[_i];
            if (!(event instanceof cc.Component.EventHandler)) continue;
            event.emit(args);
          }
        }
      },
      emit: function(params) {
        var target = this.target;
        if (!cc.isValid(target)) return;
        this._genCompIdIfNeeded();
        var compType = cc.js._getClassById(this._componentId);
        var comp = target.getComponent(compType);
        if (!cc.isValid(comp)) return;
        var handler = comp[this.handler];
        if ("function" !== typeof handler) return;
        if (null != this.customEventData && "" !== this.customEventData) {
          params = params.slice();
          params.push(this.customEventData);
        }
        handler.apply(comp, params);
      },
      _compName2Id: function(compName) {
        var comp = cc.js.getClassByName(compName);
        return cc.js._getClassId(comp);
      },
      _compId2Name: function(compId) {
        var comp = cc.js._getClassById(compId);
        return cc.js.getClassName(comp);
      },
      _genCompIdIfNeeded: function() {
        if (!this._componentId) {
          this._componentName = this.component;
          this.component = "";
        }
      }
    });
  }), {} ],
  33: [ (function(require, module, exports) {
    var macro = require("../platform/CCMacro");
    var RenderComponent = require("./CCRenderComponent");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var RenderFlow = require("../renderer/render-flow");
    var SpriteMaterial = renderEngine.SpriteMaterial;
    var HorizontalAlign = macro.TextAlignment;
    var VerticalAlign = macro.VerticalTextAlignment;
    var Overflow = cc.Enum({
      NONE: 0,
      CLAMP: 1,
      SHRINK: 2,
      RESIZE_HEIGHT: 3
    });
    var Label = cc.Class({
      name: "cc.Label",
      extends: RenderComponent,
      ctor: function() {
        false;
        this._actualFontSize = 0;
        this._assemblerData = null;
        this._ttfTexture = null;
      },
      editor: false,
      properties: {
        _useOriginalSize: true,
        _string: {
          default: "",
          formerlySerializedAs: "_N$string"
        },
        string: {
          get: function() {
            return this._string;
          },
          set: function(value) {
            var oldValue = this._string;
            this._string = value.toString();
            this.string !== oldValue && this._updateRenderData();
            this._checkStringEmpty();
          },
          multiline: true,
          tooltip: false
        },
        horizontalAlign: {
          default: HorizontalAlign.LEFT,
          type: HorizontalAlign,
          tooltip: false,
          notify: function(oldValue) {
            if (this.horizontalAlign === oldValue) return;
            this._updateRenderData();
          },
          animatable: false
        },
        verticalAlign: {
          default: VerticalAlign.TOP,
          type: VerticalAlign,
          tooltip: false,
          notify: function(oldValue) {
            if (this.verticalAlign === oldValue) return;
            this._updateRenderData();
          },
          animatable: false
        },
        actualFontSize: {
          displayName: "Actual Font Size",
          animatable: false,
          readonly: true,
          get: function() {
            return this._actualFontSize;
          }
        },
        _fontSize: 40,
        fontSize: {
          get: function() {
            return this._fontSize;
          },
          set: function(value) {
            if (this._fontSize === value) return;
            this._fontSize = value;
            this._updateRenderData();
          },
          tooltip: false
        },
        fontFamily: {
          default: "Arial",
          tooltip: false,
          notify: function(oldValue) {
            if (this.fontFamily === oldValue) return;
            this._updateRenderData();
          },
          animatable: false
        },
        _lineHeight: 40,
        lineHeight: {
          get: function() {
            return this._lineHeight;
          },
          set: function(value) {
            if (this._lineHeight === value) return;
            this._lineHeight = value;
            this._updateRenderData();
          },
          tooltip: false
        },
        overflow: {
          default: Overflow.NONE,
          type: Overflow,
          tooltip: false,
          notify: function(oldValue) {
            if (this.overflow === oldValue) return;
            this._updateRenderData();
          },
          animatable: false
        },
        _enableWrapText: true,
        enableWrapText: {
          get: function() {
            return this._enableWrapText;
          },
          set: function(value) {
            if (this._enableWrapText === value) return;
            this._enableWrapText = value;
            this._updateRenderData();
          },
          animatable: false,
          tooltip: false
        },
        _N$file: null,
        font: {
          get: function() {
            return this._N$file;
          },
          set: function(value) {
            if (this.font === value) return;
            value || (this._isSystemFontUsed = true);
            false;
            this._N$file = value;
            value && this._isSystemFontUsed && (this._isSystemFontUsed = false);
            "string" === typeof value && cc.warnID(4e3);
            if (this._renderData) {
              this.destroyRenderData(this._renderData);
              this._renderData = null;
            }
            this._fontAtlas = null;
            this._updateAssembler();
            this._applyFontTexture(true);
            this._updateRenderData();
          },
          type: cc.Font,
          tooltip: false,
          animatable: false
        },
        _isSystemFontUsed: true,
        useSystemFont: {
          get: function() {
            return this._isSystemFontUsed;
          },
          set: function(value) {
            if (this._isSystemFontUsed === value) return;
            this.destroyRenderData(this._renderData);
            this._renderData = null;
            false;
            this._isSystemFontUsed = !!value;
            if (value) {
              this.font = null;
              this._updateAssembler();
              this._updateRenderData();
              this._checkStringEmpty();
            } else this._userDefinedFont || this.disableRender();
          },
          animatable: false,
          tooltip: false
        },
        _bmFontOriginalSize: {
          displayName: "BMFont Original Size",
          get: function() {
            return this._N$file instanceof cc.BitmapFont ? this._N$file.fontSize : -1;
          },
          visible: true,
          animatable: false
        },
        _spacingX: 0,
        spacingX: {
          get: function() {
            return this._spacingX;
          },
          set: function(value) {
            this._spacingX = value;
            this._updateRenderData();
          }
        },
        _isBold: {
          default: false,
          serializable: false
        },
        _isItalic: {
          default: false,
          serializable: false
        },
        _isUnderline: {
          default: false,
          serializable: false
        }
      },
      statics: {
        HorizontalAlign: HorizontalAlign,
        VerticalAlign: VerticalAlign,
        Overflow: Overflow
      },
      onEnable: function() {
        this._super();
        this.font || this._isSystemFontUsed || (this.useSystemFont = true);
        this.useSystemFont && !this.fontFamily && (this.fontFamily = "Arial");
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this._updateRenderData, this);
        this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this._updateRenderData, this);
        this._checkStringEmpty();
        this._updateRenderData(true);
      },
      onDisable: function() {
        this._super();
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._updateRenderData, this);
        this.node.off(cc.Node.EventType.ANCHOR_CHANGED, this._updateRenderData, this);
      },
      onDestroy: function() {
        this._assembler._resetAssemblerData && this._assembler._resetAssemblerData(this._assemblerData);
        this._assemblerData = null;
        if (this._ttfTexture) {
          this._ttfTexture.destroy();
          this._ttfTexture = null;
        }
        this._super();
      },
      _canRender: function() {
        var result = this._super();
        var font = this.font;
        if (font instanceof cc.BitmapFont) {
          var spriteFrame = font.spriteFrame;
          spriteFrame && spriteFrame.textureLoaded() || (result = false);
        }
        return result;
      },
      _checkStringEmpty: function() {
        this.markForRender(!!this.string);
      },
      _on3DNodeChanged: function() {
        this._updateAssembler();
      },
      _updateAssembler: function() {
        var assembler = Label._assembler.getAssembler(this);
        if (this._assembler !== assembler) {
          this._assembler = assembler;
          this._renderData = null;
        }
        if (!this._renderData) {
          this._renderData = this._assembler.createData(this);
          this.markForUpdateRenderData(true);
        }
      },
      _applyFontTexture: function(force) {
        var _this = this;
        var font = this.font;
        if (font instanceof cc.BitmapFont) (function() {
          var spriteFrame = font.spriteFrame;
          var self = _this;
          var onBMFontTextureLoaded = function() {
            self._texture = spriteFrame._texture;
            self._activateMaterial(force);
            (false, force) && this._assembler && this._assembler.updateRenderData(this);
          };
          if (spriteFrame && spriteFrame.textureLoaded()) onBMFontTextureLoaded(); else {
            _this.disableRender();
            if (spriteFrame) {
              spriteFrame.once("load", onBMFontTextureLoaded, _this);
              spriteFrame.ensureLoadTexture();
            }
          }
        })(); else {
          if (!this._ttfTexture) {
            this._ttfTexture = new cc.Texture2D();
            true;
            this._ttfTexture.setPremultiplyAlpha(true);
            this._assemblerData = this._assembler._getAssemblerData();
            this._ttfTexture.initWithElement(this._assemblerData.canvas);
          }
          this._texture = this._ttfTexture;
          this._activateMaterial(force);
          (false, force) && this._assembler && this._assembler.updateRenderData(this);
        }
      },
      _activateMaterial: function(force) {
        var material = this._material;
        if (material && !force) return;
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) this._texture.url = this.uuid + "_texture"; else {
          material || (material = new SpriteMaterial());
          this._texture === this._ttfTexture ? this._srcBlendFactor = cc.macro.BlendFactor.ONE : this._srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
          material.texture = this._texture;
          material.useColor = false;
          this._updateMaterial(material);
        }
        this.markForUpdateRenderData(true);
        this.markForRender(true);
      },
      _updateColor: function() {
        var font = this.font;
        if (font instanceof cc.BitmapFont) this._super(); else {
          this._updateRenderData();
          this.node._renderFlag &= ~RenderFlow.FLAG_COLOR;
        }
      },
      _updateRenderData: function(force) {
        var renderData = this._renderData;
        if (renderData) {
          renderData.vertDirty = true;
          renderData.uvDirty = true;
          this.markForUpdateRenderData(true);
        }
        if (false, force) {
          this._updateAssembler();
          this._applyFontTexture(force);
        }
      },
      _enableBold: function(enabled) {
        this._isBold = !!enabled;
      },
      _enableItalics: function(enabled) {
        this._isItalic = !!enabled;
      },
      _enableUnderline: function(enabled) {
        this._isUnderline = !!enabled;
      }
    });
    cc.Label = module.exports = Label;
  }), {
    "../platform/CCMacro": 91,
    "../renderer/render-flow": 129,
    "./CCRenderComponent": 36,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  34: [ (function(require, module, exports) {
    var NodeEvent = require("../CCNode").EventType;
    var Type = cc.Enum({
      NONE: 0,
      HORIZONTAL: 1,
      VERTICAL: 2,
      GRID: 3
    });
    var ResizeMode = cc.Enum({
      NONE: 0,
      CONTAINER: 1,
      CHILDREN: 2
    });
    var AxisDirection = cc.Enum({
      HORIZONTAL: 0,
      VERTICAL: 1
    });
    var VerticalDirection = cc.Enum({
      BOTTOM_TO_TOP: 0,
      TOP_TO_BOTTOM: 1
    });
    var HorizontalDirection = cc.Enum({
      LEFT_TO_RIGHT: 0,
      RIGHT_TO_LEFT: 1
    });
    var Layout = cc.Class({
      name: "cc.Layout",
      extends: require("./CCComponent"),
      editor: false,
      properties: {
        _layoutSize: cc.size(300, 200),
        _layoutDirty: {
          default: true,
          serializable: false
        },
        _resize: ResizeMode.NONE,
        _N$layoutType: Type.NONE,
        type: {
          type: Type,
          get: function() {
            return this._N$layoutType;
          },
          set: function(value) {
            this._N$layoutType = value;
            var reLayouted;
            false;
            this._doLayoutDirty();
          },
          tooltip: false,
          animatable: false
        },
        resizeMode: {
          type: ResizeMode,
          tooltip: false,
          animatable: false,
          get: function() {
            return this._resize;
          },
          set: function(value) {
            if (this.type === Type.NONE && value === ResizeMode.CHILDREN) return;
            this._resize = value;
            var reLayouted;
            false;
            this._doLayoutDirty();
          }
        },
        cellSize: {
          default: cc.size(40, 40),
          tooltip: false,
          type: cc.Size,
          notify: function() {
            this._doLayoutDirty();
          }
        },
        startAxis: {
          default: AxisDirection.HORIZONTAL,
          tooltip: false,
          type: AxisDirection,
          notify: function() {
            var reLayouted;
            false;
            this._doLayoutDirty();
          },
          animatable: false
        },
        _N$padding: {
          default: 0
        },
        paddingLeft: {
          default: 0,
          tooltip: false,
          notify: function() {
            this._doLayoutDirty();
          }
        },
        paddingRight: {
          default: 0,
          tooltip: false,
          notify: function() {
            this._doLayoutDirty();
          }
        },
        paddingTop: {
          default: 0,
          tooltip: false,
          notify: function() {
            this._doLayoutDirty();
          }
        },
        paddingBottom: {
          default: 0,
          tooltip: false,
          notify: function() {
            this._doLayoutDirty();
          }
        },
        spacingX: {
          default: 0,
          notify: function() {
            this._doLayoutDirty();
          },
          tooltip: false
        },
        spacingY: {
          default: 0,
          notify: function() {
            this._doLayoutDirty();
          },
          tooltip: false
        },
        verticalDirection: {
          default: VerticalDirection.TOP_TO_BOTTOM,
          type: VerticalDirection,
          notify: function() {
            this._doLayoutDirty();
          },
          tooltip: false,
          animatable: false
        },
        horizontalDirection: {
          default: HorizontalDirection.LEFT_TO_RIGHT,
          type: HorizontalDirection,
          notify: function() {
            this._doLayoutDirty();
          },
          tooltip: false,
          animatable: false
        },
        affectedByScale: {
          default: false,
          notify: function() {
            this._doLayoutDirty();
          },
          animatable: false,
          tooltip: false
        }
      },
      statics: {
        Type: Type,
        VerticalDirection: VerticalDirection,
        HorizontalDirection: HorizontalDirection,
        ResizeMode: ResizeMode,
        AxisDirection: AxisDirection
      },
      _migratePaddingData: function() {
        this.paddingLeft = this._N$padding;
        this.paddingRight = this._N$padding;
        this.paddingTop = this._N$padding;
        this.paddingBottom = this._N$padding;
        this._N$padding = 0;
      },
      onEnable: function() {
        this._addEventListeners();
        this.node.getContentSize().equals(cc.size(0, 0)) && this.node.setContentSize(this._layoutSize);
        0 !== this._N$padding && this._migratePaddingData();
        this._doLayoutDirty();
      },
      onDisable: function() {
        this._removeEventListeners();
      },
      _doLayoutDirty: function() {
        this._layoutDirty = true;
      },
      _doScaleDirty: function() {
        this._layoutDirty = this._layoutDirty || this.affectedByScale;
      },
      _addEventListeners: function() {
        cc.director.on(cc.Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
        this.node.on(NodeEvent.SIZE_CHANGED, this._resized, this);
        this.node.on(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
        this.node.on(NodeEvent.CHILD_ADDED, this._childAdded, this);
        this.node.on(NodeEvent.CHILD_REMOVED, this._childRemoved, this);
        this.node.on(NodeEvent.CHILD_REORDER, this._doLayoutDirty, this);
        this._addChildrenEventListeners();
      },
      _removeEventListeners: function() {
        cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
        this.node.off(NodeEvent.SIZE_CHANGED, this._resized, this);
        this.node.off(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
        this.node.off(NodeEvent.CHILD_ADDED, this._childAdded, this);
        this.node.off(NodeEvent.CHILD_REMOVED, this._childRemoved, this);
        this.node.off(NodeEvent.CHILD_REORDER, this._doLayoutDirty, this);
        this._removeChildrenEventListeners();
      },
      _addChildrenEventListeners: function() {
        var children = this.node.children;
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          child.on(NodeEvent.SCALE_CHANGED, this._doScaleDirty, this);
          child.on(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
          child.on(NodeEvent.POSITION_CHANGED, this._doLayoutDirty, this);
          child.on(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
          child.on("active-in-hierarchy-changed", this._doLayoutDirty, this);
        }
      },
      _removeChildrenEventListeners: function() {
        var children = this.node.children;
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          child.off(NodeEvent.SCALE_CHANGED, this._doScaleDirty, this);
          child.off(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
          child.off(NodeEvent.POSITION_CHANGED, this._doLayoutDirty, this);
          child.off(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
          child.off("active-in-hierarchy-changed", this._doLayoutDirty, this);
        }
      },
      _childAdded: function(child) {
        child.on(NodeEvent.SCALE_CHANGED, this._doScaleDirty, this);
        child.on(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
        child.on(NodeEvent.POSITION_CHANGED, this._doLayoutDirty, this);
        child.on(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
        child.on("active-in-hierarchy-changed", this._doLayoutDirty, this);
        this._doLayoutDirty();
      },
      _childRemoved: function(child) {
        child.off(NodeEvent.SCALE_CHANGED, this._doScaleDirty, this);
        child.off(NodeEvent.SIZE_CHANGED, this._doLayoutDirty, this);
        child.off(NodeEvent.POSITION_CHANGED, this._doLayoutDirty, this);
        child.off(NodeEvent.ANCHOR_CHANGED, this._doLayoutDirty, this);
        child.off("active-in-hierarchy-changed", this._doLayoutDirty, this);
        this._doLayoutDirty();
      },
      _resized: function() {
        this._layoutSize = this.node.getContentSize();
        this._doLayoutDirty();
      },
      _doLayoutHorizontally: function(baseWidth, rowBreak, fnPositionY, applyChildren) {
        var layoutAnchor = this.node.getAnchorPoint();
        var children = this.node.children;
        var sign = 1;
        var paddingX = this.paddingLeft;
        var leftBoundaryOfLayout = -layoutAnchor.x * baseWidth;
        if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
          sign = -1;
          leftBoundaryOfLayout = (1 - layoutAnchor.x) * baseWidth;
          paddingX = this.paddingRight;
        }
        var nextX = leftBoundaryOfLayout + sign * paddingX - sign * this.spacingX;
        var rowMaxHeight = 0;
        var tempMaxHeight = 0;
        var secondMaxHeight = 0;
        var row = 0;
        var containerResizeBoundary = 0;
        var maxHeightChildAnchorY = 0;
        var activeChildCount = 0;
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          child.activeInHierarchy && activeChildCount++;
        }
        var newChildWidth = this.cellSize.width;
        this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildWidth = (baseWidth - (this.paddingLeft + this.paddingRight) - (activeChildCount - 1) * this.spacingX) / activeChildCount);
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          var childScaleX = this._getUsedScaleValue(child.scaleX);
          var childScaleY = this._getUsedScaleValue(child.scaleY);
          if (!child.activeInHierarchy) continue;
          if (this._resize === ResizeMode.CHILDREN) {
            child.width = newChildWidth / childScaleX;
            this.type === Type.GRID && (child.height = this.cellSize.height / childScaleY);
          }
          var anchorX = child.anchorX;
          var childBoundingBoxWidth = child.width * childScaleX;
          var childBoundingBoxHeight = child.height * childScaleY;
          secondMaxHeight > tempMaxHeight && (tempMaxHeight = secondMaxHeight);
          if (childBoundingBoxHeight >= tempMaxHeight) {
            secondMaxHeight = tempMaxHeight;
            tempMaxHeight = childBoundingBoxHeight;
            maxHeightChildAnchorY = child.getAnchorPoint().y;
          }
          this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && (anchorX = 1 - child.anchorX);
          nextX = nextX + sign * anchorX * childBoundingBoxWidth + sign * this.spacingX;
          var rightBoundaryOfChild = sign * (1 - anchorX) * childBoundingBoxWidth;
          if (rowBreak) {
            var rowBreakBoundary = nextX + rightBoundaryOfChild + sign * (sign > 0 ? this.paddingRight : this.paddingLeft);
            var leftToRightRowBreak = this.horizontalDirection === HorizontalDirection.LEFT_TO_RIGHT && rowBreakBoundary > (1 - layoutAnchor.x) * baseWidth;
            var rightToLeftRowBreak = this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && rowBreakBoundary < -layoutAnchor.x * baseWidth;
            if (leftToRightRowBreak || rightToLeftRowBreak) {
              if (childBoundingBoxHeight >= tempMaxHeight) {
                0 === secondMaxHeight && (secondMaxHeight = tempMaxHeight);
                rowMaxHeight += secondMaxHeight;
                secondMaxHeight = tempMaxHeight;
              } else {
                rowMaxHeight += tempMaxHeight;
                secondMaxHeight = childBoundingBoxHeight;
                tempMaxHeight = 0;
              }
              nextX = leftBoundaryOfLayout + sign * (paddingX + anchorX * childBoundingBoxWidth);
              row++;
            }
          }
          var finalPositionY = fnPositionY(child, rowMaxHeight, row);
          baseWidth >= childBoundingBoxWidth + this.paddingLeft + this.paddingRight && applyChildren && child.setPosition(cc.v2(nextX, finalPositionY));
          var signX = 1;
          var tempFinalPositionY;
          var topMarign = 0 === tempMaxHeight ? childBoundingBoxHeight : tempMaxHeight;
          if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
            containerResizeBoundary = containerResizeBoundary || this.node._contentSize.height;
            signX = -1;
            tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.paddingBottom);
            tempFinalPositionY < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
          } else {
            containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.height;
            tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.paddingTop);
            tempFinalPositionY > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
          }
          nextX += rightBoundaryOfChild;
        }
        return containerResizeBoundary;
      },
      _getVerticalBaseHeight: function(children) {
        var newHeight = 0;
        var activeChildCount = 0;
        if (this.resizeMode === ResizeMode.CONTAINER) {
          for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            if (child.activeInHierarchy) {
              activeChildCount++;
              newHeight += child.height * this._getUsedScaleValue(child.scaleY);
            }
          }
          newHeight += (activeChildCount - 1) * this.spacingY + this.paddingBottom + this.paddingTop;
        } else newHeight = this.node.getContentSize().height;
        return newHeight;
      },
      _doLayoutVertically: function(baseHeight, columnBreak, fnPositionX, applyChildren) {
        var layoutAnchor = this.node.getAnchorPoint();
        var children = this.node.children;
        var sign = 1;
        var paddingY = this.paddingBottom;
        var bottomBoundaryOfLayout = -layoutAnchor.y * baseHeight;
        if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
          sign = -1;
          bottomBoundaryOfLayout = (1 - layoutAnchor.y) * baseHeight;
          paddingY = this.paddingTop;
        }
        var nextY = bottomBoundaryOfLayout + sign * paddingY - sign * this.spacingY;
        var columnMaxWidth = 0;
        var tempMaxWidth = 0;
        var secondMaxWidth = 0;
        var column = 0;
        var containerResizeBoundary = 0;
        var maxWidthChildAnchorX = 0;
        var activeChildCount = 0;
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          child.activeInHierarchy && activeChildCount++;
        }
        var newChildHeight = this.cellSize.height;
        this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildHeight = (baseHeight - (this.paddingTop + this.paddingBottom) - (activeChildCount - 1) * this.spacingY) / activeChildCount);
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          var childScaleX = this._getUsedScaleValue(child.scaleX);
          var childScaleY = this._getUsedScaleValue(child.scaleY);
          if (!child.activeInHierarchy) continue;
          if (this.resizeMode === ResizeMode.CHILDREN) {
            child.height = newChildHeight / childScaleY;
            this.type === Type.GRID && (child.width = this.cellSize.width / childScaleX);
          }
          var anchorY = child.anchorY;
          var childBoundingBoxWidth = child.width * childScaleX;
          var childBoundingBoxHeight = child.height * childScaleY;
          secondMaxWidth > tempMaxWidth && (tempMaxWidth = secondMaxWidth);
          if (childBoundingBoxWidth >= tempMaxWidth) {
            secondMaxWidth = tempMaxWidth;
            tempMaxWidth = childBoundingBoxWidth;
            maxWidthChildAnchorX = child.getAnchorPoint().x;
          }
          this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && (anchorY = 1 - child.anchorY);
          nextY = nextY + sign * anchorY * childBoundingBoxHeight + sign * this.spacingY;
          var topBoundaryOfChild = sign * (1 - anchorY) * childBoundingBoxHeight;
          if (columnBreak) {
            var columnBreakBoundary = nextY + topBoundaryOfChild + sign * (sign > 0 ? this.paddingTop : this.paddingBottom);
            var bottomToTopColumnBreak = this.verticalDirection === VerticalDirection.BOTTOM_TO_TOP && columnBreakBoundary > (1 - layoutAnchor.y) * baseHeight;
            var topToBottomColumnBreak = this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && columnBreakBoundary < -layoutAnchor.y * baseHeight;
            if (bottomToTopColumnBreak || topToBottomColumnBreak) {
              if (childBoundingBoxWidth >= tempMaxWidth) {
                0 === secondMaxWidth && (secondMaxWidth = tempMaxWidth);
                columnMaxWidth += secondMaxWidth;
                secondMaxWidth = tempMaxWidth;
              } else {
                columnMaxWidth += tempMaxWidth;
                secondMaxWidth = childBoundingBoxWidth;
                tempMaxWidth = 0;
              }
              nextY = bottomBoundaryOfLayout + sign * (paddingY + anchorY * childBoundingBoxHeight);
              column++;
            }
          }
          var finalPositionX = fnPositionX(child, columnMaxWidth, column);
          baseHeight >= childBoundingBoxHeight + (this.paddingTop + this.paddingBottom) && applyChildren && child.setPosition(cc.v2(finalPositionX, nextY));
          var signX = 1;
          var tempFinalPositionX;
          var rightMarign = 0 === tempMaxWidth ? childBoundingBoxWidth : tempMaxWidth;
          if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
            signX = -1;
            containerResizeBoundary = containerResizeBoundary || this.node._contentSize.width;
            tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.paddingLeft);
            tempFinalPositionX < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
          } else {
            containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.width;
            tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.paddingRight);
            tempFinalPositionX > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
          }
          nextY += topBoundaryOfChild;
        }
        return containerResizeBoundary;
      },
      _doLayoutBasic: function() {
        var children = this.node.children;
        var allChildrenBoundingBox = null;
        for (var i = 0; i < children.length; ++i) {
          var child = children[i];
          child.activeInHierarchy && (allChildrenBoundingBox ? allChildrenBoundingBox.union(allChildrenBoundingBox, child.getBoundingBoxToWorld()) : allChildrenBoundingBox = child.getBoundingBoxToWorld());
        }
        if (allChildrenBoundingBox) {
          var leftBottomInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.v2(allChildrenBoundingBox.x, allChildrenBoundingBox.y));
          leftBottomInParentSpace = cc.v2(leftBottomInParentSpace.x - this.paddingLeft, leftBottomInParentSpace.y - this.paddingBottom);
          var rightTopInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.v2(allChildrenBoundingBox.x + allChildrenBoundingBox.width, allChildrenBoundingBox.y + allChildrenBoundingBox.height));
          rightTopInParentSpace = cc.v2(rightTopInParentSpace.x + this.paddingRight, rightTopInParentSpace.y + this.paddingTop);
          var newSize = cc.size(parseFloat((rightTopInParentSpace.x - leftBottomInParentSpace.x).toFixed(2)), parseFloat((rightTopInParentSpace.y - leftBottomInParentSpace.y).toFixed(2)));
          var layoutPosition = this.node.getPosition();
          var newAnchorX = (layoutPosition.x - leftBottomInParentSpace.x) / newSize.width;
          var newAnchorY = (layoutPosition.y - leftBottomInParentSpace.y) / newSize.height;
          var newAnchor = cc.v2(parseFloat(newAnchorX.toFixed(2)), parseFloat(newAnchorY.toFixed(2)));
          this.node.setAnchorPoint(newAnchor);
          this.node.setContentSize(newSize);
        }
      },
      _doLayoutGridAxisHorizontal: function(layoutAnchor, layoutSize) {
        var baseWidth = layoutSize.width;
        var sign = 1;
        var bottomBoundaryOfLayout = -layoutAnchor.y * layoutSize.height;
        var paddingY = this.paddingBottom;
        if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
          sign = -1;
          bottomBoundaryOfLayout = (1 - layoutAnchor.y) * layoutSize.height;
          paddingY = this.paddingTop;
        }
        var fnPositionY = function(child, topOffset, row) {
          return bottomBoundaryOfLayout + sign * (topOffset + child.anchorY * child.height * this._getUsedScaleValue(child.scaleY) + paddingY + row * this.spacingY);
        }.bind(this);
        var newHeight = 0;
        if (this.resizeMode === ResizeMode.CONTAINER) {
          var boundary = this._doLayoutHorizontally(baseWidth, true, fnPositionY, false);
          newHeight = bottomBoundaryOfLayout - boundary;
          newHeight < 0 && (newHeight *= -1);
          bottomBoundaryOfLayout = -layoutAnchor.y * newHeight;
          if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
            sign = -1;
            bottomBoundaryOfLayout = (1 - layoutAnchor.y) * newHeight;
          }
        }
        this._doLayoutHorizontally(baseWidth, true, fnPositionY, true);
        this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(baseWidth, newHeight);
      },
      _doLayoutGridAxisVertical: function(layoutAnchor, layoutSize) {
        var baseHeight = layoutSize.height;
        var sign = 1;
        var leftBoundaryOfLayout = -layoutAnchor.x * layoutSize.width;
        var paddingX = this.paddingLeft;
        if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
          sign = -1;
          leftBoundaryOfLayout = (1 - layoutAnchor.x) * layoutSize.width;
          paddingX = this.paddingRight;
        }
        var fnPositionX = function(child, leftOffset, column) {
          return leftBoundaryOfLayout + sign * (leftOffset + child.anchorX * child.width * this._getUsedScaleValue(child.scaleX) + paddingX + column * this.spacingX);
        }.bind(this);
        var newWidth = 0;
        if (this.resizeMode === ResizeMode.CONTAINER) {
          var boundary = this._doLayoutVertically(baseHeight, true, fnPositionX, false);
          newWidth = leftBoundaryOfLayout - boundary;
          newWidth < 0 && (newWidth *= -1);
          leftBoundaryOfLayout = -layoutAnchor.x * newWidth;
          if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
            sign = -1;
            leftBoundaryOfLayout = (1 - layoutAnchor.x) * newWidth;
          }
        }
        this._doLayoutVertically(baseHeight, true, fnPositionX, true);
        this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(newWidth, baseHeight);
      },
      _doLayoutGrid: function() {
        var layoutAnchor = this.node.getAnchorPoint();
        var layoutSize = this.node.getContentSize();
        this.startAxis === AxisDirection.HORIZONTAL ? this._doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) : this.startAxis === AxisDirection.VERTICAL && this._doLayoutGridAxisVertical(layoutAnchor, layoutSize);
      },
      _getHorizontalBaseWidth: function(children) {
        var newWidth = 0;
        var activeChildCount = 0;
        if (this.resizeMode === ResizeMode.CONTAINER) {
          for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            if (child.activeInHierarchy) {
              activeChildCount++;
              newWidth += child.width * this._getUsedScaleValue(child.scaleX);
            }
          }
          newWidth += (activeChildCount - 1) * this.spacingX + this.paddingLeft + this.paddingRight;
        } else newWidth = this.node.getContentSize().width;
        return newWidth;
      },
      _doLayout: function() {
        if (this.type === Type.HORIZONTAL) {
          var newWidth = this._getHorizontalBaseWidth(this.node.children);
          var fnPositionY = function(child) {
            return child.y;
          };
          this._doLayoutHorizontally(newWidth, false, fnPositionY, true);
          this.node.width = newWidth;
        } else if (this.type === Type.VERTICAL) {
          var newHeight = this._getVerticalBaseHeight(this.node.children);
          var fnPositionX = function(child) {
            return child.x;
          };
          this._doLayoutVertically(newHeight, false, fnPositionX, true);
          this.node.height = newHeight;
        } else this.type === Type.NONE ? this.resizeMode === ResizeMode.CONTAINER && this._doLayoutBasic() : this.type === Type.GRID && this._doLayoutGrid();
      },
      _getUsedScaleValue: function(value) {
        return this.affectedByScale ? Math.abs(value) : 1;
      },
      updateLayout: function() {
        if (this._layoutDirty && this.node.children.length > 0) {
          this._doLayout();
          this._layoutDirty = false;
        }
      }
    });
    Object.defineProperty(Layout.prototype, "padding", {
      get: function() {
        cc.warnID(4100);
        return this.paddingLeft;
      },
      set: function(value) {
        this._N$padding = value;
        this._migratePaddingData();
        this._doLayoutDirty();
      }
    });
    cc.Layout = module.exports = Layout;
  }), {
    "../CCNode": 6,
    "./CCComponent": 31
  } ],
  35: [ (function(require, module, exports) {
    var misc = require("../utils/misc");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var math = renderEngine.math;
    var StencilMaterial = renderEngine.StencilMaterial;
    var RenderComponent = require("./CCRenderComponent");
    var RenderFlow = require("../renderer/render-flow");
    var Graphics = require("../graphics/graphics");
    var Node = require("../CCNode");
    var _vec2_temp = cc.v2();
    var _mat4_temp = math.mat4.create();
    var _circlepoints = [];
    function _calculateCircle(center, radius, segements) {
      _circlepoints.length = 0;
      var anglePerStep = 2 * Math.PI / segements;
      for (var step = 0; step < segements; ++step) _circlepoints.push(cc.v2(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y));
      return _circlepoints;
    }
    var MaskType = cc.Enum({
      RECT: 0,
      ELLIPSE: 1,
      IMAGE_STENCIL: 2
    });
    var SEGEMENTS_MIN = 3;
    var SEGEMENTS_MAX = 1e4;
    var Mask = cc.Class({
      name: "cc.Mask",
      extends: RenderComponent,
      editor: false,
      ctor: function() {
        this._graphics = null;
        this._clearGraphics = null;
      },
      properties: {
        _spriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        _type: MaskType.RECT,
        type: {
          get: function() {
            return this._type;
          },
          set: function(value) {
            this._type = value;
            if (this._type !== MaskType.IMAGE_STENCIL) {
              this.spriteFrame = null;
              this.alphaThreshold = 0;
              this._updateGraphics();
            }
            if (this._renderData) {
              this.destroyRenderData(this._renderData);
              this._renderData = null;
            }
            this._activateMaterial();
          },
          type: MaskType,
          tooltip: false
        },
        spriteFrame: {
          type: cc.SpriteFrame,
          tooltip: false,
          get: function() {
            return this._spriteFrame;
          },
          set: function(value) {
            var lastSprite = this._spriteFrame;
            false;
            if (lastSprite === value) return;
            this._spriteFrame = value;
            this._applySpriteFrame(lastSprite);
          }
        },
        alphaThreshold: {
          default: 0,
          type: cc.Float,
          range: [ 0, 1, .1 ],
          slide: true,
          tooltip: false,
          notify: function() {
            if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
              cc.warnID(4201);
              return;
            }
            if (this._material) {
              this._material.alphaThreshold = this.alphaThreshold;
              this._material.updateHash();
            }
          }
        },
        inverted: {
          default: false,
          type: cc.Boolean,
          tooltip: false,
          notify: function() {
            if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
              cc.warnID(4202);
              return;
            }
          }
        },
        _segments: 64,
        segements: {
          get: function() {
            return this._segments;
          },
          set: function(value) {
            this._segments = misc.clampf(value, SEGEMENTS_MIN, SEGEMENTS_MAX);
            this._updateGraphics();
          },
          type: cc.Integer,
          tooltip: false
        },
        _resizeToTarget: {
          animatable: false,
          set: function(value) {
            value && this._resizeNodeToTargetNode();
          }
        }
      },
      statics: {
        Type: MaskType
      },
      onLoad: function() {
        this._createGraphics();
      },
      onRestore: function() {
        this._createGraphics();
        this._type !== MaskType.IMAGE_STENCIL && this._updateGraphics();
      },
      onEnable: function() {
        this._super();
        if (this._type === MaskType.IMAGE_STENCIL) {
          if (!this._spriteFrame || !this._spriteFrame.textureLoaded()) {
            this.markForRender(false);
            if (this._spriteFrame) {
              this._spriteFrame.once("load", this._onTextureLoaded, this);
              this._spriteFrame.ensureLoadTexture();
            }
          }
        } else this._updateGraphics();
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this._updateGraphics, this);
        this.node.on(cc.Node.EventType.ROTATION_CHANGED, this._updateGraphics, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this._updateGraphics, this);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this._updateGraphics, this);
        this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this._updateGraphics, this);
        this.node._renderFlag |= RenderFlow.FLAG_POST_RENDER;
        this._activateMaterial();
      },
      onDisable: function() {
        this._super();
        this.node.off(cc.Node.EventType.POSITION_CHANGED, this._updateGraphics, this);
        this.node.off(cc.Node.EventType.ROTATION_CHANGED, this._updateGraphics, this);
        this.node.off(cc.Node.EventType.SCALE_CHANGED, this._updateGraphics, this);
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._updateGraphics, this);
        this.node.off(cc.Node.EventType.ANCHOR_CHANGED, this._updateGraphics, this);
        this.node._renderFlag &= ~RenderFlow.FLAG_POST_RENDER;
      },
      onDestroy: function() {
        this._super();
        this._removeGraphics();
      },
      _resizeNodeToTargetNode: false,
      _onTextureLoaded: function() {
        if (this._renderData) {
          this._renderData.uvDirty = true;
          this._renderData.vertDirty = true;
          this.markForUpdateRenderData(true);
        }
        this.enabledInHierarchy && this._activateMaterial();
      },
      _applySpriteFrame: function(oldFrame) {
        oldFrame && oldFrame.off && oldFrame.off("load", this._onTextureLoaded, this);
        var spriteFrame = this._spriteFrame;
        if (spriteFrame) if (spriteFrame.textureLoaded()) this._onTextureLoaded(null); else {
          spriteFrame.once("load", this._onTextureLoaded, this);
          spriteFrame.ensureLoadTexture();
        }
      },
      _activateMaterial: function() {
        if (this._type === MaskType.IMAGE_STENCIL && (!this.spriteFrame || !this.spriteFrame.textureLoaded())) {
          this.markForRender(false);
          return;
        }
        if (cc.game.renderType !== cc.game.RENDER_TYPE_CANVAS) {
          this._material || (this._material = new StencilMaterial());
          if (this._type === MaskType.IMAGE_STENCIL) {
            var texture = this.spriteFrame.getTexture();
            this._material.useModel = false;
            this._material.useTexture = true;
            this._material.useColor = true;
            this._material.texture = texture;
            this._material.alphaThreshold = this.alphaThreshold;
          } else {
            this._material.useModel = true;
            this._material.useTexture = false;
            this._material.useColor = false;
          }
        }
        this.markForRender(true);
      },
      _createGraphics: function() {
        if (!this._graphics) {
          this._graphics = new Graphics();
          this._graphics.node = this.node;
          this._graphics.lineWidth = 0;
          this._graphics.strokeColor = cc.color(0, 0, 0, 0);
        }
        if (!this._clearGraphics) {
          this._clearGraphics = new Graphics();
          this._clearGraphics.node = new Node();
          this._clearGraphics._activateMaterial();
          this._clearGraphics.lineWidth = 0;
          this._clearGraphics.rect(0, 0, cc.visibleRect.width, cc.visibleRect.height);
          this._clearGraphics.fill();
        }
      },
      _updateGraphics: function() {
        var node = this.node;
        var graphics = this._graphics;
        graphics.clear(false);
        var width = node._contentSize.width;
        var height = node._contentSize.height;
        var x = -width * node._anchorPoint.x;
        var y = -height * node._anchorPoint.y;
        if (this._type === MaskType.RECT) graphics.rect(x, y, width, height); else if (this._type === MaskType.ELLIPSE) {
          var center = cc.v2(x + width / 2, y + height / 2);
          var radius = {
            x: width / 2,
            y: height / 2
          };
          var points = _calculateCircle(center, radius, this._segments);
          for (var i = 0; i < points.length; ++i) {
            var point = points[i];
            0 === i ? graphics.moveTo(point.x, point.y) : graphics.lineTo(point.x, point.y);
          }
          graphics.close();
        }
        cc.game.renderType === cc.game.RENDER_TYPE_CANVAS ? graphics.stroke() : graphics.fill();
      },
      _removeGraphics: function() {
        this._graphics && this._graphics.destroy();
        this._clearGraphics && this._clearGraphics.destroy();
      },
      _hitTest: function(cameraPt) {
        var node = this.node;
        var size = node.getContentSize(), w = size.width, h = size.height, testPt = _vec2_temp;
        node._updateWorldMatrix();
        math.mat4.invert(_mat4_temp, node._worldMatrix);
        math.vec2.transformMat4(testPt, cameraPt, _mat4_temp);
        testPt.x += node._anchorPoint.x * w;
        testPt.y += node._anchorPoint.y * h;
        if (this.type === MaskType.RECT || this.type === MaskType.IMAGE_STENCIL) return testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h;
        if (this.type === MaskType.ELLIPSE) {
          var rx = w / 2, ry = h / 2;
          var px = testPt.x - .5 * w, py = testPt.y - .5 * h;
          return px * px / (rx * rx) + py * py / (ry * ry) < 1;
        }
      },
      markForUpdateRenderData: function(enable) {
        enable && this.enabledInHierarchy ? this.node._renderFlag |= RenderFlow.FLAG_UPDATE_RENDER_DATA : enable || (this.node._renderFlag &= ~RenderFlow.FLAG_UPDATE_RENDER_DATA);
      },
      markForRender: function(enable) {
        enable && this.enabledInHierarchy ? this.node._renderFlag |= RenderFlow.FLAG_RENDER | RenderFlow.FLAG_UPDATE_RENDER_DATA | RenderFlow.FLAG_POST_RENDER : enable || (this.node._renderFlag &= ~(RenderFlow.FLAG_RENDER | RenderFlow.FLAG_POST_RENDER));
      },
      disableRender: function() {
        this.node._renderFlag &= ~(RenderFlow.FLAG_RENDER | RenderFlow.FLAG_UPDATE_RENDER_DATA | RenderFlow.FLAG_POST_RENDER);
      }
    });
    cc.Mask = module.exports = Mask;
  }), {
    "../CCNode": 6,
    "../graphics/graphics": 54,
    "../renderer/render-flow": 129,
    "../utils/misc": 139,
    "./CCRenderComponent": 36,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  36: [ (function(require, module, exports) {
    var Component = require("./CCComponent");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var RenderFlow = require("../renderer/render-flow");
    var BlendFactor = require("../platform/CCMacro").BlendFactor;
    var RenderData = renderEngine.RenderData;
    var gfx = renderEngine.gfx;
    var RenderComponent = cc.Class({
      name: "RenderComponent",
      extends: Component,
      editor: false,
      properties: {
        _srcBlendFactor: BlendFactor.SRC_ALPHA,
        _dstBlendFactor: BlendFactor.ONE_MINUS_SRC_ALPHA,
        srcBlendFactor: {
          get: function() {
            return this._srcBlendFactor;
          },
          set: function(value) {
            if (this._srcBlendFactor === value) return;
            this._srcBlendFactor = value;
            this._updateBlendFunc(true);
          },
          animatable: false,
          type: BlendFactor,
          tooltip: false
        },
        dstBlendFactor: {
          get: function() {
            return this._dstBlendFactor;
          },
          set: function(value) {
            if (this._dstBlendFactor === value) return;
            this._dstBlendFactor = value;
            this._updateBlendFunc(true);
          },
          animatable: false,
          type: BlendFactor,
          tooltip: false
        }
      },
      ctor: function() {
        this._material = null;
        this._renderData = null;
        this.__allocedDatas = [];
        this._vertexFormat = null;
        this._toPostHandle = false;
        this._assembler = this.constructor._assembler;
        this._postAssembler = this.constructor._postAssembler;
      },
      onEnable: function() {
        this.node._renderComponent && (this.node._renderComponent.enabled = false);
        this.node._renderComponent = this;
        this.node._renderFlag |= RenderFlow.FLAG_RENDER | RenderFlow.FLAG_UPDATE_RENDER_DATA | RenderFlow.FLAG_COLOR;
      },
      onDisable: function() {
        this.node._renderComponent = null;
        this.disableRender();
      },
      onDestroy: function() {
        for (var i = 0, l = this.__allocedDatas.length; i < l; i++) RenderData.free(this.__allocedDatas[i]);
        this.__allocedDatas.length = 0;
        this._material = null;
        this._renderData = null;
      },
      _canRender: function() {
        return this._enabled && this.node._activeInHierarchy;
      },
      markForUpdateRenderData: function(enable) {
        enable && this._canRender() ? this.node._renderFlag |= RenderFlow.FLAG_UPDATE_RENDER_DATA : enable || (this.node._renderFlag &= ~RenderFlow.FLAG_UPDATE_RENDER_DATA);
      },
      markForRender: function(enable) {
        enable && this._canRender() ? this.node._renderFlag |= RenderFlow.FLAG_RENDER : enable || (this.node._renderFlag &= ~RenderFlow.FLAG_RENDER);
      },
      markForCustomIARender: function(enable) {
        enable && this._canRender() ? this.node._renderFlag |= RenderFlow.FLAG_CUSTOM_IA_RENDER : enable || (this.node._renderFlag &= ~RenderFlow.FLAG_CUSTOM_IA_RENDER);
      },
      disableRender: function() {
        this.node._renderFlag &= ~(RenderFlow.FLAG_RENDER | RenderFlow.FLAG_CUSTOM_IA_RENDER | RenderFlow.FLAG_UPDATE_RENDER_DATA | RenderFlow.FLAG_COLOR);
      },
      requestRenderData: function() {
        var data = RenderData.alloc();
        this.__allocedDatas.push(data);
        return data;
      },
      destroyRenderData: function(data) {
        var index = this.__allocedDatas.indexOf(data);
        if (-1 !== index) {
          this.__allocedDatas.splice(index, 1);
          RenderData.free(data);
        }
      },
      _updateColor: function() {
        var material = this._material;
        if (material) {
          if (material.useColor) {
            material.color = this.node.color;
            material.updateHash();
          }
          this.node._renderFlag &= ~RenderFlow.FLAG_COLOR;
        }
      },
      getMaterial: function() {
        return this._material;
      },
      _updateMaterial: function(material) {
        this._material = material;
        this._updateBlendFunc();
        material.updateHash();
      },
      _updateBlendFunc: function(updateHash) {
        if (!this._material) return;
        var pass = this._material._mainTech.passes[0];
        pass.setBlend(gfx.BLEND_FUNC_ADD, this._srcBlendFactor, this._dstBlendFactor, gfx.BLEND_FUNC_ADD, this._srcBlendFactor, this._dstBlendFactor);
        updateHash && this._material.updateHash();
      }
    });
    RenderComponent._assembler = null;
    RenderComponent._postAssembler = null;
    cc.RenderComponent = module.exports = RenderComponent;
  }), {
    "../platform/CCMacro": 91,
    "../renderer/render-flow": 129,
    "./CCComponent": 31,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  37: [ (function(require, module, exports) {
    var misc = require("../utils/misc");
    var Component = require("./CCComponent");
    var GETTINGSHORTERFACTOR = 20;
    var Direction = cc.Enum({
      HORIZONTAL: 0,
      VERTICAL: 1
    });
    var Scrollbar = cc.Class({
      name: "cc.Scrollbar",
      extends: require("./CCComponent"),
      editor: false,
      properties: {
        _scrollView: null,
        _touching: false,
        _autoHideRemainingTime: {
          default: 0,
          serializable: false
        },
        _opacity: 255,
        handle: {
          default: null,
          type: cc.Sprite,
          tooltip: false,
          notify: function() {
            this._onScroll(cc.v2(0, 0));
          },
          animatable: false
        },
        direction: {
          default: Direction.HORIZONTAL,
          type: Direction,
          tooltip: false,
          notify: function() {
            this._onScroll(cc.v2(0, 0));
          },
          animatable: false
        },
        enableAutoHide: {
          default: true,
          animatable: false,
          tooltip: false
        },
        autoHideTime: {
          default: 1,
          animatable: false,
          tooltip: false
        }
      },
      statics: {
        Direction: Direction
      },
      setTargetScrollView: function(scrollView) {
        this._scrollView = scrollView;
      },
      _convertToScrollViewSpace: function(content) {
        var worldSpacePos = content.convertToWorldSpace(cc.v2(0, 0));
        var scrollViewSpacePos = this._scrollView.node.convertToNodeSpace(worldSpacePos);
        return scrollViewSpacePos;
      },
      _setOpacity: function(opacity) {
        if (this.handle) {
          this.node.opacity = opacity;
          this.handle.node.opacity = opacity;
        }
      },
      _onScroll: function(outOfBoundary) {
        if (this._scrollView) {
          var content = this._scrollView.content;
          if (content) {
            var contentSize = content.getContentSize();
            var scrollViewSize = this._scrollView.node.getContentSize();
            var handleNodeSize = this.node.getContentSize();
            if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) return;
            if (this.enableAutoHide) {
              this._autoHideRemainingTime = this.autoHideTime;
              this._setOpacity(this._opacity);
            }
            var contentMeasure = 0;
            var scrollViewMeasure = 0;
            var outOfBoundaryValue = 0;
            var contentPosition = 0;
            var handleNodeMeasure = 0;
            if (this.direction === Direction.HORIZONTAL) {
              contentMeasure = contentSize.width;
              scrollViewMeasure = scrollViewSize.width;
              handleNodeMeasure = handleNodeSize.width;
              outOfBoundaryValue = outOfBoundary.x;
              contentPosition = -this._convertToScrollViewSpace(content).x;
            } else if (this.direction === Direction.VERTICAL) {
              contentMeasure = contentSize.height;
              scrollViewMeasure = scrollViewSize.height;
              handleNodeMeasure = handleNodeSize.height;
              outOfBoundaryValue = outOfBoundary.y;
              contentPosition = -this._convertToScrollViewSpace(content).y;
            }
            var length = this._calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundaryValue);
            var position = this._calculatePosition(contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundaryValue, length);
            this._updateLength(length);
            this._updateHanlderPosition(position);
          }
        }
      },
      _updateHanlderPosition: function(position) {
        if (this.handle) {
          var oldPosition = this._fixupHandlerPosition();
          this.handle.node.setPosition(position.x + oldPosition.x, position.y + oldPosition.y);
        }
      },
      _fixupHandlerPosition: function() {
        var barSize = this.node.getContentSize();
        var barAnchor = this.node.getAnchorPoint();
        var handleSize = this.handle.node.getContentSize();
        var handleParent = this.handle.node.parent;
        var leftBottomWorldPosition = this.node.convertToWorldSpaceAR(cc.v2(-barSize.width * barAnchor.x, -barSize.height * barAnchor.y));
        var fixupPosition = handleParent.convertToNodeSpaceAR(leftBottomWorldPosition);
        this.direction === Direction.HORIZONTAL ? fixupPosition = cc.v2(fixupPosition.x, fixupPosition.y + (barSize.height - handleSize.height) / 2) : this.direction === Direction.VERTICAL && (fixupPosition = cc.v2(fixupPosition.x + (barSize.width - handleSize.width) / 2, fixupPosition.y));
        this.handle.node.setPosition(fixupPosition);
        return fixupPosition;
      },
      _onTouchBegan: function() {
        if (!this.enableAutoHide) return;
        this._touching = true;
      },
      _conditionalDisableScrollBar: function(contentSize, scrollViewSize) {
        if (contentSize.width <= scrollViewSize.width && this.direction === Direction.HORIZONTAL) return true;
        if (contentSize.height <= scrollViewSize.height && this.direction === Direction.VERTICAL) return true;
        return false;
      },
      _onTouchEnded: function() {
        if (!this.enableAutoHide) return;
        this._touching = false;
        if (this.autoHideTime <= 0) return;
        if (this._scrollView) {
          var content = this._scrollView.content;
          if (content) {
            var contentSize = content.getContentSize();
            var scrollViewSize = this._scrollView.node.getContentSize();
            if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) return;
          }
        }
        this._autoHideRemainingTime = this.autoHideTime;
      },
      _calculateLength: function(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundary) {
        var denominatorValue = contentMeasure;
        outOfBoundary && (denominatorValue += (outOfBoundary > 0 ? outOfBoundary : -outOfBoundary) * GETTINGSHORTERFACTOR);
        var lengthRation = scrollViewMeasure / denominatorValue;
        return handleNodeMeasure * lengthRation;
      },
      _calculatePosition: function(contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundary, actualLenth) {
        var denominatorValue = contentMeasure - scrollViewMeasure;
        outOfBoundary && (denominatorValue += Math.abs(outOfBoundary));
        var positionRatio = 0;
        if (denominatorValue) {
          positionRatio = contentPosition / denominatorValue;
          positionRatio = misc.clamp01(positionRatio);
        }
        var position = (handleNodeMeasure - actualLenth) * positionRatio;
        return this.direction === Direction.VERTICAL ? cc.v2(0, position) : cc.v2(position, 0);
      },
      _updateLength: function(length) {
        if (this.handle) {
          var handleNode = this.handle.node;
          var handleNodeSize = handleNode.getContentSize();
          handleNode.setAnchorPoint(cc.v2(0, 0));
          this.direction === Direction.HORIZONTAL ? handleNode.setContentSize(length, handleNodeSize.height) : handleNode.setContentSize(handleNodeSize.width, length);
        }
      },
      _processAutoHide: function(deltaTime) {
        if (!this.enableAutoHide || this._autoHideRemainingTime <= 0) return;
        if (this._touching) return;
        this._autoHideRemainingTime -= deltaTime;
        if (this._autoHideRemainingTime <= this.autoHideTime) {
          this._autoHideRemainingTime = Math.max(0, this._autoHideRemainingTime);
          var opacity = this._opacity * (this._autoHideRemainingTime / this.autoHideTime);
          this._setOpacity(opacity);
        }
      },
      start: function() {
        this.enableAutoHide && this._setOpacity(0);
      },
      hide: function() {
        this._autoHideRemainingTime = 0;
        this._setOpacity(0);
      },
      show: function() {
        this._autoHideRemainingTime = this.autoHideTime;
        this._setOpacity(this._opacity);
      },
      update: function(dt) {
        this._processAutoHide(dt);
      }
    });
    cc.Scrollbar = module.exports = Scrollbar;
  }), {
    "../utils/misc": 139,
    "./CCComponent": 31
  } ],
  38: [ (function(require, module, exports) {
    var NodeEvent = require("../CCNode").EventType;
    var NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 5;
    var OUT_OF_BOUNDARY_BREAKING_FACTOR = .05;
    var EPSILON = 1e-4;
    var MOVEMENT_FACTOR = .7;
    var quintEaseOut = function(time) {
      time -= 1;
      return time * time * time * time * time + 1;
    };
    var getTimeInMilliseconds = function() {
      var currentTime = new Date();
      return currentTime.getMilliseconds();
    };
    var EventType = cc.Enum({
      SCROLL_TO_TOP: 0,
      SCROLL_TO_BOTTOM: 1,
      SCROLL_TO_LEFT: 2,
      SCROLL_TO_RIGHT: 3,
      SCROLLING: 4,
      BOUNCE_TOP: 5,
      BOUNCE_BOTTOM: 6,
      BOUNCE_LEFT: 7,
      BOUNCE_RIGHT: 8,
      SCROLL_ENDED: 9,
      TOUCH_UP: 10,
      AUTOSCROLL_ENDED_WITH_THRESHOLD: 11,
      SCROLL_BEGAN: 12
    });
    var eventMap = {
      "scroll-to-top": EventType.SCROLL_TO_TOP,
      "scroll-to-bottom": EventType.SCROLL_TO_BOTTOM,
      "scroll-to-left": EventType.SCROLL_TO_LEFT,
      "scroll-to-right": EventType.SCROLL_TO_RIGHT,
      scrolling: EventType.SCROLLING,
      "bounce-bottom": EventType.BOUNCE_BOTTOM,
      "bounce-left": EventType.BOUNCE_LEFT,
      "bounce-right": EventType.BOUNCE_RIGHT,
      "bounce-top": EventType.BOUNCE_TOP,
      "scroll-ended": EventType.SCROLL_ENDED,
      "touch-up": EventType.TOUCH_UP,
      "scroll-ended-with-threshold": EventType.AUTOSCROLL_ENDED_WITH_THRESHOLD,
      "scroll-began": EventType.SCROLL_BEGAN
    };
    var ScrollView = cc.Class({
      name: "cc.ScrollView",
      extends: require("./CCViewGroup"),
      editor: false,
      ctor: function() {
        this._topBoundary = 0;
        this._bottomBoundary = 0;
        this._leftBoundary = 0;
        this._rightBoundary = 0;
        this._touchMoveDisplacements = [];
        this._touchMoveTimeDeltas = [];
        this._touchMovePreviousTimestamp = 0;
        this._touchMoved = false;
        this._autoScrolling = false;
        this._autoScrollAttenuate = false;
        this._autoScrollStartPosition = cc.v2(0, 0);
        this._autoScrollTargetDelta = cc.v2(0, 0);
        this._autoScrollTotalTime = 0;
        this._autoScrollAccumulatedTime = 0;
        this._autoScrollCurrentlyOutOfBoundary = false;
        this._autoScrollBraking = false;
        this._autoScrollBrakingStartPosition = cc.v2(0, 0);
        this._outOfBoundaryAmount = cc.v2(0, 0);
        this._outOfBoundaryAmountDirty = true;
        this._stopMouseWheel = false;
        this._mouseWheelEventElapsedTime = 0;
        this._isScrollEndedWithThresholdEventFired = false;
        this._scrollEventEmitMask = 0;
        this._isBouncing = false;
        this._scrolling = false;
      },
      properties: {
        content: {
          default: void 0,
          type: cc.Node,
          tooltip: false,
          formerlySerializedAs: "content",
          notify: function(oldValue) {
            this._calculateBoundary();
          }
        },
        horizontal: {
          default: true,
          animatable: false,
          tooltip: false
        },
        vertical: {
          default: true,
          animatable: false,
          tooltip: false
        },
        inertia: {
          default: true,
          tooltip: false
        },
        brake: {
          default: .5,
          type: "Float",
          range: [ 0, 1, .1 ],
          tooltip: false
        },
        elastic: {
          default: true,
          animatable: false,
          tooltip: false
        },
        bounceDuration: {
          default: 1,
          range: [ 0, 10 ],
          tooltip: false
        },
        horizontalScrollBar: {
          default: void 0,
          type: cc.Scrollbar,
          tooltip: false,
          notify: function() {
            if (this.horizontalScrollBar) {
              this.horizontalScrollBar.setTargetScrollView(this);
              this._updateScrollBar(0);
            }
          },
          animatable: false
        },
        verticalScrollBar: {
          default: void 0,
          type: cc.Scrollbar,
          tooltip: false,
          notify: function() {
            if (this.verticalScrollBar) {
              this.verticalScrollBar.setTargetScrollView(this);
              this._updateScrollBar(0);
            }
          },
          animatable: false
        },
        scrollEvents: {
          default: [],
          type: cc.Component.EventHandler,
          tooltip: false
        },
        cancelInnerEvents: {
          default: true,
          animatable: false,
          tooltip: false
        },
        _view: {
          get: function() {
            if (this.content) return this.content.parent;
          }
        }
      },
      statics: {
        EventType: EventType
      },
      scrollToBottom: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(0, 0),
          applyToHorizontal: false,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta, true);
      },
      scrollToTop: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(0, 1),
          applyToHorizontal: false,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToLeft: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(0, 0),
          applyToHorizontal: true,
          applyToVertical: false
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToRight: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(1, 0),
          applyToHorizontal: true,
          applyToVertical: false
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToTopLeft: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(0, 1),
          applyToHorizontal: true,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToTopRight: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(1, 1),
          applyToHorizontal: true,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToBottomLeft: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(0, 0),
          applyToHorizontal: true,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToBottomRight: function(timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(1, 0),
          applyToHorizontal: true,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToOffset: function(offset, timeInSecond, attenuated) {
        var maxScrollOffset = this.getMaxScrollOffset();
        var anchor = cc.v2(0, 0);
        0 === maxScrollOffset.x ? anchor.x = 0 : anchor.x = offset.x / maxScrollOffset.x;
        0 === maxScrollOffset.y ? anchor.y = 1 : anchor.y = (maxScrollOffset.y - offset.y) / maxScrollOffset.y;
        this.scrollTo(anchor, timeInSecond, attenuated);
      },
      getScrollOffset: function() {
        var topDelta = this._getContentTopBoundary() - this._topBoundary;
        var leftDeta = this._getContentLeftBoundary() - this._leftBoundary;
        return cc.v2(leftDeta, topDelta);
      },
      getMaxScrollOffset: function() {
        var viewSize = this._view.getContentSize();
        var contentSize = this.content.getContentSize();
        var horizontalMaximizeOffset = contentSize.width - viewSize.width;
        var verticalMaximizeOffset = contentSize.height - viewSize.height;
        horizontalMaximizeOffset = horizontalMaximizeOffset >= 0 ? horizontalMaximizeOffset : 0;
        verticalMaximizeOffset = verticalMaximizeOffset >= 0 ? verticalMaximizeOffset : 0;
        return cc.v2(horizontalMaximizeOffset, verticalMaximizeOffset);
      },
      scrollToPercentHorizontal: function(percent, timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(percent, 0),
          applyToHorizontal: true,
          applyToVertical: false
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollTo: function(anchor, timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(anchor),
          applyToHorizontal: true,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      scrollToPercentVertical: function(percent, timeInSecond, attenuated) {
        var moveDelta = this._calculateMovePercentDelta({
          anchor: cc.v2(0, percent),
          applyToHorizontal: false,
          applyToVertical: true
        });
        timeInSecond ? this._startAutoScroll(moveDelta, timeInSecond, false !== attenuated) : this._moveContent(moveDelta);
      },
      stopAutoScroll: function() {
        this._autoScrolling = false;
        this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
      },
      setContentPosition: function(position) {
        if (position.fuzzyEquals(this.getContentPosition(), EPSILON)) return;
        this.content.setPosition(position);
        this._outOfBoundaryAmountDirty = true;
      },
      getContentPosition: function() {
        return this.content.getPosition();
      },
      isScrolling: function() {
        return this._scrolling;
      },
      isAutoScrolling: function() {
        return this._autoScrolling;
      },
      _registerEvent: function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
      },
      _unregisterEvent: function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
        this.node.off(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
      },
      _onMouseWheel: function(event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;
        var deltaMove = cc.v2(0, 0);
        var wheelPrecision = -.1;
        false;
        this.vertical ? deltaMove = cc.v2(0, event.getScrollY() * wheelPrecision) : this.horizontal && (deltaMove = cc.v2(event.getScrollY() * wheelPrecision, 0));
        this._mouseWheelEventElapsedTime = 0;
        this._processDeltaMove(deltaMove);
        if (!this._stopMouseWheel) {
          this._handlePressLogic();
          this.schedule(this._checkMouseWheel, 1 / 60);
          this._stopMouseWheel = true;
        }
        this._stopPropagationIfTargetIsMe(event);
      },
      _checkMouseWheel: function(dt) {
        var currentOutOfBoundary = this._getHowMuchOutOfBoundary();
        var maxElapsedTime = .1;
        if (!currentOutOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
          this._processInertiaScroll();
          this.unschedule(this._checkMouseWheel);
          this._stopMouseWheel = false;
          return;
        }
        this._mouseWheelEventElapsedTime += dt;
        if (this._mouseWheelEventElapsedTime > maxElapsedTime) {
          this._onScrollBarTouchEnded();
          this.unschedule(this._checkMouseWheel);
          this._stopMouseWheel = false;
        }
      },
      _calculateMovePercentDelta: function(options) {
        var anchor = options.anchor;
        var applyToHorizontal = options.applyToHorizontal;
        var applyToVertical = options.applyToVertical;
        this._calculateBoundary();
        anchor = anchor.clampf(cc.v2(0, 0), cc.v2(1, 1));
        var scrollSize = this._view.getContentSize();
        var contentSize = this.content.getContentSize();
        var bottomDeta = this._getContentBottomBoundary() - this._bottomBoundary;
        bottomDeta = -bottomDeta;
        var leftDeta = this._getContentLeftBoundary() - this._leftBoundary;
        leftDeta = -leftDeta;
        var moveDelta = cc.v2(0, 0);
        var totalScrollDelta = 0;
        if (applyToHorizontal) {
          totalScrollDelta = contentSize.width - scrollSize.width;
          moveDelta.x = leftDeta - totalScrollDelta * anchor.x;
        }
        if (applyToVertical) {
          totalScrollDelta = contentSize.height - scrollSize.height;
          moveDelta.y = bottomDeta - totalScrollDelta * anchor.y;
        }
        return moveDelta;
      },
      _moveContentToTopLeft: function(scrollViewSize) {
        var contentSize = this.content.getContentSize();
        var bottomDeta = this._getContentBottomBoundary() - this._bottomBoundary;
        bottomDeta = -bottomDeta;
        var moveDelta = cc.v2(0, 0);
        var totalScrollDelta = 0;
        var leftDeta = this._getContentLeftBoundary() - this._leftBoundary;
        leftDeta = -leftDeta;
        if (contentSize.height < scrollViewSize.height) {
          totalScrollDelta = contentSize.height - scrollViewSize.height;
          moveDelta.y = bottomDeta - totalScrollDelta;
          this.verticalScrollBar && this.verticalScrollBar.hide();
        } else this.verticalScrollBar && this.verticalScrollBar.show();
        if (contentSize.width < scrollViewSize.width) {
          totalScrollDelta = contentSize.width - scrollViewSize.width;
          moveDelta.x = leftDeta;
          this.horizontalScrollBar && this.horizontalScrollBar.hide();
        } else this.horizontalScrollBar && this.horizontalScrollBar.show();
        this._moveContent(moveDelta);
        this._adjustContentOutOfBoundary();
      },
      _calculateBoundary: function() {
        if (this.content) {
          var layout = this.content.getComponent(cc.Layout);
          layout && layout.enabledInHierarchy && layout.updateLayout();
          var viewSize = this._view.getContentSize();
          var leftBottomPosition = this._convertToContentParentSpace(cc.v2(0, 0));
          this._leftBoundary = leftBottomPosition.x;
          this._bottomBoundary = leftBottomPosition.y;
          var topRightPosition = this._convertToContentParentSpace(cc.v2(viewSize.width, viewSize.height));
          this._rightBoundary = topRightPosition.x;
          this._topBoundary = topRightPosition.y;
          this._moveContentToTopLeft(viewSize);
        }
      },
      _convertToContentParentSpace: function(position) {
        var contentParent = this._view;
        var viewPositionInWorldSpace = contentParent.convertToWorldSpace(position);
        return contentParent.convertToNodeSpaceAR(viewPositionInWorldSpace);
      },
      _hasNestedViewGroup: function(event, captureListeners) {
        if (event.eventPhase !== cc.Event.CAPTURING_PHASE) return;
        if (captureListeners) for (var i = 0; i < captureListeners.length; ++i) {
          var item = captureListeners[i];
          if (this.node === item) {
            if (event.target.getComponent(cc.ViewGroup)) return true;
            return false;
          }
          if (item.getComponent(cc.ViewGroup)) return true;
        }
        return false;
      },
      _stopPropagationIfTargetIsMe: function(event) {
        event.eventPhase === cc.Event.AT_TARGET && event.target === this.node && event.stopPropagation();
      },
      _onTouchBegan: function(event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;
        var touch = event.touch;
        this.content && this._handlePressLogic(touch);
        this._touchMoved = false;
        this._stopPropagationIfTargetIsMe(event);
      },
      _onTouchMoved: function(event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;
        var touch = event.touch;
        this.content && this._handleMoveLogic(touch);
        if (!this.cancelInnerEvents) return;
        var deltaMove = touch.getLocation().sub(touch.getStartLocation());
        if (deltaMove.mag() > 7 && !this._touchMoved && event.target !== this.node) {
          var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
          cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
          cancelEvent.touch = event.touch;
          cancelEvent.simulate = true;
          event.target.dispatchEvent(cancelEvent);
          this._touchMoved = true;
        }
        this._stopPropagationIfTargetIsMe(event);
      },
      _onTouchEnded: function(event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;
        this._dispatchEvent("touch-up");
        var touch = event.touch;
        this.content && this._handleReleaseLogic(touch);
        this._touchMoved ? event.stopPropagation() : this._stopPropagationIfTargetIsMe(event);
      },
      _onTouchCancelled: function(event, captureListeners) {
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;
        if (!event.simulate) {
          var touch = event.touch;
          this.content && this._handleReleaseLogic(touch);
        }
        this._stopPropagationIfTargetIsMe(event);
      },
      _processDeltaMove: function(deltaMove) {
        this._scrollChildren(deltaMove);
        this._gatherTouchMove(deltaMove);
      },
      _handleMoveLogic: function(touch) {
        var deltaMove = touch.getDelta();
        this._processDeltaMove(deltaMove);
      },
      _scrollChildren: function(deltaMove) {
        deltaMove = this._clampDelta(deltaMove);
        var realMove = deltaMove;
        var outOfBoundary = void 0;
        if (this.elastic) {
          outOfBoundary = this._getHowMuchOutOfBoundary();
          realMove.x *= 0 === outOfBoundary.x ? 1 : .5;
          realMove.y *= 0 === outOfBoundary.y ? 1 : .5;
        }
        if (!this.elastic) {
          outOfBoundary = this._getHowMuchOutOfBoundary(realMove);
          realMove = realMove.add(outOfBoundary);
        }
        var scrollEventType = -1;
        if (realMove.y > 0) {
          var icBottomPos = this.content.y - this.content.anchorY * this.content.height;
          icBottomPos + realMove.y > this._bottomBoundary && (scrollEventType = "scroll-to-bottom");
        } else if (realMove.y < 0) {
          var icTopPos = this.content.y - this.content.anchorY * this.content.height + this.content.height;
          icTopPos + realMove.y <= this._topBoundary && (scrollEventType = "scroll-to-top");
        } else if (realMove.x < 0) {
          var icRightPos = this.content.x - this.content.anchorX * this.content.width + this.content.width;
          icRightPos + realMove.x <= this._rightBoundary && (scrollEventType = "scroll-to-right");
        } else if (realMove.x > 0) {
          var icLeftPos = this.content.x - this.content.anchorX * this.content.width;
          icLeftPos + realMove.x >= this._leftBoundary && (scrollEventType = "scroll-to-left");
        }
        this._moveContent(realMove, false);
        if (0 !== realMove.x || 0 !== realMove.y) {
          if (!this._scrolling) {
            this._scrolling = true;
            this._dispatchEvent("scroll-began");
          }
          this._dispatchEvent("scrolling");
        }
        -1 !== scrollEventType && this._dispatchEvent(scrollEventType);
      },
      _handlePressLogic: function() {
        this._autoScrolling && this._dispatchEvent("scroll-ended");
        this._autoScrolling = false;
        this._isBouncing = false;
        this._touchMovePreviousTimestamp = getTimeInMilliseconds();
        this._touchMoveDisplacements.length = 0;
        this._touchMoveTimeDeltas.length = 0;
        this._onScrollBarTouchBegan();
      },
      _clampDelta: function(delta) {
        var contentSize = this.content.getContentSize();
        var scrollViewSize = this.node.getContentSize();
        contentSize.width < scrollViewSize.width && (delta.x = 0);
        contentSize.height < scrollViewSize.height && (delta.y = 0);
        return delta;
      },
      _gatherTouchMove: function(delta) {
        delta = this._clampDelta(delta);
        while (this._touchMoveDisplacements.length >= NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED) {
          this._touchMoveDisplacements.shift();
          this._touchMoveTimeDeltas.shift();
        }
        this._touchMoveDisplacements.push(delta);
        var timeStamp = getTimeInMilliseconds();
        this._touchMoveTimeDeltas.push((timeStamp - this._touchMovePreviousTimestamp) / 1e3);
        this._touchMovePreviousTimestamp = timeStamp;
      },
      _startBounceBackIfNeeded: function() {
        if (!this.elastic) return false;
        var bounceBackAmount = this._getHowMuchOutOfBoundary();
        bounceBackAmount = this._clampDelta(bounceBackAmount);
        if (bounceBackAmount.fuzzyEquals(cc.v2(0, 0), EPSILON)) return false;
        var bounceBackTime = Math.max(this.bounceDuration, 0);
        this._startAutoScroll(bounceBackAmount, bounceBackTime, true);
        if (!this._isBouncing) {
          bounceBackAmount.y > 0 && this._dispatchEvent("bounce-top");
          bounceBackAmount.y < 0 && this._dispatchEvent("bounce-bottom");
          bounceBackAmount.x > 0 && this._dispatchEvent("bounce-right");
          bounceBackAmount.x < 0 && this._dispatchEvent("bounce-left");
          this._isBouncing = true;
        }
        return true;
      },
      _processInertiaScroll: function() {
        var bounceBackStarted = this._startBounceBackIfNeeded();
        if (!bounceBackStarted && this.inertia) {
          var touchMoveVelocity = this._calculateTouchMoveVelocity();
          !touchMoveVelocity.fuzzyEquals(cc.v2(0, 0), EPSILON) && this.brake < 1 && this._startInertiaScroll(touchMoveVelocity);
        }
        this._onScrollBarTouchEnded();
      },
      _handleReleaseLogic: function(touch) {
        var delta = touch.getDelta();
        this._gatherTouchMove(delta);
        this._processInertiaScroll();
        if (this._scrolling) {
          this._scrolling = false;
          this._autoScrolling || this._dispatchEvent("scroll-ended");
        }
      },
      _isOutOfBoundary: function() {
        var outOfBoundary = this._getHowMuchOutOfBoundary();
        return !outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON);
      },
      _isNecessaryAutoScrollBrake: function() {
        if (this._autoScrollBraking) return true;
        if (this._isOutOfBoundary()) {
          if (!this._autoScrollCurrentlyOutOfBoundary) {
            this._autoScrollCurrentlyOutOfBoundary = true;
            this._autoScrollBraking = true;
            this._autoScrollBrakingStartPosition = this.getContentPosition();
            return true;
          }
        } else this._autoScrollCurrentlyOutOfBoundary = false;
        return false;
      },
      getScrollEndedEventTiming: function() {
        return EPSILON;
      },
      _processAutoScrolling: function(dt) {
        var isAutoScrollBrake = this._isNecessaryAutoScrollBrake();
        var brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
        this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);
        this._autoScrollAttenuate && (percentage = quintEaseOut(percentage));
        var newPosition = this._autoScrollStartPosition.add(this._autoScrollTargetDelta.mul(percentage));
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        var fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming();
        if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
          this._dispatchEvent("scroll-ended-with-threshold");
          this._isScrollEndedWithThresholdEventFired = true;
        }
        if (this.elastic) {
          var brakeOffsetPosition = newPosition.sub(this._autoScrollBrakingStartPosition);
          isAutoScrollBrake && (brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor));
          newPosition = this._autoScrollBrakingStartPosition.add(brakeOffsetPosition);
        } else {
          var moveDelta = newPosition.sub(this.getContentPosition());
          var outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta);
          if (!outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            newPosition = newPosition.add(outOfBoundary);
            reachedEnd = true;
          }
        }
        reachedEnd && (this._autoScrolling = false);
        var deltaMove = newPosition.sub(this.getContentPosition());
        this._moveContent(this._clampDelta(deltaMove), reachedEnd);
        this._dispatchEvent("scrolling");
        if (!this._autoScrolling) {
          this._isBouncing = false;
          this._scrolling = false;
          this._dispatchEvent("scroll-ended");
        }
      },
      _startInertiaScroll: function(touchMoveVelocity) {
        var inertiaTotalMovement = touchMoveVelocity.mul(MOVEMENT_FACTOR);
        this._startAttenuatingAutoScroll(inertiaTotalMovement, touchMoveVelocity);
      },
      _calculateAttenuatedFactor: function(distance) {
        if (this.brake <= 0) return 1 - this.brake;
        return (1 - this.brake) * (1 / (1 + 14e-6 * distance + distance * distance * 8e-9));
      },
      _startAttenuatingAutoScroll: function(deltaMove, initialVelocity) {
        var time = this._calculateAutoScrollTimeByInitalSpeed(initialVelocity.mag());
        var targetDelta = deltaMove.normalize();
        var contentSize = this.content.getContentSize();
        var scrollviewSize = this.node.getContentSize();
        var totalMoveWidth = contentSize.width - scrollviewSize.width;
        var totalMoveHeight = contentSize.height - scrollviewSize.height;
        var attenuatedFactorX = this._calculateAttenuatedFactor(totalMoveWidth);
        var attenuatedFactorY = this._calculateAttenuatedFactor(totalMoveHeight);
        targetDelta = cc.v2(targetDelta.x * totalMoveWidth * (1 - this.brake) * attenuatedFactorX, targetDelta.y * totalMoveHeight * attenuatedFactorY * (1 - this.brake));
        var originalMoveLength = deltaMove.mag();
        var factor = targetDelta.mag() / originalMoveLength;
        targetDelta = targetDelta.add(deltaMove);
        if (this.brake > 0 && factor > 7) {
          factor = Math.sqrt(factor);
          targetDelta = deltaMove.mul(factor).add(deltaMove);
        }
        if (this.brake > 0 && factor > 3) {
          factor = 3;
          time *= factor;
        }
        0 === this.brake && factor > 1 && (time *= factor);
        this._startAutoScroll(targetDelta, time, true);
      },
      _calculateAutoScrollTimeByInitalSpeed: function(initalSpeed) {
        return Math.sqrt(Math.sqrt(initalSpeed / 5));
      },
      _startAutoScroll: function(deltaMove, timeInSecond, attenuated) {
        var adjustedDeltaMove = this._flattenVectorByDirection(deltaMove);
        this._autoScrolling = true;
        this._autoScrollTargetDelta = adjustedDeltaMove;
        this._autoScrollAttenuate = attenuated;
        this._autoScrollStartPosition = this.getContentPosition();
        this._autoScrollTotalTime = timeInSecond;
        this._autoScrollAccumulatedTime = 0;
        this._autoScrollBraking = false;
        this._isScrollEndedWithThresholdEventFired = false;
        this._autoScrollBrakingStartPosition = cc.v2(0, 0);
        var currentOutOfBoundary = this._getHowMuchOutOfBoundary();
        currentOutOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON) || (this._autoScrollCurrentlyOutOfBoundary = true);
      },
      _calculateTouchMoveVelocity: function() {
        var totalTime = 0;
        totalTime = this._touchMoveTimeDeltas.reduce((function(a, b) {
          return a + b;
        }), totalTime);
        if (totalTime <= 0 || totalTime >= .5) return cc.v2(0, 0);
        var totalMovement = cc.v2(0, 0);
        totalMovement = this._touchMoveDisplacements.reduce((function(a, b) {
          return a.add(b);
        }), totalMovement);
        return cc.v2(totalMovement.x * (1 - this.brake) / totalTime, totalMovement.y * (1 - this.brake) / totalTime);
      },
      _flattenVectorByDirection: function(vector) {
        var result = vector;
        result.x = this.horizontal ? result.x : 0;
        result.y = this.vertical ? result.y : 0;
        return result;
      },
      _moveContent: function(deltaMove, canStartBounceBack) {
        var adjustedMove = this._flattenVectorByDirection(deltaMove);
        var newPosition = this.getContentPosition().add(adjustedMove);
        this.setContentPosition(newPosition);
        var outOfBoundary = this._getHowMuchOutOfBoundary();
        this._updateScrollBar(outOfBoundary);
        this.elastic && canStartBounceBack && this._startBounceBackIfNeeded();
      },
      _getContentLeftBoundary: function() {
        var contentPos = this.getContentPosition();
        return contentPos.x - this.content.getAnchorPoint().x * this.content.getContentSize().width;
      },
      _getContentRightBoundary: function() {
        var contentSize = this.content.getContentSize();
        return this._getContentLeftBoundary() + contentSize.width;
      },
      _getContentTopBoundary: function() {
        var contentSize = this.content.getContentSize();
        return this._getContentBottomBoundary() + contentSize.height;
      },
      _getContentBottomBoundary: function() {
        var contentPos = this.getContentPosition();
        return contentPos.y - this.content.getAnchorPoint().y * this.content.getContentSize().height;
      },
      _getHowMuchOutOfBoundary: function(addition) {
        addition = addition || cc.v2(0, 0);
        if (addition.fuzzyEquals(cc.v2(0, 0), EPSILON) && !this._outOfBoundaryAmountDirty) return this._outOfBoundaryAmount;
        var outOfBoundaryAmount = cc.v2(0, 0);
        this._getContentLeftBoundary() + addition.x > this._leftBoundary ? outOfBoundaryAmount.x = this._leftBoundary - (this._getContentLeftBoundary() + addition.x) : this._getContentRightBoundary() + addition.x < this._rightBoundary && (outOfBoundaryAmount.x = this._rightBoundary - (this._getContentRightBoundary() + addition.x));
        this._getContentTopBoundary() + addition.y < this._topBoundary ? outOfBoundaryAmount.y = this._topBoundary - (this._getContentTopBoundary() + addition.y) : this._getContentBottomBoundary() + addition.y > this._bottomBoundary && (outOfBoundaryAmount.y = this._bottomBoundary - (this._getContentBottomBoundary() + addition.y));
        if (addition.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
          this._outOfBoundaryAmount = outOfBoundaryAmount;
          this._outOfBoundaryAmountDirty = false;
        }
        outOfBoundaryAmount = this._clampDelta(outOfBoundaryAmount);
        return outOfBoundaryAmount;
      },
      _updateScrollBar: function(outOfBoundary) {
        this.horizontalScrollBar && this.horizontalScrollBar._onScroll(outOfBoundary);
        this.verticalScrollBar && this.verticalScrollBar._onScroll(outOfBoundary);
      },
      _onScrollBarTouchBegan: function() {
        this.horizontalScrollBar && this.horizontalScrollBar._onTouchBegan();
        this.verticalScrollBar && this.verticalScrollBar._onTouchBegan();
      },
      _onScrollBarTouchEnded: function() {
        this.horizontalScrollBar && this.horizontalScrollBar._onTouchEnded();
        this.verticalScrollBar && this.verticalScrollBar._onTouchEnded();
      },
      _dispatchEvent: function(event) {
        if ("scroll-ended" === event) this._scrollEventEmitMask = 0; else if ("scroll-to-top" === event || "scroll-to-bottom" === event || "scroll-to-left" === event || "scroll-to-right" === event) {
          var flag = 1 << eventMap[event];
          if (this._scrollEventEmitMask & flag) return;
          this._scrollEventEmitMask |= flag;
        }
        cc.Component.EventHandler.emitEvents(this.scrollEvents, this, eventMap[event]);
        this.node.emit(event, this);
      },
      _adjustContentOutOfBoundary: function() {
        this._outOfBoundaryAmountDirty = true;
        if (this._isOutOfBoundary()) {
          var outOfBoundary = this._getHowMuchOutOfBoundary(cc.v2(0, 0));
          var newPosition = this.getContentPosition().add(outOfBoundary);
          if (this.content) {
            this.content.setPosition(newPosition);
            this._updateScrollBar(0);
          }
        }
      },
      start: function() {
        this._calculateBoundary();
        this.content && cc.director.once(cc.Director.EVENT_BEFORE_DRAW, this._adjustContentOutOfBoundary, this);
      },
      _hideScrollbar: function() {
        this.horizontalScrollBar && this.horizontalScrollBar.hide();
        this.verticalScrollBar && this.verticalScrollBar.hide();
      },
      _showScrollbar: function() {
        this.horizontalScrollBar && this.horizontalScrollBar.show();
        this.verticalScrollBar && this.verticalScrollBar.show();
      },
      onDisable: function() {
        true;
        this._unregisterEvent();
        this.node.off(NodeEvent.SIZE_CHANGED, this._calculateBoundary, this);
        this.node.off(NodeEvent.SCALE_CHANGED, this._calculateBoundary, this);
        if (this.content) {
          this.content.off(NodeEvent.SIZE_CHANGED, this._calculateBoundary, this);
          this.content.off(NodeEvent.SCALE_CHANGED, this._calculateBoundary, this);
          if (this._view) {
            this._view.off(NodeEvent.POSITION_CHANGED, this._calculateBoundary, this);
            this._view.off(NodeEvent.SCALE_CHANGED, this._calculateBoundary, this);
            this._view.off(NodeEvent.SIZE_CHANGED, this._calculateBoundary, this);
          }
        }
        this._hideScrollbar();
        this.stopAutoScroll();
      },
      onEnable: function() {
        true;
        this._registerEvent();
        this.node.on(NodeEvent.SIZE_CHANGED, this._calculateBoundary, this);
        this.node.on(NodeEvent.SCALE_CHANGED, this._calculateBoundary, this);
        if (this.content) {
          this.content.on(NodeEvent.SIZE_CHANGED, this._calculateBoundary, this);
          this.content.on(NodeEvent.SCALE_CHANGED, this._calculateBoundary, this);
          if (this._view) {
            this._view.on(NodeEvent.POSITION_CHANGED, this._calculateBoundary, this);
            this._view.on(NodeEvent.SCALE_CHANGED, this._calculateBoundary, this);
            this._view.on(NodeEvent.SIZE_CHANGED, this._calculateBoundary, this);
          }
        }
        this._showScrollbar();
      },
      update: function(dt) {
        this._autoScrolling && this._processAutoScrolling(dt);
      }
    });
    cc.ScrollView = module.exports = ScrollView;
  }), {
    "../CCNode": 6,
    "./CCViewGroup": 40
  } ],
  39: [ (function(require, module, exports) {
    var misc = require("../utils/misc");
    var NodeEvent = require("../CCNode").EventType;
    var RenderComponent = require("./CCRenderComponent");
    var RenderFlow = require("../renderer/render-flow");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var SpriteMaterial = renderEngine.SpriteMaterial;
    var GraySpriteMaterial = renderEngine.GraySpriteMaterial;
    var SpriteType = cc.Enum({
      SIMPLE: 0,
      SLICED: 1,
      TILED: 2,
      FILLED: 3,
      MESH: 4
    });
    var FillType = cc.Enum({
      HORIZONTAL: 0,
      VERTICAL: 1,
      RADIAL: 2
    });
    var SizeMode = cc.Enum({
      CUSTOM: 0,
      TRIMMED: 1,
      RAW: 2
    });
    var State = cc.Enum({
      NORMAL: 0,
      GRAY: 1
    });
    var Sprite = cc.Class({
      name: "cc.Sprite",
      extends: RenderComponent,
      ctor: function() {
        this._assembler = null;
        this._graySpriteMaterial = null;
        this._spriteMaterial = null;
      },
      editor: false,
      properties: {
        _spriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        _type: SpriteType.SIMPLE,
        _sizeMode: SizeMode.TRIMMED,
        _fillType: 0,
        _fillCenter: cc.v2(0, 0),
        _fillStart: 0,
        _fillRange: 0,
        _isTrimmedMode: true,
        _state: 0,
        _atlas: {
          default: null,
          type: cc.SpriteAtlas,
          tooltip: false,
          editorOnly: true,
          visible: true,
          animatable: false
        },
        spriteFrame: {
          get: function() {
            return this._spriteFrame;
          },
          set: function(value, force) {
            var lastSprite = this._spriteFrame;
            false;
            if (lastSprite === value) return;
            this._spriteFrame = value;
            this.markForUpdateRenderData(false);
            this._applySpriteFrame(lastSprite);
            false;
          },
          type: cc.SpriteFrame
        },
        type: {
          get: function() {
            return this._type;
          },
          set: function(value) {
            if (this._type !== value) {
              this.destroyRenderData(this._renderData);
              this._renderData = null;
              this._type = value;
              this._updateAssembler();
            }
          },
          type: SpriteType,
          animatable: false,
          tooltip: false
        },
        fillType: {
          get: function() {
            return this._fillType;
          },
          set: function(value) {
            if (value !== this._fillType) {
              if (value === FillType.RADIAL || this._fillType === FillType.RADIAL) {
                this.destroyRenderData(this._renderData);
                this._renderData = null;
              } else this._renderData && this.markForUpdateRenderData(true);
              this._fillType = value;
              this._updateAssembler();
            }
          },
          type: FillType,
          tooltip: false
        },
        fillCenter: {
          get: function() {
            return this._fillCenter;
          },
          set: function(value) {
            this._fillCenter.x = value.x;
            this._fillCenter.y = value.y;
            this._type === SpriteType.FILLED && this._renderData && this.markForUpdateRenderData(true);
          },
          tooltip: false
        },
        fillStart: {
          get: function() {
            return this._fillStart;
          },
          set: function(value) {
            this._fillStart = misc.clampf(value, -1, 1);
            this._type === SpriteType.FILLED && this._renderData && this.markForUpdateRenderData(true);
          },
          tooltip: false
        },
        fillRange: {
          get: function() {
            return this._fillRange;
          },
          set: function(value) {
            this._fillRange = misc.clampf(value, -1, 1);
            this._type === SpriteType.FILLED && this._renderData && this.markForUpdateRenderData(true);
          },
          tooltip: false
        },
        trim: {
          get: function() {
            return this._isTrimmedMode;
          },
          set: function(value) {
            if (this._isTrimmedMode !== value) {
              this._isTrimmedMode = value;
              this._type !== SpriteType.SIMPLE && this._type !== SpriteType.MESH || !this._renderData || this.markForUpdateRenderData(true);
            }
          },
          animatable: false,
          tooltip: false
        },
        sizeMode: {
          get: function() {
            return this._sizeMode;
          },
          set: function(value) {
            this._sizeMode = value;
            value !== SizeMode.CUSTOM && this._applySpriteSize();
          },
          animatable: false,
          type: SizeMode,
          tooltip: false
        }
      },
      statics: {
        FillType: FillType,
        Type: SpriteType,
        SizeMode: SizeMode,
        State: State
      },
      setVisible: function(visible) {
        this.enabled = visible;
      },
      setState: function(state) {
        if (this._state === state) return;
        this._state = state;
        this._activateMaterial();
      },
      getState: function() {
        return this._state;
      },
      onEnable: function() {
        this._super();
        if (!this._spriteFrame || !this._spriteFrame.textureLoaded()) {
          this.disableRender();
          if (this._spriteFrame) {
            this._spriteFrame.once("load", this._onTextureLoaded, this);
            this._spriteFrame.ensureLoadTexture();
          }
        }
        this._updateAssembler();
        this._activateMaterial();
        this.node.on(NodeEvent.SIZE_CHANGED, this._onNodeSizeDirty, this);
        this.node.on(NodeEvent.ANCHOR_CHANGED, this._onNodeSizeDirty, this);
      },
      onDisable: function() {
        this._super();
        this.node.off(NodeEvent.SIZE_CHANGED, this._onNodeSizeDirty, this);
        this.node.off(NodeEvent.ANCHOR_CHANGED, this._onNodeSizeDirty, this);
      },
      _onNodeSizeDirty: function() {
        if (!this._renderData) return;
        this.markForUpdateRenderData(true);
      },
      _on3DNodeChanged: function() {
        this._updateAssembler();
      },
      _updateAssembler: function() {
        var assembler = Sprite._assembler.getAssembler(this);
        if (this._assembler !== assembler) {
          this._assembler = assembler;
          this._renderData = null;
        }
        if (!this._renderData) {
          this._renderData = this._assembler.createData(this);
          this._renderData.material = this._material;
          this.markForUpdateRenderData(true);
        }
      },
      _activateMaterial: function() {
        var spriteFrame = this._spriteFrame;
        if (cc.game.renderType !== cc.game.RENDER_TYPE_CANVAS) {
          var material = void 0;
          if (this._state === State.GRAY) {
            this._graySpriteMaterial || (this._graySpriteMaterial = new GraySpriteMaterial());
            material = this._graySpriteMaterial;
          } else {
            this._spriteMaterial || (this._spriteMaterial = new SpriteMaterial());
            material = this._spriteMaterial;
          }
          material.useColor = false;
          if (spriteFrame && spriteFrame.textureLoaded()) {
            var texture = spriteFrame.getTexture();
            if (material.texture !== texture) {
              material.texture = texture;
              this._updateMaterial(material);
            } else material !== this._material && this._updateMaterial(material);
            this._renderData && (this._renderData.material = material);
            this.node._renderFlag |= RenderFlow.FLAG_COLOR;
            this.markForUpdateRenderData(true);
            this.markForRender(true);
          } else this.disableRender();
        } else {
          this.markForUpdateRenderData(true);
          this.markForRender(true);
        }
      },
      _applyAtlas: false,
      _canRender: function() {
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
          if (!this._enabled) return false;
        } else if (!this._enabled || !this._material || !this.node._activeInHierarchy) return false;
        var spriteFrame = this._spriteFrame;
        if (!spriteFrame || !spriteFrame.textureLoaded()) return false;
        return true;
      },
      markForUpdateRenderData: function(enable) {
        if (enable && this._canRender()) {
          this.node._renderFlag |= RenderFlow.FLAG_UPDATE_RENDER_DATA;
          var renderData = this._renderData;
          if (renderData) {
            renderData.uvDirty = true;
            renderData.vertDirty = true;
          }
        } else enable || (this.node._renderFlag &= ~RenderFlow.FLAG_UPDATE_RENDER_DATA);
      },
      _applySpriteSize: function() {
        if (this._spriteFrame) {
          if (SizeMode.RAW === this._sizeMode) {
            var size = this._spriteFrame.getOriginalSize();
            this.node.setContentSize(size);
          } else if (SizeMode.TRIMMED === this._sizeMode) {
            var rect = this._spriteFrame.getRect();
            this.node.setContentSize(rect.width, rect.height);
          }
          this._activateMaterial();
        }
      },
      _onTextureLoaded: function() {
        if (!this.isValid) return;
        this._applySpriteSize();
      },
      _applySpriteFrame: function(oldFrame) {
        oldFrame && oldFrame.off && oldFrame.off("load", this._onTextureLoaded, this);
        var spriteFrame = this._spriteFrame;
        spriteFrame && (this._material && this._material._texture) === (spriteFrame && spriteFrame._texture) || this.markForRender(false);
        if (spriteFrame) if (oldFrame && spriteFrame._texture === oldFrame._texture) this._applySpriteSize(); else if (spriteFrame.textureLoaded()) this._onTextureLoaded(null); else {
          spriteFrame.once("load", this._onTextureLoaded, this);
          spriteFrame.ensureLoadTexture();
        }
        false;
      },
      _resized: false
    });
    false;
    cc.Sprite = module.exports = Sprite;
  }), {
    "../CCNode": 6,
    "../renderer/render-flow": 129,
    "../utils/misc": 139,
    "./CCRenderComponent": 36,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  40: [ (function(require, module, exports) {
    var ViewGroup = cc.Class({
      name: "cc.ViewGroup",
      extends: require("./CCComponent")
    });
    cc.ViewGroup = module.exports = ViewGroup;
  }), {
    "./CCComponent": 31
  } ],
  41: [ (function(require, module, exports) {
    var Component = require("./CCComponent");
    var WXSubContextView = void 0;
    true, false;
    WXSubContextView = cc.Class({
      name: "cc.WXSubContextView",
      extends: Component,
      editor: false,
      ctor: function() {
        this._sprite = null;
        this._tex = new cc.Texture2D();
        this._context = null;
      },
      onLoad: function() {
        if (wx.getOpenDataContext) {
          this._context = wx.getOpenDataContext();
          var sharedCanvas = this._context.canvas;
          if (sharedCanvas) {
            sharedCanvas.width = this.node.width;
            sharedCanvas.height = this.node.height;
          }
          this._tex.setPremultiplyAlpha(true);
          this._tex.initWithElement(sharedCanvas);
          this._sprite = this.node.getComponent(cc.Sprite);
          if (!this._sprite) {
            this._sprite = this.node.addComponent(cc.Sprite);
            this._sprite.srcBlendFactor = cc.macro.BlendFactor.ONE;
          }
          this._sprite.spriteFrame = new cc.SpriteFrame(this._tex);
        } else this.enabled = false;
      },
      onEnable: function() {
        this.updateSubContextViewport();
      },
      update: function() {
        if (!this._tex || !this._context) return;
        this._tex.initWithElement(this._context.canvas);
        this._sprite._activateMaterial();
      },
      updateSubContextViewport: function() {
        if (this._context) {
          var box = this.node.getBoundingBoxToWorld();
          var sx = cc.view._scaleX;
          var sy = cc.view._scaleY;
          this._context.postMessage({
            fromEngine: true,
            event: "viewport",
            x: box.x * sx + cc.view._viewportRect.x,
            y: box.y * sy + cc.view._viewportRect.y,
            width: box.width * sx,
            height: box.height * sy
          });
        }
      }
    });
    cc.WXSubContextView = module.exports = WXSubContextView;
  }), {
    "./CCComponent": 31
  } ],
  42: [ (function(require, module, exports) {
    require("./CCComponent");
    require("./CCComponentEventHandler");
    require("./missing-script");
    var components = [ require("./CCSprite"), require("./CCWidget"), require("./CCCanvas"), require("./CCAudioSource"), require("./CCAnimation"), require("./CCButton"), require("./CCLabel"), require("./CCProgressBar"), require("./CCMask"), require("./CCScrollBar"), require("./CCScrollView"), require("./CCPageViewIndicator"), require("./CCPageView"), require("./CCSlider"), require("./CCLayout"), require("./editbox/CCEditBox"), require("./CCLabelOutline"), require("./CCRichText"), require("./CCToggleContainer"), require("./CCToggleGroup"), require("./CCToggle"), require("./CCBlockInputEvents"), require("./CCMotionStreak"), require("./WXSubContextView") ];
    module.exports = components;
  }), {
    "./CCAnimation": void 0,
    "./CCAudioSource": void 0,
    "./CCBlockInputEvents": 29,
    "./CCButton": void 0,
    "./CCCanvas": 30,
    "./CCComponent": 31,
    "./CCComponentEventHandler": 32,
    "./CCLabel": 33,
    "./CCLabelOutline": void 0,
    "./CCLayout": 34,
    "./CCMask": 35,
    "./CCMotionStreak": void 0,
    "./CCPageView": void 0,
    "./CCPageViewIndicator": void 0,
    "./CCProgressBar": void 0,
    "./CCRichText": void 0,
    "./CCScrollBar": 37,
    "./CCScrollView": 38,
    "./CCSlider": void 0,
    "./CCSprite": 39,
    "./CCToggle": void 0,
    "./CCToggleContainer": void 0,
    "./CCToggleGroup": void 0,
    "./CCWidget": void 0,
    "./WXSubContextView": 41,
    "./editbox/CCEditBox": void 0,
    "./missing-script": 43
  } ],
  43: [ (function(require, module, exports) {
    var js = cc.js;
    var BUILTIN_CLASSID_RE = require("../utils/misc").BUILTIN_CLASSID_RE;
    var MissingClass = cc.Class({
      name: "cc.MissingClass",
      properties: {
        _$erialized: {
          default: null,
          visible: false,
          editorOnly: true
        }
      }
    });
    var MissingScript = cc.Class({
      name: "cc.MissingScript",
      extends: cc.Component,
      editor: {
        inspector: "packages://inspector/inspectors/comps/missing-script.js"
      },
      properties: {
        compiled: {
          default: false,
          serializable: false
        },
        _$erialized: {
          default: null,
          visible: false,
          editorOnly: true
        }
      },
      ctor: false,
      statics: {
        safeFindClass: function(id, data) {
          var cls = js._getClassById(id);
          if (cls) return cls;
          if (id) {
            cc.deserialize.reportMissingClass(id);
            return MissingScript.getMissingWrapper(id, data);
          }
          return null;
        },
        getMissingWrapper: function(id, data) {
          return data.node && (/^[0-9a-zA-Z+/]{23}$/.test(id) || BUILTIN_CLASSID_RE.test(id)) ? MissingScript : MissingClass;
        }
      },
      onLoad: function() {
        cc.warnID(4600, this.node.name);
      }
    });
    cc._MissingScript = module.exports = MissingScript;
  }), {
    "../utils/misc": 139
  } ],
  44: [ (function(require, module, exports) {
    var js = cc.js;
    require("../event/event");
    var EventMouse = function(eventType, bubbles) {
      cc.Event.call(this, cc.Event.MOUSE, bubbles);
      this._eventType = eventType;
      this._button = 0;
      this._x = 0;
      this._y = 0;
      this._prevX = 0;
      this._prevY = 0;
      this._scrollX = 0;
      this._scrollY = 0;
    };
    js.extend(EventMouse, cc.Event);
    var proto = EventMouse.prototype;
    proto.setScrollData = function(scrollX, scrollY) {
      this._scrollX = scrollX;
      this._scrollY = scrollY;
    };
    proto.getScrollX = function() {
      return this._scrollX;
    };
    proto.getScrollY = function() {
      return this._scrollY;
    };
    proto.setLocation = function(x, y) {
      this._x = x;
      this._y = y;
    };
    proto.getLocation = function() {
      return cc.v2(this._x, this._y);
    };
    proto.getLocationInView = function() {
      return cc.v2(this._x, cc.view._designResolutionSize.height - this._y);
    };
    proto._setPrevCursor = function(x, y) {
      this._prevX = x;
      this._prevY = y;
    };
    proto.getPreviousLocation = function() {
      return cc.v2(this._prevX, this._prevY);
    };
    proto.getDelta = function() {
      return cc.v2(this._x - this._prevX, this._y - this._prevY);
    };
    proto.getDeltaX = function() {
      return this._x - this._prevX;
    };
    proto.getDeltaY = function() {
      return this._y - this._prevY;
    };
    proto.setButton = function(button) {
      this._button = button;
    };
    proto.getButton = function() {
      return this._button;
    };
    proto.getLocationX = function() {
      return this._x;
    };
    proto.getLocationY = function() {
      return this._y;
    };
    EventMouse.NONE = 0;
    EventMouse.DOWN = 1;
    EventMouse.UP = 2;
    EventMouse.MOVE = 3;
    EventMouse.SCROLL = 4;
    EventMouse.BUTTON_LEFT = 0;
    EventMouse.BUTTON_RIGHT = 2;
    EventMouse.BUTTON_MIDDLE = 1;
    EventMouse.BUTTON_4 = 3;
    EventMouse.BUTTON_5 = 4;
    EventMouse.BUTTON_6 = 5;
    EventMouse.BUTTON_7 = 6;
    EventMouse.BUTTON_8 = 7;
    var EventTouch = function(touchArr, bubbles) {
      cc.Event.call(this, cc.Event.TOUCH, bubbles);
      this._eventCode = 0;
      this._touches = touchArr || [];
      this.touch = null;
      this.currentTouch = null;
    };
    js.extend(EventTouch, cc.Event);
    proto = EventTouch.prototype;
    proto.getEventCode = function() {
      return this._eventCode;
    };
    proto.getTouches = function() {
      return this._touches;
    };
    proto._setEventCode = function(eventCode) {
      this._eventCode = eventCode;
    };
    proto._setTouches = function(touches) {
      this._touches = touches;
    };
    proto.setLocation = function(x, y) {
      this.touch && this.touch.setTouchInfo(this.touch.getID(), x, y);
    };
    proto.getLocation = function() {
      return this.touch ? this.touch.getLocation() : cc.v2();
    };
    proto.getLocationInView = function() {
      return this.touch ? this.touch.getLocationInView() : cc.v2();
    };
    proto.getPreviousLocation = function() {
      return this.touch ? this.touch.getPreviousLocation() : cc.v2();
    };
    proto.getStartLocation = function() {
      return this.touch ? this.touch.getStartLocation() : cc.v2();
    };
    proto.getID = function() {
      return this.touch ? this.touch.getID() : null;
    };
    proto.getDelta = function() {
      return this.touch ? this.touch.getDelta() : cc.v2();
    };
    proto.getDeltaX = function() {
      return this.touch ? this.touch.getDelta().x : 0;
    };
    proto.getDeltaY = function() {
      return this.touch ? this.touch.getDelta().y : 0;
    };
    proto.getLocationX = function() {
      return this.touch ? this.touch.getLocationX() : 0;
    };
    proto.getLocationY = function() {
      return this.touch ? this.touch.getLocationY() : 0;
    };
    EventTouch.MAX_TOUCHES = 5;
    EventTouch.BEGAN = 0;
    EventTouch.MOVED = 1;
    EventTouch.ENDED = 2;
    EventTouch.CANCELED = 3;
    var EventAcceleration = function(acc, bubbles) {
      cc.Event.call(this, cc.Event.ACCELERATION, bubbles);
      this.acc = acc;
    };
    js.extend(EventAcceleration, cc.Event);
    var EventKeyboard = function(keyCode, isPressed, bubbles) {
      cc.Event.call(this, cc.Event.KEYBOARD, bubbles);
      this.keyCode = keyCode;
      this.isPressed = isPressed;
    };
    js.extend(EventKeyboard, cc.Event);
    cc.Event.EventMouse = EventMouse;
    cc.Event.EventTouch = EventTouch;
    cc.Event.EventAcceleration = EventAcceleration;
    cc.Event.EventKeyboard = EventKeyboard;
    module.exports = cc.Event;
  }), {
    "../event/event": 51
  } ],
  45: [ (function(require, module, exports) {
    var js = require("../platform/js");
    cc.EventListener = function(type, listenerID, callback) {
      this._onEvent = callback;
      this._type = type || 0;
      this._listenerID = listenerID || "";
      this._registered = false;
      this._fixedPriority = 0;
      this._node = null;
      this._target = null;
      this._paused = true;
      this._isEnabled = true;
    };
    cc.EventListener.prototype = {
      constructor: cc.EventListener,
      _setPaused: function(paused) {
        this._paused = paused;
      },
      _isPaused: function() {
        return this._paused;
      },
      _setRegistered: function(registered) {
        this._registered = registered;
      },
      _isRegistered: function() {
        return this._registered;
      },
      _getType: function() {
        return this._type;
      },
      _getListenerID: function() {
        return this._listenerID;
      },
      _setFixedPriority: function(fixedPriority) {
        this._fixedPriority = fixedPriority;
      },
      _getFixedPriority: function() {
        return this._fixedPriority;
      },
      _setSceneGraphPriority: function(node) {
        this._target = node;
        this._node = node;
      },
      _getSceneGraphPriority: function() {
        return this._node;
      },
      checkAvailable: function() {
        return null !== this._onEvent;
      },
      clone: function() {
        return null;
      },
      setEnabled: function(enabled) {
        this._isEnabled = enabled;
      },
      isEnabled: function() {
        return this._isEnabled;
      },
      retain: function() {},
      release: function() {}
    };
    cc.EventListener.UNKNOWN = 0;
    cc.EventListener.TOUCH_ONE_BY_ONE = 1;
    cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
    cc.EventListener.KEYBOARD = 3;
    cc.EventListener.MOUSE = 4;
    cc.EventListener.ACCELERATION = 6;
    cc.EventListener.CUSTOM = 8;
    var ListenerID = cc.EventListener.ListenerID = {
      MOUSE: "__cc_mouse",
      TOUCH_ONE_BY_ONE: "__cc_touch_one_by_one",
      TOUCH_ALL_AT_ONCE: "__cc_touch_all_at_once",
      KEYBOARD: "__cc_keyboard",
      ACCELERATION: "__cc_acceleration"
    };
    var Custom = function(listenerId, callback) {
      this._onCustomEvent = callback;
      cc.EventListener.call(this, cc.EventListener.CUSTOM, listenerId, this._callback);
    };
    js.extend(Custom, cc.EventListener);
    js.mixin(Custom.prototype, {
      _onCustomEvent: null,
      _callback: function(event) {
        null !== this._onCustomEvent && this._onCustomEvent(event);
      },
      checkAvailable: function() {
        return cc.EventListener.prototype.checkAvailable.call(this) && null !== this._onCustomEvent;
      },
      clone: function() {
        return new Custom(this._listenerID, this._onCustomEvent);
      }
    });
    var Mouse = function() {
      cc.EventListener.call(this, cc.EventListener.MOUSE, ListenerID.MOUSE, this._callback);
    };
    js.extend(Mouse, cc.EventListener);
    js.mixin(Mouse.prototype, {
      onMouseDown: null,
      onMouseUp: null,
      onMouseMove: null,
      onMouseScroll: null,
      _callback: function(event) {
        var eventType = cc.Event.EventMouse;
        switch (event._eventType) {
         case eventType.DOWN:
          this.onMouseDown && this.onMouseDown(event);
          break;

         case eventType.UP:
          this.onMouseUp && this.onMouseUp(event);
          break;

         case eventType.MOVE:
          this.onMouseMove && this.onMouseMove(event);
          break;

         case eventType.SCROLL:
          this.onMouseScroll && this.onMouseScroll(event);
        }
      },
      clone: function() {
        var eventListener = new Mouse();
        eventListener.onMouseDown = this.onMouseDown;
        eventListener.onMouseUp = this.onMouseUp;
        eventListener.onMouseMove = this.onMouseMove;
        eventListener.onMouseScroll = this.onMouseScroll;
        return eventListener;
      },
      checkAvailable: function() {
        return true;
      }
    });
    var TouchOneByOne = function() {
      cc.EventListener.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, ListenerID.TOUCH_ONE_BY_ONE, null);
      this._claimedTouches = [];
    };
    js.extend(TouchOneByOne, cc.EventListener);
    js.mixin(TouchOneByOne.prototype, {
      constructor: TouchOneByOne,
      _claimedTouches: null,
      swallowTouches: false,
      onTouchBegan: null,
      onTouchMoved: null,
      onTouchEnded: null,
      onTouchCancelled: null,
      setSwallowTouches: function(needSwallow) {
        this.swallowTouches = needSwallow;
      },
      isSwallowTouches: function() {
        return this.swallowTouches;
      },
      clone: function() {
        var eventListener = new TouchOneByOne();
        eventListener.onTouchBegan = this.onTouchBegan;
        eventListener.onTouchMoved = this.onTouchMoved;
        eventListener.onTouchEnded = this.onTouchEnded;
        eventListener.onTouchCancelled = this.onTouchCancelled;
        eventListener.swallowTouches = this.swallowTouches;
        return eventListener;
      },
      checkAvailable: function() {
        if (!this.onTouchBegan) {
          cc.logID(1801);
          return false;
        }
        return true;
      }
    });
    var TouchAllAtOnce = function() {
      cc.EventListener.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, ListenerID.TOUCH_ALL_AT_ONCE, null);
    };
    js.extend(TouchAllAtOnce, cc.EventListener);
    js.mixin(TouchAllAtOnce.prototype, {
      constructor: TouchAllAtOnce,
      onTouchesBegan: null,
      onTouchesMoved: null,
      onTouchesEnded: null,
      onTouchesCancelled: null,
      clone: function() {
        var eventListener = new TouchAllAtOnce();
        eventListener.onTouchesBegan = this.onTouchesBegan;
        eventListener.onTouchesMoved = this.onTouchesMoved;
        eventListener.onTouchesEnded = this.onTouchesEnded;
        eventListener.onTouchesCancelled = this.onTouchesCancelled;
        return eventListener;
      },
      checkAvailable: function() {
        if (null === this.onTouchesBegan && null === this.onTouchesMoved && null === this.onTouchesEnded && null === this.onTouchesCancelled) {
          cc.logID(1802);
          return false;
        }
        return true;
      }
    });
    var Acceleration = function(callback) {
      this._onAccelerationEvent = callback;
      cc.EventListener.call(this, cc.EventListener.ACCELERATION, ListenerID.ACCELERATION, this._callback);
    };
    js.extend(Acceleration, cc.EventListener);
    js.mixin(Acceleration.prototype, {
      constructor: Acceleration,
      _onAccelerationEvent: null,
      _callback: function(event) {
        this._onAccelerationEvent(event.acc, event);
      },
      checkAvailable: function() {
        cc.assertID(this._onAccelerationEvent, 1803);
        return true;
      },
      clone: function() {
        return new Acceleration(this._onAccelerationEvent);
      }
    });
    var Keyboard = function() {
      cc.EventListener.call(this, cc.EventListener.KEYBOARD, ListenerID.KEYBOARD, this._callback);
    };
    js.extend(Keyboard, cc.EventListener);
    js.mixin(Keyboard.prototype, {
      constructor: Keyboard,
      onKeyPressed: null,
      onKeyReleased: null,
      _callback: function(event) {
        event.isPressed ? this.onKeyPressed && this.onKeyPressed(event.keyCode, event) : this.onKeyReleased && this.onKeyReleased(event.keyCode, event);
      },
      clone: function() {
        var eventListener = new Keyboard();
        eventListener.onKeyPressed = this.onKeyPressed;
        eventListener.onKeyReleased = this.onKeyReleased;
        return eventListener;
      },
      checkAvailable: function() {
        if (null === this.onKeyPressed && null === this.onKeyReleased) {
          cc.logID(1800);
          return false;
        }
        return true;
      }
    });
    cc.EventListener.create = function(argObj) {
      cc.assertID(argObj && argObj.event, 1900);
      var listenerType = argObj.event;
      delete argObj.event;
      var listener = null;
      if (listenerType === cc.EventListener.TOUCH_ONE_BY_ONE) listener = new TouchOneByOne(); else if (listenerType === cc.EventListener.TOUCH_ALL_AT_ONCE) listener = new TouchAllAtOnce(); else if (listenerType === cc.EventListener.MOUSE) listener = new Mouse(); else if (listenerType === cc.EventListener.CUSTOM) {
        listener = new Custom(argObj.eventName, argObj.callback);
        delete argObj.eventName;
        delete argObj.callback;
      } else if (listenerType === cc.EventListener.KEYBOARD) listener = new Keyboard(); else if (listenerType === cc.EventListener.ACCELERATION) {
        listener = new Acceleration(argObj.callback);
        delete argObj.callback;
      }
      for (var key in argObj) listener[key] = argObj[key];
      return listener;
    };
    module.exports = cc.EventListener;
  }), {
    "../platform/js": 106
  } ],
  46: [ (function(require, module, exports) {
    var js = require("../platform/js");
    require("./CCEventListener");
    var ListenerID = cc.EventListener.ListenerID;
    var _EventListenerVector = function() {
      this._fixedListeners = [];
      this._sceneGraphListeners = [];
      this.gt0Index = 0;
    };
    _EventListenerVector.prototype = {
      constructor: _EventListenerVector,
      size: function() {
        return this._fixedListeners.length + this._sceneGraphListeners.length;
      },
      empty: function() {
        return 0 === this._fixedListeners.length && 0 === this._sceneGraphListeners.length;
      },
      push: function(listener) {
        0 === listener._getFixedPriority() ? this._sceneGraphListeners.push(listener) : this._fixedListeners.push(listener);
      },
      clearSceneGraphListeners: function() {
        this._sceneGraphListeners.length = 0;
      },
      clearFixedListeners: function() {
        this._fixedListeners.length = 0;
      },
      clear: function() {
        this._sceneGraphListeners.length = 0;
        this._fixedListeners.length = 0;
      },
      getFixedPriorityListeners: function() {
        return this._fixedListeners;
      },
      getSceneGraphPriorityListeners: function() {
        return this._sceneGraphListeners;
      }
    };
    var __getListenerID = function(event) {
      var eventType = cc.Event, type = event.type;
      if (type === eventType.ACCELERATION) return ListenerID.ACCELERATION;
      if (type === eventType.KEYBOARD) return ListenerID.KEYBOARD;
      if (type.startsWith(eventType.MOUSE)) return ListenerID.MOUSE;
      type.startsWith(eventType.TOUCH) && cc.logID(2e3);
      return "";
    };
    var eventManager = {
      DIRTY_NONE: 0,
      DIRTY_FIXED_PRIORITY: 1,
      DIRTY_SCENE_GRAPH_PRIORITY: 2,
      DIRTY_ALL: 3,
      _listenersMap: {},
      _priorityDirtyFlagMap: {},
      _nodeListenersMap: {},
      _nodePriorityMap: js.createMap(true),
      _globalZOrderNodeMap: [],
      _toAddedListeners: [],
      _toRemovedListeners: [],
      _dirtyNodes: [],
      _inDispatch: 0,
      _isEnabled: false,
      _nodePriorityIndex: 0,
      _internalCustomListenerIDs: [],
      _setDirtyForNode: function(node) {
        void 0 !== this._nodeListenersMap[node._id] && this._dirtyNodes.push(node);
        if (node.getChildren) {
          var _children = node.getChildren();
          for (var i = 0, len = _children ? _children.length : 0; i < len; i++) this._setDirtyForNode(_children[i]);
        }
      },
      pauseTarget: function(node, recursive) {
        if (!(node instanceof cc._BaseNode)) {
          cc.warnID(3506);
          return;
        }
        var listeners = this._nodeListenersMap[node._id], i, len;
        if (listeners) for (i = 0, len = listeners.length; i < len; i++) listeners[i]._setPaused(true);
        if (true === recursive) {
          var locChildren = node.getChildren();
          for (i = 0, len = locChildren ? locChildren.length : 0; i < len; i++) this.pauseTarget(locChildren[i], true);
        }
      },
      resumeTarget: function(node, recursive) {
        if (!(node instanceof cc._BaseNode)) {
          cc.warnID(3506);
          return;
        }
        var listeners = this._nodeListenersMap[node._id], i, len;
        if (listeners) for (i = 0, len = listeners.length; i < len; i++) listeners[i]._setPaused(false);
        this._setDirtyForNode(node);
        if (true === recursive && node.getChildren) {
          var locChildren = node.getChildren();
          for (i = 0, len = locChildren ? locChildren.length : 0; i < len; i++) this.resumeTarget(locChildren[i], true);
        }
      },
      _addListener: function(listener) {
        0 === this._inDispatch ? this._forceAddEventListener(listener) : this._toAddedListeners.push(listener);
      },
      _forceAddEventListener: function(listener) {
        var listenerID = listener._getListenerID();
        var listeners = this._listenersMap[listenerID];
        if (!listeners) {
          listeners = new _EventListenerVector();
          this._listenersMap[listenerID] = listeners;
        }
        listeners.push(listener);
        if (0 === listener._getFixedPriority()) {
          this._setDirty(listenerID, this.DIRTY_SCENE_GRAPH_PRIORITY);
          var node = listener._getSceneGraphPriority();
          null === node && cc.logID(3507);
          this._associateNodeAndEventListener(node, listener);
          node.activeInHierarchy && this.resumeTarget(node);
        } else this._setDirty(listenerID, this.DIRTY_FIXED_PRIORITY);
      },
      _getListeners: function(listenerID) {
        return this._listenersMap[listenerID];
      },
      _updateDirtyFlagForSceneGraph: function() {
        if (0 === this._dirtyNodes.length) return;
        var locDirtyNodes = this._dirtyNodes, selListeners, selListener, locNodeListenersMap = this._nodeListenersMap;
        for (var i = 0, len = locDirtyNodes.length; i < len; i++) {
          selListeners = locNodeListenersMap[locDirtyNodes[i]._id];
          if (selListeners) for (var j = 0, listenersLen = selListeners.length; j < listenersLen; j++) {
            selListener = selListeners[j];
            selListener && this._setDirty(selListener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
          }
        }
        this._dirtyNodes.length = 0;
      },
      _removeAllListenersInVector: function(listenerVector) {
        if (!listenerVector) return;
        var selListener;
        for (var i = 0; i < listenerVector.length; ) {
          selListener = listenerVector[i];
          selListener._setRegistered(false);
          if (null != selListener._getSceneGraphPriority()) {
            this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
            selListener._setSceneGraphPriority(null);
          }
          0 === this._inDispatch ? cc.js.array.remove(listenerVector, selListener) : ++i;
        }
      },
      _removeListenersForListenerID: function(listenerID) {
        var listeners = this._listenersMap[listenerID], i;
        if (listeners) {
          var fixedPriorityListeners = listeners.getFixedPriorityListeners();
          var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
          this._removeAllListenersInVector(sceneGraphPriorityListeners);
          this._removeAllListenersInVector(fixedPriorityListeners);
          delete this._priorityDirtyFlagMap[listenerID];
          if (!this._inDispatch) {
            listeners.clear();
            delete this._listenersMap[listenerID];
          }
        }
        var locToAddedListeners = this._toAddedListeners, listener;
        for (i = 0; i < locToAddedListeners.length; ) {
          listener = locToAddedListeners[i];
          listener && listener._getListenerID() === listenerID ? cc.js.array.remove(locToAddedListeners, listener) : ++i;
        }
      },
      _sortEventListeners: function(listenerID) {
        var dirtyFlag = this.DIRTY_NONE, locFlagMap = this._priorityDirtyFlagMap;
        locFlagMap[listenerID] && (dirtyFlag = locFlagMap[listenerID]);
        if (dirtyFlag !== this.DIRTY_NONE) {
          locFlagMap[listenerID] = this.DIRTY_NONE;
          dirtyFlag & this.DIRTY_FIXED_PRIORITY && this._sortListenersOfFixedPriority(listenerID);
          if (dirtyFlag & this.DIRTY_SCENE_GRAPH_PRIORITY) {
            var rootEntity = cc.director.getScene();
            rootEntity && this._sortListenersOfSceneGraphPriority(listenerID, rootEntity);
          }
        }
      },
      _sortListenersOfSceneGraphPriority: function(listenerID, rootNode) {
        var listeners = this._getListeners(listenerID);
        if (!listeners) return;
        var sceneGraphListener = listeners.getSceneGraphPriorityListeners();
        if (!sceneGraphListener || 0 === sceneGraphListener.length) return;
        this._nodePriorityIndex = 0;
        this._nodePriorityMap = js.createMap(true);
        this._visitTarget(rootNode, true);
        listeners.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes);
      },
      _sortEventListenersOfSceneGraphPriorityDes: function(l1, l2) {
        var locNodePriorityMap = eventManager._nodePriorityMap, node1 = l1._getSceneGraphPriority(), node2 = l2._getSceneGraphPriority();
        if (!(l2 && node2 && locNodePriorityMap[node2._id])) return -1;
        if (!l1 || !node1 || !locNodePriorityMap[node1._id]) return 1;
        return locNodePriorityMap[node2._id] - locNodePriorityMap[node1._id];
      },
      _sortListenersOfFixedPriority: function(listenerID) {
        var listeners = this._listenersMap[listenerID];
        if (!listeners) return;
        var fixedListeners = listeners.getFixedPriorityListeners();
        if (!fixedListeners || 0 === fixedListeners.length) return;
        fixedListeners.sort(this._sortListenersOfFixedPriorityAsc);
        var index = 0;
        for (var len = fixedListeners.length; index < len; ) {
          if (fixedListeners[index]._getFixedPriority() >= 0) break;
          ++index;
        }
        listeners.gt0Index = index;
      },
      _sortListenersOfFixedPriorityAsc: function(l1, l2) {
        return l1._getFixedPriority() - l2._getFixedPriority();
      },
      _onUpdateListeners: function(listeners) {
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        var i, selListener, idx, toRemovedListeners = this._toRemovedListeners;
        if (sceneGraphPriorityListeners) for (i = 0; i < sceneGraphPriorityListeners.length; ) {
          selListener = sceneGraphPriorityListeners[i];
          if (selListener._isRegistered()) ++i; else {
            cc.js.array.remove(sceneGraphPriorityListeners, selListener);
            idx = toRemovedListeners.indexOf(selListener);
            -1 !== idx && toRemovedListeners.splice(idx, 1);
          }
        }
        if (fixedPriorityListeners) for (i = 0; i < fixedPriorityListeners.length; ) {
          selListener = fixedPriorityListeners[i];
          if (selListener._isRegistered()) ++i; else {
            cc.js.array.remove(fixedPriorityListeners, selListener);
            idx = toRemovedListeners.indexOf(selListener);
            -1 !== idx && toRemovedListeners.splice(idx, 1);
          }
        }
        sceneGraphPriorityListeners && 0 === sceneGraphPriorityListeners.length && listeners.clearSceneGraphListeners();
        fixedPriorityListeners && 0 === fixedPriorityListeners.length && listeners.clearFixedListeners();
      },
      frameUpdateListeners: function() {
        var locListenersMap = this._listenersMap, locPriorityDirtyFlagMap = this._priorityDirtyFlagMap;
        for (var selKey in locListenersMap) if (locListenersMap[selKey].empty()) {
          delete locPriorityDirtyFlagMap[selKey];
          delete locListenersMap[selKey];
        }
        var locToAddedListeners = this._toAddedListeners;
        if (0 !== locToAddedListeners.length) {
          for (var i = 0, len = locToAddedListeners.length; i < len; i++) this._forceAddEventListener(locToAddedListeners[i]);
          locToAddedListeners.length = 0;
        }
        0 !== this._toRemovedListeners.length && this._cleanToRemovedListeners();
      },
      _updateTouchListeners: function(event) {
        var locInDispatch = this._inDispatch;
        cc.assertID(locInDispatch > 0, 3508);
        if (locInDispatch > 1) return;
        var listeners;
        listeners = this._listenersMap[ListenerID.TOUCH_ONE_BY_ONE];
        listeners && this._onUpdateListeners(listeners);
        listeners = this._listenersMap[ListenerID.TOUCH_ALL_AT_ONCE];
        listeners && this._onUpdateListeners(listeners);
        cc.assertID(1 === locInDispatch, 3509);
        var locToAddedListeners = this._toAddedListeners;
        if (0 !== locToAddedListeners.length) {
          for (var i = 0, len = locToAddedListeners.length; i < len; i++) this._forceAddEventListener(locToAddedListeners[i]);
          this._toAddedListeners.length = 0;
        }
        0 !== this._toRemovedListeners.length && this._cleanToRemovedListeners();
      },
      _cleanToRemovedListeners: function() {
        var toRemovedListeners = this._toRemovedListeners;
        for (var i = 0; i < toRemovedListeners.length; i++) {
          var selListener = toRemovedListeners[i];
          var listeners = this._listenersMap[selListener._getListenerID()];
          if (!listeners) continue;
          var idx, fixedPriorityListeners = listeners.getFixedPriorityListeners(), sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
          if (sceneGraphPriorityListeners) {
            idx = sceneGraphPriorityListeners.indexOf(selListener);
            -1 !== idx && sceneGraphPriorityListeners.splice(idx, 1);
          }
          if (fixedPriorityListeners) {
            idx = fixedPriorityListeners.indexOf(selListener);
            -1 !== idx && fixedPriorityListeners.splice(idx, 1);
          }
        }
        toRemovedListeners.length = 0;
      },
      _onTouchEventCallback: function(listener, argsObj) {
        if (!listener._isRegistered()) return false;
        var event = argsObj.event, selTouch = event.currentTouch;
        event.currentTarget = listener._node;
        var isClaimed = false, removedIdx;
        var getCode = event.getEventCode(), EventTouch = cc.Event.EventTouch;
        if (getCode === EventTouch.BEGAN) {
          if (listener.onTouchBegan) {
            isClaimed = listener.onTouchBegan(selTouch, event);
            isClaimed && listener._registered && listener._claimedTouches.push(selTouch);
          }
        } else if (listener._claimedTouches.length > 0 && -1 !== (removedIdx = listener._claimedTouches.indexOf(selTouch))) {
          isClaimed = true;
          if (getCode === EventTouch.MOVED && listener.onTouchMoved) listener.onTouchMoved(selTouch, event); else if (getCode === EventTouch.ENDED) {
            listener.onTouchEnded && listener.onTouchEnded(selTouch, event);
            listener._registered && listener._claimedTouches.splice(removedIdx, 1);
          } else if (getCode === EventTouch.CANCELLED) {
            listener.onTouchCancelled && listener.onTouchCancelled(selTouch, event);
            listener._registered && listener._claimedTouches.splice(removedIdx, 1);
          }
        }
        if (event.isStopped()) {
          eventManager._updateTouchListeners(event);
          return true;
        }
        if (isClaimed && listener.swallowTouches) {
          argsObj.needsMutableSet && argsObj.touches.splice(selTouch, 1);
          return true;
        }
        return false;
      },
      _dispatchTouchEvent: function(event) {
        this._sortEventListeners(ListenerID.TOUCH_ONE_BY_ONE);
        this._sortEventListeners(ListenerID.TOUCH_ALL_AT_ONCE);
        var oneByOneListeners = this._getListeners(ListenerID.TOUCH_ONE_BY_ONE);
        var allAtOnceListeners = this._getListeners(ListenerID.TOUCH_ALL_AT_ONCE);
        if (null === oneByOneListeners && null === allAtOnceListeners) return;
        var originalTouches = event.getTouches(), mutableTouches = cc.js.array.copy(originalTouches);
        var oneByOneArgsObj = {
          event: event,
          needsMutableSet: oneByOneListeners && allAtOnceListeners,
          touches: mutableTouches,
          selTouch: null
        };
        if (oneByOneListeners) for (var i = 0; i < originalTouches.length; i++) {
          event.currentTouch = originalTouches[i];
          event._propagationStopped = event._propagationImmediateStopped = false;
          this._dispatchEventToListeners(oneByOneListeners, this._onTouchEventCallback, oneByOneArgsObj);
        }
        if (allAtOnceListeners && mutableTouches.length > 0) {
          this._dispatchEventToListeners(allAtOnceListeners, this._onTouchesEventCallback, {
            event: event,
            touches: mutableTouches
          });
          if (event.isStopped()) return;
        }
        this._updateTouchListeners(event);
      },
      _onTouchesEventCallback: function(listener, callbackParams) {
        if (!listener._registered) return false;
        var EventTouch = cc.Event.EventTouch, event = callbackParams.event, touches = callbackParams.touches, getCode = event.getEventCode();
        event.currentTarget = listener._node;
        getCode === EventTouch.BEGAN && listener.onTouchesBegan ? listener.onTouchesBegan(touches, event) : getCode === EventTouch.MOVED && listener.onTouchesMoved ? listener.onTouchesMoved(touches, event) : getCode === EventTouch.ENDED && listener.onTouchesEnded ? listener.onTouchesEnded(touches, event) : getCode === EventTouch.CANCELLED && listener.onTouchesCancelled && listener.onTouchesCancelled(touches, event);
        if (event.isStopped()) {
          eventManager._updateTouchListeners(event);
          return true;
        }
        return false;
      },
      _associateNodeAndEventListener: function(node, listener) {
        var listeners = this._nodeListenersMap[node._id];
        if (!listeners) {
          listeners = [];
          this._nodeListenersMap[node._id] = listeners;
        }
        listeners.push(listener);
      },
      _dissociateNodeAndEventListener: function(node, listener) {
        var listeners = this._nodeListenersMap[node._id];
        if (listeners) {
          cc.js.array.remove(listeners, listener);
          0 === listeners.length && delete this._nodeListenersMap[node._id];
        }
      },
      _dispatchEventToListeners: function(listeners, onEvent, eventOrArgs) {
        var shouldStopPropagation = false;
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        var i = 0, j, selListener;
        if (fixedPriorityListeners && 0 !== fixedPriorityListeners.length) for (;i < listeners.gt0Index; ++i) {
          selListener = fixedPriorityListeners[i];
          if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
            shouldStopPropagation = true;
            break;
          }
        }
        if (sceneGraphPriorityListeners && !shouldStopPropagation) for (j = 0; j < sceneGraphPriorityListeners.length; j++) {
          selListener = sceneGraphPriorityListeners[j];
          if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
            shouldStopPropagation = true;
            break;
          }
        }
        if (fixedPriorityListeners && !shouldStopPropagation) for (;i < fixedPriorityListeners.length; ++i) {
          selListener = fixedPriorityListeners[i];
          if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
            shouldStopPropagation = true;
            break;
          }
        }
      },
      _setDirty: function(listenerID, flag) {
        var locDirtyFlagMap = this._priorityDirtyFlagMap;
        null == locDirtyFlagMap[listenerID] ? locDirtyFlagMap[listenerID] = flag : locDirtyFlagMap[listenerID] = flag | locDirtyFlagMap[listenerID];
      },
      _visitTarget: function(node, isRootNode) {
        node._reorderChildDirty && node.sortAllChildren();
        var children = node.getChildren(), i = 0;
        var childrenCount = children.length, locGlobalZOrderNodeMap = this._globalZOrderNodeMap, locNodeListenersMap = this._nodeListenersMap;
        if (childrenCount > 0) {
          if (void 0 !== locNodeListenersMap[node._id]) {
            locGlobalZOrderNodeMap || (locGlobalZOrderNodeMap = []);
            locGlobalZOrderNodeMap.push(node._id);
          }
          var child;
          for (;i < childrenCount; i++) {
            child = children[i];
            child && this._visitTarget(child, false);
          }
        } else if (void 0 !== locNodeListenersMap[node._id]) {
          locGlobalZOrderNodeMap || (locGlobalZOrderNodeMap = []);
          locGlobalZOrderNodeMap.push(node._id);
        }
        if (isRootNode) {
          var locNodePriorityMap = this._nodePriorityMap;
          for (var j = 0; j < locGlobalZOrderNodeMap.length; j++) locNodePriorityMap[locGlobalZOrderNodeMap[j]] = ++this._nodePriorityIndex;
          this._globalZOrderNodeMap.length = 0;
        }
      },
      _sortNumberAsc: function(a, b) {
        return a - b;
      },
      hasEventListener: function(listenerID) {
        return !!this._getListeners(listenerID);
      },
      addListener: function(listener, nodeOrPriority) {
        cc.assertID(listener && nodeOrPriority, 3503);
        if (!(cc.js.isNumber(nodeOrPriority) || nodeOrPriority instanceof cc._BaseNode)) {
          cc.warnID(3506);
          return;
        }
        if (listener instanceof cc.EventListener) {
          if (listener._isRegistered()) {
            cc.logID(3505);
            return;
          }
        } else {
          cc.assertID(!cc.js.isNumber(nodeOrPriority), 3504);
          listener = cc.EventListener.create(listener);
        }
        if (!listener.checkAvailable()) return;
        if (cc.js.isNumber(nodeOrPriority)) {
          if (0 === nodeOrPriority) {
            cc.logID(3500);
            return;
          }
          listener._setSceneGraphPriority(null);
          listener._setFixedPriority(nodeOrPriority);
          listener._setRegistered(true);
          listener._setPaused(false);
          this._addListener(listener);
        } else {
          listener._setSceneGraphPriority(nodeOrPriority);
          listener._setFixedPriority(0);
          listener._setRegistered(true);
          this._addListener(listener);
        }
        return listener;
      },
      addCustomListener: function(eventName, callback) {
        var listener = new cc.EventListener.create({
          event: cc.EventListener.CUSTOM,
          eventName: eventName,
          callback: callback
        });
        this.addListener(listener, 1);
        return listener;
      },
      removeListener: function(listener) {
        if (null == listener) return;
        var isFound, locListener = this._listenersMap;
        for (var selKey in locListener) {
          var listeners = locListener[selKey];
          var fixedPriorityListeners = listeners.getFixedPriorityListeners(), sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
          isFound = this._removeListenerInVector(sceneGraphPriorityListeners, listener);
          if (isFound) this._setDirty(listener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY); else {
            isFound = this._removeListenerInVector(fixedPriorityListeners, listener);
            isFound && this._setDirty(listener._getListenerID(), this.DIRTY_FIXED_PRIORITY);
          }
          if (listeners.empty()) {
            delete this._priorityDirtyFlagMap[listener._getListenerID()];
            delete locListener[selKey];
          }
          if (isFound) break;
        }
        if (!isFound) {
          var locToAddedListeners = this._toAddedListeners;
          for (var i = 0, len = locToAddedListeners.length; i < len; i++) {
            var selListener = locToAddedListeners[i];
            if (selListener === listener) {
              cc.js.array.remove(locToAddedListeners, selListener);
              selListener._setRegistered(false);
              break;
            }
          }
        }
      },
      _removeListenerInCallback: function(listeners, callback) {
        if (null == listeners) return false;
        for (var i = 0, len = listeners.length; i < len; i++) {
          var selListener = listeners[i];
          if (selListener._onCustomEvent === callback || selListener._onEvent === callback) {
            selListener._setRegistered(false);
            if (null != selListener._getSceneGraphPriority()) {
              this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
              selListener._setSceneGraphPriority(null);
            }
            0 === this._inDispatch ? cc.js.array.remove(listeners, selListener) : this._toRemovedListeners.push(selListener);
            return true;
          }
        }
        return false;
      },
      _removeListenerInVector: function(listeners, listener) {
        if (null == listeners) return false;
        for (var i = 0, len = listeners.length; i < len; i++) {
          var selListener = listeners[i];
          if (selListener === listener) {
            selListener._setRegistered(false);
            if (null != selListener._getSceneGraphPriority()) {
              this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
              selListener._setSceneGraphPriority(null);
            }
            0 === this._inDispatch ? cc.js.array.remove(listeners, selListener) : this._toRemovedListeners.push(selListener);
            return true;
          }
        }
        return false;
      },
      removeListeners: function(listenerType, recursive) {
        var i, _t = this;
        if (!(cc.js.isNumber(listenerType) || listenerType instanceof cc._BaseNode)) {
          cc.warnID(3506);
          return;
        }
        if (void 0 !== listenerType._id) {
          delete _t._nodePriorityMap[listenerType._id];
          cc.js.array.remove(_t._dirtyNodes, listenerType);
          var listeners = _t._nodeListenersMap[listenerType._id], i;
          if (listeners) {
            var listenersCopy = cc.js.array.copy(listeners);
            for (i = 0; i < listenersCopy.length; i++) _t.removeListener(listenersCopy[i]);
            delete _t._nodeListenersMap[listenerType._id];
          }
          var locToAddedListeners = _t._toAddedListeners;
          for (i = 0; i < locToAddedListeners.length; ) {
            var listener = locToAddedListeners[i];
            if (listener._getSceneGraphPriority() === listenerType) {
              listener._setSceneGraphPriority(null);
              listener._setRegistered(false);
              locToAddedListeners.splice(i, 1);
            } else ++i;
          }
          if (true === recursive) {
            var locChildren = listenerType.getChildren(), len;
            for (i = 0, len = locChildren.length; i < len; i++) _t.removeListeners(locChildren[i], true);
          }
        } else listenerType === cc.EventListener.TOUCH_ONE_BY_ONE ? _t._removeListenersForListenerID(ListenerID.TOUCH_ONE_BY_ONE) : listenerType === cc.EventListener.TOUCH_ALL_AT_ONCE ? _t._removeListenersForListenerID(ListenerID.TOUCH_ALL_AT_ONCE) : listenerType === cc.EventListener.MOUSE ? _t._removeListenersForListenerID(ListenerID.MOUSE) : listenerType === cc.EventListener.ACCELERATION ? _t._removeListenersForListenerID(ListenerID.ACCELERATION) : listenerType === cc.EventListener.KEYBOARD ? _t._removeListenersForListenerID(ListenerID.KEYBOARD) : cc.logID(3501);
      },
      removeCustomListeners: function(customEventName) {
        this._removeListenersForListenerID(customEventName);
      },
      removeAllListeners: function() {
        var locListeners = this._listenersMap, locInternalCustomEventIDs = this._internalCustomListenerIDs;
        for (var selKey in locListeners) -1 === locInternalCustomEventIDs.indexOf(selKey) && this._removeListenersForListenerID(selKey);
      },
      setPriority: function(listener, fixedPriority) {
        if (null == listener) return;
        var locListeners = this._listenersMap;
        for (var selKey in locListeners) {
          var selListeners = locListeners[selKey];
          var fixedPriorityListeners = selListeners.getFixedPriorityListeners();
          if (fixedPriorityListeners) {
            var found = fixedPriorityListeners.indexOf(listener);
            if (-1 !== found) {
              null != listener._getSceneGraphPriority() && cc.logID(3502);
              if (listener._getFixedPriority() !== fixedPriority) {
                listener._setFixedPriority(fixedPriority);
                this._setDirty(listener._getListenerID(), this.DIRTY_FIXED_PRIORITY);
              }
              return;
            }
          }
        }
      },
      setEnabled: function(enabled) {
        this._isEnabled = enabled;
      },
      isEnabled: function() {
        return this._isEnabled;
      },
      dispatchEvent: function(event) {
        if (!this._isEnabled) return;
        this._updateDirtyFlagForSceneGraph();
        this._inDispatch++;
        if (!event || !event.getType) {
          cc.errorID(3511);
          return;
        }
        if (event.getType().startsWith(cc.Event.TOUCH)) {
          this._dispatchTouchEvent(event);
          this._inDispatch--;
          return;
        }
        var listenerID = __getListenerID(event);
        this._sortEventListeners(listenerID);
        var selListeners = this._listenersMap[listenerID];
        if (null != selListeners) {
          this._dispatchEventToListeners(selListeners, this._onListenerCallback, event);
          this._onUpdateListeners(selListeners);
        }
        this._inDispatch--;
      },
      _onListenerCallback: function(listener, event) {
        event.currentTarget = listener._target;
        listener._onEvent(event);
        return event.isStopped();
      },
      dispatchCustomEvent: function(eventName, optionalUserData) {
        var ev = new cc.Event.EventCustom(eventName);
        ev.setUserData(optionalUserData);
        this.dispatchEvent(ev);
      }
    };
    js.get(cc, "eventManager", (function() {
      cc.warnID(1405, "cc.eventManager", "cc.EventTarget or cc.systemEvent");
      return eventManager;
    }));
    module.exports = eventManager;
  }), {
    "../platform/js": 106,
    "./CCEventListener": 45
  } ],
  47: [ (function(require, module, exports) {
    cc.Touch = function(x, y, id) {
      this._lastModified = 0;
      this.setTouchInfo(id, x, y);
    };
    cc.Touch.prototype = {
      constructor: cc.Touch,
      getLocation: function() {
        return cc.v2(this._point.x, this._point.y);
      },
      getLocationX: function() {
        return this._point.x;
      },
      getLocationY: function() {
        return this._point.y;
      },
      getPreviousLocation: function() {
        return cc.v2(this._prevPoint.x, this._prevPoint.y);
      },
      getStartLocation: function() {
        return cc.v2(this._startPoint.x, this._startPoint.y);
      },
      getDelta: function() {
        return this._point.sub(this._prevPoint);
      },
      getLocationInView: function() {
        return cc.v2(this._point.x, cc.view._designResolutionSize.height - this._point.y);
      },
      getPreviousLocationInView: function() {
        return cc.v2(this._prevPoint.x, cc.view._designResolutionSize.height - this._prevPoint.y);
      },
      getStartLocationInView: function() {
        return cc.v2(this._startPoint.x, cc.view._designResolutionSize.height - this._startPoint.y);
      },
      getID: function() {
        return this._id;
      },
      setTouchInfo: function(id, x, y) {
        this._prevPoint = this._point;
        this._point = cc.v2(x || 0, y || 0);
        this._id = id;
        if (!this._startPointCaptured) {
          this._startPoint = cc.v2(this._point);
          cc.view._convertPointWithScale(this._startPoint);
          this._startPointCaptured = true;
        }
      },
      _setPoint: function(x, y) {
        if (void 0 === y) {
          this._point.x = x.x;
          this._point.y = x.y;
        } else {
          this._point.x = x;
          this._point.y = y;
        }
      },
      _setPrevPoint: function(x, y) {
        this._prevPoint = void 0 === y ? cc.v2(x.x, x.y) : cc.v2(x || 0, y || 0);
      }
    };
  }), {} ],
  48: [ (function(require, module, exports) {
    require("./CCEvent");
    require("./CCTouch");
    require("./CCEventListener");
    var eventManager = require("./CCEventManager");
    module.exports = eventManager;
    false;
  }), {
    "./CCEvent": 44,
    "./CCEventListener": 45,
    "./CCEventManager": 46,
    "./CCTouch": 47
  } ],
  49: [ (function(require, module, exports) {
    var js = cc.js;
    var CallbacksHandler = require("../platform/callbacks-invoker").CallbacksHandler;
    function EventListeners() {
      CallbacksHandler.call(this);
    }
    js.extend(EventListeners, CallbacksHandler);
    EventListeners.prototype.invoke = function(event, captureListeners) {
      var key = event.type;
      var list = this._callbackTable[key];
      if (list) {
        var rootInvoker = !list.isInvoking;
        list.isInvoking = true;
        var callbacks = list.callbacks;
        var targets = list.targets;
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          var callback = callbacks[i];
          if (callback) {
            var target = targets[i] || event.currentTarget;
            callback.call(target, event, captureListeners);
            if (event._propagationImmediateStopped) break;
          }
        }
        if (rootInvoker) {
          list.isInvoking = false;
          list.containCanceled && list.purgeCanceled();
        }
      }
    };
    module.exports = EventListeners;
    false;
  }), {
    "../platform/callbacks-invoker": 99
  } ],
  50: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var CallbacksInvoker = require("../platform/callbacks-invoker");
    var fastRemove = js.array.fastRemove;
    function EventTarget() {
      CallbacksInvoker.call(this);
    }
    js.extend(EventTarget, CallbacksInvoker);
    var proto = EventTarget.prototype;
    proto.on = function(type, callback, target) {
      if (!callback) {
        cc.errorID(6800);
        return;
      }
      if (!this.hasEventListener(type, callback, target)) {
        this.add(type, callback, target);
        target && target.__eventTargets && target.__eventTargets.push(this);
      }
      return callback;
    };
    proto.off = function(type, callback, target) {
      if (callback) {
        this.remove(type, callback, target);
        target && target.__eventTargets && fastRemove(target.__eventTargets, this);
      } else this.removeAll(type);
    };
    proto.targetOff = proto.removeAll;
    proto.once = function(type, callback, target) {
      var eventType_hasOnceListener = "__ONCE_FLAG:" + type;
      var hasOnceListener = this.hasEventListener(eventType_hasOnceListener, callback, target);
      if (!hasOnceListener) {
        var self = this;
        var onceWrapper = function(arg1, arg2, arg3, arg4, arg5) {
          self.off(type, onceWrapper, target);
          self.remove(eventType_hasOnceListener, callback, target);
          callback.call(this, arg1, arg2, arg3, arg4, arg5);
        };
        this.on(type, onceWrapper, target);
        this.add(eventType_hasOnceListener, callback, target);
      }
    };
    proto.emit = CallbacksInvoker.prototype.invoke;
    proto.dispatchEvent = function(event) {
      this.invoke(event.type, event);
    };
    cc.EventTarget = module.exports = EventTarget;
  }), {
    "../platform/callbacks-invoker": 99,
    "../platform/js": 106
  } ],
  51: [ (function(require, module, exports) {
    var js = require("../platform/js");
    cc.Event = function(type, bubbles) {
      this.type = type;
      this.bubbles = !!bubbles;
      this.target = null;
      this.currentTarget = null;
      this.eventPhase = 0;
      this._propagationStopped = false;
      this._propagationImmediateStopped = false;
    };
    cc.Event.prototype = {
      constructor: cc.Event,
      unuse: function() {
        this.type = cc.Event.NO_TYPE;
        this.target = null;
        this.currentTarget = null;
        this.eventPhase = cc.Event.NONE;
        this._propagationStopped = false;
        this._propagationImmediateStopped = false;
      },
      reuse: function(type, bubbles) {
        this.type = type;
        this.bubbles = bubbles || false;
      },
      stopPropagation: function() {
        this._propagationStopped = true;
      },
      stopPropagationImmediate: function() {
        this._propagationImmediateStopped = true;
      },
      isStopped: function() {
        return this._propagationStopped || this._propagationImmediateStopped;
      },
      getCurrentTarget: function() {
        return this.currentTarget;
      },
      getType: function() {
        return this.type;
      }
    };
    cc.Event.NO_TYPE = "no_type";
    cc.Event.TOUCH = "touch";
    cc.Event.MOUSE = "mouse";
    cc.Event.KEYBOARD = "keyboard";
    cc.Event.ACCELERATION = "acceleration";
    cc.Event.NONE = 0;
    cc.Event.CAPTURING_PHASE = 1;
    cc.Event.AT_TARGET = 2;
    cc.Event.BUBBLING_PHASE = 3;
    var EventCustom = function(type, bubbles) {
      cc.Event.call(this, type, bubbles);
      this.detail = null;
    };
    js.extend(EventCustom, cc.Event);
    EventCustom.prototype.reset = EventCustom;
    EventCustom.prototype.setUserData = function(data) {
      this.detail = data;
    };
    EventCustom.prototype.getUserData = function() {
      return this.detail;
    };
    EventCustom.prototype.getEventName = cc.Event.prototype.getType;
    var MAX_POOL_SIZE = 10;
    var _eventPool = new js.Pool(MAX_POOL_SIZE);
    EventCustom.put = function(event) {
      _eventPool.put(event);
    };
    EventCustom.get = function(type, bubbles) {
      var event = _eventPool._get();
      event ? event.reset(type, bubbles) : event = new EventCustom(type, bubbles);
      return event;
    };
    cc.Event.EventCustom = EventCustom;
    module.exports = cc.Event;
  }), {
    "../platform/js": 106
  } ],
  52: [ (function(require, module, exports) {
    require("./event");
    require("./event-listeners");
    require("./event-target");
    require("./system-event");
  }), {
    "./event": 51,
    "./event-listeners": 49,
    "./event-target": 50,
    "./system-event": 53
  } ],
  53: [ (function(require, module, exports) {
    var EventTarget = require("../event/event-target");
    var eventManager = require("../event-manager");
    var inputManger = require("../platform/CCInputManager");
    var EventType = cc.Enum({
      KEY_DOWN: "keydown",
      KEY_UP: "keyup",
      DEVICEMOTION: "devicemotion"
    });
    var keyboardListener = null;
    var accelerationListener = null;
    var SystemEvent = cc.Class({
      name: "SystemEvent",
      extends: EventTarget,
      statics: {
        EventType: EventType
      },
      setAccelerometerEnabled: function(isEnable) {
        inputManger.setAccelerometerEnabled(isEnable);
      },
      setAccelerometerInterval: function(interval) {
        inputManger.setAccelerometerInterval(interval);
      },
      on: function(type, callback, target) {
        this._super(type, callback, target);
        if (type === EventType.KEY_DOWN || type === EventType.KEY_UP) {
          keyboardListener || (keyboardListener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
              event.type = EventType.KEY_DOWN;
              cc.systemEvent.dispatchEvent(event);
            },
            onKeyReleased: function(keyCode, event) {
              event.type = EventType.KEY_UP;
              cc.systemEvent.dispatchEvent(event);
            }
          }));
          eventManager.hasEventListener(cc.EventListener.ListenerID.KEYBOARD) || eventManager.addListener(keyboardListener, 1);
        }
        if (type === EventType.DEVICEMOTION) {
          accelerationListener || (accelerationListener = cc.EventListener.create({
            event: cc.EventListener.ACCELERATION,
            callback: function(acc, event) {
              event.type = EventType.DEVICEMOTION;
              cc.systemEvent.dispatchEvent(event);
            }
          }));
          eventManager.hasEventListener(cc.EventListener.ListenerID.ACCELERATION) || eventManager.addListener(accelerationListener, 1);
        }
      },
      off: function(type, callback, target) {
        this._super(type, callback, target);
        if (keyboardListener && (type === EventType.KEY_DOWN || type === EventType.KEY_UP)) {
          var hasKeyDownEventListener = this.hasEventListener(EventType.KEY_DOWN);
          var hasKeyUpEventListener = this.hasEventListener(EventType.KEY_UP);
          hasKeyDownEventListener || hasKeyUpEventListener || eventManager.removeListener(keyboardListener);
        }
        accelerationListener && type === EventType.DEVICEMOTION && eventManager.removeListener(accelerationListener);
      }
    });
    cc.SystemEvent = module.exports = SystemEvent;
    true;
    cc.systemEvent = new cc.SystemEvent();
  }), {
    "../event-manager": 48,
    "../event/event-target": 50,
    "../platform/CCInputManager": 90
  } ],
  54: [ (function(require, module, exports) {
    var RenderComponent = require("../components/CCRenderComponent");
    var SpriteMaterial = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").SpriteMaterial;
    var Types = require("./types");
    var LineCap = Types.LineCap;
    var LineJoin = Types.LineJoin;
    var Graphics = cc.Class({
      name: "cc.Graphics",
      extends: RenderComponent,
      editor: false,
      ctor: function() {
        this._impl = Graphics._assembler.createImpl(this);
      },
      properties: {
        _lineWidth: 1,
        _strokeColor: cc.Color.BLACK,
        _lineJoin: LineJoin.MITER,
        _lineCap: LineCap.BUTT,
        _fillColor: cc.Color.WHITE,
        _miterLimit: 10,
        lineWidth: {
          get: function() {
            return this._lineWidth;
          },
          set: function(value) {
            this._lineWidth = value;
            this._impl.lineWidth = value;
          }
        },
        lineJoin: {
          get: function() {
            return this._lineJoin;
          },
          set: function(value) {
            this._lineJoin = value;
            this._impl.lineJoin = value;
          },
          type: LineJoin
        },
        lineCap: {
          get: function() {
            return this._lineCap;
          },
          set: function(value) {
            this._lineCap = value;
            this._impl.lineCap = value;
          },
          type: LineCap
        },
        strokeColor: {
          get: function() {
            return this._strokeColor;
          },
          set: function(value) {
            this._impl.strokeColor = this._strokeColor = cc.color(value);
          }
        },
        fillColor: {
          get: function() {
            return this._fillColor;
          },
          set: function(value) {
            this._impl.fillColor = this._fillColor = cc.color(value);
          }
        },
        miterLimit: {
          get: function() {
            return this._miterLimit;
          },
          set: function(value) {
            this._miterLimit = value;
            this._impl.miterLimit = value;
          }
        }
      },
      statics: {
        LineJoin: LineJoin,
        LineCap: LineCap
      },
      onRestore: function() {
        this._impl || (this._impl = Graphics._assembler.createImpl());
      },
      onEnable: function() {
        this._super();
        this._activateMaterial();
      },
      onDestroy: function() {
        this._super();
        this._impl.clear(this, true);
        this._impl = null;
      },
      _activateMaterial: function() {
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) return;
        this.node._renderFlag &= ~cc.RenderFlow.FLAG_RENDER;
        this.node._renderFlag |= cc.RenderFlow.FLAG_CUSTOM_IA_RENDER;
        if (this._material) return;
        var material = new SpriteMaterial();
        material.useColor = false;
        material.useTexture = false;
        material.useModel = true;
        this._updateMaterial(material);
      },
      moveTo: function(x, y) {
        if (true, x instanceof cc.Vec2) {
          cc.warn("[moveTo] : Can not pass Vec2 as [x, y] value, please check it.");
          return;
        }
        this._impl.moveTo(x, y);
      },
      lineTo: function(x, y) {
        if (true, x instanceof cc.Vec2) {
          cc.warn("[moveTo] : Can not pass Vec2 as [x, y] value, please check it.");
          return;
        }
        this._impl.lineTo(x, y);
      },
      bezierCurveTo: function(c1x, c1y, c2x, c2y, x, y) {
        this._impl.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
      },
      quadraticCurveTo: function(cx, cy, x, y) {
        this._impl.quadraticCurveTo(cx, cy, x, y);
      },
      arc: function(cx, cy, r, startAngle, endAngle, counterclockwise) {
        this._impl.arc(cx, cy, r, startAngle, endAngle, counterclockwise);
      },
      ellipse: function(cx, cy, rx, ry) {
        this._impl.ellipse(cx, cy, rx, ry);
      },
      circle: function(cx, cy, r) {
        this._impl.circle(cx, cy, r);
      },
      rect: function(x, y, w, h) {
        this._impl.rect(x, y, w, h);
      },
      roundRect: function(x, y, w, h, r) {
        this._impl.roundRect(x, y, w, h, r);
      },
      fillRect: function(x, y, w, h) {
        this.rect(x, y, w, h);
        this.fill();
      },
      clear: function(clean) {
        this._impl.clear(this, clean);
      },
      close: function() {
        this._impl.close();
      },
      stroke: function() {
        Graphics._assembler.stroke(this);
      },
      fill: function() {
        Graphics._assembler.fill(this);
      }
    });
    cc.Graphics = module.exports = Graphics;
  }), {
    "../components/CCRenderComponent": 36,
    "./types": 57,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  55: [ (function(require, module, exports) {
    var PointFlags = require("./types").PointFlags;
    var PI = Math.PI;
    var min = Math.min;
    var max = Math.max;
    var cos = Math.cos;
    var sin = Math.sin;
    var abs = Math.abs;
    var sign = Math.sign;
    var KAPPA90 = .5522847493;
    function arc(ctx, cx, cy, r, startAngle, endAngle, counterclockwise) {
      counterclockwise = counterclockwise || false;
      var a = 0, da = 0, hda = 0, kappa = 0;
      var dx = 0, dy = 0, x = 0, y = 0, tanx = 0, tany = 0;
      var px = 0, py = 0, ptanx = 0, ptany = 0;
      var i, ndivs;
      da = endAngle - startAngle;
      if (counterclockwise) if (abs(da) >= 2 * PI) da = 2 * PI; else while (da < 0) da += 2 * PI; else if (abs(da) >= 2 * PI) da = 2 * -PI; else while (da > 0) da -= 2 * PI;
      ndivs = 0 | max(1, min(abs(da) / (.5 * PI) + .5, 5));
      hda = da / ndivs / 2;
      kappa = abs(4 / 3 * (1 - cos(hda)) / sin(hda));
      counterclockwise || (kappa = -kappa);
      for (i = 0; i <= ndivs; i++) {
        a = startAngle + da * (i / ndivs);
        dx = cos(a);
        dy = sin(a);
        x = cx + dx * r;
        y = cy + dy * r;
        tanx = -dy * r * kappa;
        tany = dx * r * kappa;
        0 === i ? ctx.moveTo(x, y) : ctx.bezierCurveTo(px + ptanx, py + ptany, x - tanx, y - tany, x, y);
        px = x;
        py = y;
        ptanx = tanx;
        ptany = tany;
      }
    }
    function ellipse(ctx, cx, cy, rx, ry) {
      ctx.moveTo(cx - rx, cy);
      ctx.bezierCurveTo(cx - rx, cy + ry * KAPPA90, cx - rx * KAPPA90, cy + ry, cx, cy + ry);
      ctx.bezierCurveTo(cx + rx * KAPPA90, cy + ry, cx + rx, cy + ry * KAPPA90, cx + rx, cy);
      ctx.bezierCurveTo(cx + rx, cy - ry * KAPPA90, cx + rx * KAPPA90, cy - ry, cx, cy - ry);
      ctx.bezierCurveTo(cx - rx * KAPPA90, cy - ry, cx - rx, cy - ry * KAPPA90, cx - rx, cy);
      ctx.close();
    }
    function roundRect(ctx, x, y, w, h, r) {
      if (r < .1) {
        ctx.rect(x, y, w, h);
        return;
      }
      var rx = min(r, .5 * abs(w)) * sign(w), ry = min(r, .5 * abs(h)) * sign(h);
      ctx.moveTo(x, y + ry);
      ctx.lineTo(x, y + h - ry);
      ctx.bezierCurveTo(x, y + h - ry * (1 - KAPPA90), x + rx * (1 - KAPPA90), y + h, x + rx, y + h);
      ctx.lineTo(x + w - rx, y + h);
      ctx.bezierCurveTo(x + w - rx * (1 - KAPPA90), y + h, x + w, y + h - ry * (1 - KAPPA90), x + w, y + h - ry);
      ctx.lineTo(x + w, y + ry);
      ctx.bezierCurveTo(x + w, y + ry * (1 - KAPPA90), x + w - rx * (1 - KAPPA90), y, x + w - rx, y);
      ctx.lineTo(x + rx, y);
      ctx.bezierCurveTo(x + rx * (1 - KAPPA90), y, x, y + ry * (1 - KAPPA90), x, y + ry);
      ctx.close();
    }
    function tesselateBezier(ctx, x1, y1, x2, y2, x3, y3, x4, y4, level, type) {
      var x12, y12, x23, y23, x34, y34, x123, y123, x234, y234, x1234, y1234;
      var dx, dy, d2, d3;
      if (level > 10) return;
      x12 = .5 * (x1 + x2);
      y12 = .5 * (y1 + y2);
      x23 = .5 * (x2 + x3);
      y23 = .5 * (y2 + y3);
      x34 = .5 * (x3 + x4);
      y34 = .5 * (y3 + y4);
      x123 = .5 * (x12 + x23);
      y123 = .5 * (y12 + y23);
      dx = x4 - x1;
      dy = y4 - y1;
      d2 = abs((x2 - x4) * dy - (y2 - y4) * dx);
      d3 = abs((x3 - x4) * dy - (y3 - y4) * dx);
      if ((d2 + d3) * (d2 + d3) < ctx._tessTol * (dx * dx + dy * dy)) {
        ctx._addPoint(x4, y4, 0 === type ? type | PointFlags.PT_BEVEL : type);
        return;
      }
      x234 = .5 * (x23 + x34);
      y234 = .5 * (y23 + y34);
      x1234 = .5 * (x123 + x234);
      y1234 = .5 * (y123 + y234);
      tesselateBezier(ctx, x1, y1, x12, y12, x123, y123, x1234, y1234, level + 1, 0);
      tesselateBezier(ctx, x1234, y1234, x234, y234, x34, y34, x4, y4, level + 1, type);
    }
    module.exports = {
      arc: arc,
      ellipse: ellipse,
      roundRect: roundRect,
      tesselateBezier: tesselateBezier
    };
  }), {
    "./types": 57
  } ],
  56: [ (function(require, module, exports) {
    "use strict";
    require("./graphics");
  }), {
    "./graphics": 54
  } ],
  57: [ (function(require, module, exports) {
    "use strict";
    var LineCap = cc.Enum({
      BUTT: 0,
      ROUND: 1,
      SQUARE: 2
    });
    var LineJoin = cc.Enum({
      BEVEL: 0,
      ROUND: 1,
      MITER: 2
    });
    var PointFlags = cc.Enum({
      PT_CORNER: 1,
      PT_LEFT: 2,
      PT_BEVEL: 4,
      PT_INNERBEVEL: 8
    });
    module.exports = {
      LineCap: LineCap,
      LineJoin: LineJoin,
      PointFlags: PointFlags
    };
  }), {} ],
  58: [ (function(require, module, exports) {
    require("./platform");
    require("./assets");
    true;
    require("./CCNode");
    require("./CCPrivateNode");
    require("./CCScene");
    require("./components");
    require("./graphics");
    require("./collider");
    require("./collider/CCIntersection");
    require("./physics");
    require("./camera/CCCamera");
    require("./mesh");
    require("./3d");
    require("./3d/polyfill-3d");
    require("./base-ui/CCWidgetManager");
  }), {
    "./3d": void 0,
    "./3d/polyfill-3d": 2,
    "./CCNode": 6,
    "./CCPrivateNode": 7,
    "./CCScene": 8,
    "./assets": 26,
    "./base-ui/CCWidgetManager": void 0,
    "./camera/CCCamera": 27,
    "./collider": void 0,
    "./collider/CCIntersection": void 0,
    "./components": 42,
    "./graphics": 56,
    "./mesh": 81,
    "./physics": void 0,
    "./platform": 103
  } ],
  59: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var Pipeline = require("./pipeline");
    var LoadingItems = require("./loading-items");
    var AssetLoader = require("./asset-loader");
    var Downloader = require("./downloader");
    var Loader = require("./loader");
    var AssetTable = require("./asset-table");
    var callInNextTick = require("../platform/utils").callInNextTick;
    var AutoReleaseUtils = require("./auto-release-utils");
    var ReleasedAssetChecker = (true, require("./released-asset-checker"));
    var resources = new AssetTable();
    function getXMLHttpRequest() {
      return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
    }
    var _info = {
      url: null,
      raw: false
    };
    function getResWithUrl(res) {
      var id, result, isUuid;
      if ("object" === typeof res) {
        result = res;
        if (res.url) return result;
        id = res.uuid;
      } else {
        result = {};
        id = res;
      }
      isUuid = result.type ? "uuid" === result.type : cc.AssetLibrary._uuidInSettings(id);
      cc.AssetLibrary._getAssetInfoInRuntime(id, _info);
      result.url = isUuid ? _info.url : id;
      if (_info.url && "uuid" === result.type && _info.raw) {
        result.type = null;
        result.isRawAsset = true;
      } else isUuid || (result.isRawAsset = true);
      return result;
    }
    var _sharedResources = [];
    var _sharedList = [];
    function CCLoader() {
      var assetLoader = new AssetLoader();
      var downloader = new Downloader();
      var loader = new Loader();
      Pipeline.call(this, [ assetLoader, downloader, loader ]);
      this.assetLoader = assetLoader;
      this.md5Pipe = null;
      this.downloader = downloader;
      this.loader = loader;
      this.onProgress = null;
      this._autoReleaseSetting = js.createMap(true);
      true;
      this._releasedAssetChecker_DEBUG = new ReleasedAssetChecker();
    }
    js.extend(CCLoader, Pipeline);
    var proto = CCLoader.prototype;
    proto.init = function(director) {
      true;
      var self = this;
      director.on(cc.Director.EVENT_AFTER_UPDATE, (function() {
        self._releasedAssetChecker_DEBUG.checkCouldRelease(self._cache);
      }));
    };
    proto.getXMLHttpRequest = getXMLHttpRequest;
    proto.addDownloadHandlers = function(extMap) {
      this.downloader.addHandlers(extMap);
    };
    proto.addLoadHandlers = function(extMap) {
      this.loader.addHandlers(extMap);
    };
    proto.load = function(resources, progressCallback, completeCallback) {
      false;
      if (void 0 === completeCallback) {
        completeCallback = progressCallback;
        progressCallback = this.onProgress || null;
      }
      var self = this;
      var singleRes = false;
      var res;
      if (!(resources instanceof Array)) if (resources) {
        singleRes = true;
        resources = [ resources ];
      } else resources = [];
      _sharedResources.length = 0;
      for (var i = 0; i < resources.length; ++i) {
        var resource = resources[i];
        if (resource && resource.id) {
          cc.warnID(4920, resource.id);
          resource.uuid || resource.url || (resource.url = resource.id);
        }
        res = getResWithUrl(resource);
        if (!res.url && !res.uuid) continue;
        var item = this._cache[res.url];
        _sharedResources.push(item || res);
      }
      var queue = LoadingItems.create(this, progressCallback, (function(errors, items) {
        callInNextTick((function() {
          if (completeCallback) {
            if (singleRes) {
              var id = res.url;
              completeCallback.call(self, items.getError(id), items.getContent(id));
            } else completeCallback.call(self, errors, items);
            completeCallback = null;
          }
          var _id;
          false;
          items.destroy();
        }));
      }));
      LoadingItems.initQueueDeps(queue);
      queue.append(_sharedResources);
      _sharedResources.length = 0;
    };
    proto.flowInDeps = function(owner, urlList, callback) {
      _sharedList.length = 0;
      for (var i = 0; i < urlList.length; ++i) {
        var res = getResWithUrl(urlList[i]);
        if (!res.url && !res.uuid) continue;
        var item = this._cache[res.url];
        item ? _sharedList.push(item) : _sharedList.push(res);
      }
      var queue = LoadingItems.create(this, owner ? function(completedCount, totalCount, item) {
        this._ownerQueue && this._ownerQueue.onProgress && this._ownerQueue._childOnProgress(item);
      } : null, (function(errors, items) {
        callback(errors, items);
        owner && owner.deps && (owner.deps.length = 0);
        items.destroy();
      }));
      if (owner) {
        var ownerQueue = LoadingItems.getQueue(owner);
        queue._ownerQueue = ownerQueue._ownerQueue || ownerQueue;
      }
      var accepted = queue.append(_sharedList, owner);
      _sharedList.length = 0;
      return accepted;
    };
    proto._resources = resources;
    proto._getResUuid = function(url, type, quiet) {
      if (!url) return null;
      var index = url.indexOf("?");
      -1 !== index && (url = url.substr(0, index));
      var uuid = resources.getUuid(url, type);
      if (!uuid) {
        var extname = cc.path.extname(url);
        if (extname) {
          url = url.slice(0, -extname.length);
          uuid = resources.getUuid(url, type);
          uuid && !quiet && cc.warnID(4901, url, extname);
        }
      }
      return uuid;
    };
    proto._getReferenceKey = function(assetOrUrlOrUuid) {
      var key;
      "object" === typeof assetOrUrlOrUuid ? key = assetOrUrlOrUuid._uuid || null : "string" === typeof assetOrUrlOrUuid && (key = this._getResUuid(assetOrUrlOrUuid, null, true) || assetOrUrlOrUuid);
      if (!key) {
        cc.warnID(4800, assetOrUrlOrUuid);
        return key;
      }
      cc.AssetLibrary._getAssetInfoInRuntime(key, _info);
      return this._cache[_info.url] ? _info.url : key;
    };
    proto._urlNotFound = function(url, type, completeCallback) {
      callInNextTick((function() {
        url = cc.url.normalize(url);
        var info = (type ? js.getClassName(type) : "Asset") + ' in "resources/' + url + '" does not exist.';
        completeCallback && completeCallback(new Error(info), []);
      }));
    };
    proto._parseLoadResArgs = function(type, onProgress, onComplete) {
      if (void 0 === onComplete) {
        var isValidType = type instanceof Array || js.isChildClassOf(type, cc.RawAsset);
        if (onProgress) {
          onComplete = onProgress;
          isValidType && (onProgress = this.onProgress || null);
        } else if (void 0 === onProgress && !isValidType) {
          onComplete = type;
          onProgress = this.onProgress || null;
          type = null;
        }
        if (void 0 !== onProgress && !isValidType) {
          onProgress = type;
          type = null;
        }
      }
      return {
        type: type,
        onProgress: onProgress,
        onComplete: onComplete
      };
    };
    proto.loadRes = function(url, type, progressCallback, completeCallback) {
      var args = this._parseLoadResArgs(type, progressCallback, completeCallback);
      type = args.type;
      progressCallback = args.onProgress;
      completeCallback = args.onComplete;
      var self = this;
      var uuid = self._getResUuid(url, type);
      uuid ? this.load({
        type: "uuid",
        uuid: uuid
      }, progressCallback, (function(err, asset) {
        asset && self.setAutoReleaseRecursively(uuid, false);
        completeCallback && completeCallback(err, asset);
      })) : self._urlNotFound(url, type, completeCallback);
    };
    proto._loadResUuids = function(uuids, progressCallback, completeCallback, urls) {
      if (uuids.length > 0) {
        var self = this;
        var res = uuids.map((function(uuid) {
          return {
            type: "uuid",
            uuid: uuid
          };
        }));
        this.load(res, progressCallback, (function(errors, items) {
          if (completeCallback) {
            var assetRes = [];
            var urlRes = urls && [];
            for (var i = 0; i < res.length; ++i) {
              var uuid = res[i].uuid;
              var id = this._getReferenceKey(uuid);
              var item = items.getContent(id);
              if (item) {
                self.setAutoReleaseRecursively(uuid, false);
                assetRes.push(item);
                urlRes && urlRes.push(urls[i]);
              }
            }
            urls ? completeCallback(errors, assetRes, urlRes) : completeCallback(errors, assetRes);
          }
        }));
      } else completeCallback && callInNextTick((function() {
        urls ? completeCallback(null, [], []) : completeCallback(null, []);
      }));
    };
    proto.loadResArray = function(urls, type, progressCallback, completeCallback) {
      var args = this._parseLoadResArgs(type, progressCallback, completeCallback);
      type = args.type;
      progressCallback = args.onProgress;
      completeCallback = args.onComplete;
      var uuids = [];
      var isTypesArray = type instanceof Array;
      for (var i = 0; i < urls.length; i++) {
        var url = urls[i];
        var assetType = isTypesArray ? type[i] : type;
        var uuid = this._getResUuid(url, assetType);
        if (!uuid) {
          this._urlNotFound(url, assetType, completeCallback);
          return;
        }
        uuids.push(uuid);
      }
      this._loadResUuids(uuids, progressCallback, completeCallback);
    };
    proto.loadResDir = function(url, type, progressCallback, completeCallback) {
      var args = this._parseLoadResArgs(type, progressCallback, completeCallback);
      type = args.type;
      progressCallback = args.onProgress;
      completeCallback = args.onComplete;
      var urls = [];
      var uuids = resources.getUuidArray(url, type, urls);
      this._loadResUuids(uuids, progressCallback, (function(errors, assetRes, urlRes) {
        var assetResLength = assetRes.length;
        for (var i = 0; i < assetResLength; ++i) if (assetRes[i] instanceof cc.SpriteAtlas) {
          var spriteFrames = assetRes[i].getSpriteFrames();
          for (var k in spriteFrames) {
            var sf = spriteFrames[k];
            assetRes.push(sf);
            urlRes && urlRes.push(urlRes[i] + "/" + sf.name);
          }
        }
        completeCallback && completeCallback(errors, assetRes, urlRes);
      }), urls);
    };
    proto.getRes = function(url, type) {
      var item = this._cache[url];
      if (!item) {
        var uuid = this._getResUuid(url, type, true);
        if (!uuid) return null;
        var ref = this._getReferenceKey(uuid);
        item = this._cache[ref];
      }
      item && item.alias && (item = item.alias);
      return item && item.complete ? item.content : null;
    };
    proto.getResCount = function() {
      return Object.keys(this._cache).length;
    };
    proto.getDependsRecursively = function(owner) {
      if (owner) {
        var key = this._getReferenceKey(owner);
        var assets = AutoReleaseUtils.getDependsRecursively(key);
        assets.push(key);
        return assets;
      }
      return [];
    };
    proto.release = function(asset) {
      if (Array.isArray(asset)) for (var i = 0; i < asset.length; i++) {
        var key = asset[i];
        this.release(key);
      } else if (asset) {
        var id = this._getReferenceKey(asset);
        var item = this.getItem(id);
        if (item) {
          var removed = this.removeItem(id);
          asset = item.content;
          if (asset instanceof cc.Asset) {
            var nativeUrl = asset.nativeUrl;
            nativeUrl && this.release(nativeUrl);
            asset.destroy();
          }
          (true, removed) && this._releasedAssetChecker_DEBUG.setReleased(item, id);
        }
      }
    };
    proto.releaseAsset = function(asset) {
      var uuid = asset._uuid;
      uuid && this.release(uuid);
    };
    proto.releaseRes = function(url, type) {
      var uuid = this._getResUuid(url, type);
      uuid ? this.release(uuid) : cc.errorID(4914, url);
    };
    proto.releaseResDir = function(url, type) {
      var uuids = resources.getUuidArray(url, type);
      for (var i = 0; i < uuids.length; i++) {
        var uuid = uuids[i];
        this.release(uuid);
      }
    };
    proto.releaseAll = function() {
      for (var id in this._cache) this.release(id);
    };
    proto.removeItem = function(key) {
      var removed = Pipeline.prototype.removeItem.call(this, key);
      delete this._autoReleaseSetting[key];
      return removed;
    };
    proto.setAutoRelease = function(assetOrUrlOrUuid, autoRelease) {
      var key = this._getReferenceKey(assetOrUrlOrUuid);
      !!key && (this._autoReleaseSetting[key] = !!autoRelease);
    };
    proto.setAutoReleaseRecursively = function(assetOrUrlOrUuid, autoRelease) {
      autoRelease = !!autoRelease;
      var key = this._getReferenceKey(assetOrUrlOrUuid);
      if (key) {
        this._autoReleaseSetting[key] = autoRelease;
        var depends = AutoReleaseUtils.getDependsRecursively(key);
        for (var i = 0; i < depends.length; i++) {
          var depend = depends[i];
          this._autoReleaseSetting[depend] = autoRelease;
        }
      } else false;
    };
    proto.isAutoRelease = function(assetOrUrl) {
      var key = this._getReferenceKey(assetOrUrl);
      if (key) return !!this._autoReleaseSetting[key];
      return false;
    };
    cc.loader = new CCLoader();
    false;
    module.exports = cc.loader;
  }), {
    "../platform/js": 106,
    "../platform/utils": 110,
    "./asset-loader": 60,
    "./asset-table": 61,
    "./auto-release-utils": 63,
    "./downloader": 65,
    "./loader": 68,
    "./loading-items": 69,
    "./pipeline": 72,
    "./released-asset-checker": 73
  } ],
  60: [ (function(require, module, exports) {
    require("../utils/CCPath");
    var debug = require("../CCDebug");
    var Pipeline = require("./pipeline");
    var LoadingItems = require("./loading-items");
    var ID = "AssetLoader";
    var AssetLoader = function(extMap) {
      this.id = ID;
      this.async = true;
      this.pipeline = null;
    };
    AssetLoader.ID = ID;
    var reusedArray = [];
    AssetLoader.prototype.handle = function(item, callback) {
      var uuid = item.uuid;
      if (!uuid) return item.content || null;
      var self = this;
      cc.AssetLibrary.queryAssetInfo(uuid, (function(error, url, isRawAsset) {
        if (error) callback(error); else {
          item.url = item.rawUrl = url;
          item.isRawAsset = isRawAsset;
          if (isRawAsset) {
            var ext = cc.path.extname(url).toLowerCase();
            if (!ext) {
              callback(new Error(debug.getError(4931, uuid, url)));
              return;
            }
            ext = ext.substr(1);
            var queue = LoadingItems.getQueue(item);
            reusedArray[0] = {
              queueId: item.queueId,
              id: url,
              url: url,
              type: ext,
              error: null,
              alias: item,
              complete: true
            };
            false;
            queue.append(reusedArray);
            item.type = ext;
            callback(null, item.content);
          } else {
            item.type = "uuid";
            callback(null, item.content);
          }
        }
      }));
    };
    Pipeline.AssetLoader = module.exports = AssetLoader;
  }), {
    "../CCDebug": 3,
    "../utils/CCPath": 132,
    "./loading-items": 69,
    "./pipeline": 72
  } ],
  61: [ (function(require, module, exports) {
    var pushToMap = require("../utils/misc").pushToMap;
    var js = require("../platform/js");
    function Entry(uuid, type) {
      this.uuid = uuid;
      this.type = type;
    }
    function AssetTable() {
      this._pathToUuid = js.createMap(true);
    }
    function isMatchByWord(path, test) {
      if (path.length > test.length) {
        var nextAscii = path.charCodeAt(test.length);
        return 46 === nextAscii || 47 === nextAscii;
      }
      return true;
    }
    var proto = AssetTable.prototype;
    proto.getUuid = function(path, type) {
      path = cc.url.normalize(path);
      var item = this._pathToUuid[path];
      if (item) if (Array.isArray(item)) {
        if (!type) return item[0].uuid;
        for (var i = 0; i < item.length; i++) {
          var entry = item[i];
          if (js.isChildClassOf(entry.type, type)) return entry.uuid;
        }
        if (true, js.isChildClassOf(type, cc.SpriteFrame)) for (var _i = 0; _i < item.length; _i++) {
          var _entry = item[_i];
          if (js.isChildClassOf(_entry.type, cc.SpriteAtlas)) {
            cc.errorID(4932, path);
            break;
          }
        }
      } else {
        if (!type || js.isChildClassOf(item.type, type)) return item.uuid;
        (true, js.isChildClassOf(type, cc.SpriteFrame)) && js.isChildClassOf(item.type, cc.SpriteAtlas) && cc.errorID(4932, path);
      }
      return "";
    };
    proto.getUuidArray = function(path, type, out_urls) {
      path = cc.url.normalize(path);
      "/" === path[path.length - 1] && (path = path.slice(0, -1));
      var path2uuid = this._pathToUuid;
      var uuids = [];
      var isChildClassOf = js.isChildClassOf;
      var _foundAtlasUrl;
      for (var p in path2uuid) if (p.startsWith(path) && isMatchByWord(p, path) || !path) {
        var item = path2uuid[p];
        if (Array.isArray(item)) for (var i = 0; i < item.length; i++) {
          var entry = item[i];
          if (!type || isChildClassOf(entry.type, type)) {
            uuids.push(entry.uuid);
            out_urls && out_urls.push(p);
          } else (true, entry.type === cc.SpriteAtlas) && (_foundAtlasUrl = p);
        } else if (!type || isChildClassOf(item.type, type)) {
          uuids.push(item.uuid);
          out_urls && out_urls.push(p);
        } else (true, item.type === cc.SpriteAtlas) && (_foundAtlasUrl = p);
      }
      (true, 0 === uuids.length) && _foundAtlasUrl && js.isChildClassOf(type, cc.SpriteFrame) && cc.errorID(4932, _foundAtlasUrl);
      return uuids;
    };
    proto.add = function(path, uuid, type, isMainAsset) {
      path = path.substring(0, path.length - cc.path.extname(path).length);
      var newEntry = new Entry(uuid, type);
      pushToMap(this._pathToUuid, path, newEntry, isMainAsset);
    };
    proto._getInfo_DEBUG = (true, function(uuid, out_info) {
      var path2uuid = this._pathToUuid;
      var paths = Object.keys(path2uuid);
      for (var p = 0; p < paths.length; ++p) {
        var path = paths[p];
        var item = path2uuid[path];
        if (Array.isArray(item)) for (var i = 0; i < item.length; i++) {
          var entry = item[i];
          if (entry.uuid === uuid) {
            out_info.path = path;
            out_info.type = entry.type;
            return true;
          }
        } else if (item.uuid === uuid) {
          out_info.path = path;
          out_info.type = item.type;
          return true;
        }
      }
      return false;
    });
    proto.reset = function() {
      this._pathToUuid = js.createMap(true);
    };
    module.exports = AssetTable;
  }), {
    "../platform/js": 106,
    "../utils/misc": 139
  } ],
  62: [ (function(require, module, exports) {
    var sys = require("../platform/CCSys");
    var debug = require("../CCDebug");
    var __audioSupport = sys.__audioSupport;
    var formatSupport = __audioSupport.format;
    var context = __audioSupport.context;
    function loadDomAudio(item, callback) {
      var dom = document.createElement("audio");
      dom.src = item.url;
      true;
      callback(null, dom);
      return;
      var clearEvent;
      var timer;
      var success;
      var failure;
    }
    function loadWebAudio(item, callback) {
      context || callback(new Error(debug.getError(4926)));
      var request = cc.loader.getXMLHttpRequest();
      request.open("GET", item.url, true);
      request.responseType = "arraybuffer";
      request.onload = function() {
        context["decodeAudioData"](request.response, (function(buffer) {
          callback(null, buffer);
        }), (function() {
          callback("decode error - " + item.id, null);
        }));
      };
      request.onerror = function() {
        callback("request error - " + item.id, null);
      };
      request.send();
    }
    function downloadAudio(item, callback) {
      if (0 === formatSupport.length) return new Error(debug.getError(4927));
      var loader;
      if (__audioSupport.WEB_AUDIO) {
        var loadByDeserializedAudio = item._owner instanceof cc.AudioClip;
        loader = loadByDeserializedAudio ? item._owner.loadMode === cc.AudioClip.LoadMode.WEB_AUDIO ? loadWebAudio : loadDomAudio : item.urlParam && item.urlParam["useDom"] ? loadDomAudio : loadWebAudio;
      } else loader = loadDomAudio;
      loader(item, callback);
    }
    module.exports = downloadAudio;
  }), {
    "../CCDebug": 3,
    "../platform/CCSys": 95
  } ],
  63: [ (function(require, module, exports) {
    var js = require("../platform/js");
    function parseDepends(key, parsed) {
      var item = cc.loader.getItem(key);
      if (item) {
        var depends = item.dependKeys;
        if (depends) for (var i = 0; i < depends.length; i++) {
          var depend = depends[i];
          if (!parsed[depend]) {
            parsed[depend] = true;
            parseDepends(depend, parsed);
          }
        }
      }
    }
    function visitAsset(asset, excludeMap) {
      if (!asset._uuid) return;
      var key = cc.loader._getReferenceKey(asset);
      if (!excludeMap[key]) {
        excludeMap[key] = true;
        parseDepends(key, excludeMap);
      }
    }
    function visitComponent(comp, excludeMap) {
      var props = Object.getOwnPropertyNames(comp);
      for (var i = 0; i < props.length; i++) {
        var value = comp[props[i]];
        if ("object" === typeof value && value) if (Array.isArray(value)) for (var j = 0; j < value.length; j++) {
          var val = value[j];
          val instanceof cc.RawAsset && visitAsset(val, excludeMap);
        } else if (value.constructor && value.constructor !== Object) value instanceof cc.RawAsset && visitAsset(value, excludeMap); else {
          var keys = Object.getOwnPropertyNames(value);
          for (var _j = 0; _j < keys.length; _j++) {
            var _val = value[keys[_j]];
            _val instanceof cc.RawAsset && visitAsset(_val, excludeMap);
          }
        }
      }
    }
    function visitNode(node, excludeMap) {
      for (var i = 0; i < node._components.length; i++) visitComponent(node._components[i], excludeMap);
      for (var _i = 0; _i < node._children.length; _i++) visitNode(node._children[_i], excludeMap);
    }
    module.exports = {
      autoRelease: function(oldSceneAssets, nextSceneAssets, persistNodes) {
        var releaseSettings = cc.loader._autoReleaseSetting;
        var excludeMap = js.createMap();
        if (nextSceneAssets) for (var i = 0; i < nextSceneAssets.length; i++) excludeMap[nextSceneAssets[i]] = true;
        for (var _i2 = 0; _i2 < persistNodes.length; _i2++) visitNode(persistNodes[_i2], excludeMap);
        if (oldSceneAssets) for (var _i3 = 0; _i3 < oldSceneAssets.length; _i3++) {
          var key = oldSceneAssets[_i3];
          false === releaseSettings[key] || excludeMap[key] || cc.loader.release(key);
        }
        var keys = Object.keys(releaseSettings);
        for (var _i4 = 0; _i4 < keys.length; _i4++) {
          var _key = keys[_i4];
          true !== releaseSettings[_key] || excludeMap[_key] || cc.loader.release(_key);
        }
      },
      getDependsRecursively: function(key) {
        var depends = {};
        parseDepends(key, depends);
        return Object.keys(depends);
      }
    };
  }), {
    "../platform/js": 106
  } ],
  64: [ (function(require, module, exports) {
    function downloadBinary(item, callback) {
      var url = item.url;
      var xhr = cc.loader.getXMLHttpRequest(), errInfo = "Load binary data failed: " + url;
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function() {
        var arrayBuffer = xhr.response;
        if (arrayBuffer) {
          var result = new Uint8Array(arrayBuffer);
          callback(null, result);
        } else callback({
          status: xhr.status,
          errorMessage: errInfo + "(no response)"
        });
      };
      xhr.onerror = function() {
        callback({
          status: xhr.status,
          errorMessage: errInfo + "(error)"
        });
      };
      xhr.ontimeout = function() {
        callback({
          status: xhr.status,
          errorMessage: errInfo + "(time out)"
        });
      };
      xhr.send(null);
    }
    module.exports = downloadBinary;
  }), {} ],
  65: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var debug = require("../CCDebug");
    require("../utils/CCPath");
    var Pipeline = require("./pipeline");
    var PackDownloader = require("./pack-downloader");
    var downloadBinary = require("./binary-downloader");
    var downloadText = require("./text-downloader");
    var urlAppendTimestamp = require("./utils").urlAppendTimestamp;
    var downloadAudio;
    true;
    downloadAudio = require("./audio-downloader");
    function skip() {
      return null;
    }
    function downloadScript(item, callback, isAsync) {
      var url = item.url, d = document, s = document.createElement("script");
      "file:" !== window.location.protocol && (s.crossOrigin = "anonymous");
      s.async = isAsync;
      s.src = urlAppendTimestamp(url);
      function loadHandler() {
        s.parentNode.removeChild(s);
        s.removeEventListener("load", loadHandler, false);
        s.removeEventListener("error", errorHandler, false);
        callback(null, url);
      }
      function errorHandler() {
        s.parentNode.removeChild(s);
        s.removeEventListener("load", loadHandler, false);
        s.removeEventListener("error", errorHandler, false);
        callback(new Error(debug.getError(4928, url)));
      }
      s.addEventListener("load", loadHandler, false);
      s.addEventListener("error", errorHandler, false);
      d.body.appendChild(s);
    }
    function downloadWebp(item, callback, isCrossOrigin, img) {
      if (!cc.sys.capabilities.webp) return new Error(debug.getError(4929, item.url));
      return downloadImage(item, callback, isCrossOrigin, img);
    }
    function downloadImage(item, callback, isCrossOrigin, img) {
      void 0 === isCrossOrigin && (isCrossOrigin = true);
      var url = urlAppendTimestamp(item.url);
      img = img || new Image();
      isCrossOrigin && "file:" !== window.location.protocol ? img.crossOrigin = "anonymous" : img.crossOrigin = null;
      if (img.complete && img.naturalWidth > 0 && img.src === url) return img;
      (function() {
        function loadCallback() {
          img.removeEventListener("load", loadCallback);
          img.removeEventListener("error", errorCallback);
          img.id = item.id;
          callback(null, img);
        }
        function errorCallback() {
          img.removeEventListener("load", loadCallback);
          img.removeEventListener("error", errorCallback);
          "https:" !== window.location.protocol && img.crossOrigin && "anonymous" === img.crossOrigin.toLowerCase() ? downloadImage(item, callback, false, img) : callback(new Error(debug.getError(4930, url)));
        }
        img.addEventListener("load", loadCallback);
        img.addEventListener("error", errorCallback);
        img.src = url;
      })();
    }
    function downloadUuid(item, callback) {
      var result = PackDownloader.load(item, callback);
      if (void 0 === result) return this.extMap["json"](item, callback);
      return result || void 0;
    }
    var defaultMap = {
      js: downloadScript,
      png: downloadImage,
      jpg: downloadImage,
      bmp: downloadImage,
      jpeg: downloadImage,
      gif: downloadImage,
      ico: downloadImage,
      tiff: downloadImage,
      webp: downloadWebp,
      image: downloadImage,
      pvr: downloadBinary,
      etc: downloadBinary,
      mp3: downloadAudio,
      ogg: downloadAudio,
      wav: downloadAudio,
      m4a: downloadAudio,
      txt: downloadText,
      xml: downloadText,
      vsh: downloadText,
      fsh: downloadText,
      atlas: downloadText,
      tmx: downloadText,
      tsx: downloadText,
      json: downloadText,
      ExportJson: downloadText,
      plist: downloadText,
      fnt: downloadText,
      font: skip,
      eot: skip,
      ttf: skip,
      woff: skip,
      svg: skip,
      ttc: skip,
      uuid: downloadUuid,
      binary: downloadBinary,
      bin: downloadBinary,
      default: downloadText
    };
    var ID = "Downloader";
    var Downloader = function(extMap) {
      this.id = ID;
      this.async = true;
      this.pipeline = null;
      this._curConcurrent = 0;
      this._loadQueue = [];
      this._subpackages = {};
      this.extMap = js.mixin(extMap, defaultMap);
    };
    Downloader.ID = ID;
    Downloader.PackDownloader = PackDownloader;
    Downloader.prototype.addHandlers = function(extMap) {
      js.mixin(this.extMap, extMap);
    };
    Downloader.prototype._handleLoadQueue = function() {
      while (this._curConcurrent < cc.macro.DOWNLOAD_MAX_CONCURRENT) {
        var nextOne = this._loadQueue.shift();
        if (!nextOne) break;
        var syncRet = this.handle(nextOne.item, nextOne.callback);
        void 0 !== syncRet && (syncRet instanceof Error ? nextOne.callback(syncRet) : nextOne.callback(null, syncRet));
      }
    };
    Downloader.prototype.handle = function(item, callback) {
      var self = this;
      var downloadFunc = this.extMap[item.type] || this.extMap["default"];
      var syncRet = void 0;
      if (this._curConcurrent < cc.macro.DOWNLOAD_MAX_CONCURRENT) {
        this._curConcurrent++;
        syncRet = downloadFunc.call(this, item, (function(err, result) {
          self._curConcurrent = Math.max(0, self._curConcurrent - 1);
          self._handleLoadQueue();
          callback && callback(err, result);
        }));
        if (void 0 !== syncRet) {
          this._curConcurrent = Math.max(0, this._curConcurrent - 1);
          this._handleLoadQueue();
          return syncRet;
        }
      } else if (item.ignoreMaxConcurrency) {
        syncRet = downloadFunc.call(this, item, callback);
        if (void 0 !== syncRet) return syncRet;
      } else this._loadQueue.push({
        item: item,
        callback: callback
      });
    };
    Downloader.prototype.loadSubpackage = function(name, completeCallback) {
      var pac = this._subpackages[name];
      pac ? pac.loaded ? completeCallback && completeCallback() : downloadScript({
        url: pac.path
      }, (function(err) {
        err || (pac.loaded = true);
        completeCallback && completeCallback(err);
      })) : completeCallback && completeCallback(new Error("Can't find subpackage " + name));
    };
    Pipeline.Downloader = module.exports = Downloader;
  }), {
    "../CCDebug": 3,
    "../platform/js": 106,
    "../utils/CCPath": 132,
    "./audio-downloader": 62,
    "./binary-downloader": 64,
    "./pack-downloader": 71,
    "./pipeline": 72,
    "./text-downloader": 74,
    "./utils": 76
  } ],
  66: [ (function(require, module, exports) {
    var textUtils = require("../utils/text-utils");
    var _canvasContext = null;
    var _testString = "BES bswy:->@";
    var _fontFaces = {};
    var _intervalId = -1;
    var _loadingFonts = [];
    var _timeout = 6e4;
    function _checkFontLoaded() {
      var allFontsLoaded = true;
      var now = Date.now();
      for (var i = _loadingFonts.length - 1; i >= 0; i--) {
        var fontLoadHandle = _loadingFonts[i];
        var fontFamily = fontLoadHandle.fontFamilyName;
        if (now - fontLoadHandle.startTime > _timeout) {
          cc.warnID(4933, fontFamily);
          fontLoadHandle.callback(null, fontFamily);
          _loadingFonts.splice(i, 1);
          continue;
        }
        var oldWidth = fontLoadHandle.refWidth;
        _canvasContext.font = "40px " + fontFamily;
        var newWidth = textUtils.safeMeasureText(_canvasContext, _testString);
        if (oldWidth !== newWidth) {
          _loadingFonts.splice(i, 1);
          fontLoadHandle.callback(null, fontFamily);
        } else allFontsLoaded = false;
      }
      if (allFontsLoaded) {
        clearInterval(_intervalId);
        _intervalId = -1;
      }
    }
    var fontLoader = {
      loadFont: function(item, callback) {
        var url = item.url;
        var fontFamilyName = fontLoader._getFontFamily(url);
        if (_fontFaces[fontFamilyName]) return fontFamilyName;
        if (!_canvasContext) {
          var labelCanvas = document.createElement("canvas");
          labelCanvas.width = 100;
          labelCanvas.height = 100;
          _canvasContext = labelCanvas.getContext("2d");
        }
        var fontDesc = "40px " + fontFamilyName;
        _canvasContext.font = fontDesc;
        var refWidth = textUtils.safeMeasureText(_canvasContext, _testString);
        var fontStyle = document.createElement("style");
        fontStyle.type = "text/css";
        var fontStr = "";
        isNaN(fontFamilyName - 0) ? fontStr += "@font-face { font-family:" + fontFamilyName + "; src:" : fontStr += "@font-face { font-family:'" + fontFamilyName + "'; src:";
        fontStr += "url('" + url + "');";
        fontStyle.textContent = fontStr + "}";
        document.body.appendChild(fontStyle);
        var preloadDiv = document.createElement("div");
        var divStyle = preloadDiv.style;
        divStyle.fontFamily = fontFamilyName;
        preloadDiv.innerHTML = ".";
        divStyle.position = "absolute";
        divStyle.left = "-100px";
        divStyle.top = "-100px";
        document.body.appendChild(preloadDiv);
        var fontLoadHandle = {
          fontFamilyName: fontFamilyName,
          refWidth: refWidth,
          callback: callback,
          startTime: Date.now()
        };
        _loadingFonts.push(fontLoadHandle);
        _fontFaces[fontFamilyName] = fontStyle;
        -1 === _intervalId && (_intervalId = setInterval(_checkFontLoaded, 100));
      },
      _getFontFamily: function(fontHandle) {
        var ttfIndex = fontHandle.lastIndexOf(".ttf");
        if (-1 === ttfIndex) return fontHandle;
        var slashPos = fontHandle.lastIndexOf("/");
        var fontFamilyName;
        fontFamilyName = -1 === slashPos ? fontHandle.substring(0, ttfIndex) + "_LABEL" : fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
        -1 !== fontFamilyName.indexOf(" ") && (fontFamilyName = '"' + fontFamilyName + '"');
        return fontFamilyName;
      }
    };
    module.exports = fontLoader;
  }), {
    "../utils/text-utils": 145
  } ],
  67: [ (function(require, module, exports) {
    require("./downloader");
    require("./loader");
    require("./loading-items");
    require("./pipeline");
    require("./CCLoader");
  }), {
    "./CCLoader": 59,
    "./downloader": 65,
    "./loader": 68,
    "./loading-items": 69,
    "./pipeline": 72
  } ],
  68: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var plistParser = require("../platform/CCSAXParser").plistParser;
    var Pipeline = require("./pipeline");
    var Texture2D = require("../assets/CCTexture2D");
    var loadUuid = require("./uuid-loader");
    var fontLoader = require("./font-loader");
    function loadNothing() {
      return null;
    }
    function loadJSON(item) {
      if ("string" !== typeof item.content) return new Error("JSON Loader: Input item doesn't contain string content");
      try {
        var result = JSON.parse(item.content);
        return result;
      } catch (e) {
        return new Error("JSON Loader: Parse json [" + item.id + "] failed : " + e);
      }
    }
    function loadImage(item) {
      var loadByDeserializedAsset = item._owner instanceof cc.Asset;
      if (loadByDeserializedAsset) return null;
      var image = item.content;
      false;
      var rawUrl = item.rawUrl;
      var tex = item.texture || new Texture2D();
      tex._uuid = item.uuid;
      tex.url = rawUrl;
      tex._setRawAsset(rawUrl, false);
      tex._nativeAsset = image;
      return tex;
    }
    function loadAudioAsAsset(item, callback) {
      var loadByDeserializedAsset = item._owner instanceof cc.Asset;
      if (loadByDeserializedAsset) return null;
      var audioClip = new cc.AudioClip();
      audioClip._setRawAsset(item.rawUrl, false);
      audioClip._nativeAsset = item.content;
      return audioClip;
    }
    function loadPlist(item) {
      if ("string" !== typeof item.content) return new Error("Plist Loader: Input item doesn't contain string content");
      var result = plistParser.parse(item.content);
      return result || new Error("Plist Loader: Parse [" + item.id + "] failed");
    }
    function loadBinary(item) {
      return item.load ? item.load(item.content) : null;
    }
    var PVR_HEADER_LENGTH = 13;
    var PVR_MAGIC = 55727696;
    var PVR_HEADER_MAGIC = 0;
    var PVR_HEADER_FORMAT = 2;
    var PVR_HEADER_HEIGHT = 6;
    var PVR_HEADER_WIDTH = 7;
    var PVR_HEADER_MIPMAPCOUNT = 11;
    var PVR_HEADER_METADATA = 12;
    function loadCompressedTex(item) {
      var header = new Int32Array(item.content.buffer, 0, PVR_HEADER_LENGTH);
      if (header[PVR_HEADER_MAGIC] != PVR_MAGIC) return new Error("Invalid magic number in PVR header");
      var width = header[PVR_HEADER_WIDTH];
      var height = header[PVR_HEADER_HEIGHT];
      var levels = header[PVR_HEADER_MIPMAPCOUNT];
      var dataOffset = header[PVR_HEADER_METADATA] + 52;
      var pvrtcData = new Uint8Array(item.content.buffer, dataOffset);
      var pvrAsset = {
        _data: pvrtcData,
        _compressed: true,
        width: width,
        height: height
      };
      return pvrAsset;
    }
    var defaultMap = {
      png: loadImage,
      jpg: loadImage,
      bmp: loadImage,
      jpeg: loadImage,
      gif: loadImage,
      ico: loadImage,
      tiff: loadImage,
      webp: loadImage,
      image: loadImage,
      pvr: loadCompressedTex,
      etc: loadCompressedTex,
      mp3: loadAudioAsAsset,
      ogg: loadAudioAsAsset,
      wav: loadAudioAsAsset,
      m4a: loadAudioAsAsset,
      json: loadJSON,
      ExportJson: loadJSON,
      plist: loadPlist,
      uuid: loadUuid,
      prefab: loadUuid,
      fire: loadUuid,
      scene: loadUuid,
      binary: loadBinary,
      font: fontLoader.loadFont,
      eot: fontLoader.loadFont,
      ttf: fontLoader.loadFont,
      woff: fontLoader.loadFont,
      svg: fontLoader.loadFont,
      ttc: fontLoader.loadFont,
      default: loadNothing
    };
    var ID = "Loader";
    var Loader = function(extMap) {
      this.id = ID;
      this.async = true;
      this.pipeline = null;
      this.extMap = js.mixin(extMap, defaultMap);
    };
    Loader.ID = ID;
    Loader.prototype.addHandlers = function(extMap) {
      this.extMap = js.mixin(this.extMap, extMap);
    };
    Loader.prototype.handle = function(item, callback) {
      var loadFunc = this.extMap[item.type] || this.extMap["default"];
      return loadFunc.call(this, item, callback);
    };
    Pipeline.Loader = module.exports = Loader;
  }), {
    "../assets/CCTexture2D": 25,
    "../platform/CCSAXParser": 93,
    "../platform/js": 106,
    "./font-loader": 66,
    "./pipeline": 72,
    "./uuid-loader": 77
  } ],
  69: [ (function(require, module, exports) {
    var CallbacksInvoker = require("../platform/callbacks-invoker");
    require("../utils/CCPath");
    var js = require("../platform/js");
    var _qid = 0 | 998 * Math.random();
    var _queues = js.createMap(true);
    var _pool = [];
    var _POOL_MAX_LENGTH = 10;
    var ItemState = {
      WORKING: 1,
      COMPLETE: 2,
      ERROR: 3
    };
    var _queueDeps = js.createMap(true);
    function isIdValid(id) {
      var realId = id.url || id;
      return "string" === typeof realId;
    }
    function _parseUrlParam(url) {
      if (!url) return;
      var split = url.split("?");
      if (!split || !split[0] || !split[1]) return;
      var urlParam = {};
      var queries = split[1].split("&");
      queries.forEach((function(item) {
        var itemSplit = item.split("=");
        urlParam[itemSplit[0]] = itemSplit[1];
      }));
      return urlParam;
    }
    function createItem(id, queueId) {
      var url = "object" === typeof id ? id.url : id;
      var result = {
        queueId: queueId,
        id: url,
        url: url,
        rawUrl: void 0,
        urlParam: _parseUrlParam(url),
        type: "",
        error: null,
        content: null,
        complete: false,
        states: {},
        deps: null
      };
      if ("object" === typeof id) {
        js.mixin(result, id);
        if (id.skips) for (var i = 0; i < id.skips.length; i++) {
          var skip = id.skips[i];
          result.states[skip] = ItemState.COMPLETE;
        }
      }
      result.rawUrl = result.url;
      url && !result.type && (result.type = cc.path.extname(url).toLowerCase().substr(1));
      return result;
    }
    var checkedIds = [];
    function checkCircleReference(owner, item, recursiveCall) {
      if (!owner || !item) return false;
      var result = false;
      checkedIds.push(item.id);
      if (item.deps) {
        var i, deps = item.deps, subDep;
        for (i = 0; i < deps.length; i++) {
          subDep = deps[i];
          if (subDep.id === owner.id) {
            result = true;
            break;
          }
          if (checkedIds.indexOf(subDep.id) >= 0) continue;
          if (subDep.deps && checkCircleReference(owner, subDep, true)) {
            result = true;
            break;
          }
        }
      }
      recursiveCall || (checkedIds.length = 0);
      return result;
    }
    var LoadingItems = function(pipeline, urlList, onProgress, onComplete) {
      CallbacksInvoker.call(this);
      this._id = ++_qid;
      _queues[this._id] = this;
      this._pipeline = pipeline;
      this._errorUrls = [];
      this._appending = false;
      this._ownerQueue = null;
      this.onProgress = onProgress;
      this.onComplete = onComplete;
      this.map = js.createMap(true);
      this.completed = {};
      this.totalCount = 0;
      this.completedCount = 0;
      this._pipeline ? this.active = true : this.active = false;
      urlList && (urlList.length > 0 ? this.append(urlList) : this.allComplete());
    };
    LoadingItems.ItemState = new cc.Enum(ItemState);
    LoadingItems.create = function(pipeline, urlList, onProgress, onComplete) {
      if (void 0 === onProgress) {
        if ("function" === typeof urlList) {
          onComplete = urlList;
          urlList = onProgress = null;
        }
      } else if (void 0 === onComplete) if ("function" === typeof urlList) {
        onComplete = onProgress;
        onProgress = urlList;
        urlList = null;
      } else {
        onComplete = onProgress;
        onProgress = null;
      }
      var queue = _pool.pop();
      if (queue) {
        queue._pipeline = pipeline;
        queue.onProgress = onProgress;
        queue.onComplete = onComplete;
        _queues[queue._id] = queue;
        queue._pipeline && (queue.active = true);
        urlList && queue.append(urlList);
      } else queue = new LoadingItems(pipeline, urlList, onProgress, onComplete);
      return queue;
    };
    LoadingItems.getQueue = function(item) {
      return item.queueId ? _queues[item.queueId] : null;
    };
    LoadingItems.itemComplete = function(item) {
      var queue = _queues[item.queueId];
      queue && queue.itemComplete(item.id);
    };
    LoadingItems.initQueueDeps = function(queue) {
      var dep = _queueDeps[queue._id];
      if (dep) {
        dep.completed.length = 0;
        dep.deps.length = 0;
      } else dep = _queueDeps[queue._id] = {
        completed: [],
        deps: []
      };
    };
    LoadingItems.registerQueueDep = function(owner, depId) {
      var queueId = owner.queueId || owner;
      if (!queueId) return false;
      var queueDepList = _queueDeps[queueId];
      if (queueDepList) -1 === queueDepList.deps.indexOf(depId) && queueDepList.deps.push(depId); else if (owner.id) for (var id in _queueDeps) {
        var queue = _queueDeps[id];
        -1 !== queue.deps.indexOf(owner.id) && -1 === queue.deps.indexOf(depId) && queue.deps.push(depId);
      }
    };
    LoadingItems.finishDep = function(depId) {
      for (var id in _queueDeps) {
        var queue = _queueDeps[id];
        -1 !== queue.deps.indexOf(depId) && -1 === queue.completed.indexOf(depId) && queue.completed.push(depId);
      }
    };
    var proto = LoadingItems.prototype;
    js.mixin(proto, CallbacksInvoker.prototype);
    proto.append = function(urlList, owner) {
      if (!this.active) return [];
      owner && !owner.deps && (owner.deps = []);
      this._appending = true;
      var accepted = [], i, url, item;
      for (i = 0; i < urlList.length; ++i) {
        url = urlList[i];
        if (url.queueId && !this.map[url.id]) {
          this.map[url.id] = url;
          owner && owner.deps.push(url);
          if (url.complete || checkCircleReference(owner, url)) {
            this.totalCount++;
            this.itemComplete(url.id);
            continue;
          }
          var self = this;
          var queue = _queues[url.queueId];
          if (queue) {
            this.totalCount++;
            LoadingItems.registerQueueDep(owner || this._id, url.id);
            queue.addListener(url.id, (function(item) {
              self.itemComplete(item.id);
            }));
          }
          continue;
        }
        if (isIdValid(url)) {
          item = createItem(url, this._id);
          var key = item.id;
          if (!this.map[key]) {
            this.map[key] = item;
            this.totalCount++;
            owner && owner.deps.push(item);
            LoadingItems.registerQueueDep(owner || this._id, key);
            accepted.push(item);
          }
        }
      }
      this._appending = false;
      this.completedCount === this.totalCount ? this.allComplete() : this._pipeline.flowIn(accepted);
      return accepted;
    };
    proto._childOnProgress = function(item) {
      if (this.onProgress) {
        var dep = _queueDeps[this._id];
        this.onProgress(dep ? dep.completed.length : this.completedCount, dep ? dep.deps.length : this.totalCount, item);
      }
    };
    proto.allComplete = function() {
      var errors = 0 === this._errorUrls.length ? null : this._errorUrls;
      this.onComplete && this.onComplete(errors, this);
    };
    proto.isCompleted = function() {
      return this.completedCount >= this.totalCount;
    };
    proto.isItemCompleted = function(id) {
      return !!this.completed[id];
    };
    proto.exists = function(id) {
      return !!this.map[id];
    };
    proto.getContent = function(id) {
      var item = this.map[id];
      var ret = null;
      item && (item.content ? ret = item.content : item.alias && (ret = item.alias.content));
      return ret;
    };
    proto.getError = function(id) {
      var item = this.map[id];
      var ret = null;
      item && (item.error ? ret = item.error : item.alias && (ret = item.alias.error));
      return ret;
    };
    proto.addListener = CallbacksInvoker.prototype.add;
    proto.hasListener = CallbacksInvoker.prototype.has;
    proto.removeListener = CallbacksInvoker.prototype.remove;
    proto.removeAllListeners = CallbacksInvoker.prototype.removeAll;
    proto.removeItem = function(url) {
      var item = this.map[url];
      if (!item) return;
      if (!this.completed[item.alias || url]) return;
      delete this.completed[url];
      delete this.map[url];
      if (item.alias) {
        delete this.completed[item.alias.id];
        delete this.map[item.alias.id];
      }
      this.completedCount--;
      this.totalCount--;
    };
    proto.itemComplete = function(id) {
      var item = this.map[id];
      if (!item) return;
      var errorListId = this._errorUrls.indexOf(id);
      item.error && -1 === errorListId ? this._errorUrls.push(id) : item.error || -1 === errorListId || this._errorUrls.splice(errorListId, 1);
      this.completed[id] = item;
      this.completedCount++;
      LoadingItems.finishDep(item.id);
      if (this.onProgress) {
        var dep = _queueDeps[this._id];
        this.onProgress(dep ? dep.completed.length : this.completedCount, dep ? dep.deps.length : this.totalCount, item);
      }
      this.invoke(id, item);
      this.removeAll(id);
      !this._appending && this.completedCount >= this.totalCount && this.allComplete();
    };
    proto.destroy = function() {
      this.active = false;
      this._appending = false;
      this._pipeline = null;
      this._ownerQueue = null;
      this._errorUrls.length = 0;
      this.onProgress = null;
      this.onComplete = null;
      this.map = js.createMap(true);
      this.completed = {};
      this.totalCount = 0;
      this.completedCount = 0;
      CallbacksInvoker.call(this);
      if (_queueDeps[this._id]) {
        _queueDeps[this._id].completed.length = 0;
        _queueDeps[this._id].deps.length = 0;
      }
      delete _queues[this._id];
      delete _queueDeps[this._id];
      -1 === _pool.indexOf(this) && _pool.length < _POOL_MAX_LENGTH && _pool.push(this);
    };
    cc.LoadingItems = module.exports = LoadingItems;
  }), {
    "../platform/callbacks-invoker": 99,
    "../platform/js": 106,
    "../utils/CCPath": 132
  } ],
  70: [ (function(require, module, exports) {
    var Pipeline = require("./pipeline");
    var ID = "MD5Pipe";
    var ExtnameRegex = /(\.[^.\n\\/]*)$/;
    var UuidRegex = /.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-]{8,})/;
    function getUuidFromURL(url) {
      var matches = url.match(UuidRegex);
      if (matches) return matches[1];
      return "";
    }
    var MD5Pipe = function(md5AssetsMap, md5NativeAssetsMap, libraryBase) {
      this.id = ID;
      this.async = false;
      this.pipeline = null;
      this.md5AssetsMap = md5AssetsMap;
      this.md5NativeAssetsMap = md5NativeAssetsMap;
      this.libraryBase = libraryBase;
    };
    MD5Pipe.ID = ID;
    MD5Pipe.prototype.handle = function(item) {
      var hashPatchInFolder = false;
      "ttf" === item.type && (hashPatchInFolder = true);
      item.url = this.transformURL(item.url, hashPatchInFolder);
      return item;
    };
    MD5Pipe.prototype.transformURL = function(url, hashPatchInFolder) {
      var _this = this;
      var uuid = getUuidFromURL(url);
      if (uuid) {
        var isNativeAsset;
        var map;
        var dirname;
        var basename;
        var matched;
        (function() {
          isNativeAsset = !url.startsWith(_this.libraryBase);
          map = isNativeAsset ? _this.md5NativeAssetsMap : _this.md5AssetsMap;
          var hashValue = map[uuid];
          if (hashValue) if (hashPatchInFolder) {
            dirname = cc.path.dirname(url);
            basename = cc.path.basename(url);
            url = dirname + "." + hashValue + "/" + basename;
          } else {
            matched = false;
            url = url.replace(ExtnameRegex, (function(match, p1) {
              matched = true;
              return "." + hashValue + p1;
            }));
            matched || (url = url + "." + hashValue);
          }
        })();
      }
      return url;
    };
    Pipeline.MD5Pipe = module.exports = MD5Pipe;
  }), {
    "./pipeline": 72
  } ],
  71: [ (function(require, module, exports) {
    var Unpackers = require("./unpackers");
    var pushToMap = require("../utils/misc").pushToMap;
    var PackState = {
      Invalid: 0,
      Removed: 1,
      Downloading: 2,
      Loaded: 3
    };
    function UnpackerData() {
      this.unpacker = null;
      this.state = PackState.Invalid;
    }
    var uuidToPack = {};
    var packIndices = {};
    var globalUnpackers = {};
    function error(uuid, packUuid) {
      return new Error("Can not retrieve " + uuid + " from packer " + packUuid);
    }
    module.exports = {
      initPacks: function(packs) {
        packIndices = packs;
        for (var packUuid in packs) {
          var uuids = packs[packUuid];
          for (var i = 0; i < uuids.length; i++) {
            var uuid = uuids[i];
            var pushFront = 1 === uuids.length;
            pushToMap(uuidToPack, uuid, packUuid, pushFront);
          }
        }
      },
      _loadNewPack: function(uuid, packUuid, callback) {
        var self = this;
        var packUrl = cc.AssetLibrary.getLibUrlNoExt(packUuid) + ".json";
        cc.loader.load({
          url: packUrl,
          ignoreMaxConcurrency: true
        }, (function(err, packJson) {
          if (err) {
            cc.errorID(4916, uuid);
            return callback(err);
          }
          var res = self._doLoadNewPack(uuid, packUuid, packJson);
          res ? callback(null, res) : callback(error(uuid, packUuid));
        }));
      },
      _doPreload: function(packUuid, packJson) {
        var unpackerData = globalUnpackers[packUuid];
        if (!unpackerData) {
          unpackerData = globalUnpackers[packUuid] = new UnpackerData();
          unpackerData.state = PackState.Downloading;
        }
        if (unpackerData.state !== PackState.Loaded) {
          unpackerData.unpacker = new Unpackers.JsonUnpacker();
          unpackerData.unpacker.load(packIndices[packUuid], packJson);
          unpackerData.state = PackState.Loaded;
        }
      },
      _doLoadNewPack: function(uuid, packUuid, packedJson) {
        var unpackerData = globalUnpackers[packUuid];
        if (unpackerData.state !== PackState.Loaded) {
          "string" === typeof packedJson && (packedJson = JSON.parse(packedJson));
          Array.isArray(packedJson) ? unpackerData.unpacker = new Unpackers.JsonUnpacker() : packedJson.type === Unpackers.TextureUnpacker.ID && (unpackerData.unpacker = new Unpackers.TextureUnpacker());
          unpackerData.unpacker.load(packIndices[packUuid], packedJson);
          unpackerData.state = PackState.Loaded;
        }
        return unpackerData.unpacker.retrieve(uuid);
      },
      _selectLoadedPack: function(packUuids) {
        var existsPackState = PackState.Invalid;
        var existsPackUuid = "";
        for (var i = 0; i < packUuids.length; i++) {
          var packUuid = packUuids[i];
          var unpackerData = globalUnpackers[packUuid];
          if (unpackerData) {
            var state = unpackerData.state;
            if (state === PackState.Loaded) return packUuid;
            if (state > existsPackState) {
              existsPackState = state;
              existsPackUuid = packUuid;
            }
          }
        }
        return existsPackState !== PackState.Invalid ? existsPackUuid : packUuids[0];
      },
      load: function(item, callback) {
        var uuid = item.uuid;
        var packUuid = uuidToPack[uuid];
        if (!packUuid) return;
        Array.isArray(packUuid) && (packUuid = this._selectLoadedPack(packUuid));
        var unpackerData = globalUnpackers[packUuid];
        if (unpackerData && unpackerData.state === PackState.Loaded) {
          var json = unpackerData.unpacker.retrieve(uuid);
          return json || error(uuid, packUuid);
        }
        if (!unpackerData) {
          true;
          console.log("Create unpacker %s for %s", packUuid, uuid);
          unpackerData = globalUnpackers[packUuid] = new UnpackerData();
          unpackerData.state = PackState.Downloading;
        }
        this._loadNewPack(uuid, packUuid, callback);
        return null;
      }
    };
    false;
  }), {
    "../utils/misc": 139,
    "./unpackers": 75
  } ],
  72: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var LoadingItems = require("./loading-items");
    var ItemState = LoadingItems.ItemState;
    function flow(pipe, item) {
      var pipeId = pipe.id;
      var itemState = item.states[pipeId];
      var next = pipe.next;
      var pipeline = pipe.pipeline;
      if (item.error || itemState === ItemState.WORKING || itemState === ItemState.ERROR) return;
      if (itemState === ItemState.COMPLETE) next ? flow(next, item) : pipeline.flowOut(item); else {
        item.states[pipeId] = ItemState.WORKING;
        var result = pipe.handle(item, (function(err, result) {
          if (err) {
            item.error = err;
            item.states[pipeId] = ItemState.ERROR;
            pipeline.flowOut(item);
          } else {
            result && (item.content = result);
            item.states[pipeId] = ItemState.COMPLETE;
            next ? flow(next, item) : pipeline.flowOut(item);
          }
        }));
        if (result instanceof Error) {
          item.error = result;
          item.states[pipeId] = ItemState.ERROR;
          pipeline.flowOut(item);
        } else if (void 0 !== result) {
          null !== result && (item.content = result);
          item.states[pipeId] = ItemState.COMPLETE;
          next ? flow(next, item) : pipeline.flowOut(item);
        }
      }
    }
    var Pipeline = function(pipes) {
      this._pipes = pipes;
      this._cache = js.createMap(true);
      for (var i = 0; i < pipes.length; ++i) {
        var pipe = pipes[i];
        if (!pipe.handle || !pipe.id) continue;
        pipe.pipeline = this;
        pipe.next = i < pipes.length - 1 ? pipes[i + 1] : null;
      }
    };
    Pipeline.ItemState = ItemState;
    var proto = Pipeline.prototype;
    proto.insertPipe = function(pipe, index) {
      if (!pipe.handle || !pipe.id || index > this._pipes.length) {
        cc.warnID(4921);
        return;
      }
      if (this._pipes.indexOf(pipe) > 0) {
        cc.warnID(4922);
        return;
      }
      pipe.pipeline = this;
      var nextPipe = null;
      index < this._pipes.length && (nextPipe = this._pipes[index]);
      var previousPipe = null;
      index > 0 && (previousPipe = this._pipes[index - 1]);
      previousPipe && (previousPipe.next = pipe);
      pipe.next = nextPipe;
      this._pipes.splice(index, 0, pipe);
    };
    proto.insertPipeAfter = function(refPipe, newPipe) {
      var index = this._pipes.indexOf(refPipe);
      if (index < 0) return;
      this.insertPipe(newPipe, index + 1);
    };
    proto.appendPipe = function(pipe) {
      if (!pipe.handle || !pipe.id) return;
      pipe.pipeline = this;
      pipe.next = null;
      this._pipes.length > 0 && (this._pipes[this._pipes.length - 1].next = pipe);
      this._pipes.push(pipe);
    };
    proto.flowIn = function(items) {
      var i, pipe = this._pipes[0], item;
      if (pipe) {
        for (i = 0; i < items.length; i++) {
          item = items[i];
          this._cache[item.id] = item;
        }
        for (i = 0; i < items.length; i++) {
          item = items[i];
          flow(pipe, item);
        }
      } else for (i = 0; i < items.length; i++) this.flowOut(items[i]);
    };
    proto.flowInDeps = function(owner, urlList, callback) {
      var deps = LoadingItems.create(this, (function(errors, items) {
        callback(errors, items);
        items.destroy();
      }));
      return deps.append(urlList, owner);
    };
    proto.flowOut = function(item) {
      item.error ? delete this._cache[item.id] : this._cache[item.id] || (this._cache[item.id] = item);
      item.complete = true;
      LoadingItems.itemComplete(item);
    };
    proto.copyItemStates = function(srcItem, dstItems) {
      if (!(dstItems instanceof Array)) {
        dstItems.states = srcItem.states;
        return;
      }
      for (var i = 0; i < dstItems.length; ++i) dstItems[i].states = srcItem.states;
    };
    proto.getItem = function(id) {
      var item = this._cache[id];
      if (!item) return item;
      item.alias && (item = item.alias);
      return item;
    };
    proto.removeItem = function(id) {
      var removed = this._cache[id];
      removed && removed.complete && delete this._cache[id];
      return removed;
    };
    proto.clear = function() {
      for (var id in this._cache) {
        var item = this._cache[id];
        delete this._cache[id];
        if (!item.complete) {
          item.error = new Error("Canceled manually");
          this.flowOut(item);
        }
      }
    };
    cc.Pipeline = module.exports = Pipeline;
  }), {
    "../platform/js": 106,
    "./loading-items": 69
  } ],
  73: [ (function(require, module, exports) {
    true;
    var js;
    var tmpInfo;
    (function() {
      js = require("../platform/js");
      function ReleasedAssetChecker() {
        this._releasedKeys = js.createMap(true);
        this._dirty = false;
      }
      ReleasedAssetChecker.prototype.setReleased = function(item, releasedKey) {
        this._releasedKeys[releasedKey] = true;
        this._dirty = true;
      };
      tmpInfo = null;
      function getItemDesc(item) {
        if (item.uuid) {
          tmpInfo || (tmpInfo = {
            path: "",
            type: null
          });
          if (cc.loader._resources._getInfo_DEBUG(item.uuid, tmpInfo)) {
            tmpInfo.path = "resources/" + tmpInfo.path;
            return '"' + tmpInfo.path + '" (type: ' + js.getClassName(tmpInfo.type) + ", uuid: " + item.uuid + ")";
          }
          return '"' + item.rawUrl + '" (' + item.uuid + ")";
        }
        return '"' + item.rawUrl + '"';
      }
      function doCheckCouldRelease(releasedKey, refOwnerItem, caches) {
        var loadedAgain = caches[releasedKey];
        loadedAgain || cc.log('"' + releasedKey + '" was released but maybe still referenced by ' + getItemDesc(refOwnerItem));
      }
      ReleasedAssetChecker.prototype.checkCouldRelease = function(caches) {
        if (!this._dirty) return;
        this._dirty = false;
        var released = this._releasedKeys;
        for (var id in caches) {
          var item = caches[id];
          item.alias && (item = item.alias);
          var depends = item.dependKeys;
          if (depends) for (var i = 0; i < depends.length; ++i) {
            var depend = depends[i];
            if (released[depend]) {
              doCheckCouldRelease(depend, item, caches);
              delete released[depend];
            }
          }
        }
        js.clear(released);
      };
      module.exports = ReleasedAssetChecker;
    })();
  }), {
    "../platform/js": 106
  } ],
  74: [ (function(require, module, exports) {
    var urlAppendTimestamp = require("./utils").urlAppendTimestamp;
    module.exports = function(item, callback) {
      var url = item.url;
      url = urlAppendTimestamp(url);
      var xhr = cc.loader.getXMLHttpRequest(), errInfo = "Load text file failed: " + url;
      xhr.open("GET", url, true);
      xhr.overrideMimeType && xhr.overrideMimeType("text/plain; charset=utf-8");
      xhr.onload = function() {
        4 === xhr.readyState ? 200 === xhr.status || 0 === xhr.status ? callback(null, xhr.responseText) : callback({
          status: xhr.status,
          errorMessage: errInfo + "(wrong status)"
        }) : callback({
          status: xhr.status,
          errorMessage: errInfo + "(wrong readyState)"
        });
      };
      xhr.onerror = function() {
        callback({
          status: xhr.status,
          errorMessage: errInfo + "(error)"
        });
      };
      xhr.ontimeout = function() {
        callback({
          status: xhr.status,
          errorMessage: errInfo + "(time out)"
        });
      };
      xhr.send(null);
    };
  }), {
    "./utils": 76
  } ],
  75: [ (function(require, module, exports) {
    var Texture2D = require("../assets/CCTexture2D");
    var js = require("../platform/js");
    function JsonUnpacker() {
      this.jsons = {};
    }
    JsonUnpacker.prototype.load = function(indices, packedJson) {
      packedJson.length !== indices.length && cc.errorID(4915);
      for (var i = 0; i < indices.length; i++) {
        var key = indices[i];
        var json = packedJson[i];
        this.jsons[key] = json;
      }
    };
    JsonUnpacker.prototype.retrieve = function(key) {
      return this.jsons[key] || null;
    };
    function TextureUnpacker() {
      this.contents = {};
    }
    TextureUnpacker.ID = js._getClassId(Texture2D);
    TextureUnpacker.prototype.load = function(indices, packedJson) {
      var datas = packedJson.data.split("|");
      datas.length !== indices.length && cc.errorID(4915);
      for (var i = 0; i < indices.length; i++) this.contents[indices[i]] = datas[i];
    };
    TextureUnpacker.prototype.retrieve = function(key) {
      var content = this.contents[key];
      return content ? {
        __type__: TextureUnpacker.ID,
        content: content
      } : null;
    };
    false;
    module.exports = {
      JsonUnpacker: JsonUnpacker,
      TextureUnpacker: TextureUnpacker
    };
  }), {
    "../assets/CCTexture2D": 25,
    "../platform/js": 106
  } ],
  76: [ (function(require, module, exports) {
    var _noCacheRex = /\?/;
    module.exports = {
      urlAppendTimestamp: function(url) {
        cc.game.config["noCache"] && "string" === typeof url && (_noCacheRex.test(url) ? url += "&_t=" + (new Date() - 0) : url += "?_t=" + (new Date() - 0));
        return url;
      }
    };
  }), {} ],
  77: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var debug = require("../CCDebug");
    require("../platform/deserialize");
    var LoadingItems = require("./loading-items");
    function isSceneObj(json) {
      var SCENE_ID = "cc.Scene";
      var PREFAB_ID = "cc.Prefab";
      return json && (json[0] && json[0].__type__ === SCENE_ID || json[1] && json[1].__type__ === SCENE_ID || json[0] && json[0].__type__ === PREFAB_ID);
    }
    function parseDepends(item, asset, tdInfo, deferredLoadRawAssetsInRuntime) {
      var uuidList = tdInfo.uuidList;
      var objList = tdInfo.uuidObjList;
      var propList = tdInfo.uuidPropList;
      var stillUseUrl = tdInfo._stillUseUrl;
      var depends;
      var i, dependUuid;
      var dependKeys = item.dependKeys = [];
      if (deferredLoadRawAssetsInRuntime) {
        depends = [];
        for (i = 0; i < uuidList.length; i++) {
          dependUuid = uuidList[i];
          var obj = objList[i];
          var prop = propList[i];
          var info = cc.AssetLibrary._getAssetInfoInRuntime(dependUuid);
          if (info.raw) {
            var url = info.url;
            obj[prop] = url;
            dependKeys.push(url);
          } else depends.push({
            type: "uuid",
            uuid: dependUuid,
            deferredLoadRaw: true,
            _owner: obj,
            _ownerProp: prop,
            _stillUseUrl: stillUseUrl[i]
          });
        }
      } else {
        depends = new Array(uuidList.length);
        for (i = 0; i < uuidList.length; i++) {
          dependUuid = uuidList[i];
          depends[i] = {
            type: "uuid",
            uuid: dependUuid,
            _owner: objList[i],
            _ownerProp: propList[i],
            _stillUseUrl: stillUseUrl[i]
          };
        }
        asset._native && !asset.constructor.preventPreloadNativeObject && depends.push({
          url: asset.nativeUrl,
          _owner: asset,
          _ownerProp: "_nativeAsset"
        });
      }
      return depends;
    }
    function loadDepends(pipeline, item, asset, depends, callback) {
      item.content = asset;
      var dependKeys = item.dependKeys;
      pipeline.flowInDeps(item, depends, (function(errors, items) {
        var item, missingAssetReporter;
        var itemsMap = items.map;
        for (var src in itemsMap) {
          item = itemsMap[src];
          item.uuid && item.content && (item.content._uuid = item.uuid);
        }
        for (var i = 0; i < depends.length; i++) {
          var dep = depends[i];
          var dependSrc = dep.uuid;
          var dependUrl = dep.url;
          var dependObj = dep._owner;
          var dependProp = dep._ownerProp;
          item = itemsMap[dependUrl];
          if (!item) continue;
          var loadCallbackCtx = dep;
          function loadCallback(item) {
            var value = item.content;
            this._stillUseUrl && (value = value && cc.RawAsset.wasRawAssetType(value.constructor) ? value.nativeUrl : item.rawUrl);
            this._owner[this._ownerProp] = value;
            item.uuid !== asset._uuid && dependKeys.indexOf(item.id) < 0 && dependKeys.push(item.id);
          }
          if (item.complete || item.content) if (item.error) {
            var MissingObjectReporter;
            false;
            cc._throw(item.error);
          } else loadCallback.call(loadCallbackCtx, item); else {
            var queue = LoadingItems.getQueue(item);
            var list = queue._callbackTable[dependSrc];
            list ? list.unshift(loadCallback, loadCallbackCtx) : queue.addListener(dependSrc, loadCallback, loadCallbackCtx);
          }
        }
        false;
        callback(errors, asset);
      }));
    }
    function canDeferredLoad(asset, item, isScene) {
      false;
      var res = item.deferredLoadRaw;
      res ? asset instanceof cc.Asset && asset.constructor.preventDeferredLoadDependents && (res = false) : isScene && (asset instanceof cc.SceneAsset || asset instanceof cc.Prefab) && (res = asset.asyncLoadAssets);
      return res;
    }
    var MissingClass;
    function loadUuid(item, callback) {
      false;
      var json;
      if ("string" === typeof item.content) try {
        json = JSON.parse(item.content);
      } catch (e) {
        return new Error(debug.getError(4923, item.id, e.stack));
      } else {
        if ("object" !== typeof item.content) return new Error(debug.getError(4924));
        json = item.content;
      }
      var classFinder;
      var isScene = isSceneObj(json);
      if (isScene) {
        false;
        classFinder = cc._MissingScript.safeFindClass;
      } else classFinder = function(id) {
        var cls = js._getClassById(id);
        if (cls) return cls;
        cc.warnID(4903, id);
        return Object;
      };
      var tdInfo = cc.deserialize.Details.pool.get();
      var asset;
      try {
        asset = cc.deserialize(json, tdInfo, {
          classFinder: classFinder,
          target: item.existingAsset,
          customEnv: item
        });
      } catch (e) {
        cc.deserialize.Details.pool.put(tdInfo);
        var err = e.stack;
        return new Error(debug.getError(4925, item.id, err));
      }
      asset._uuid = item.uuid;
      false;
      var deferredLoad = canDeferredLoad(asset, item, isScene);
      var depends = parseDepends(item, asset, tdInfo, deferredLoad);
      cc.deserialize.Details.pool.put(tdInfo);
      if (0 === depends.length) return callback(null, asset);
      loadDepends(this.pipeline, item, asset, depends, callback);
    }
    module.exports = loadUuid;
    loadUuid.isSceneObj = isSceneObj;
  }), {
    "../CCDebug": 3,
    "../platform/deserialize": 101,
    "../platform/js": 106,
    "./loading-items": 69
  } ],
  78: [ (function(require, module, exports) {
    var MeshResource = require("./CCMeshResource");
    var renderer = require("../renderer");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var gfx = renderEngine.gfx;
    function applyColor(data, offset, value) {
      data[offset] = value._val;
    }
    function applyVec2(data, offset, value) {
      data[offset] = value.x;
      data[offset + 1] = value.y;
    }
    function applyVec3(data, offset, value) {
      data[offset] = value.x;
      data[offset + 1] = value.y;
      data[offset + 2] = value.z;
    }
    var Mesh = cc.Class({
      name: "cc.Mesh",
      extends: cc.Asset,
      properties: {
        _resource: {
          default: null,
          type: MeshResource
        },
        subMeshes: {
          get: function() {
            return this._subMeshes;
          },
          set: function(v) {
            this._subMeshes = v;
          }
        }
      },
      ctor: function() {
        this._subMeshes = [];
        this._ibs = [];
        this._vbs = [];
        this._minPos = cc.v3();
        this._maxPos = cc.v3();
        this._resourceInited = false;
      },
      _initResource: function() {
        if (this._resourceInited || !this._resource) return;
        this._resourceInited = true;
        this._resource.flush(this);
      },
      init: function(vertexFormat, vertexCount, dynamic) {
        this.clear();
        var data = new Uint8Array(vertexFormat._bytes * vertexCount);
        var vb = new gfx.VertexBuffer(renderer.device, vertexFormat, dynamic ? gfx.USAGE_STATIC : gfx.USAGE_DYNAMIC, data, vertexCount);
        this._vbs[0] = {
          buffer: vb,
          data: data,
          dirty: true
        };
      },
      setVertices: function(name, values, index) {
        index = index || 0;
        var vb = this._vbs[index];
        var buffer = vb.buffer;
        var el = buffer._format._attr2el[name];
        if (!el) return cc.warn("Cannot find " + name + " attribute in vertex defines.");
        var isFlatMode = "number" === typeof values[0];
        var elNum = el.num;
        var reader = Float32Array;
        var bytes = 4;
        if (name === gfx.ATTR_COLOR) if (isFlatMode) {
          reader = Float32Array;
          bytes = 1;
        } else reader = Uint32Array;
        var data = vb[reader.name];
        if (!data) {
          var vbData = vb.data;
          data = vb[reader.name] = new reader(vbData.buffer, vbData.byteOffset, vbData.byteLength / bytes);
        }
        var stride = el.stride / bytes;
        var offset = el.offset / bytes;
        if (isFlatMode) for (var i = 0, l = values.length / elNum; i < l; i++) {
          var sOffset = i * elNum;
          var dOffset = i * stride + offset;
          for (var j = 0; j < elNum; j++) data[dOffset + j] = values[sOffset + j];
        } else {
          var applyFunc = void 0;
          applyFunc = name === gfx.ATTR_COLOR ? applyColor : 2 === elNum ? applyVec2 : applyVec3;
          for (var _i = 0, _l = values.length; _i < _l; _i++) {
            var v = values[_i];
            var vOffset = _i * stride + offset;
            applyFunc(data, vOffset, v);
          }
        }
        vb.dirty = true;
      },
      setIndices: function(indices, index) {
        index = index || 0;
        var data = new Uint16Array(indices);
        var ib = this._ibs[index];
        if (ib) {
          ib.data = data;
          ib.dirty = true;
        } else {
          var buffer = new gfx.IndexBuffer(renderer.device, gfx.INDEX_FMT_UINT16, gfx.USAGE_STATIC, data, data.length);
          this._ibs[index] = {
            buffer: buffer,
            data: data,
            dirty: false
          };
          var vb = this._vbs[0];
          this._subMeshes[index] = new renderEngine.InputAssembler(vb.buffer, buffer);
        }
      },
      setPrimitiveType: function(type, index) {
        index = index || 0;
        var subMesh = this._subMeshes[index];
        if (!subMesh) {
          cc.warn("Do not have sub mesh at index " + index);
          return;
        }
        this._subMeshes[index]._primitiveType = type;
      },
      clear: function() {
        this._subMeshes.length = 0;
        var ibs = this._ibs;
        for (var i = 0; i < ibs.length; i++) ibs[i].buffer.destroy();
        ibs.length = 0;
        var vbs = this._vbs;
        for (var _i2 = 0; _i2 < vbs.length; _i2++) vbs[_i2].buffer.destroy();
        vbs.length = 0;
      },
      destroy: function() {
        this.clear();
      },
      _uploadData: function() {
        var vbs = this._vbs;
        for (var i = 0; i < vbs.length; i++) {
          var vb = vbs[i];
          if (vb.dirty) {
            var buffer = vb.buffer, data = vb.data;
            buffer._numVertices = data.length;
            buffer._bytes = data.byteLength;
            buffer.update(0, data);
            vb.dirty = false;
          }
        }
        var ibs = this._ibs;
        for (var _i3 = 0; _i3 < ibs.length; _i3++) {
          var ib = ibs[_i3];
          if (ib.dirty) {
            var _buffer = ib.buffer, _data = ib.data;
            _buffer._numIndices = _data.length;
            _buffer._bytes = _data.byteLength;
            _buffer.update(0, _data);
            ib.dirty = false;
          }
        }
      }
    });
    cc.Mesh = module.exports = Mesh;
  }), {
    "../renderer": 127,
    "./CCMeshResource": 80,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  79: [ (function(require, module, exports) {
    var RenderComponent = require("../components/CCRenderComponent");
    var Mesh = require("./CCMesh");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var gfx = renderEngine.gfx;
    var RenderFlow = require("../renderer/render-flow");
    var aabb = require("../3d/geom-utils/aabb");
    var MeshRenderer = cc.Class({
      name: "cc.MeshRenderer",
      extends: RenderComponent,
      editor: false,
      properties: {
        _mesh: {
          default: null,
          type: Mesh
        },
        mesh: {
          get: function() {
            return this._mesh;
          },
          set: function(v) {
            if (this._mesh === v) return;
            this._mesh = v;
            this.activeMaterials(true);
            this.markForUpdateRenderData(true);
            this.node._renderFlag |= RenderFlow.FLAG_TRANSFORM;
          },
          type: Mesh
        },
        textures: {
          default: [],
          type: cc.Texture2D
        }
      },
      ctor: function() {
        this._renderDatas = [];
        this._materials = [];
        this._boundingBox = null;
      },
      onEnable: function() {
        this._super();
        this.activeMaterials();
      },
      _createMaterial: function(subMesh) {
        var material = new renderEngine.MeshMaterial();
        material.color = this.node.color;
        material._mainTech._passes[0].setDepth(true, true);
        material.useModel = true;
        subMesh._vertexBuffer._format._attr2el[gfx.ATTR_COLOR] && (material.useAttributeColor = true);
        return material;
      },
      _updateColor: function() {
        var materials = this._materials;
        for (var i = 0; i < materials.length; i++) {
          var material = materials[i];
          material.color = this.node.color;
          material.updateHash();
        }
        this.node._renderFlag &= ~RenderFlow.FLAG_COLOR;
      },
      _reset: function() {
        this._materials.length = 0;
        this._material = null;
      },
      activeMaterials: function(force) {
        var mesh = this._mesh;
        mesh && mesh._initResource();
        if (!mesh || 0 === mesh.subMeshes.length) {
          this.disableRender();
          return;
        }
        if (this._material && !force) return;
        aabb && (this._boundingBox = aabb.fromPoints(aabb.create(), mesh._minPos, mesh._maxPos));
        this._reset();
        var subMeshes = mesh._subMeshes;
        for (var i = 0; i < subMeshes.length; i++) {
          var material = this._createMaterial(subMeshes[i]);
          this._materials.push(material);
        }
        this._material = this._materials[0];
        this.markForUpdateRenderData(true);
        this.markForRender(true);
      }
    });
    cc.MeshRenderer = module.exports = MeshRenderer;
  }), {
    "../3d/geom-utils/aabb": void 0,
    "../components/CCRenderComponent": 36,
    "../renderer/render-flow": 129,
    "./CCMesh": 78,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  80: [ (function(require, module, exports) {
    var MeshResource = cc.Class({
      name: "cc.MeshResource",
      flush: function(mesh) {}
    });
    module.exports = MeshResource;
  }), {} ],
  81: [ (function(require, module, exports) {
    require("./CCMesh");
    true;
    require("./CCMeshRenderer");
    require("./mesh-renderer");
  }), {
    "./CCMesh": 78,
    "./CCMeshRenderer": 79,
    "./mesh-renderer": 82
  } ],
  82: [ (function(require, module, exports) {
    var MeshRenderer = require("./CCMeshRenderer");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var IARenderData = renderEngine.IARenderData;
    var gfx = renderEngine.gfx;
    var InputAssembler = renderEngine.InputAssembler;
    var BLACK_COLOR = cc.Color.BLACK;
    var meshRendererAssembler = {
      useModel: true,
      updateRenderData: function(comp) {
        var renderDatas = comp._renderDatas;
        renderDatas.length = 0;
        if (!comp.mesh) return;
        var submeshes = comp.mesh._subMeshes;
        for (var i = 0; i < submeshes.length; i++) {
          var data = new IARenderData();
          data.material = comp._materials[i];
          data.ia = submeshes[i];
          renderDatas.push(data);
        }
      },
      createWireFrameData: function(ia, oldIbData, material, renderer) {
        var data = new IARenderData();
        var m = material.clone();
        m.color = BLACK_COLOR;
        m.useTexture = false;
        m._mainTech._passes[0].setDepth(true, true);
        data.material = m;
        var indices = [];
        for (var i = 0; i < oldIbData.length; i += 3) {
          var a = oldIbData[i + 0];
          var b = oldIbData[i + 1];
          var c = oldIbData[i + 2];
          indices.push(a, b, b, c, c, a);
        }
        var ibData = new Uint16Array(indices);
        var ib = new gfx.IndexBuffer(renderer._device, gfx.INDEX_FMT_UINT16, gfx.USAGE_STATIC, ibData, ibData.length);
        data.ia = new renderEngine.InputAssembler(ia._vertexBuffer, ib, gfx.PT_LINES);
        return data;
      },
      fillBuffers: function(comp, renderer) {
        if (!comp.mesh) return;
        renderer._flush();
        var renderDatas = comp._renderDatas;
        var submeshes = comp.mesh._subMeshes;
        if (cc.macro.SHOW_MESH_WIREFRAME) {
          if (renderDatas.length === submeshes.length) {
            var ibs = comp.mesh._ibs;
            for (var i = 0; i < submeshes.length; i++) {
              var data = renderDatas[i];
              renderDatas.push(this.createWireFrameData(data.ia, ibs[i].data, data.material, renderer));
            }
          }
        } else renderDatas.length = submeshes.length;
        var tmpMaterial = renderer.material;
        var tmpNode = renderer.node;
        renderer.node = comp._material.useModel ? comp.node : renderer._dummyNode;
        comp.mesh._uploadData();
        var textures = comp.textures;
        var materials = comp._materials;
        for (var _i = 0; _i < renderDatas.length; _i++) {
          var renderData = renderDatas[_i];
          var material = renderData.material;
          textures[_i] ? material.texture = textures[_i] : material.useTexture = false;
          renderer.material = material;
          renderer._flushIA(renderData);
        }
        renderer.node = tmpNode;
        renderer.material = tmpMaterial;
      }
    };
    module.exports = MeshRenderer._assembler = meshRendererAssembler;
  }), {
    "./CCMeshRenderer": 79,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  83: [ (function(require, module, exports) {
    var CompScheduler = require("./component-scheduler");
    var Flags = require("./platform/CCObject").Flags;
    var js = require("./platform/js");
    var callerFunctor = false;
    var MAX_POOL_SIZE = 4;
    var IsPreloadStarted = Flags.IsPreloadStarted;
    var IsOnLoadStarted = Flags.IsOnLoadStarted;
    var IsOnLoadCalled = Flags.IsOnLoadCalled;
    var Deactivating = Flags.Deactivating;
    var callPreloadInTryCatch = false;
    var callOnLoadInTryCatch = false;
    var callOnDestroyInTryCatch = false;
    var callResetInTryCatch = false;
    var callOnFocusInTryCatch = false;
    var callOnLostFocusInTryCatch = false;
    var callPreload = function(c) {
      c.__preload();
    };
    var callOnLoad = function(c) {
      c.onLoad();
      c._objFlags |= IsOnLoadCalled;
    };
    var UnsortedInvoker = cc.Class({
      extends: CompScheduler.LifeCycleInvoker,
      add: function(comp) {
        this._zero.array.push(comp);
      },
      remove: function(comp) {
        this._zero.fastRemove(comp);
      },
      cancelInactive: function(flagToClear) {
        CompScheduler.LifeCycleInvoker.stableRemoveInactive(this._zero, flagToClear);
      },
      invoke: function() {
        this._invoke(this._zero);
        this._zero.array.length = 0;
      }
    });
    var invokePreload = CompScheduler.createInvokeImpl(callPreload);
    var invokeOnLoad = CompScheduler.createInvokeImpl(callOnLoad);
    var activateTasksPool = new js.Pool(MAX_POOL_SIZE);
    activateTasksPool.get = function getActivateTask() {
      var task = this._get() || {
        preload: new UnsortedInvoker(invokePreload),
        onLoad: new CompScheduler.OneOffInvoker(invokeOnLoad),
        onEnable: new CompScheduler.OneOffInvoker(CompScheduler.invokeOnEnable)
      };
      task.preload._zero.i = -1;
      var invoker = task.onLoad;
      invoker._zero.i = -1;
      invoker._neg.i = -1;
      invoker._pos.i = -1;
      invoker = task.onEnable;
      invoker._zero.i = -1;
      invoker._neg.i = -1;
      invoker._pos.i = -1;
      return task;
    };
    function _componentCorrupted(node, comp, index) {
      false;
      comp ? node._removeComponent(comp) : js.array.removeAt(node._components, index);
    }
    function _onLoadInEditor(comp) {
      if (comp.onLoad && !cc.engine._isPlaying) {
        var focused = Editor.Selection.curActivate("node") === comp.node.uuid;
        focused ? comp.onFocusInEditor && callOnFocusInTryCatch(comp) : comp.onLostFocusInEditor && callOnLostFocusInTryCatch(comp);
      }
      true;
      _Scene.AssetsWatcher.start(comp);
    }
    function ctor() {
      this._activatingStack = [];
    }
    var NodeActivator = cc.Class({
      ctor: ctor,
      reset: ctor,
      _activateNodeRecursively: function(node, preloadInvoker, onLoadInvoker, onEnableInvoker) {
        if (node._objFlags & Deactivating) {
          cc.errorID(3816, node.name);
          return;
        }
        node._activeInHierarchy = true;
        var originCount = node._components.length;
        for (var i = 0; i < originCount; ++i) {
          var component = node._components[i];
          if (component instanceof cc.Component) this.activateComp(component, preloadInvoker, onLoadInvoker, onEnableInvoker); else {
            _componentCorrupted(node, component, i);
            --i;
            --originCount;
          }
        }
        for (var _i = 0, len = node._children.length; _i < len; ++_i) {
          var child = node._children[_i];
          child._active && this._activateNodeRecursively(child, preloadInvoker, onLoadInvoker, onEnableInvoker);
        }
        node._onPostActivated(true);
      },
      _deactivateNodeRecursively: function(node) {
        false;
        node._objFlags |= Deactivating;
        node._activeInHierarchy = false;
        var originCount = node._components.length;
        for (var c = 0; c < originCount; ++c) {
          var component = node._components[c];
          if (component._enabled) {
            cc.director._compScheduler.disableComp(component);
            if (node._activeInHierarchy) {
              node._objFlags &= ~Deactivating;
              return;
            }
          }
        }
        for (var i = 0, len = node._children.length; i < len; ++i) {
          var child = node._children[i];
          if (child._activeInHierarchy) {
            this._deactivateNodeRecursively(child);
            if (node._activeInHierarchy) {
              node._objFlags &= ~Deactivating;
              return;
            }
          }
        }
        node._onPostActivated(false);
        node._objFlags &= ~Deactivating;
      },
      activateNode: function(node, active) {
        if (active) {
          var task = activateTasksPool.get();
          this._activatingStack.push(task);
          this._activateNodeRecursively(node, task.preload, task.onLoad, task.onEnable);
          task.preload.invoke();
          task.onLoad.invoke();
          task.onEnable.invoke();
          this._activatingStack.pop();
          activateTasksPool.put(task);
        } else {
          this._deactivateNodeRecursively(node);
          var stack = this._activatingStack;
          for (var i = 0; i < stack.length; i++) {
            var lastTask = stack[i];
            lastTask.preload.cancelInactive(IsPreloadStarted);
            lastTask.onLoad.cancelInactive(IsOnLoadStarted);
            lastTask.onEnable.cancelInactive();
          }
        }
        node.emit("active-in-hierarchy-changed", node);
      },
      activateComp: function(comp, preloadInvoker, onLoadInvoker, onEnableInvoker) {
        if (!cc.isValid(comp, true)) return;
        if (!(comp._objFlags & IsPreloadStarted)) {
          comp._objFlags |= IsPreloadStarted;
          comp.__preload && (preloadInvoker ? preloadInvoker.add(comp) : comp.__preload());
        }
        if (!(comp._objFlags & IsOnLoadStarted)) {
          comp._objFlags |= IsOnLoadStarted;
          if (comp.onLoad) if (onLoadInvoker) onLoadInvoker.add(comp); else {
            comp.onLoad();
            comp._objFlags |= IsOnLoadCalled;
          } else comp._objFlags |= IsOnLoadCalled;
        }
        if (comp._enabled) {
          var deactivatedOnLoading = !comp.node._activeInHierarchy;
          if (deactivatedOnLoading) return;
          cc.director._compScheduler.enableComp(comp, onEnableInvoker);
        }
      },
      destroyComp: function(comp) {
        cc.director._compScheduler.disableComp(comp);
        comp.onDestroy && comp._objFlags & IsOnLoadCalled && comp.onDestroy();
      },
      resetComp: false
    });
    module.exports = NodeActivator;
  }), {
    "./component-scheduler": 28,
    "./platform/CCObject": 92,
    "./platform/js": 106,
    "./utils/misc": 139
  } ],
  84: [ (function(require, module, exports) {
    var js;
    var macro;
    var sys;
    var eventManager;
    var TOUCH_TIMEOUT;
    var bkInputManager;
    false;
  }), {
    "../event-manager": 48,
    "../platform/js": 106,
    "./CCMacro": 91,
    "./CCSys": 95
  } ],
  85: [ (function(require, module, exports) {
    var Asset = require("../assets/CCAsset");
    var callInNextTick = require("./utils").callInNextTick;
    var Loader = require("../load-pipeline/CCLoader");
    var PackDownloader = require("../load-pipeline/pack-downloader");
    var AutoReleaseUtils = require("../load-pipeline/auto-release-utils");
    var decodeUuid = require("../utils/decode-uuid");
    var MD5Pipe = require("../load-pipeline/md5-pipe");
    var js = require("./js");
    var _libraryBase = "";
    var _rawAssetsBase = "";
    var _uuidToRawAsset = js.createMap(true);
    function isScene(asset) {
      return asset && (asset.constructor === cc.SceneAsset || asset instanceof cc.Scene);
    }
    function RawAssetEntry(url, type) {
      this.url = url;
      this.type = type;
    }
    var AssetLibrary = {
      loadAsset: function(uuid, callback, options) {
        if ("string" !== typeof uuid) return callInNextTick(callback, new Error("[AssetLibrary] uuid must be string"), null);
        var item = {
          uuid: uuid,
          type: "uuid"
        };
        options && options.existingAsset && (item.existingAsset = options.existingAsset);
        Loader.load(item, (function(error, asset) {
          if (error || !asset) error = new Error("[AssetLibrary] loading JSON or dependencies failed: " + (error ? error.message : "Unknown error")); else {
            if (asset.constructor === cc.SceneAsset) {
              false;
              var key = cc.loader._getReferenceKey(uuid);
              asset.scene.dependAssets = AutoReleaseUtils.getDependsRecursively(key);
            }
            if (false, isScene(asset)) {
              var id = cc.loader._getReferenceKey(uuid);
              Loader.removeItem(id);
            }
          }
          callback && callback(error, asset);
        }));
      },
      getLibUrlNoExt: function(uuid, inRawAssetsDir) {
        true;
        uuid = decodeUuid(uuid);
        var base = (true, inRawAssetsDir ? _rawAssetsBase + "assets/" : _libraryBase);
        return base + uuid.slice(0, 2) + "/" + uuid;
      },
      _queryAssetInfoInEditor: function(uuid, callback) {
        false;
      },
      _getAssetInfoInRuntime: function(uuid, result) {
        result = result || {
          url: null,
          raw: false
        };
        var info = _uuidToRawAsset[uuid];
        if (info && !js.isChildClassOf(info.type, cc.Asset)) {
          result.url = _rawAssetsBase + info.url;
          result.raw = true;
        } else {
          result.url = this.getLibUrlNoExt(uuid) + ".json";
          result.raw = false;
        }
        return result;
      },
      _uuidInSettings: function(uuid) {
        return uuid in _uuidToRawAsset;
      },
      queryAssetInfo: function(uuid, callback) {
        false;
        var info = this._getAssetInfoInRuntime(uuid);
        callback(null, info.url, info.raw);
      },
      parseUuidInEditor: function(url) {
        var uuid;
        var isImported;
        var dir;
        var dirBasename;
        var isAssetUrl;
        var index;
        false;
      },
      loadJson: function(json, callback) {
        var randomUuid = "" + (new Date().getTime() + Math.random());
        var item = {
          uuid: randomUuid,
          type: "uuid",
          content: json,
          skips: [ Loader.assetLoader.id, Loader.downloader.id ]
        };
        Loader.load(item, (function(error, asset) {
          if (error) error = new Error("[AssetLibrary] loading JSON or dependencies failed: " + error.message); else {
            if (asset.constructor === cc.SceneAsset) {
              var key = cc.loader._getReferenceKey(randomUuid);
              asset.scene.dependAssets = AutoReleaseUtils.getDependsRecursively(key);
            }
            if (false, isScene(asset)) {
              var id = cc.loader._getReferenceKey(randomUuid);
              Loader.removeItem(id);
            }
          }
          asset._uuid = "";
          callback && callback(error, asset);
        }));
      },
      getAssetByUuid: function(uuid) {
        return AssetLibrary._uuidToAsset[uuid] || null;
      },
      init: function(options) {
        false;
        var libraryPath = options.libraryPath;
        libraryPath = libraryPath.replace(/\\/g, "/");
        _libraryBase = cc.path.stripSep(libraryPath) + "/";
        _rawAssetsBase = options.rawAssetsBase;
        var md5AssetsMap = options.md5AssetsMap;
        if (md5AssetsMap && md5AssetsMap.import) {
          var i = 0, uuid = 0;
          var md5ImportMap = js.createMap(true);
          var md5Entries = md5AssetsMap.import;
          for (i = 0; i < md5Entries.length; i += 2) {
            uuid = decodeUuid(md5Entries[i]);
            md5ImportMap[uuid] = md5Entries[i + 1];
          }
          var md5RawAssetsMap = js.createMap(true);
          md5Entries = md5AssetsMap["raw-assets"];
          for (i = 0; i < md5Entries.length; i += 2) {
            uuid = decodeUuid(md5Entries[i]);
            md5RawAssetsMap[uuid] = md5Entries[i + 1];
          }
          var md5Pipe = new MD5Pipe(md5ImportMap, md5RawAssetsMap, _libraryBase);
          cc.loader.insertPipeAfter(cc.loader.assetLoader, md5Pipe);
          cc.loader.md5Pipe = md5Pipe;
        }
        var resources = Loader._resources;
        resources.reset();
        var rawAssets = options.rawAssets;
        if (rawAssets) for (var mountPoint in rawAssets) {
          var assets = rawAssets[mountPoint];
          for (var uuid in assets) {
            var info = assets[uuid];
            var url = info[0];
            var typeId = info[1];
            var type = cc.js._getClassById(typeId);
            if (!type) {
              cc.error("Cannot get", typeId);
              continue;
            }
            _uuidToRawAsset[uuid] = new RawAssetEntry(mountPoint + "/" + url, type);
            if ("assets" === mountPoint) {
              var ext = cc.path.extname(url);
              ext && (url = url.slice(0, -ext.length));
              var isSubAsset = 1 === info[2];
              resources.add(url, uuid, type, !isSubAsset);
            }
          }
        }
        options.packedAssets && PackDownloader.initPacks(options.packedAssets);
        cc.url._init(options.mountPaths && options.mountPaths.assets || _rawAssetsBase + "assets");
      }
    };
    AssetLibrary._uuidToAsset = {};
    module.exports = cc.AssetLibrary = AssetLibrary;
  }), {
    "../assets/CCAsset": 10,
    "../load-pipeline/CCLoader": 59,
    "../load-pipeline/auto-release-utils": 63,
    "../load-pipeline/md5-pipe": 70,
    "../load-pipeline/pack-downloader": 71,
    "../utils/decode-uuid": 135,
    "./js": 106,
    "./utils": 110
  } ],
  86: [ (function(require, module, exports) {
    var js = require("./js");
    var Enum = require("./CCEnum");
    var utils = require("./utils");
    var _isPlainEmptyObj_DEV = utils.isPlainEmptyObj_DEV;
    var _cloneable_DEV = utils.cloneable_DEV;
    var Attr = require("./attribute");
    var DELIMETER = Attr.DELIMETER;
    var getTypeChecker = Attr.getTypeChecker;
    var preprocess = require("./preprocess-class");
    require("./requiring-frame");
    var BUILTIN_ENTRIES = [ "name", "extends", "mixins", "ctor", "__ctor__", "properties", "statics", "editor", "__ES6__" ];
    var INVALID_STATICS_DEV = false;
    function pushUnique(array, item) {
      array.indexOf(item) < 0 && array.push(item);
    }
    var deferredInitializer = {
      datas: null,
      push: function(data) {
        if (this.datas) this.datas.push(data); else {
          this.datas = [ data ];
          var self = this;
          setTimeout((function() {
            self.init();
          }), 0);
        }
      },
      init: function() {
        var datas = this.datas;
        if (datas) {
          for (var i = 0; i < datas.length; ++i) {
            var data = datas[i];
            var cls = data.cls;
            var properties = data.props;
            "function" === typeof properties && (properties = properties());
            var name = js.getClassName(cls);
            properties ? declareProperties(cls, name, properties, cls.$super, data.mixins) : cc.errorID(3633, name);
          }
          this.datas = null;
        }
      }
    };
    function appendProp(cls, name) {
      false;
      pushUnique(cls.__props__, name);
    }
    var tmpArray = [];
    function defineProp(cls, className, propName, val, es6) {
      var defaultValue = val.default;
      false;
      Attr.setClassAttr(cls, propName, "default", defaultValue);
      appendProp(cls, propName);
      var attrs = parseAttributes(cls, val, className, propName, false);
      if (attrs) {
        var onAfterProp = tmpArray;
        for (var i = 0; i < attrs.length; i++) {
          var attr = attrs[i];
          Attr.attr(cls, propName, attr);
          attr._onAfterProp && onAfterProp.push(attr._onAfterProp);
        }
        for (var c = 0; c < onAfterProp.length; c++) onAfterProp[c](cls, propName);
        tmpArray.length = 0;
        attrs.length = 0;
      }
    }
    function defineGetSet(cls, name, propName, val, es6) {
      var getter = val.get;
      var setter = val.set;
      var proto = cls.prototype;
      var d = Object.getOwnPropertyDescriptor(proto, propName);
      var setterUndefined = !d;
      if (getter) {
        false;
        var attrs = parseAttributes(cls, val, name, propName, true);
        for (var i = 0; i < attrs.length; i++) Attr.attr(cls, propName, attrs[i]);
        attrs.length = 0;
        Attr.setClassAttr(cls, propName, "serializable", false);
        false;
        es6 || js.get(proto, propName, getter, setterUndefined, setterUndefined);
        false, false;
      }
      if (setter) {
        if (!es6) {
          false;
          js.set(proto, propName, setter, setterUndefined, setterUndefined);
        }
        false, false;
      }
    }
    function getDefault(defaultVal) {
      if ("function" === typeof defaultVal) {
        false;
        return defaultVal();
      }
      return defaultVal;
    }
    function mixinWithInherited(dest, src, filter) {
      for (var prop in src) dest.hasOwnProperty(prop) || filter && !filter(prop) || Object.defineProperty(dest, prop, js.getPropertyDescriptor(src, prop));
    }
    function doDefine(className, baseClass, mixins, options) {
      var shouldAddProtoCtor;
      var __ctor__ = options.__ctor__;
      var ctor = options.ctor;
      var __es6__ = options.__ES6__;
      var ctorToUse;
      false;
      var ctors;
      var fireClass;
      if (__es6__) {
        ctors = [ ctor ];
        fireClass = ctor;
      } else {
        ctors = __ctor__ ? [ __ctor__ ] : _getAllCtors(baseClass, mixins, options);
        fireClass = _createCtor(ctors, baseClass, className, options);
        js.value(fireClass, "extend", (function(options) {
          options.extends = this;
          return CCClass(options);
        }), true);
      }
      js.value(fireClass, "__ctors__", ctors.length > 0 ? ctors : null, true);
      var prototype = fireClass.prototype;
      if (baseClass) {
        if (!__es6__) {
          js.extend(fireClass, baseClass);
          prototype = fireClass.prototype;
        }
        fireClass.$super = baseClass;
        false;
      }
      if (mixins) {
        for (var m = mixins.length - 1; m >= 0; m--) {
          var mixin = mixins[m];
          mixinWithInherited(prototype, mixin.prototype);
          mixinWithInherited(fireClass, mixin, (function(prop) {
            return mixin.hasOwnProperty(prop) && true;
          }));
          CCClass._isCCClass(mixin) && mixinWithInherited(Attr.getClassAttrs(fireClass).constructor.prototype, Attr.getClassAttrs(mixin).constructor.prototype);
        }
        prototype.constructor = fireClass;
      }
      __es6__ || (prototype.__initProps__ = compileProps);
      js.setClassName(className, fireClass);
      return fireClass;
    }
    function define(className, baseClass, mixins, options) {
      var Component = cc.Component;
      var frame = cc._RF.peek();
      if (frame && js.isChildClassOf(baseClass, Component)) {
        if (js.isChildClassOf(frame.cls, Component)) {
          cc.errorID(3615);
          return null;
        }
        false;
        className = className || frame.script;
      }
      var cls = doDefine(className, baseClass, mixins, options);
      if (frame) if (js.isChildClassOf(baseClass, Component)) {
        var uuid = frame.uuid;
        if (uuid) {
          js._setClassId(uuid, cls);
          false;
        }
        frame.cls = cls;
      } else js.isChildClassOf(frame.cls, Component) || (frame.cls = cls);
      return cls;
    }
    function normalizeClassName_DEV(className) {
      var DefaultName = "CCClass";
      if (className) {
        className = className.replace(/^[^$A-Za-z_]/, "_").replace(/[^0-9A-Za-z_$]/g, "_");
        try {
          Function("function " + className + "(){}")();
          return className;
        } catch (e) {}
      }
      return DefaultName;
    }
    function getNewValueTypeCodeJit(value) {
      var clsName = js.getClassName(value);
      var type = value.constructor;
      var res = "new " + clsName + "(";
      for (var i = 0; i < type.__props__.length; i++) {
        var prop = type.__props__[i];
        var propVal = value[prop];
        false;
        res += propVal;
        i < type.__props__.length - 1 && (res += ",");
      }
      return res + ")";
    }
    function escapeForJS(s) {
      return JSON.stringify(s).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    function getInitPropsJit(attrs, propList) {
      var F = [];
      var func = "";
      for (var i = 0; i < propList.length; i++) {
        var prop = propList[i];
        var attrKey = prop + DELIMETER + "default";
        if (attrKey in attrs) {
          var statement;
          statement = IDENTIFIER_RE.test(prop) ? "this." + prop + "=" : "this[" + escapeForJS(prop) + "]=";
          var expression;
          var def = attrs[attrKey];
          if ("object" === typeof def && def) expression = def instanceof cc.ValueType ? getNewValueTypeCodeJit(def) : Array.isArray(def) ? "[]" : "{}"; else if ("function" === typeof def) {
            var index = F.length;
            F.push(def);
            expression = "F[" + index + "]()";
            false;
          } else expression = "string" === typeof def ? escapeForJS(def) : def;
          statement = statement + expression + ";\n";
          func += statement;
        }
      }
      var initProps;
      initProps = 0 === F.length ? Function(func) : Function("F", "return (function(){\n" + func + "})")(F);
      return initProps;
    }
    function getInitProps(attrs, propList) {
      var advancedProps = [];
      var advancedValues = [];
      var simpleProps = [];
      var simpleValues = [];
      for (var i = 0; i < propList.length; ++i) {
        var prop = propList[i];
        var attrKey = prop + DELIMETER + "default";
        if (attrKey in attrs) {
          var def = attrs[attrKey];
          if ("object" === typeof def && def || "function" === typeof def) {
            advancedProps.push(prop);
            advancedValues.push(def);
          } else {
            simpleProps.push(prop);
            simpleValues.push(def);
          }
        }
      }
      return function() {
        for (var _i = 0; _i < simpleProps.length; ++_i) this[simpleProps[_i]] = simpleValues[_i];
        for (var _i2 = 0; _i2 < advancedProps.length; _i2++) {
          var _prop = advancedProps[_i2];
          var expression;
          var def = advancedValues[_i2];
          if ("object" === typeof def) expression = def instanceof cc.ValueType ? def.clone() : Array.isArray(def) ? [] : {}; else {
            false;
            expression = def();
          }
          this[_prop] = expression;
        }
      };
    }
    var IDENTIFIER_RE = /^[A-Za-z_$][0-9A-Za-z_$]*$/;
    function compileProps(actualClass) {
      var attrs = Attr.getClassAttrs(actualClass);
      var propList = actualClass.__props__;
      if (null === propList) {
        deferredInitializer.init();
        propList = actualClass.__props__;
      }
      var initProps = getInitProps(attrs, propList);
      actualClass.prototype.__initProps__ = initProps;
      initProps.call(this);
    }
    var _createCtor = function(ctors, baseClass, className, options) {
      var superCallBounded = baseClass && boundSuperCalls(baseClass, options, className);
      var ctorLen = ctors.length;
      var Class;
      Class = ctorLen > 0 ? superCallBounded ? 2 === ctorLen ? function() {
        this._super = null;
        this.__initProps__(Class);
        ctors[0].apply(this, arguments);
        ctors[1].apply(this, arguments);
      } : function() {
        this._super = null;
        this.__initProps__(Class);
        for (var i = 0; i < ctors.length; ++i) ctors[i].apply(this, arguments);
      } : 3 === ctorLen ? function() {
        this.__initProps__(Class);
        ctors[0].apply(this, arguments);
        ctors[1].apply(this, arguments);
        ctors[2].apply(this, arguments);
      } : function() {
        this.__initProps__(Class);
        var ctors = Class.__ctors__;
        for (var i = 0; i < ctors.length; ++i) ctors[i].apply(this, arguments);
      } : function() {
        superCallBounded && (this._super = null);
        this.__initProps__(Class);
      };
      return Class;
    };
    function _validateCtor_DEV(ctor, baseClass, className, options) {
      var originCtor;
      false;
      !(ctor.length > 0) || className && className.startsWith("cc.") || cc.warnID(3617, className);
      return ctor;
    }
    function _getAllCtors(baseClass, mixins, options) {
      function getCtors(cls) {
        return CCClass._isCCClass(cls) ? cls.__ctors__ || [] : [ cls ];
      }
      var ctors = [];
      var baseOrMixins = [ baseClass ].concat(mixins);
      for (var b = 0; b < baseOrMixins.length; b++) {
        var baseOrMixin = baseOrMixins[b];
        if (baseOrMixin) {
          var baseCtors = getCtors(baseOrMixin);
          for (var c = 0; c < baseCtors.length; c++) pushUnique(ctors, baseCtors[c]);
        }
      }
      var ctor = options.ctor;
      ctor && ctors.push(ctor);
      return ctors;
    }
    var SuperCallReg = /xyz/.test((function() {
      xyz;
    })) ? /\b\._super\b/ : /.*/;
    var SuperCallRegStrict = /xyz/.test((function() {
      xyz;
    })) ? /this\._super\s*\(/ : /(NONE){99}/;
    function boundSuperCalls(baseClass, options, className) {
      var hasSuperCall = false;
      for (var funcName in options) {
        if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) continue;
        var func = options[funcName];
        if ("function" !== typeof func) continue;
        var pd = js.getPropertyDescriptor(baseClass.prototype, funcName);
        if (pd) {
          var superFunc = pd.value;
          if ("function" === typeof superFunc) {
            if (SuperCallReg.test(func)) {
              hasSuperCall = true;
              options[funcName] = (function(superFunc, func) {
                return function() {
                  var tmp = this._super;
                  this._super = superFunc;
                  var ret = func.apply(this, arguments);
                  this._super = tmp;
                  return ret;
                };
              })(superFunc, func);
            }
            continue;
          }
        }
        false;
      }
      return hasSuperCall;
    }
    function declareProperties(cls, className, properties, baseClass, mixins, es6) {
      cls.__props__ = [];
      baseClass && baseClass.__props__ && (cls.__props__ = baseClass.__props__.slice());
      if (mixins) for (var m = 0; m < mixins.length; ++m) {
        var mixin = mixins[m];
        mixin.__props__ && (cls.__props__ = cls.__props__.concat(mixin.__props__.filter((function(x) {
          return cls.__props__.indexOf(x) < 0;
        }))));
      }
      if (properties) {
        preprocess.preprocessAttrs(properties, className, cls, es6);
        for (var propName in properties) {
          var val = properties[propName];
          "default" in val ? defineProp(cls, className, propName, val, es6) : defineGetSet(cls, className, propName, val, es6);
        }
      }
      var attrs = Attr.getClassAttrs(cls);
      cls.__values__ = cls.__props__.filter((function(prop) {
        return false !== attrs[prop + DELIMETER + "serializable"];
      }));
    }
    function CCClass(options) {
      options = options || {};
      var name = options.name;
      var base = options.extends;
      var mixins = options.mixins;
      var cls = define(name, base, mixins, options);
      name || (name = cc.js.getClassName(cls));
      cls._sealed = true;
      base && (base._sealed = false);
      var properties = options.properties;
      if ("function" === typeof properties || base && null === base.__props__ || mixins && mixins.some((function(x) {
        return null === x.__props__;
      }))) {
        false;
        deferredInitializer.push({
          cls: cls,
          props: properties,
          mixins: mixins
        });
        cls.__props__ = cls.__values__ = null;
      } else declareProperties(cls, name, properties, base, options.mixins, options.__ES6__);
      var statics = options.statics;
      if (statics) {
        var staticPropName;
        false;
        for (staticPropName in statics) cls[staticPropName] = statics[staticPropName];
      }
      for (var funcName in options) {
        if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) continue;
        var func = options[funcName];
        if (!preprocess.validateMethodWithProps(func, funcName, name, cls, base)) continue;
        js.value(cls.prototype, funcName, func, true, true);
      }
      var editor = options.editor;
      editor && !!js.isChildClassOf(base, cc.Component) && cc.Component._registerEditorProps(cls, editor);
      return cls;
    }
    CCClass._isCCClass = function(constructor) {
      return constructor && constructor.hasOwnProperty("__ctors__");
    };
    CCClass._fastDefine = function(className, constructor, serializableFields) {
      js.setClassName(className, constructor);
      var props = constructor.__props__ = constructor.__values__ = Object.keys(serializableFields);
      var attrProtos = Attr.getClassAttrsProto(constructor);
      for (var i = 0; i < props.length; i++) {
        var key = props[i];
        attrProtos[key + DELIMETER + "visible"] = false;
        attrProtos[key + DELIMETER + "default"] = serializableFields[key];
      }
    };
    CCClass.Attr = Attr;
    CCClass.attr = Attr.attr;
    CCClass.getInheritanceChain = function(klass) {
      var chain = [];
      for (;;) {
        klass = js.getSuper(klass);
        if (!klass) break;
        klass !== Object && chain.push(klass);
      }
      return chain;
    };
    var PrimitiveTypes = {
      Integer: "Number",
      Float: "Number",
      Boolean: "Boolean",
      String: "String"
    };
    var tmpAttrs = [];
    function parseAttributes(cls, attrs, className, propName, usedInGetter) {
      var ERR_Type = "";
      var attrsProto = null;
      var attrsProtoKey = "";
      function getAttrsProto() {
        attrsProtoKey = propName + DELIMETER;
        return attrsProto = Attr.getClassAttrsProto(cls);
      }
      tmpAttrs.length = 0;
      var result = tmpAttrs;
      var type = attrs.type;
      if (type) {
        var primitiveType = PrimitiveTypes[type];
        if (primitiveType) result.push({
          type: type,
          _onAfterProp: getTypeChecker(primitiveType, "cc." + type)
        }); else if ("Object" === type) false; else if (type === Attr.ScriptUuid) {
          var attr = Attr.ObjectType(cc.ScriptAsset);
          attr.type = "Script";
          result.push(attr);
        } else "object" === typeof type ? !!Enum.isEnum(type) && result.push({
          type: "Enum",
          enumList: Enum.getList(type)
        }) : "function" === typeof type && (attrs.url ? result.push({
          type: "Object",
          ctor: type,
          _onAfterProp: getTypeChecker("String", "cc.String")
        }) : result.push(attrs._short ? {
          type: "Object",
          ctor: type
        } : Attr.ObjectType(type)));
      }
      function parseSimpleAttr(attrName, expectType) {
        if (attrName in attrs) {
          var val = attrs[attrName];
          typeof val === expectType && ((attrsProto || getAttrsProto())[attrsProtoKey + attrName] = val);
        }
      }
      if (attrs.editorOnly) {
        false;
        (attrsProto || getAttrsProto())[attrsProtoKey + "editorOnly"] = true;
      }
      false;
      attrs.url && ((attrsProto || getAttrsProto())[attrsProtoKey + "saveUrlAsAsset"] = true);
      if (false === attrs.serializable) {
        false;
        (attrsProto || getAttrsProto())[attrsProtoKey + "serializable"] = false;
      }
      parseSimpleAttr("formerlySerializedAs", "string");
      false;
      var visible;
      var startsWithUS;
      false;
      var range = attrs.range;
      if (range) if (Array.isArray(range)) if (range.length >= 2) {
        (attrsProto || getAttrsProto())[attrsProtoKey + "min"] = range[0];
        attrsProto[attrsProtoKey + "max"] = range[1];
        range.length > 2 && (attrsProto[attrsProtoKey + "step"] = range[2]);
      } else false; else false;
      parseSimpleAttr("min", "number");
      parseSimpleAttr("max", "number");
      parseSimpleAttr("step", "number");
      return result;
    }
    cc.Class = CCClass;
    module.exports = {
      isArray: function(defaultVal) {
        defaultVal = getDefault(defaultVal);
        return Array.isArray(defaultVal);
      },
      fastDefine: CCClass._fastDefine,
      getNewValueTypeCode: false,
      IDENTIFIER_RE: IDENTIFIER_RE,
      escapeForJS: escapeForJS,
      getDefault: getDefault
    };
    false;
  }), {
    "./CCEnum": 88,
    "./attribute": 98,
    "./js": 106,
    "./preprocess-class": 107,
    "./requiring-frame": 108,
    "./utils": 110
  } ],
  87: [ (function(require, module, exports) {
    require("./CCClass");
    var Preprocess = require("./preprocess-class");
    var js = require("./js");
    var isPlainEmptyObj_DEV = false;
    var CACHE_KEY = "__ccclassCache__";
    function fNOP(ctor) {
      return ctor;
    }
    function getSubDict(obj, key) {
      return obj[key] || (obj[key] = {});
    }
    function checkCtorArgument(decorate) {
      return function(target) {
        if ("function" === typeof target) return decorate(target);
        return function(ctor) {
          return decorate(ctor, target);
        };
      };
    }
    function _checkNormalArgument(validator_DEV, decorate, decoratorName) {
      return function(target) {
        false;
        return function(ctor) {
          return decorate(ctor, target);
        };
      };
    }
    var checkCompArgument = _checkNormalArgument.bind(null, false);
    function _argumentChecker(type) {
      return _checkNormalArgument.bind(null, false);
    }
    var checkStringArgument = _argumentChecker("string");
    var checkNumberArgument = _argumentChecker("number");
    function getClassCache(ctor, decoratorName) {
      false;
      return getSubDict(ctor, CACHE_KEY);
    }
    function getDefaultFromInitializer(initializer) {
      var value;
      try {
        value = initializer();
      } catch (e) {
        return initializer;
      }
      return "object" !== typeof value || null === value ? value : initializer;
    }
    function extractActualDefaultValues(ctor) {
      var dummyObj;
      try {
        dummyObj = new ctor();
      } catch (e) {
        false;
        return {};
      }
      return dummyObj;
    }
    function genProperty(ctor, properties, propName, options, desc, cache) {
      var fullOptions;
      if (options) {
        fullOptions = Preprocess.getFullFormOfProperty(options);
        fullOptions = fullOptions || options;
      }
      var existsProperty = properties[propName];
      var prop = js.mixin(existsProperty || {}, fullOptions || {});
      var isGetset = desc && (desc.get || desc.set);
      if (isGetset) {
        var errorProps;
        false;
        desc.get && (prop.get = desc.get);
        desc.set && (prop.set = desc.set);
      } else {
        false;
        var defaultValue = void 0;
        var isDefaultValueSpecified = false;
        if (desc) {
          if (desc.initializer) {
            defaultValue = getDefaultFromInitializer(desc.initializer);
            isDefaultValueSpecified = true;
          }
        } else {
          var actualDefaultValues = cache.default || (cache.default = extractActualDefaultValues(ctor));
          if (actualDefaultValues.hasOwnProperty(propName)) {
            defaultValue = actualDefaultValues[propName];
            isDefaultValueSpecified = true;
          }
        }
        false;
        prop.default = defaultValue;
      }
      properties[propName] = prop;
    }
    var ccclass = checkCtorArgument((function(ctor, name) {
      var base = js.getSuper(ctor);
      base === Object && (base = null);
      var proto = {
        name: name,
        extends: base,
        ctor: ctor,
        __ES6__: true
      };
      var cache = ctor[CACHE_KEY];
      if (cache) {
        var decoratedProto = cache.proto;
        decoratedProto && js.mixin(proto, decoratedProto);
        ctor[CACHE_KEY] = void 0;
      }
      var res = cc.Class(proto);
      var propNames;
      var i;
      var prop;
      var desc;
      var func;
      false;
      return res;
    }));
    function property(ctorProtoOrOptions, propName, desc) {
      var options = null;
      function normalized(ctorProto, propName, desc) {
        var cache = getClassCache(ctorProto.constructor);
        if (cache) {
          var ccclassProto = getSubDict(cache, "proto");
          var properties = getSubDict(ccclassProto, "properties");
          genProperty(ctorProto.constructor, properties, propName, options, desc, cache);
        }
      }
      if ("undefined" === typeof propName) {
        options = ctorProtoOrOptions;
        return normalized;
      }
      normalized(ctorProtoOrOptions, propName, desc);
    }
    function createEditorDecorator(argCheckFunc, editorPropName, staticValue) {
      return argCheckFunc((function(ctor, decoratedValue) {
        var cache = getClassCache(ctor, editorPropName);
        if (cache) {
          var value = void 0 !== staticValue ? staticValue : decoratedValue;
          var proto = getSubDict(cache, "proto");
          getSubDict(proto, "editor")[editorPropName] = value;
        }
      }), editorPropName);
    }
    function createDummyDecorator(argCheckFunc) {
      return argCheckFunc(fNOP);
    }
    var executeInEditMode = createDummyDecorator(checkCtorArgument, "executeInEditMode", true);
    var requireComponent = createEditorDecorator(checkCompArgument, "requireComponent");
    var menu = createDummyDecorator(checkStringArgument, "menu");
    var executionOrder = createEditorDecorator(checkNumberArgument, "executionOrder");
    var disallowMultiple = createDummyDecorator(checkCtorArgument, "disallowMultiple");
    var playOnFocus = createDummyDecorator(checkCtorArgument, "playOnFocus");
    var inspector = createDummyDecorator(checkStringArgument, "inspector");
    var icon = createDummyDecorator(checkStringArgument, "icon");
    var help = createDummyDecorator(checkStringArgument, "help");
    function mixins() {
      var mixins = [];
      for (var i = 0; i < arguments.length; i++) mixins[i] = arguments[i];
      return function(ctor) {
        var cache = getClassCache(ctor, "mixins");
        cache && (getSubDict(cache, "proto").mixins = mixins);
      };
    }
    cc._decorator = module.exports = {
      ccclass: ccclass,
      property: property,
      executeInEditMode: executeInEditMode,
      requireComponent: requireComponent,
      menu: menu,
      executionOrder: executionOrder,
      disallowMultiple: disallowMultiple,
      playOnFocus: playOnFocus,
      inspector: inspector,
      icon: icon,
      help: help,
      mixins: mixins
    };
  }), {
    "./CCClass": 86,
    "./js": 106,
    "./preprocess-class": 107,
    "./utils": 110
  } ],
  88: [ (function(require, module, exports) {
    var js = require("./js");
    function Enum(obj) {
      if ("__enums__" in obj) return obj;
      js.value(obj, "__enums__", null, true);
      var lastIndex = -1;
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = obj[key];
        if (-1 === val) {
          val = ++lastIndex;
          obj[key] = val;
        } else if ("number" === typeof val) lastIndex = val; else if ("string" === typeof val && Number.isInteger(parseFloat(key))) continue;
        var reverseKey = "" + val;
        if (key !== reverseKey) {
          if ((false, false) && reverseKey in obj && obj[reverseKey] !== key) {
            cc.errorID(7100, reverseKey);
            continue;
          }
          js.value(obj, reverseKey, key);
        }
      }
      return obj;
    }
    Enum.isEnum = function(enumType) {
      return enumType && enumType.hasOwnProperty("__enums__");
    };
    Enum.getList = function(enumDef) {
      if (enumDef.__enums__) return enumDef.__enums__;
      var enums = enumDef.__enums__ = [];
      for (var name in enumDef) {
        var value = enumDef[name];
        Number.isInteger(value) && enums.push({
          name: name,
          value: value
        });
      }
      enums.sort((function(a, b) {
        return a.value - b.value;
      }));
      return enums;
    };
    var _TestEnum;
    false;
    module.exports = cc.Enum = Enum;
  }), {
    "./js": 106
  } ],
  89: [ (function(require, module, exports) {
    var eventManager = require("../event-manager");
    var inputManager = require("./CCInputManager");
    var PORTRAIT = 0;
    var LANDSCAPE_LEFT = -90;
    var PORTRAIT_UPSIDE_DOWN = 180;
    var LANDSCAPE_RIGHT = 90;
    var _didAccelerateFun = void 0;
    cc.Acceleration = function(x, y, z, timestamp) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.timestamp = timestamp || 0;
    };
    inputManager.setAccelerometerEnabled = function(isEnable) {
      var _t = this;
      if (_t._accelEnabled === isEnable) return;
      _t._accelEnabled = isEnable;
      var scheduler = cc.director.getScheduler();
      scheduler.enableForTarget(_t);
      if (_t._accelEnabled) {
        _t._registerAccelerometerEvent();
        _t._accelCurTime = 0;
        scheduler.scheduleUpdate(_t);
      } else {
        _t._unregisterAccelerometerEvent();
        _t._accelCurTime = 0;
        scheduler.unscheduleUpdate(_t);
      }
      false;
    };
    inputManager.setAccelerometerInterval = function(interval) {
      if (this._accelInterval !== interval) {
        this._accelInterval = interval;
        false;
      }
    };
    inputManager._registerKeyboardEvent = function() {
      cc.game.canvas.addEventListener("keydown", (function(e) {
        eventManager.dispatchEvent(new cc.Event.EventKeyboard(e.keyCode, true));
        e.stopPropagation();
        e.preventDefault();
      }), false);
      cc.game.canvas.addEventListener("keyup", (function(e) {
        eventManager.dispatchEvent(new cc.Event.EventKeyboard(e.keyCode, false));
        e.stopPropagation();
        e.preventDefault();
      }), false);
    };
    inputManager._registerAccelerometerEvent = function() {
      var w = window, _t = this;
      _t._acceleration = new cc.Acceleration();
      _t._accelDeviceEvent = w.DeviceMotionEvent || w.DeviceOrientationEvent;
      cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ && (_t._accelDeviceEvent = window.DeviceOrientationEvent);
      var _deviceEventType = _t._accelDeviceEvent === w.DeviceMotionEvent ? "devicemotion" : "deviceorientation";
      var ua = navigator.userAgent;
      (/Android/.test(ua) || /Adr/.test(ua) && cc.sys.browserType === cc.BROWSER_TYPE_UC) && (_t._minus = -1);
      _didAccelerateFun = _t.didAccelerate.bind(_t);
      w.addEventListener(_deviceEventType, _didAccelerateFun, false);
    };
    inputManager._unregisterAccelerometerEvent = function() {
      var w = window, _t = this;
      var _deviceEventType = _t._accelDeviceEvent === w.DeviceMotionEvent ? "devicemotion" : "deviceorientation";
      _didAccelerateFun && w.removeEventListener(_deviceEventType, _didAccelerateFun, false);
    };
    inputManager.didAccelerate = function(eventData) {
      var _t = this, w = window;
      if (!_t._accelEnabled) return;
      var mAcceleration = _t._acceleration;
      var x = void 0, y = void 0, z = void 0;
      if (_t._accelDeviceEvent === window.DeviceMotionEvent) {
        var eventAcceleration = eventData["accelerationIncludingGravity"];
        x = _t._accelMinus * eventAcceleration.x * .1;
        y = _t._accelMinus * eventAcceleration.y * .1;
        z = .1 * eventAcceleration.z;
      } else {
        x = eventData["gamma"] / 90 * .981;
        y = -eventData["beta"] / 90 * .981;
        z = eventData["alpha"] / 90 * .981;
      }
      if (cc.view._isRotated) {
        var tmp = x;
        x = -y;
        y = tmp;
      }
      mAcceleration.x = x;
      mAcceleration.y = y;
      mAcceleration.z = z;
      mAcceleration.timestamp = eventData.timeStamp || Date.now();
      var tmpX = mAcceleration.x;
      if (w.orientation === LANDSCAPE_RIGHT) {
        mAcceleration.x = -mAcceleration.y;
        mAcceleration.y = tmpX;
      } else if (w.orientation === LANDSCAPE_LEFT) {
        mAcceleration.x = mAcceleration.y;
        mAcceleration.y = -tmpX;
      } else if (w.orientation === PORTRAIT_UPSIDE_DOWN) {
        mAcceleration.x = -mAcceleration.x;
        mAcceleration.y = -mAcceleration.y;
      }
      if (cc.sys.os === cc.sys.OS_ANDROID && cc.sys.browserType !== cc.sys.BROWSER_TYPE_MOBILE_QQ) {
        mAcceleration.x = -mAcceleration.x;
        mAcceleration.y = -mAcceleration.y;
      }
    };
  }), {
    "../event-manager": 48,
    "./CCInputManager": 90
  } ],
  90: [ (function(require, module, exports) {
    var macro = require("./CCMacro");
    var sys = require("./CCSys");
    var eventManager = require("../event-manager");
    var TOUCH_TIMEOUT = macro.TOUCH_TIMEOUT;
    var _vec2 = cc.v2();
    var inputManager = {
      _mousePressed: false,
      _isRegisterEvent: false,
      _preTouchPoint: cc.v2(0, 0),
      _prevMousePoint: cc.v2(0, 0),
      _preTouchPool: [],
      _preTouchPoolPointer: 0,
      _touches: [],
      _touchesIntegerDict: {},
      _indexBitsUsed: 0,
      _maxTouches: 8,
      _accelEnabled: false,
      _accelInterval: .2,
      _accelMinus: 1,
      _accelCurTime: 0,
      _acceleration: null,
      _accelDeviceEvent: null,
      _getUnUsedIndex: function() {
        var temp = this._indexBitsUsed;
        var now = cc.sys.now();
        for (var i = 0; i < this._maxTouches; i++) {
          if (!(1 & temp)) {
            this._indexBitsUsed |= 1 << i;
            return i;
          }
          var touch = this._touches[i];
          if (now - touch._lastModified > TOUCH_TIMEOUT) {
            this._removeUsedIndexBit(i);
            delete this._touchesIntegerDict[touch.getID()];
            return i;
          }
          temp >>= 1;
        }
        return -1;
      },
      _removeUsedIndexBit: function(index) {
        if (index < 0 || index >= this._maxTouches) return;
        var temp = 1 << index;
        temp = ~temp;
        this._indexBitsUsed &= temp;
      },
      _glView: null,
      handleTouchesBegin: function(touches) {
        var selTouch = void 0, index = void 0, curTouch = void 0, touchID = void 0, handleTouches = [], locTouchIntDict = this._touchesIntegerDict, now = sys.now();
        for (var i = 0, len = touches.length; i < len; i++) {
          selTouch = touches[i];
          touchID = selTouch.getID();
          index = locTouchIntDict[touchID];
          if (null == index) {
            var unusedIndex = this._getUnUsedIndex();
            if (-1 === unusedIndex) {
              cc.logID(2300, unusedIndex);
              continue;
            }
            curTouch = this._touches[unusedIndex] = new cc.Touch(selTouch._point.x, selTouch._point.y, selTouch.getID());
            curTouch._lastModified = now;
            curTouch._setPrevPoint(selTouch._prevPoint);
            locTouchIntDict[touchID] = unusedIndex;
            handleTouches.push(curTouch);
          }
        }
        if (handleTouches.length > 0) {
          this._glView._convertTouchesWithScale(handleTouches);
          var touchEvent = new cc.Event.EventTouch(handleTouches);
          touchEvent._eventCode = cc.Event.EventTouch.BEGAN;
          eventManager.dispatchEvent(touchEvent);
        }
      },
      handleTouchesMove: function(touches) {
        var selTouch = void 0, index = void 0, touchID = void 0, handleTouches = [], locTouches = this._touches, now = sys.now();
        for (var i = 0, len = touches.length; i < len; i++) {
          selTouch = touches[i];
          touchID = selTouch.getID();
          index = this._touchesIntegerDict[touchID];
          if (null == index) continue;
          if (locTouches[index]) {
            locTouches[index]._setPoint(selTouch._point);
            locTouches[index]._setPrevPoint(selTouch._prevPoint);
            locTouches[index]._lastModified = now;
            handleTouches.push(locTouches[index]);
          }
        }
        if (handleTouches.length > 0) {
          this._glView._convertTouchesWithScale(handleTouches);
          var touchEvent = new cc.Event.EventTouch(handleTouches);
          touchEvent._eventCode = cc.Event.EventTouch.MOVED;
          eventManager.dispatchEvent(touchEvent);
        }
      },
      handleTouchesEnd: function(touches) {
        var handleTouches = this.getSetOfTouchesEndOrCancel(touches);
        if (handleTouches.length > 0) {
          this._glView._convertTouchesWithScale(handleTouches);
          var touchEvent = new cc.Event.EventTouch(handleTouches);
          touchEvent._eventCode = cc.Event.EventTouch.ENDED;
          eventManager.dispatchEvent(touchEvent);
        }
        this._preTouchPool.length = 0;
      },
      handleTouchesCancel: function(touches) {
        var handleTouches = this.getSetOfTouchesEndOrCancel(touches);
        if (handleTouches.length > 0) {
          this._glView._convertTouchesWithScale(handleTouches);
          var touchEvent = new cc.Event.EventTouch(handleTouches);
          touchEvent._eventCode = cc.Event.EventTouch.CANCELLED;
          eventManager.dispatchEvent(touchEvent);
        }
        this._preTouchPool.length = 0;
      },
      getSetOfTouchesEndOrCancel: function(touches) {
        var selTouch = void 0, index = void 0, touchID = void 0, handleTouches = [], locTouches = this._touches, locTouchesIntDict = this._touchesIntegerDict;
        for (var i = 0, len = touches.length; i < len; i++) {
          selTouch = touches[i];
          touchID = selTouch.getID();
          index = locTouchesIntDict[touchID];
          if (null == index) continue;
          if (locTouches[index]) {
            locTouches[index]._setPoint(selTouch._point);
            locTouches[index]._setPrevPoint(selTouch._prevPoint);
            handleTouches.push(locTouches[index]);
            this._removeUsedIndexBit(index);
            delete locTouchesIntDict[touchID];
          }
        }
        return handleTouches;
      },
      getHTMLElementPosition: function(element) {
        true;
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
        var docElem;
        var leftOffset;
        var topOffset;
        var box;
      },
      getPreTouch: function(touch) {
        var preTouch = null;
        var locPreTouchPool = this._preTouchPool;
        var id = touch.getID();
        for (var i = locPreTouchPool.length - 1; i >= 0; i--) if (locPreTouchPool[i].getID() === id) {
          preTouch = locPreTouchPool[i];
          break;
        }
        preTouch || (preTouch = touch);
        return preTouch;
      },
      setPreTouch: function(touch) {
        var find = false;
        var locPreTouchPool = this._preTouchPool;
        var id = touch.getID();
        for (var i = locPreTouchPool.length - 1; i >= 0; i--) if (locPreTouchPool[i].getID() === id) {
          locPreTouchPool[i] = touch;
          find = true;
          break;
        }
        if (!find) if (locPreTouchPool.length <= 50) locPreTouchPool.push(touch); else {
          locPreTouchPool[this._preTouchPoolPointer] = touch;
          this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50;
        }
      },
      getTouchByXY: function(tx, ty, pos) {
        var locPreTouch = this._preTouchPoint;
        var location = this._glView.convertToLocationInView(tx, ty, pos);
        var touch = new cc.Touch(location.x, location.y, 0);
        touch._setPrevPoint(locPreTouch.x, locPreTouch.y);
        locPreTouch.x = location.x;
        locPreTouch.y = location.y;
        return touch;
      },
      getMouseEvent: function(location, pos, eventType) {
        var locPreMouse = this._prevMousePoint;
        var mouseEvent = new cc.Event.EventMouse(eventType);
        mouseEvent._setPrevCursor(locPreMouse.x, locPreMouse.y);
        locPreMouse.x = location.x;
        locPreMouse.y = location.y;
        this._glView._convertMouseToLocationInView(locPreMouse, pos);
        mouseEvent.setLocation(locPreMouse.x, locPreMouse.y);
        return mouseEvent;
      },
      getPointByEvent: function(event, pos) {
        if (null != event.pageX) return {
          x: event.pageX,
          y: event.pageY
        };
        true;
        pos.left = 0;
        pos.top = 0;
        return {
          x: event.clientX,
          y: event.clientY
        };
      },
      getTouchesByEvent: function(event, pos) {
        var touchArr = [], locView = this._glView;
        var touch_event = void 0, touch = void 0, preLocation = void 0;
        var locPreTouch = this._preTouchPoint;
        var length = event.changedTouches.length;
        for (var i = 0; i < length; i++) {
          touch_event = event.changedTouches[i];
          if (touch_event) {
            var location = void 0;
            location = sys.BROWSER_TYPE_FIREFOX === sys.browserType ? locView.convertToLocationInView(touch_event.pageX, touch_event.pageY, pos, _vec2) : locView.convertToLocationInView(touch_event.clientX, touch_event.clientY, pos, _vec2);
            if (null != touch_event.identifier) {
              touch = new cc.Touch(location.x, location.y, touch_event.identifier);
              preLocation = this.getPreTouch(touch).getLocation();
              touch._setPrevPoint(preLocation.x, preLocation.y);
              this.setPreTouch(touch);
            } else {
              touch = new cc.Touch(location.x, location.y);
              touch._setPrevPoint(locPreTouch.x, locPreTouch.y);
            }
            locPreTouch.x = location.x;
            locPreTouch.y = location.y;
            touchArr.push(touch);
          }
        }
        return touchArr;
      },
      registerSystemEvent: function(element) {
        if (this._isRegisterEvent) return;
        this._glView = cc.view;
        var selfPointer = this;
        var prohibition = sys.isMobile;
        var supportMouse = "mouse" in sys.capabilities;
        var supportTouches = "touches" in sys.capabilities;
        true;
        prohibition = false;
        supportTouches = true;
        supportMouse = false;
        if (supportMouse) {
          if (!prohibition) {
            window.addEventListener("mousedown", (function() {
              selfPointer._mousePressed = true;
            }), false);
            window.addEventListener("mouseup", (function(event) {
              if (!selfPointer._mousePressed) return;
              selfPointer._mousePressed = false;
              var pos = selfPointer.getHTMLElementPosition(element);
              var location = selfPointer.getPointByEvent(event, pos);
              if (!cc.rect(pos.left, pos.top, pos.width, pos.height).contains(location)) {
                selfPointer.handleTouchesEnd([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
                var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.Event.EventMouse.UP);
                mouseEvent.setButton(event.button);
                eventManager.dispatchEvent(mouseEvent);
              }
            }), false);
          }
          var EventMouse = cc.Event.EventMouse;
          var _mouseEventsOnElement = [ !prohibition && [ "mousedown", EventMouse.DOWN, function(event, mouseEvent, location, pos) {
            selfPointer._mousePressed = true;
            selfPointer.handleTouchesBegin([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
            element.focus();
          } ], !prohibition && [ "mouseup", EventMouse.UP, function(event, mouseEvent, location, pos) {
            selfPointer._mousePressed = false;
            selfPointer.handleTouchesEnd([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
          } ], !prohibition && [ "mousemove", EventMouse.MOVE, function(event, mouseEvent, location, pos) {
            selfPointer.handleTouchesMove([ selfPointer.getTouchByXY(location.x, location.y, pos) ]);
            selfPointer._mousePressed || mouseEvent.setButton(null);
          } ], [ "mousewheel", EventMouse.SCROLL, function(event, mouseEvent) {
            mouseEvent.setScrollData(0, event.wheelDelta);
          } ], [ "DOMMouseScroll", EventMouse.SCROLL, function(event, mouseEvent) {
            mouseEvent.setScrollData(0, -120 * event.detail);
          } ] ];
          for (var i = 0; i < _mouseEventsOnElement.length; ++i) {
            var entry = _mouseEventsOnElement[i];
            entry && (function() {
              var name = entry[0];
              var type = entry[1];
              var handler = entry[2];
              element.addEventListener(name, (function(event) {
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                var mouseEvent = selfPointer.getMouseEvent(location, pos, type);
                mouseEvent.setButton(event.button);
                handler(event, mouseEvent, location, pos);
                eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
              }), false);
            })();
          }
        }
        if (window.navigator.msPointerEnabled) {
          var _pointerEventsMap = {
            MSPointerDown: selfPointer.handleTouchesBegin,
            MSPointerMove: selfPointer.handleTouchesMove,
            MSPointerUp: selfPointer.handleTouchesEnd,
            MSPointerCancel: selfPointer.handleTouchesCancel
          };
          var _loop = function(eventName) {
            var touchEvent = _pointerEventsMap[eventName];
            element.addEventListener(eventName, (function(event) {
              var pos = selfPointer.getHTMLElementPosition(element);
              pos.left -= document.documentElement.scrollLeft;
              pos.top -= document.documentElement.scrollTop;
              touchEvent.call(selfPointer, [ selfPointer.getTouchByXY(event.clientX, event.clientY, pos) ]);
              event.stopPropagation();
            }), false);
          };
          for (var eventName in _pointerEventsMap) _loop(eventName);
        }
        supportTouches && (function() {
          var _touchEventsMap = {
            touchstart: function(touchesToHandle) {
              selfPointer.handleTouchesBegin(touchesToHandle);
              false;
            },
            touchmove: function(touchesToHandle) {
              selfPointer.handleTouchesMove(touchesToHandle);
            },
            touchend: function(touchesToHandle) {
              selfPointer.handleTouchesEnd(touchesToHandle);
            },
            touchcancel: function(touchesToHandle) {
              selfPointer.handleTouchesCancel(touchesToHandle);
            }
          };
          var registerTouchEvent = void 0;
          if (cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
            _touchEventsMap = {
              onTouchStart: _touchEventsMap.touchstart,
              onTouchMove: _touchEventsMap.touchmove,
              onTouchEnd: _touchEventsMap.touchend,
              onTouchCancel: _touchEventsMap.touchcancel
            };
            registerTouchEvent = function(eventName) {
              var handler = _touchEventsMap[eventName];
              wx[eventName]((function(event) {
                if (!event.changedTouches) return;
                var pos = selfPointer.getHTMLElementPosition(element);
                var body = document.body;
                pos.left -= body.scrollLeft || 0;
                pos.top -= body.scrollTop || 0;
                handler(selfPointer.getTouchesByEvent(event, pos));
              }));
            };
          } else registerTouchEvent = function(eventName) {
            var handler = _touchEventsMap[eventName];
            element.addEventListener(eventName, (function(event) {
              if (!event.changedTouches) return;
              var pos = selfPointer.getHTMLElementPosition(element);
              var body = document.body;
              pos.left -= body.scrollLeft || 0;
              pos.top -= body.scrollTop || 0;
              handler(selfPointer.getTouchesByEvent(event, pos));
              event.stopPropagation();
              event.preventDefault();
            }), false);
          };
          for (var eventName in _touchEventsMap) registerTouchEvent(eventName);
        })();
        cc.sys.browserType !== cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB && this._registerKeyboardEvent();
        this._isRegisterEvent = true;
      },
      _registerKeyboardEvent: function() {},
      _registerAccelerometerEvent: function() {},
      update: function(dt) {
        if (this._accelCurTime > this._accelInterval) {
          this._accelCurTime -= this._accelInterval;
          eventManager.dispatchEvent(new cc.Event.EventAcceleration(this._acceleration));
        }
        this._accelCurTime += dt;
      }
    };
    module.exports = _cc.inputManager = inputManager;
  }), {
    "../event-manager": 48,
    "./CCMacro": 91,
    "./CCSys": 95
  } ],
  91: [ (function(require, module, exports) {
    var js = require("./js");
    cc.macro = {
      RAD: Math.PI / 180,
      DEG: 180 / Math.PI,
      REPEAT_FOREVER: Number.MAX_VALUE - 1,
      FLT_EPSILON: 1.192092896e-7,
      MIN_ZINDEX: -Math.pow(2, 15),
      MAX_ZINDEX: Math.pow(2, 15) - 1,
      ONE: 1,
      ZERO: 0,
      SRC_ALPHA: 770,
      SRC_ALPHA_SATURATE: 776,
      SRC_COLOR: 768,
      DST_ALPHA: 772,
      DST_COLOR: 774,
      ONE_MINUS_SRC_ALPHA: 771,
      ONE_MINUS_SRC_COLOR: 769,
      ONE_MINUS_DST_ALPHA: 773,
      ONE_MINUS_DST_COLOR: 775,
      ONE_MINUS_CONSTANT_ALPHA: 32772,
      ONE_MINUS_CONSTANT_COLOR: 32770,
      ORIENTATION_PORTRAIT: 1,
      ORIENTATION_LANDSCAPE: 2,
      ORIENTATION_AUTO: 3,
      DENSITYDPI_DEVICE: "device-dpi",
      DENSITYDPI_HIGH: "high-dpi",
      DENSITYDPI_MEDIUM: "medium-dpi",
      DENSITYDPI_LOW: "low-dpi",
      FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX: true,
      DIRECTOR_STATS_POSITION: cc.v2(0, 0),
      ENABLE_STACKABLE_ACTIONS: true,
      TOUCH_TIMEOUT: 5e3,
      BATCH_VERTEX_COUNT: 2e4,
      ENABLE_TILEDMAP_CULLING: true,
      DOWNLOAD_MAX_CONCURRENT: 64,
      ENABLE_TRANSPARENT_CANVAS: false,
      ENABLE_WEBGL_ANTIALIAS: false,
      ENABLE_CULLING: false,
      CLEANUP_IMAGE_CACHE: false,
      SHOW_MESH_WIREFRAME: false
    };
    var SUPPORT_TEXTURE_FORMATS = [ ".webp", ".jpg", ".jpeg", ".bmp", ".png" ];
    cc.sys.isMobile && cc.sys.os === cc.sys.OS_IOS && (SUPPORT_TEXTURE_FORMATS = [ ".pvr" ].concat(SUPPORT_TEXTURE_FORMATS));
    cc.macro.SUPPORT_TEXTURE_FORMATS = SUPPORT_TEXTURE_FORMATS;
    cc.macro.KEY = {
      none: 0,
      back: 6,
      menu: 18,
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      ctrl: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      space: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      select: 41,
      insert: 45,
      Delete: 46,
      0: 48,
      1: 49,
      2: 50,
      3: 51,
      4: 52,
      5: 53,
      6: 54,
      7: 55,
      8: 56,
      9: 57,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      num0: 96,
      num1: 97,
      num2: 98,
      num3: 99,
      num4: 100,
      num5: 101,
      num6: 102,
      num7: 103,
      num8: 104,
      num9: 105,
      "*": 106,
      "+": 107,
      "-": 109,
      numdel: 110,
      "/": 111,
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      semicolon: 186,
      equal: 187,
      "=": 187,
      ",": 188,
      comma: 188,
      dash: 189,
      ".": 190,
      period: 190,
      forwardslash: 191,
      grave: 192,
      "[": 219,
      openbracket: 219,
      backslash: 220,
      "]": 221,
      closebracket: 221,
      quote: 222,
      dpadLeft: 1e3,
      dpadRight: 1001,
      dpadUp: 1003,
      dpadDown: 1004,
      dpadCenter: 1005
    };
    cc.macro.ImageFormat = cc.Enum({
      JPG: 0,
      PNG: 1,
      TIFF: 2,
      WEBP: 3,
      PVR: 4,
      ETC: 5,
      S3TC: 6,
      ATITC: 7,
      TGA: 8,
      RAWDATA: 9,
      UNKNOWN: 10
    });
    cc.macro.BlendFactor = cc.Enum({
      ONE: 1,
      ZERO: 0,
      SRC_ALPHA: 770,
      SRC_COLOR: 768,
      DST_ALPHA: 772,
      DST_COLOR: 774,
      ONE_MINUS_SRC_ALPHA: 771,
      ONE_MINUS_SRC_COLOR: 769,
      ONE_MINUS_DST_ALPHA: 773,
      ONE_MINUS_DST_COLOR: 775
    });
    cc.macro.TextAlignment = cc.Enum({
      LEFT: 0,
      CENTER: 1,
      RIGHT: 2
    });
    cc.macro.VerticalTextAlignment = cc.Enum({
      TOP: 0,
      CENTER: 1,
      BOTTOM: 2
    });
    module.exports = cc.macro;
  }), {
    "./js": 106
  } ],
  92: [ (function(require, module, exports) {
    var js = require("./js");
    var CCClass = require("./CCClass");
    var Destroyed = 1;
    var RealDestroyed = 2;
    var ToDestroy = 4;
    var DontSave = 8;
    var EditorOnly = 16;
    var Dirty = 32;
    var DontDestroy = 64;
    var Destroying = 128;
    var Deactivating = 256;
    var LockedInEditor = 512;
    var IsOnEnableCalled = 2048;
    var IsEditorOnEnableCalled = 4096;
    var IsPreloadStarted = 8192;
    var IsOnLoadCalled = 16384;
    var IsOnLoadStarted = 32768;
    var IsStartCalled = 65536;
    var IsRotationLocked = 1 << 17;
    var IsScaleLocked = 1 << 18;
    var IsAnchorLocked = 1 << 19;
    var IsSizeLocked = 1 << 20;
    var IsPositionLocked = 1 << 21;
    var PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Deactivating | IsPreloadStarted | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked);
    function CCObject() {
      this._name = "";
      this._objFlags = 0;
    }
    CCClass.fastDefine("cc.Object", CCObject, {
      _name: "",
      _objFlags: 0
    });
    js.value(CCObject, "Flags", {
      Destroyed: Destroyed,
      DontSave: DontSave,
      EditorOnly: EditorOnly,
      Dirty: Dirty,
      DontDestroy: DontDestroy,
      PersistentMask: PersistentMask,
      Destroying: Destroying,
      Deactivating: Deactivating,
      LockedInEditor: LockedInEditor,
      IsPreloadStarted: IsPreloadStarted,
      IsOnLoadStarted: IsOnLoadStarted,
      IsOnLoadCalled: IsOnLoadCalled,
      IsOnEnableCalled: IsOnEnableCalled,
      IsStartCalled: IsStartCalled,
      IsEditorOnEnableCalled: IsEditorOnEnableCalled,
      IsPositionLocked: IsPositionLocked,
      IsRotationLocked: IsRotationLocked,
      IsScaleLocked: IsScaleLocked,
      IsAnchorLocked: IsAnchorLocked,
      IsSizeLocked: IsSizeLocked
    });
    var objectsToDestroy = [];
    function deferredDestroy() {
      var deleteCount = objectsToDestroy.length;
      for (var i = 0; i < deleteCount; ++i) {
        var obj = objectsToDestroy[i];
        obj._objFlags & Destroyed || obj._destroyImmediate();
      }
      deleteCount === objectsToDestroy.length ? objectsToDestroy.length = 0 : objectsToDestroy.splice(0, deleteCount);
      false;
    }
    js.value(CCObject, "_deferredDestroy", deferredDestroy);
    false;
    var prototype = CCObject.prototype;
    js.getset(prototype, "name", (function() {
      return this._name;
    }), (function(value) {
      this._name = value;
    }), true);
    js.get(prototype, "isValid", (function() {
      return !(this._objFlags & Destroyed);
    }), true);
    false, false;
    var deferredDestroyTimer = null;
    prototype.destroy = function() {
      if (this._objFlags & Destroyed) {
        cc.warnID(5e3);
        return false;
      }
      if (this._objFlags & ToDestroy) return false;
      this._objFlags |= ToDestroy;
      objectsToDestroy.push(this);
      false;
      return true;
    };
    false, false;
    function compileDestruct(obj, ctor) {
      var shouldSkipId = obj instanceof cc._BaseNode || obj instanceof cc.Component;
      var idToSkip = shouldSkipId ? "_id" : null;
      var key, propsToReset = {};
      for (key in obj) if (obj.hasOwnProperty(key)) {
        if (key === idToSkip) continue;
        switch (typeof obj[key]) {
         case "string":
          propsToReset[key] = "";
          break;

         case "object":
         case "function":
          propsToReset[key] = null;
        }
      }
      if (cc.Class._isCCClass(ctor)) {
        var attrs = cc.Class.Attr.getClassAttrs(ctor);
        var propList = ctor.__props__;
        for (var i = 0; i < propList.length; i++) {
          key = propList[i];
          var attrKey = key + cc.Class.Attr.DELIMETER + "default";
          if (attrKey in attrs) {
            if (shouldSkipId && "_id" === key) continue;
            switch (typeof attrs[attrKey]) {
             case "string":
              propsToReset[key] = "";
              break;

             case "object":
             case "function":
              propsToReset[key] = null;
              break;

             case "undefined":
              propsToReset[key] = void 0;
            }
          }
        }
      }
      var func;
      var statement;
      var val;
      false;
      return function(o) {
        for (var key in propsToReset) o[key] = propsToReset[key];
      };
    }
    prototype._destruct = function() {
      var ctor = this.constructor;
      var destruct = ctor.__destruct__;
      if (!destruct) {
        destruct = compileDestruct(this, ctor);
        js.value(ctor, "__destruct__", destruct, true);
      }
      destruct(this);
    };
    prototype._onPreDestroy = null;
    prototype._destroyImmediate = function() {
      if (this._objFlags & Destroyed) {
        cc.errorID(5e3);
        return;
      }
      this._onPreDestroy && this._onPreDestroy();
      true;
      this._destruct();
      this._objFlags |= Destroyed;
    };
    false;
    prototype._deserialize = null;
    cc.isValid = function(value, strictMode) {
      return "object" === typeof value ? !!value && !(value._objFlags & (strictMode ? Destroyed | ToDestroy : Destroyed)) : "undefined" !== typeof value;
    };
    false, false;
    cc.Object = module.exports = CCObject;
  }), {
    "./CCClass": 86,
    "./js": 106
  } ],
  93: [ (function(require, module, exports) {
    var js = require("../platform/js");
    cc.SAXParser = function() {
      if (true, window.DOMParser) {
        this._isSupportDOMParser = true;
        this._parser = new DOMParser();
      } else {
        this._isSupportDOMParser = false;
        this._parser = null;
      }
    };
    cc.SAXParser.prototype = {
      constructor: cc.SAXParser,
      parse: function(xmlTxt) {
        return this._parseXML(xmlTxt);
      },
      _parseXML: function(textxml) {
        var xmlDoc;
        if (this._isSupportDOMParser) xmlDoc = this._parser.parseFromString(textxml, "text/xml"); else {
          xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = "false";
          xmlDoc.loadXML(textxml);
        }
        return xmlDoc;
      }
    };
    cc.PlistParser = function() {
      cc.SAXParser.call(this);
    };
    js.extend(cc.PlistParser, cc.SAXParser);
    js.mixin(cc.PlistParser.prototype, {
      parse: function(xmlTxt) {
        var xmlDoc = this._parseXML(xmlTxt);
        var plist = xmlDoc.documentElement;
        if ("plist" !== plist.tagName) {
          cc.warnID(5100);
          return {};
        }
        var node = null;
        for (var i = 0, len = plist.childNodes.length; i < len; i++) {
          node = plist.childNodes[i];
          if (1 === node.nodeType) break;
        }
        xmlDoc = null;
        return this._parseNode(node);
      },
      _parseNode: function(node) {
        var data = null, tagName = node.tagName;
        if ("dict" === tagName) data = this._parseDict(node); else if ("array" === tagName) data = this._parseArray(node); else if ("string" === tagName) if (1 === node.childNodes.length) data = node.firstChild.nodeValue; else {
          data = "";
          for (var i = 0; i < node.childNodes.length; i++) data += node.childNodes[i].nodeValue;
        } else "false" === tagName ? data = false : "true" === tagName ? data = true : "real" === tagName ? data = parseFloat(node.firstChild.nodeValue) : "integer" === tagName && (data = parseInt(node.firstChild.nodeValue, 10));
        return data;
      },
      _parseArray: function(node) {
        var data = [];
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
          var child = node.childNodes[i];
          if (1 !== child.nodeType) continue;
          data.push(this._parseNode(child));
        }
        return data;
      },
      _parseDict: function(node) {
        var data = {};
        var key = null;
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
          var child = node.childNodes[i];
          if (1 !== child.nodeType) continue;
          "key" === child.tagName ? key = child.firstChild.nodeValue : data[key] = this._parseNode(child);
        }
        return data;
      }
    });
    cc.saxParser = new cc.SAXParser();
    cc.plistParser = new cc.PlistParser();
    module.exports = {
      saxParser: cc.saxParser,
      plistParser: cc.plistParser
    };
  }), {
    "../platform/js": 106
  } ],
  94: [ (function(require, module, exports) {
    cc.screen = {
      _supportsFullScreen: false,
      _preOnFullScreenChange: null,
      _touchEvent: "",
      _fn: null,
      _fnMap: [ [ "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement" ], [ "requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement" ], [ "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement" ] ],
      init: function() {
        this._fn = {};
        var i, l, val, map = this._fnMap, valL;
        for (i = 0, l = map.length; i < l; i++) {
          val = map[i];
          if (val && "undefined" !== typeof document[val[1]]) {
            for (i = 0, valL = val.length; i < valL; i++) this._fn[map[0][i]] = val[i];
            break;
          }
        }
        this._supportsFullScreen = void 0 !== this._fn.requestFullscreen;
        this._touchEvent = "ontouchstart" in window ? "touchstart" : "mousedown";
      },
      fullScreen: function() {
        return !!this._supportsFullScreen && (void 0 !== document[this._fn.fullscreenElement] && null !== document[this._fn.fullscreenElement]);
      },
      requestFullScreen: function(element, onFullScreenChange) {
        if ("video" === element.tagName.toLowerCase()) {
          if (cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && element.readyState > 0) {
            element.webkitEnterFullscreen && element.webkitEnterFullscreen();
            return;
          }
          element.setAttribute("x5-video-player-fullscreen", "true");
        }
        if (!this._supportsFullScreen) return;
        element = element || document.documentElement;
        if (onFullScreenChange) {
          var eventName = this._fn.fullscreenchange;
          this._preOnFullScreenChange && document.removeEventListener(eventName, this._preOnFullScreenChange);
          this._preOnFullScreenChange = onFullScreenChange;
          document.addEventListener(eventName, onFullScreenChange, false);
        }
        return element[this._fn.requestFullscreen]();
      },
      exitFullScreen: function(element) {
        if ("video" === element.tagName.toLowerCase()) {
          if (cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser) {
            element.webkitExitFullscreen && element.webkitExitFullscreen();
            return;
          }
          element.setAttribute("x5-video-player-fullscreen", "false");
        }
        return !this._supportsFullScreen || document[this._fn.exitFullscreen]();
      },
      autoFullScreen: function(element, onFullScreenChange) {
        element = element || document.body;
        var touchTarget = cc.game.canvas || element;
        var theScreen = this;
        function callback() {
          touchTarget.removeEventListener(theScreen._touchEvent, callback);
          theScreen.requestFullScreen(element, onFullScreenChange);
        }
        this.requestFullScreen(element, onFullScreenChange);
        touchTarget.addEventListener(this._touchEvent, callback);
      }
    };
    cc.screen.init();
  }), {} ],
  95: [ (function(require, module, exports) {
    function initSys() {
      cc.sys = {};
      var sys = cc.sys;
      sys.LANGUAGE_ENGLISH = "en";
      sys.LANGUAGE_CHINESE = "zh";
      sys.LANGUAGE_FRENCH = "fr";
      sys.LANGUAGE_ITALIAN = "it";
      sys.LANGUAGE_GERMAN = "de";
      sys.LANGUAGE_SPANISH = "es";
      sys.LANGUAGE_DUTCH = "du";
      sys.LANGUAGE_RUSSIAN = "ru";
      sys.LANGUAGE_KOREAN = "ko";
      sys.LANGUAGE_JAPANESE = "ja";
      sys.LANGUAGE_HUNGARIAN = "hu";
      sys.LANGUAGE_PORTUGUESE = "pt";
      sys.LANGUAGE_ARABIC = "ar";
      sys.LANGUAGE_NORWEGIAN = "no";
      sys.LANGUAGE_POLISH = "pl";
      sys.LANGUAGE_TURKISH = "tr";
      sys.LANGUAGE_UKRAINIAN = "uk";
      sys.LANGUAGE_ROMANIAN = "ro";
      sys.LANGUAGE_BULGARIAN = "bg";
      sys.LANGUAGE_UNKNOWN = "unknown";
      sys.OS_IOS = "iOS";
      sys.OS_ANDROID = "Android";
      sys.OS_WINDOWS = "Windows";
      sys.OS_MARMALADE = "Marmalade";
      sys.OS_LINUX = "Linux";
      sys.OS_BADA = "Bada";
      sys.OS_BLACKBERRY = "Blackberry";
      sys.OS_OSX = "OS X";
      sys.OS_WP8 = "WP8";
      sys.OS_WINRT = "WINRT";
      sys.OS_UNKNOWN = "Unknown";
      sys.UNKNOWN = -1;
      sys.WIN32 = 0;
      sys.LINUX = 1;
      sys.MACOS = 2;
      sys.ANDROID = 3;
      sys.IPHONE = 4;
      sys.IPAD = 5;
      sys.BLACKBERRY = 6;
      sys.NACL = 7;
      sys.EMSCRIPTEN = 8;
      sys.TIZEN = 9;
      sys.WINRT = 10;
      sys.WP8 = 11;
      sys.MOBILE_BROWSER = 100;
      sys.DESKTOP_BROWSER = 101;
      sys.EDITOR_PAGE = 102;
      sys.EDITOR_CORE = 103;
      sys.WECHAT_GAME = 104;
      sys.QQ_PLAY = 105;
      sys.FB_PLAYABLE_ADS = 106;
      sys.BROWSER_TYPE_WECHAT = "wechat";
      sys.BROWSER_TYPE_WECHAT_GAME = "wechatgame";
      sys.BROWSER_TYPE_WECHAT_GAME_SUB = "wechatgamesub";
      sys.BROWSER_TYPE_QQ_PLAY = "qqplay";
      sys.BROWSER_TYPE_ANDROID = "androidbrowser";
      sys.BROWSER_TYPE_IE = "ie";
      sys.BROWSER_TYPE_QQ = "qqbrowser";
      sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
      sys.BROWSER_TYPE_UC = "ucbrowser";
      sys.BROWSER_TYPE_UCBS = "ucbs";
      sys.BROWSER_TYPE_360 = "360browser";
      sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
      sys.BROWSER_TYPE_BAIDU = "baidubrowser";
      sys.BROWSER_TYPE_MAXTHON = "maxthon";
      sys.BROWSER_TYPE_OPERA = "opera";
      sys.BROWSER_TYPE_OUPENG = "oupeng";
      sys.BROWSER_TYPE_MIUI = "miuibrowser";
      sys.BROWSER_TYPE_FIREFOX = "firefox";
      sys.BROWSER_TYPE_SAFARI = "safari";
      sys.BROWSER_TYPE_CHROME = "chrome";
      sys.BROWSER_TYPE_LIEBAO = "liebao";
      sys.BROWSER_TYPE_QZONE = "qzone";
      sys.BROWSER_TYPE_SOUGOU = "sogou";
      sys.BROWSER_TYPE_UNKNOWN = "unknown";
      sys.isNative = false;
      sys.isBrowser = "object" === typeof window && "object" === typeof document && false;
      false;
      var platform;
      var w;
      var h;
      var ratio;
      var capabilities;
      false;
      var env;
      var w;
      var h;
      var ratio;
      var win, nav, doc, docEle;
      var ua;
      var currLanguage;
      var isAndroid, iOS, osVersion, osMainVersion;
      var uaResult;
      var osName;
      var w;
      var h;
      var ratio;
      var _tmpCanvas1;
      var create3DContext;
      var localStorage;
      var warn;
      var _supportWebp;
      var _supportCanvas;
      var _supportWebGL;
      var capabilities;
      var __audioSupport;
      var formatSupport;
      true;
      var env = wx.getSystemInfoSync();
      sys.isMobile = true;
      sys.platform = sys.WECHAT_GAME;
      sys.language = env.language.substr(0, 2);
      var system = env.system.toLowerCase();
      if ("android" === env.platform) sys.os = sys.OS_ANDROID; else if ("ios" === env.platform) sys.os = sys.OS_IOS; else if ("devtools" === env.platform) {
        sys.isMobile = false;
        system.indexOf("android") > -1 ? sys.os = sys.OS_ANDROID : system.indexOf("ios") > -1 && (sys.os = sys.OS_IOS);
      }
      "android p" === system && (system = "android p 9.0");
      var version = /[\d\.]+/.exec(system);
      sys.osVersion = version ? version[0] : system;
      sys.osMainVersion = parseInt(sys.osVersion);
      wx.getFileSystemManager ? sys.browserType = sys.BROWSER_TYPE_WECHAT_GAME : sys.browserType = sys.BROWSER_TYPE_WECHAT_GAME_SUB;
      sys.browserVersion = env.version;
      var w = env.windowWidth;
      var h = env.windowHeight;
      var ratio = env.pixelRatio || 1;
      sys.windowPixelResolution = {
        width: ratio * w,
        height: ratio * h
      };
      sys.localStorage = window.localStorage;
      sys.capabilities = {
        canvas: true,
        opengl: sys.browserType !== sys.BROWSER_TYPE_WECHAT_GAME_SUB,
        webp: false
      };
      sys.__audioSupport = {
        ONLY_ONE: false,
        WEB_AUDIO: false,
        DELAY_CREATE_CTX: false,
        format: [ ".mp3" ]
      };
      sys.NetworkType = {
        NONE: 0,
        LAN: 1,
        WWAN: 2
      };
      sys.getNetworkType = function() {
        return sys.NetworkType.LAN;
      };
      sys.getBatteryLevel = function() {
        return 1;
      };
      sys.garbageCollect = function() {};
      sys.restartVM = function() {};
      sys.getSafeAreaRect = function() {
        var visibleSize = cc.view.getVisibleSize();
        return cc.rect(0, 0, visibleSize.width, visibleSize.height);
      };
      sys.isObjectValid = function(obj) {
        if (obj) return true;
        return false;
      };
      sys.dump = function() {
        var self = this;
        var str = "";
        str += "isMobile : " + self.isMobile + "\r\n";
        str += "language : " + self.language + "\r\n";
        str += "browserType : " + self.browserType + "\r\n";
        str += "browserVersion : " + self.browserVersion + "\r\n";
        str += "capabilities : " + JSON.stringify(self.capabilities) + "\r\n";
        str += "os : " + self.os + "\r\n";
        str += "osVersion : " + self.osVersion + "\r\n";
        str += "platform : " + self.platform + "\r\n";
        str += "Using " + (cc.game.renderType === cc.game.RENDER_TYPE_WEBGL ? "WEBGL" : "CANVAS") + " renderer.\r\n";
        cc.log(str);
      };
      sys.openURL = function(url) {
        false;
        window.open(url);
      };
      sys.now = function() {
        return Date.now ? Date.now() : +new Date();
      };
      return sys;
    }
    var sys = cc && cc.sys ? cc.sys : initSys();
    module.exports = sys;
  }), {} ],
  96: [ (function(require, module, exports) {
    var EventTarget = require("../event/event-target");
    var js = require("../platform/js");
    var renderer = require("../renderer");
    require("../platform/CCClass");
    var __BrowserGetter = {
      init: function() {
        false;
      },
      availWidth: function(frame) {
        return frame && frame !== this.html ? frame.clientWidth : window.innerWidth;
      },
      availHeight: function(frame) {
        return frame && frame !== this.html ? frame.clientHeight : window.innerHeight;
      },
      meta: {
        width: "device-width"
      },
      adaptationType: cc.sys.browserType
    };
    cc.sys.os === cc.sys.OS_IOS && (__BrowserGetter.adaptationType = cc.sys.BROWSER_TYPE_SAFARI);
    true;
    cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB ? __BrowserGetter.adaptationType = cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB : __BrowserGetter.adaptationType = cc.sys.BROWSER_TYPE_WECHAT_GAME;
    false;
    switch (__BrowserGetter.adaptationType) {
     case cc.sys.BROWSER_TYPE_SAFARI:
      __BrowserGetter.meta["minimal-ui"] = "true";

     case cc.sys.BROWSER_TYPE_SOUGOU:
     case cc.sys.BROWSER_TYPE_UC:
      __BrowserGetter.availWidth = function(frame) {
        return frame.clientWidth;
      };
      __BrowserGetter.availHeight = function(frame) {
        return frame.clientHeight;
      };
      break;

     case cc.sys.BROWSER_TYPE_WECHAT_GAME:
      __BrowserGetter.availWidth = function() {
        return window.innerWidth;
      };
      __BrowserGetter.availHeight = function() {
        return window.innerHeight;
      };
      break;

     case cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB:
      var sharedCanvas = window.sharedCanvas || wx.getSharedCanvas();
      __BrowserGetter.availWidth = function() {
        return sharedCanvas.width;
      };
      __BrowserGetter.availHeight = function() {
        return sharedCanvas.height;
      };
    }
    var _scissorRect = null;
    var View = function() {
      EventTarget.call(this);
      var _t = this, _strategyer = cc.ContainerStrategy, _strategy = cc.ContentStrategy;
      __BrowserGetter.init(this);
      _t._frameSize = cc.size(0, 0);
      _t._designResolutionSize = cc.size(0, 0);
      _t._originalDesignResolutionSize = cc.size(0, 0);
      _t._scaleX = 1;
      _t._scaleY = 1;
      _t._viewportRect = cc.rect(0, 0, 0, 0);
      _t._visibleRect = cc.rect(0, 0, 0, 0);
      _t._autoFullScreen = false;
      _t._devicePixelRatio = 1;
      _t._retinaEnabled = false;
      _t._resizeCallback = null;
      _t._resizing = false;
      _t._resizeWithBrowserSize = false;
      _t._orientationChanging = true;
      _t._isRotated = false;
      _t._orientation = cc.macro.ORIENTATION_AUTO;
      _t._isAdjustViewport = true;
      _t._antiAliasEnabled = false;
      _t._resolutionPolicy = null;
      _t._rpExactFit = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
      _t._rpShowAll = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.SHOW_ALL);
      _t._rpNoBorder = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
      _t._rpFixedHeight = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
      _t._rpFixedWidth = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
      cc.game.once(cc.game.EVENT_ENGINE_INITED, this.init, this);
    };
    cc.js.extend(View, EventTarget);
    cc.js.mixin(View.prototype, {
      init: function() {
        this._initFrameSize();
        this.enableAntiAlias(true);
        var w = cc.game.canvas.width, h = cc.game.canvas.height;
        this._designResolutionSize.width = w;
        this._designResolutionSize.height = h;
        this._originalDesignResolutionSize.width = w;
        this._originalDesignResolutionSize.height = h;
        this._viewportRect.width = w;
        this._viewportRect.height = h;
        this._visibleRect.width = w;
        this._visibleRect.height = h;
        cc.winSize.width = this._visibleRect.width;
        cc.winSize.height = this._visibleRect.height;
        cc.visibleRect && cc.visibleRect.init(this._visibleRect);
      },
      _resizeEvent: function() {
        var view;
        view = this.setDesignResolutionSize ? this : cc.view;
        var prevFrameW = view._frameSize.width, prevFrameH = view._frameSize.height, prevRotated = view._isRotated;
        if (cc.sys.isMobile) {
          var containerStyle = cc.game.container.style, margin = containerStyle.margin;
          containerStyle.margin = "0";
          containerStyle.display = "none";
          view._initFrameSize();
          containerStyle.margin = margin;
          containerStyle.display = "block";
        } else view._initFrameSize();
        if (view._isRotated === prevRotated && view._frameSize.width === prevFrameW && view._frameSize.height === prevFrameH) return;
        var width = view._originalDesignResolutionSize.width;
        var height = view._originalDesignResolutionSize.height;
        view._resizing = true;
        width > 0 && view.setDesignResolutionSize(width, height, view._resolutionPolicy);
        view._resizing = false;
        view.emit("canvas-resize");
        view._resizeCallback && view._resizeCallback.call();
      },
      _orientationChange: function() {
        cc.view._orientationChanging = true;
        cc.view._resizeEvent();
      },
      resizeWithBrowserSize: function(enabled) {
        if (enabled) {
          if (!this._resizeWithBrowserSize) {
            this._resizeWithBrowserSize = true;
            window.addEventListener("resize", this._resizeEvent);
            window.addEventListener("orientationchange", this._orientationChange);
          }
        } else if (this._resizeWithBrowserSize) {
          this._resizeWithBrowserSize = false;
          window.removeEventListener("resize", this._resizeEvent);
          window.removeEventListener("orientationchange", this._orientationChange);
        }
      },
      setResizeCallback: function(callback) {
        "function" !== typeof callback && null != callback || (this._resizeCallback = callback);
      },
      setOrientation: function(orientation) {
        orientation &= cc.macro.ORIENTATION_AUTO;
        if (orientation && this._orientation !== orientation) {
          this._orientation = orientation;
          var designWidth = this._originalDesignResolutionSize.width;
          var designHeight = this._originalDesignResolutionSize.height;
          this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy);
        }
      },
      _initFrameSize: function() {
        var locFrameSize = this._frameSize;
        var w = __BrowserGetter.availWidth(cc.game.frame);
        var h = __BrowserGetter.availHeight(cc.game.frame);
        var isLandscape = w >= h;
        if ((false, !cc.sys.isMobile) || isLandscape && this._orientation & cc.macro.ORIENTATION_LANDSCAPE || !isLandscape && this._orientation & cc.macro.ORIENTATION_PORTRAIT) {
          locFrameSize.width = w;
          locFrameSize.height = h;
          cc.game.container.style["-webkit-transform"] = "rotate(0deg)";
          cc.game.container.style.transform = "rotate(0deg)";
          this._isRotated = false;
        } else {
          locFrameSize.width = h;
          locFrameSize.height = w;
          cc.game.container.style["-webkit-transform"] = "rotate(90deg)";
          cc.game.container.style.transform = "rotate(90deg)";
          cc.game.container.style["-webkit-transform-origin"] = "0px 0px 0px";
          cc.game.container.style.transformOrigin = "0px 0px 0px";
          this._isRotated = true;
        }
        this._orientationChanging && setTimeout((function() {
          cc.view._orientationChanging = false;
        }), 1e3);
      },
      _adjustSizeKeepCanvasSize: function() {
        var designWidth = this._originalDesignResolutionSize.width;
        var designHeight = this._originalDesignResolutionSize.height;
        designWidth > 0 && this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy);
      },
      _setViewportMeta: function(metas, overwrite) {
        var vp = document.getElementById("cocosMetaElement");
        vp && overwrite && document.head.removeChild(vp);
        var elems = document.getElementsByName("viewport"), currentVP = elems ? elems[0] : null, content, key, pattern;
        content = currentVP ? currentVP.content : "";
        vp = vp || document.createElement("meta");
        vp.id = "cocosMetaElement";
        vp.name = "viewport";
        vp.content = "";
        for (key in metas) if (-1 == content.indexOf(key)) content += "," + key + "=" + metas[key]; else if (overwrite) {
          pattern = new RegExp(key + "s*=s*[^,]+");
          content.replace(pattern, key + "=" + metas[key]);
        }
        /^,/.test(content) && (content = content.substr(1));
        vp.content = content;
        currentVP && (currentVP.content = content);
        document.head.appendChild(vp);
      },
      _adjustViewportMeta: function() {
        if (this._isAdjustViewport && false) {
          this._setViewportMeta(__BrowserGetter.meta, false);
          this._isAdjustViewport = false;
        }
      },
      adjustViewportMeta: function(enabled) {
        this._isAdjustViewport = enabled;
      },
      enableRetina: function(enabled) {
        this._retinaEnabled = !!enabled;
      },
      isRetinaEnabled: function() {
        return this._retinaEnabled;
      },
      enableAntiAlias: function(enabled) {
        if (this._antiAliasEnabled === enabled) return;
        this._antiAliasEnabled = enabled;
        if (cc.game.renderType === cc.game.RENDER_TYPE_WEBGL) {
          var cache = cc.loader._cache;
          for (var key in cache) {
            var item = cache[key];
            var tex = item && item.content instanceof cc.Texture2D ? item.content : null;
            if (tex) {
              var Filter = cc.Texture2D.Filter;
              enabled ? tex.setFilters(Filter.LINEAR, Filter.LINEAR) : tex.setFilters(Filter.NEAREST, Filter.NEAREST);
            }
          }
        } else if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
          var ctx = cc.game.canvas.getContext("2d");
          ctx.imageSmoothingEnabled = enabled;
          ctx.mozImageSmoothingEnabled = enabled;
        }
      },
      isAntiAliasEnabled: function() {
        return this._antiAliasEnabled;
      },
      enableAutoFullScreen: function(enabled) {
        if (enabled && enabled !== this._autoFullScreen && cc.sys.isMobile && cc.sys.browserType !== cc.sys.BROWSER_TYPE_WECHAT) {
          this._autoFullScreen = true;
          cc.screen.autoFullScreen(cc.game.frame);
        } else this._autoFullScreen = false;
      },
      isAutoFullScreenEnabled: function() {
        return this._autoFullScreen;
      },
      setCanvasSize: function(width, height) {
        var canvas = cc.game.canvas;
        var container = cc.game.container;
        canvas.width = width * this._devicePixelRatio;
        canvas.height = height * this._devicePixelRatio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        container.style.width = width + "px";
        container.style.height = height + "px";
        this._resizeEvent();
      },
      getCanvasSize: function() {
        return cc.size(cc.game.canvas.width, cc.game.canvas.height);
      },
      getFrameSize: function() {
        return cc.size(this._frameSize.width, this._frameSize.height);
      },
      setFrameSize: function(width, height) {
        this._frameSize.width = width;
        this._frameSize.height = height;
        cc.game.frame.style.width = width + "px";
        cc.game.frame.style.height = height + "px";
        this._resizeEvent();
      },
      getVisibleSize: function() {
        return cc.size(this._visibleRect.width, this._visibleRect.height);
      },
      getVisibleSizeInPixel: function() {
        return cc.size(this._visibleRect.width * this._scaleX, this._visibleRect.height * this._scaleY);
      },
      getVisibleOrigin: function() {
        return cc.v2(this._visibleRect.x, this._visibleRect.y);
      },
      getVisibleOriginInPixel: function() {
        return cc.v2(this._visibleRect.x * this._scaleX, this._visibleRect.y * this._scaleY);
      },
      getResolutionPolicy: function() {
        return this._resolutionPolicy;
      },
      setResolutionPolicy: function(resolutionPolicy) {
        var _t = this;
        if (resolutionPolicy instanceof cc.ResolutionPolicy) _t._resolutionPolicy = resolutionPolicy; else {
          var _locPolicy = cc.ResolutionPolicy;
          resolutionPolicy === _locPolicy.EXACT_FIT && (_t._resolutionPolicy = _t._rpExactFit);
          resolutionPolicy === _locPolicy.SHOW_ALL && (_t._resolutionPolicy = _t._rpShowAll);
          resolutionPolicy === _locPolicy.NO_BORDER && (_t._resolutionPolicy = _t._rpNoBorder);
          resolutionPolicy === _locPolicy.FIXED_HEIGHT && (_t._resolutionPolicy = _t._rpFixedHeight);
          resolutionPolicy === _locPolicy.FIXED_WIDTH && (_t._resolutionPolicy = _t._rpFixedWidth);
        }
      },
      setDesignResolutionSize: function(width, height, resolutionPolicy) {
        if (!(width > 0 || height > 0)) {
          cc.logID(2200);
          return;
        }
        this.setResolutionPolicy(resolutionPolicy);
        var policy = this._resolutionPolicy;
        policy && policy.preApply(this);
        cc.sys.isMobile && this._adjustViewportMeta();
        this._orientationChanging = true;
        this._resizing || this._initFrameSize();
        if (!policy) {
          cc.logID(2201);
          return;
        }
        this._originalDesignResolutionSize.width = this._designResolutionSize.width = width;
        this._originalDesignResolutionSize.height = this._designResolutionSize.height = height;
        var result = policy.apply(this, this._designResolutionSize);
        if (result.scale && 2 === result.scale.length) {
          this._scaleX = result.scale[0];
          this._scaleY = result.scale[1];
        }
        if (result.viewport) {
          var vp = this._viewportRect, vb = this._visibleRect, rv = result.viewport;
          vp.x = rv.x;
          vp.y = rv.y;
          vp.width = rv.width;
          vp.height = rv.height;
          vb.x = 0;
          vb.y = 0;
          vb.width = rv.width / this._scaleX;
          vb.height = rv.height / this._scaleY;
        }
        policy.postApply(this);
        cc.winSize.width = this._visibleRect.width;
        cc.winSize.height = this._visibleRect.height;
        cc.visibleRect && cc.visibleRect.init(this._visibleRect);
        renderer.updateCameraViewport();
        this.emit("design-resolution-changed");
      },
      getDesignResolutionSize: function() {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height);
      },
      setRealPixelResolution: function(width, height, resolutionPolicy) {
        if ((true, false) && true) {
          this._setViewportMeta({
            width: width
          }, true);
          document.documentElement.style.width = width + "px";
          document.body.style.width = width + "px";
          document.body.style.left = "0px";
          document.body.style.top = "0px";
        }
        this.setDesignResolutionSize(width, height, resolutionPolicy);
      },
      setViewportInPoints: function(x, y, w, h) {
        var locScaleX = this._scaleX, locScaleY = this._scaleY;
        cc.game._renderContext.viewport(x * locScaleX + this._viewportRect.x, y * locScaleY + this._viewportRect.y, w * locScaleX, h * locScaleY);
      },
      setScissorInPoints: function(x, y, w, h) {
        var scaleX = this._scaleX, scaleY = this._scaleY;
        var sx = Math.ceil(x * scaleX + this._viewportRect.x);
        var sy = Math.ceil(y * scaleY + this._viewportRect.y);
        var sw = Math.ceil(w * scaleX);
        var sh = Math.ceil(h * scaleY);
        var gl = cc.game._renderContext;
        if (!_scissorRect) {
          var boxArr = gl.getParameter(gl.SCISSOR_BOX);
          _scissorRect = cc.rect(boxArr[0], boxArr[1], boxArr[2], boxArr[3]);
        }
        if (_scissorRect.x !== sx || _scissorRect.y !== sy || _scissorRect.width !== sw || _scissorRect.height !== sh) {
          _scissorRect.x = sx;
          _scissorRect.y = sy;
          _scissorRect.width = sw;
          _scissorRect.height = sh;
          gl.scissor(sx, sy, sw, sh);
        }
      },
      isScissorEnabled: function() {
        return cc.game._renderContext.isEnabled(gl.SCISSOR_TEST);
      },
      getScissorRect: function() {
        if (!_scissorRect) {
          var boxArr = gl.getParameter(gl.SCISSOR_BOX);
          _scissorRect = cc.rect(boxArr[0], boxArr[1], boxArr[2], boxArr[3]);
        }
        var scaleXFactor = 1 / this._scaleX;
        var scaleYFactor = 1 / this._scaleY;
        return cc.rect((_scissorRect.x - this._viewportRect.x) * scaleXFactor, (_scissorRect.y - this._viewportRect.y) * scaleYFactor, _scissorRect.width * scaleXFactor, _scissorRect.height * scaleYFactor);
      },
      getViewportRect: function() {
        return this._viewportRect;
      },
      getScaleX: function() {
        return this._scaleX;
      },
      getScaleY: function() {
        return this._scaleY;
      },
      getDevicePixelRatio: function() {
        return this._devicePixelRatio;
      },
      convertToLocationInView: function(tx, ty, relatedPos, out) {
        var result = out || cc.v2();
        var x = this._devicePixelRatio * (tx - relatedPos.left);
        var y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - ty);
        if (this._isRotated) {
          result.x = cc.game.canvas.width - y;
          result.y = x;
        } else {
          result.x = x;
          result.y = y;
        }
        return result;
      },
      _convertMouseToLocationInView: function(in_out_point, relatedPos) {
        var viewport = this._viewportRect, _t = this;
        in_out_point.x = (_t._devicePixelRatio * (in_out_point.x - relatedPos.left) - viewport.x) / _t._scaleX;
        in_out_point.y = (_t._devicePixelRatio * (relatedPos.top + relatedPos.height - in_out_point.y) - viewport.y) / _t._scaleY;
      },
      _convertPointWithScale: function(point) {
        var viewport = this._viewportRect;
        point.x = (point.x - viewport.x) / this._scaleX;
        point.y = (point.y - viewport.y) / this._scaleY;
      },
      _convertTouchesWithScale: function(touches) {
        var viewport = this._viewportRect, scaleX = this._scaleX, scaleY = this._scaleY, selTouch, selPoint, selPrePoint;
        for (var i = 0; i < touches.length; i++) {
          selTouch = touches[i];
          selPoint = selTouch._point;
          selPrePoint = selTouch._prevPoint;
          selPoint.x = (selPoint.x - viewport.x) / scaleX;
          selPoint.y = (selPoint.y - viewport.y) / scaleY;
          selPrePoint.x = (selPrePoint.x - viewport.x) / scaleX;
          selPrePoint.y = (selPrePoint.y - viewport.y) / scaleY;
        }
      }
    });
    cc.ContainerStrategy = cc.Class({
      name: "ContainerStrategy",
      preApply: function(view) {},
      apply: function(view, designedResolution) {},
      postApply: function(view) {},
      _setupContainer: function(view, w, h) {
        var locCanvas = cc.game.canvas, locContainer = cc.game.container;
        false;
        var devicePixelRatio = view._devicePixelRatio = 1;
        view.isRetinaEnabled() && (devicePixelRatio = view._devicePixelRatio = Math.min(2, window.devicePixelRatio || 1));
        locCanvas.width = w * devicePixelRatio;
        locCanvas.height = h * devicePixelRatio;
      },
      _fixContainer: function() {
        document.body.insertBefore(cc.game.container, document.body.firstChild);
        var bs = document.body.style;
        bs.width = window.innerWidth + "px";
        bs.height = window.innerHeight + "px";
        bs.overflow = "hidden";
        var contStyle = cc.game.container.style;
        contStyle.position = "fixed";
        contStyle.left = contStyle.top = "0px";
        document.body.scrollTop = 0;
      }
    });
    cc.ContentStrategy = cc.Class({
      name: "ContentStrategy",
      ctor: function() {
        this._result = {
          scale: [ 1, 1 ],
          viewport: null
        };
      },
      _buildResult: function(containerW, containerH, contentW, contentH, scaleX, scaleY) {
        Math.abs(containerW - contentW) < 2 && (contentW = containerW);
        Math.abs(containerH - contentH) < 2 && (contentH = containerH);
        var viewport = cc.rect((containerW - contentW) / 2, (containerH - contentH) / 2, contentW, contentH);
        cc.game.renderType === cc.game.RENDER_TYPE_CANVAS;
        this._result.scale = [ scaleX, scaleY ];
        this._result.viewport = viewport;
        return this._result;
      },
      preApply: function(view) {},
      apply: function(view, designedResolution) {
        return {
          scale: [ 1, 1 ]
        };
      },
      postApply: function(view) {}
    });
    (function() {
      var EqualToFrame = cc.Class({
        name: "EqualToFrame",
        extends: cc.ContainerStrategy,
        apply: function(view) {
          var frameH = view._frameSize.height, containerStyle = cc.game.container.style;
          this._setupContainer(view, view._frameSize.width, view._frameSize.height);
          view._isRotated ? containerStyle.margin = "0 0 0 " + frameH + "px" : containerStyle.margin = "0px";
          containerStyle.padding = "0px";
        }
      });
      var ProportionalToFrame = cc.Class({
        name: "ProportionalToFrame",
        extends: cc.ContainerStrategy,
        apply: function(view, designedResolution) {
          var frameW = view._frameSize.width, frameH = view._frameSize.height, containerStyle = cc.game.container.style, designW = designedResolution.width, designH = designedResolution.height, scaleX = frameW / designW, scaleY = frameH / designH, containerW, containerH;
          scaleX < scaleY ? (containerW = frameW, containerH = designH * scaleX) : (containerW = designW * scaleY, 
          containerH = frameH);
          var offx = Math.round((frameW - containerW) / 2);
          var offy = Math.round((frameH - containerH) / 2);
          containerW = frameW - 2 * offx;
          containerH = frameH - 2 * offy;
          this._setupContainer(view, containerW, containerH);
          true;
          view._isRotated ? containerStyle.margin = "0 0 0 " + frameH + "px" : containerStyle.margin = "0px";
          containerStyle.paddingLeft = offx + "px";
          containerStyle.paddingRight = offx + "px";
          containerStyle.paddingTop = offy + "px";
          containerStyle.paddingBottom = offy + "px";
        }
      });
      var EqualToWindow = cc.Class({
        name: "EqualToWindow",
        extends: EqualToFrame,
        preApply: function(view) {
          this._super(view);
          cc.game.frame = document.documentElement;
        },
        apply: function(view) {
          this._super(view);
          this._fixContainer();
        }
      });
      var ProportionalToWindow = cc.Class({
        name: "ProportionalToWindow",
        extends: ProportionalToFrame,
        preApply: function(view) {
          this._super(view);
          cc.game.frame = document.documentElement;
        },
        apply: function(view, designedResolution) {
          this._super(view, designedResolution);
          this._fixContainer();
        }
      });
      var OriginalContainer = cc.Class({
        name: "OriginalContainer",
        extends: cc.ContainerStrategy,
        apply: function(view) {
          this._setupContainer(view, cc.game.canvas.width, cc.game.canvas.height);
        }
      });
      cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
      cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();
      cc.ContainerStrategy.ORIGINAL_CONTAINER = new OriginalContainer();
      var ExactFit = cc.Class({
        name: "ExactFit",
        extends: cc.ContentStrategy,
        apply: function(view, designedResolution) {
          var containerW = cc.game.canvas.width, containerH = cc.game.canvas.height, scaleX = containerW / designedResolution.width, scaleY = containerH / designedResolution.height;
          return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
        }
      });
      var ShowAll = cc.Class({
        name: "ShowAll",
        extends: cc.ContentStrategy,
        apply: function(view, designedResolution) {
          var containerW = cc.game.canvas.width, containerH = cc.game.canvas.height, designW = designedResolution.width, designH = designedResolution.height, scaleX = containerW / designW, scaleY = containerH / designH, scale = 0, contentW, contentH;
          scaleX < scaleY ? (scale = scaleX, contentW = containerW, contentH = designH * scale) : (scale = scaleY, 
          contentW = designW * scale, contentH = containerH);
          return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        }
      });
      var NoBorder = cc.Class({
        name: "NoBorder",
        extends: cc.ContentStrategy,
        apply: function(view, designedResolution) {
          var containerW = cc.game.canvas.width, containerH = cc.game.canvas.height, designW = designedResolution.width, designH = designedResolution.height, scaleX = containerW / designW, scaleY = containerH / designH, scale, contentW, contentH;
          scaleX < scaleY ? (scale = scaleY, contentW = designW * scale, contentH = containerH) : (scale = scaleX, 
          contentW = containerW, contentH = designH * scale);
          return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        }
      });
      var FixedHeight = cc.Class({
        name: "FixedHeight",
        extends: cc.ContentStrategy,
        apply: function(view, designedResolution) {
          var containerW = cc.game.canvas.width, containerH = cc.game.canvas.height, designH = designedResolution.height, scale = containerH / designH, contentW = containerW, contentH = containerH;
          return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        }
      });
      var FixedWidth = cc.Class({
        name: "FixedWidth",
        extends: cc.ContentStrategy,
        apply: function(view, designedResolution) {
          var containerW = cc.game.canvas.width, containerH = cc.game.canvas.height, designW = designedResolution.width, scale = containerW / designW, contentW = containerW, contentH = containerH;
          return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        }
      });
      cc.ContentStrategy.EXACT_FIT = new ExactFit();
      cc.ContentStrategy.SHOW_ALL = new ShowAll();
      cc.ContentStrategy.NO_BORDER = new NoBorder();
      cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight();
      cc.ContentStrategy.FIXED_WIDTH = new FixedWidth();
    })();
    cc.ResolutionPolicy = cc.Class({
      name: "cc.ResolutionPolicy",
      ctor: function(containerStg, contentStg) {
        this._containerStrategy = null;
        this._contentStrategy = null;
        this.setContainerStrategy(containerStg);
        this.setContentStrategy(contentStg);
      },
      preApply: function(view) {
        this._containerStrategy.preApply(view);
        this._contentStrategy.preApply(view);
      },
      apply: function(view, designedResolution) {
        this._containerStrategy.apply(view, designedResolution);
        return this._contentStrategy.apply(view, designedResolution);
      },
      postApply: function(view) {
        this._containerStrategy.postApply(view);
        this._contentStrategy.postApply(view);
      },
      setContainerStrategy: function(containerStg) {
        containerStg instanceof cc.ContainerStrategy && (this._containerStrategy = containerStg);
      },
      setContentStrategy: function(contentStg) {
        contentStg instanceof cc.ContentStrategy && (this._contentStrategy = contentStg);
      }
    });
    js.get(cc.ResolutionPolicy.prototype, "canvasSize", (function() {
      return cc.v2(cc.game.canvas.width, cc.game.canvas.height);
    }));
    cc.ResolutionPolicy.EXACT_FIT = 0;
    cc.ResolutionPolicy.NO_BORDER = 1;
    cc.ResolutionPolicy.SHOW_ALL = 2;
    cc.ResolutionPolicy.FIXED_HEIGHT = 3;
    cc.ResolutionPolicy.FIXED_WIDTH = 4;
    cc.ResolutionPolicy.UNKNOWN = 5;
    cc.view = new View();
    cc.winSize = cc.v2();
    module.exports = cc.view;
  }), {
    "../event/event-target": 50,
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "../renderer": 127
  } ],
  97: [ (function(require, module, exports) {
    cc.visibleRect = {
      topLeft: cc.v2(0, 0),
      topRight: cc.v2(0, 0),
      top: cc.v2(0, 0),
      bottomLeft: cc.v2(0, 0),
      bottomRight: cc.v2(0, 0),
      bottom: cc.v2(0, 0),
      center: cc.v2(0, 0),
      left: cc.v2(0, 0),
      right: cc.v2(0, 0),
      width: 0,
      height: 0,
      init: function(visibleRect) {
        var w = this.width = visibleRect.width;
        var h = this.height = visibleRect.height;
        var l = visibleRect.x, b = visibleRect.y, t = b + h, r = l + w;
        this.topLeft.x = l;
        this.topLeft.y = t;
        this.topRight.x = r;
        this.topRight.y = t;
        this.top.x = l + w / 2;
        this.top.y = t;
        this.bottomLeft.x = l;
        this.bottomLeft.y = b;
        this.bottomRight.x = r;
        this.bottomRight.y = b;
        this.bottom.x = l + w / 2;
        this.bottom.y = b;
        this.center.x = l + w / 2;
        this.center.y = b + h / 2;
        this.left.x = l;
        this.left.y = b + h / 2;
        this.right.x = r;
        this.right.y = b + h / 2;
      }
    };
  }), {} ],
  98: [ (function(require, module, exports) {
    var js = require("./js");
    var isPlainEmptyObj = require("./utils").isPlainEmptyObj_DEV;
    var DELIMETER = "$_$";
    function createAttrsSingle(owner, ownerCtor, superAttrs) {
      var AttrsCtor;
      var ctorName;
      false;
      AttrsCtor = function() {};
      superAttrs && js.extend(AttrsCtor, superAttrs.constructor);
      var attrs = new AttrsCtor();
      js.value(owner, "__attrs__", attrs);
      return attrs;
    }
    function createAttrs(subclass) {
      var superClass;
      var chains = cc.Class.getInheritanceChain(subclass);
      for (var i = chains.length - 1; i >= 0; i--) {
        var cls = chains[i];
        var attrs = cls.hasOwnProperty("__attrs__") && cls.__attrs__;
        if (!attrs) {
          superClass = chains[i + 1];
          createAttrsSingle(cls, cls, superClass && superClass.__attrs__);
        }
      }
      superClass = chains[0];
      createAttrsSingle(subclass, subclass, superClass && superClass.__attrs__);
      return subclass.__attrs__;
    }
    function attr(ctor, propName, newAttrs) {
      var attrs, setter, key;
      if ("function" === typeof ctor) {
        attrs = getClassAttrs(ctor);
        setter = attrs.constructor.prototype;
      } else {
        var instance = ctor;
        attrs = instance.__attrs__;
        if (!attrs) {
          ctor = instance.constructor;
          var clsAttrs = getClassAttrs(ctor);
          attrs = createAttrsSingle(instance, ctor, clsAttrs);
        }
        setter = attrs;
      }
      if ("undefined" === typeof newAttrs) {
        var prefix = propName + DELIMETER;
        var ret = {};
        for (key in attrs) key.startsWith(prefix) && (ret[key.slice(prefix.length)] = attrs[key]);
        return ret;
      }
      if ("object" === typeof newAttrs) for (key in newAttrs) 95 !== key.charCodeAt(0) && (setter[propName + DELIMETER + key] = newAttrs[key]); else false;
    }
    function getClassAttrs(ctor) {
      return ctor.hasOwnProperty("__attrs__") && ctor.__attrs__ || createAttrs(ctor);
    }
    function getClassAttrsProto(ctor) {
      return getClassAttrs(ctor).constructor.prototype;
    }
    function setClassAttr(ctor, propName, key, value) {
      var proto = getClassAttrsProto(ctor);
      proto[propName + DELIMETER + key] = value;
    }
    cc.Integer = "Integer";
    cc.Float = "Float";
    false;
    cc.Boolean = "Boolean";
    cc.String = "String";
    function getTypeChecker(type, attrName) {
      false;
    }
    function ObjectType(typeCtor) {
      return {
        type: "Object",
        ctor: typeCtor,
        _onAfterProp: false
      };
    }
    module.exports = {
      attr: attr,
      getClassAttrs: getClassAttrs,
      getClassAttrsProto: getClassAttrsProto,
      setClassAttr: setClassAttr,
      DELIMETER: DELIMETER,
      getTypeChecker: getTypeChecker,
      ObjectType: ObjectType,
      ScriptUuid: {}
    };
  }), {
    "./CCClass": 86,
    "./js": 106,
    "./utils": 110
  } ],
  99: [ (function(require, module, exports) {
    var js = require("./js");
    var fastRemoveAt = js.array.fastRemoveAt;
    function CallbackList() {
      this.callbacks = [];
      this.targets = [];
      this.isInvoking = false;
      this.containCanceled = false;
    }
    var proto = CallbackList.prototype;
    proto.removeBy = function(array, value) {
      var callbacks = this.callbacks;
      var targets = this.targets;
      for (var i = 0; i < array.length; ++i) if (array[i] === value) {
        fastRemoveAt(callbacks, i);
        fastRemoveAt(targets, i);
        --i;
      }
    };
    proto.cancel = function(index) {
      this.callbacks[index] = this.targets[index] = null;
      this.containCanceled = true;
    };
    proto.cancelAll = function() {
      var callbacks = this.callbacks;
      var targets = this.targets;
      for (var i = 0; i < callbacks.length; i++) callbacks[i] = targets[i] = null;
      this.containCanceled = true;
    };
    proto.purgeCanceled = function() {
      this.removeBy(this.callbacks, null);
      this.containCanceled = false;
    };
    var MAX_SIZE = 16;
    var callbackListPool = new js.Pool(function(list) {
      list.callbacks.length = 0;
      list.targets.length = 0;
      list.isInvoking = false;
      list.containCanceled = false;
    }, MAX_SIZE);
    callbackListPool.get = function() {
      return this._get() || new CallbackList();
    };
    function CallbacksHandler() {
      this._callbackTable = js.createMap(true);
    }
    proto = CallbacksHandler.prototype;
    proto.add = function(key, callback, target) {
      var list = this._callbackTable[key];
      list || (list = this._callbackTable[key] = callbackListPool.get());
      list.callbacks.push(callback);
      list.targets.push(target || null);
    };
    proto.hasEventListener = function(key, callback, target) {
      var list = this._callbackTable[key];
      if (!list) return false;
      var callbacks = list.callbacks;
      if (!callback) {
        if (list.isInvoking) {
          for (var i = 0; i < callbacks.length; i++) if (callbacks[i]) return true;
          return false;
        }
        return callbacks.length > 0;
      }
      target = target || null;
      var targets = list.targets;
      for (var _i = 0; _i < callbacks.length; ++_i) if (callbacks[_i] === callback && targets[_i] === target) return true;
      return false;
    };
    proto.removeAll = function(keyOrTarget) {
      if ("string" === typeof keyOrTarget) {
        var list = this._callbackTable[keyOrTarget];
        if (list) if (list.isInvoking) list.cancelAll(); else {
          callbackListPool.put(list);
          delete this._callbackTable[keyOrTarget];
        }
      } else if (keyOrTarget) for (var key in this._callbackTable) {
        var _list = this._callbackTable[key];
        if (_list.isInvoking) {
          var targets = _list.targets;
          for (var i = 0; i < targets.length; ++i) targets[i] === keyOrTarget && _list.cancel(i);
        } else _list.removeBy(_list.targets, keyOrTarget);
      }
    };
    proto.remove = function(key, callback, target) {
      var list = this._callbackTable[key];
      if (list) {
        target = target || null;
        var callbacks = list.callbacks;
        var targets = list.targets;
        for (var i = 0; i < callbacks.length; ++i) if (callbacks[i] === callback && targets[i] === target) {
          if (list.isInvoking) list.cancel(i); else {
            fastRemoveAt(callbacks, i);
            fastRemoveAt(targets, i);
          }
          break;
        }
      }
    };
    var CallbacksInvoker = function() {
      CallbacksHandler.call(this);
    };
    js.extend(CallbacksInvoker, CallbacksHandler);
    false;
    CallbacksInvoker.prototype.invoke = function(key, p1, p2, p3, p4, p5) {
      var list = this._callbackTable[key];
      if (list) {
        var rootInvoker = !list.isInvoking;
        list.isInvoking = true;
        var callbacks = list.callbacks;
        var targets = list.targets;
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          var callback = callbacks[i];
          if (callback) {
            var target = targets[i];
            target ? callback.call(target, p1, p2, p3, p4, p5) : callback(p1, p2, p3, p4, p5);
          }
        }
        if (rootInvoker) {
          list.isInvoking = false;
          list.containCanceled && list.purgeCanceled();
        }
      }
    };
    CallbacksInvoker.CallbacksHandler = CallbacksHandler;
    module.exports = CallbacksInvoker;
  }), {
    "./js": 106
  } ],
  100: [ (function(require, module, exports) {
    function deepFlatten(strList, array) {
      for (var i = 0; i < array.length; i++) {
        var item = array[i];
        Array.isArray(item) ? deepFlatten(strList, item) : strList.push(item);
      }
    }
    function flattenCodeArray(array) {
      var separator = "";
      var strList = [];
      deepFlatten(strList, array);
      return strList.join(separator);
    }
    module.exports = {
      flattenCodeArray: flattenCodeArray
    };
  }), {} ],
  101: [ (function(require, module, exports) {
    var js = require("./js");
    var Attr = require("./attribute");
    var CCClass = require("./CCClass");
    var misc = require("../utils/misc");
    var Details = function() {
      this.uuidList = [];
      this.uuidObjList = [];
      this.uuidPropList = [];
      this._stillUseUrl = js.createMap(true);
    };
    Details.prototype.reset = function() {
      this.uuidList.length = 0;
      this.uuidObjList.length = 0;
      this.uuidPropList.length = 0;
      js.clear(this._stillUseUrl);
    };
    false, false;
    Details.prototype.push = function(obj, propName, uuid, _stillUseUrl) {
      _stillUseUrl && (this._stillUseUrl[this.uuidList.length] = true);
      this.uuidList.push(uuid);
      this.uuidObjList.push(obj);
      this.uuidPropList.push(propName);
    };
    Details.pool = new js.Pool(function(obj) {
      obj.reset();
    }, 10);
    Details.pool.get = function() {
      return this._get() || new Details();
    };
    var _Deserializer = (function() {
      function _Deserializer(result, target, classFinder, customEnv, ignoreEditorOnly) {
        this.result = result;
        this.customEnv = customEnv;
        this.deserializedList = [];
        this.deserializedData = null;
        this._classFinder = classFinder;
        false;
        this._idList = [];
        this._idObjList = [];
        this._idPropList = [];
      }
      function _dereference(self) {
        var deserializedList = self.deserializedList;
        var idPropList = self._idPropList;
        var idList = self._idList;
        var idObjList = self._idObjList;
        var onDereferenced = self._classFinder && self._classFinder.onDereferenced;
        var i, propName, id;
        false;
        for (i = 0; i < idList.length; i++) {
          propName = idPropList[i];
          id = idList[i];
          idObjList[i][propName] = deserializedList[id];
        }
      }
      var prototype = _Deserializer.prototype;
      prototype.deserialize = function(jsonObj) {
        if (Array.isArray(jsonObj)) {
          var jsonArray = jsonObj;
          var refCount = jsonArray.length;
          this.deserializedList.length = refCount;
          for (var i = 0; i < refCount; i++) if (jsonArray[i]) {
            var mainTarget;
            false, false;
            this.deserializedList[i] = this._deserializeObject(jsonArray[i], false);
          }
          this.deserializedData = refCount > 0 ? this.deserializedList[0] : [];
        } else {
          this.deserializedList.length = 1;
          false, false;
          this.deserializedData = jsonObj ? this._deserializeObject(jsonObj, false) : null;
          this.deserializedList[0] = this.deserializedData;
        }
        _dereference(this);
        return this.deserializedData;
      };
      prototype._deserializeObject = function(serialized, _stillUseUrl, target, owner, propName) {
        var prop;
        var obj = null;
        var klass = null;
        var type = serialized.__type__;
        if (type) {
          klass = this._classFinder(type, serialized, owner, propName);
          if (!klass) {
            var notReported = this._classFinder === js._getClassById;
            notReported && cc.deserialize.reportMissingClass(type);
            return null;
          }
          if ((false, false) && target) {
            target instanceof klass || cc.warnID(5300, js.getClassName(target), klass);
            obj = target;
          } else obj = new klass();
          if (obj._deserialize) {
            obj._deserialize(serialized.content, this);
            return obj;
          }
          cc.Class._isCCClass(klass) ? _deserializeFireClass(this, obj, serialized, klass, target) : this._deserializeTypedObject(obj, serialized, klass);
        } else if (Array.isArray(serialized)) {
          if ((false, false) && target) {
            target.length = serialized.length;
            obj = target;
          } else obj = new Array(serialized.length);
          for (var i = 0; i < serialized.length; i++) {
            prop = serialized[i];
            if ("object" === typeof prop && prop) {
              false, false;
              this._deserializeObjField(obj, prop, "" + i, null, _stillUseUrl);
            } else obj[i] = prop;
          }
        } else {
          obj = (false, false) && target || {};
          this._deserializePrimitiveObject(obj, serialized);
        }
        return obj;
      };
      prototype._deserializeObjField = function(obj, jsonObj, propName, target, _stillUseUrl) {
        var id = jsonObj.__id__;
        if (void 0 === id) {
          var uuid = jsonObj.__uuid__;
          if (uuid) this.result.push(obj, propName, uuid, _stillUseUrl); else {
            false, false;
            obj[propName] = this._deserializeObject(jsonObj, _stillUseUrl);
          }
        } else {
          var dObj = this.deserializedList[id];
          if (dObj) obj[propName] = dObj; else {
            this._idList.push(id);
            this._idObjList.push(obj);
            this._idPropList.push(propName);
          }
        }
      };
      prototype._deserializePrimitiveObject = function(instance, serialized) {
        var self = this;
        for (var propName in serialized) if (serialized.hasOwnProperty(propName)) {
          var prop = serialized[propName];
          if ("object" !== typeof prop) "__type__" !== propName && (instance[propName] = prop); else if (prop) {
            false, false;
            self._deserializeObjField(instance, prop, propName);
          } else instance[propName] = null;
        }
      };
      prototype._deserializeTypedObject = function(instance, serialized, klass) {
        if (klass === cc.Vec2) {
          instance.x = serialized.x || 0;
          instance.y = serialized.y || 0;
          return;
        }
        if (klass === cc.Color) {
          instance.r = serialized.r || 0;
          instance.g = serialized.g || 0;
          instance.b = serialized.b || 0;
          var a = serialized.a;
          instance.a = void 0 === a ? 255 : a;
          return;
        }
        if (klass === cc.Size) {
          instance.width = serialized.width || 0;
          instance.height = serialized.height || 0;
          return;
        }
        var fastDefinedProps = klass.__props__;
        fastDefinedProps || (fastDefinedProps = Object.keys(instance));
        for (var i = 0; i < fastDefinedProps.length; i++) {
          var propName = fastDefinedProps[i];
          var prop = serialized[propName];
          if (void 0 !== prop && serialized.hasOwnProperty(propName)) if ("object" !== typeof prop) instance[propName] = prop; else if (prop) {
            false, false;
            this._deserializeObjField(instance, prop, propName);
          } else instance[propName] = null;
        }
      };
      function compileObjectTypeJit(sources, defaultValue, accessorToSet, propNameLiteralToSet, assumeHavePropIfIsValue, stillUseUrl) {
        if (defaultValue instanceof cc.ValueType) {
          assumeHavePropIfIsValue || sources.push("if(prop){");
          var ctorCode = js.getClassName(defaultValue);
          sources.push("s._deserializeTypedObject(o" + accessorToSet + ",prop," + ctorCode + ");");
          assumeHavePropIfIsValue || sources.push("}else o" + accessorToSet + "=null;");
        } else {
          sources.push("if(prop){");
          sources.push("s._deserializeObjField(o,prop," + propNameLiteralToSet + (false, ",null,") + !!stillUseUrl + ");");
          sources.push("}else o" + accessorToSet + "=null;");
        }
      }
      var compileDeserialize = function(self, klass) {
        var fastMode = misc.BUILTIN_CLASSID_RE.test(js._getClassId(klass));
        var shouldCopyId = cc.js.isChildClassOf(klass, cc._BaseNode) || cc.js.isChildClassOf(klass, cc.Component);
        var shouldCopyRawData;
        var simpleProps = [];
        var simplePropsToRead = simpleProps;
        var advancedProps = [];
        var advancedPropsToRead = advancedProps;
        var advancedPropsUseUrl = [];
        var advancedPropsValueType = [];
        (function() {
          var props = klass.__values__;
          shouldCopyRawData = "_$erialized" === props[props.length - 1];
          var attrs = Attr.getClassAttrs(klass);
          var TYPE = Attr.DELIMETER + "type";
          var DEFAULT = Attr.DELIMETER + "default";
          var SAVE_URL_AS_ASSET = Attr.DELIMETER + "saveUrlAsAsset";
          var FORMERLY_SERIALIZED_AS = Attr.DELIMETER + "formerlySerializedAs";
          for (var p = 0; p < props.length; p++) {
            var propName = props[p];
            var propNameToRead = propName;
            attrs[propName + FORMERLY_SERIALIZED_AS] && (propNameToRead = attrs[propName + FORMERLY_SERIALIZED_AS]);
            var stillUseUrl = attrs[propName + SAVE_URL_AS_ASSET];
            var defaultValue = CCClass.getDefault(attrs[propName + DEFAULT]);
            var isPrimitiveType = false;
            if (fastMode) {
              var userType = attrs[propName + TYPE];
              if (void 0 === defaultValue && userType) isPrimitiveType = userType === cc.String || userType === cc.Integer || userType === cc.Float || userType === cc.Boolean; else {
                var defaultType = typeof defaultValue;
                isPrimitiveType = "string" === defaultType && !stillUseUrl || "number" === defaultType || "boolean" === defaultType;
              }
            }
            if (fastMode && isPrimitiveType) {
              propNameToRead !== propName && simplePropsToRead === simpleProps && (simplePropsToRead = simpleProps.slice());
              simpleProps.push(propName);
              simplePropsToRead !== simpleProps && simplePropsToRead.push(propNameToRead);
            } else {
              propNameToRead !== propName && advancedPropsToRead === advancedProps && (advancedPropsToRead = advancedProps.slice());
              advancedProps.push(propName);
              advancedPropsToRead !== advancedProps && advancedPropsToRead.push(propNameToRead);
              advancedPropsUseUrl.push(stillUseUrl);
              advancedPropsValueType.push(defaultValue instanceof cc.ValueType && defaultValue.constructor);
            }
          }
        })();
        return function(s, o, d, k, t) {
          for (var i = 0; i < simpleProps.length; ++i) {
            var _prop = d[simplePropsToRead[i]];
            void 0 !== _prop && (o[simpleProps[i]] = _prop);
          }
          for (var _i = 0; _i < advancedProps.length; ++_i) {
            var propName = advancedProps[_i];
            var prop = d[advancedPropsToRead[_i]];
            if (void 0 === prop) continue;
            if (fastMode || "object" === typeof prop) {
              var valueTypeCtor = advancedPropsValueType[_i];
              valueTypeCtor ? fastMode || prop ? s._deserializeTypedObject(o[propName], prop, valueTypeCtor) : o[propName] = null : prop ? s._deserializeObjField(o, prop, propName, (false, 
              null), advancedPropsUseUrl[_i]) : o[propName] = null;
            } else o[propName] = prop;
          }
          shouldCopyId && d._id && (o._id = d._id);
          if (shouldCopyRawData) {
            o._$erialized = JSON.parse(JSON.stringify(d));
            s._deserializePrimitiveObject(o._$erialized, d);
          }
        };
      };
      function unlinkUnusedPrefab(self, serialized, obj) {
        var uuid = serialized["asset"] && serialized["asset"].__uuid__;
        if (uuid) {
          var last = self.result.uuidList.length - 1;
          if (self.result.uuidList[last] === uuid && self.result.uuidObjList[last] === obj && "asset" === self.result.uuidPropList[last]) {
            self.result.uuidList.pop();
            self.result.uuidObjList.pop();
            self.result.uuidPropList.pop();
          } else {
            var debugEnvOnlyInfo = "Failed to skip prefab asset while deserializing PrefabInfo";
            cc.warn(debugEnvOnlyInfo);
          }
        }
      }
      function _deserializeFireClass(self, obj, serialized, klass, target) {
        var deserialize;
        if (klass.hasOwnProperty("__deserialize__")) deserialize = klass.__deserialize__; else {
          deserialize = compileDeserialize(self, klass);
          js.value(klass, "__deserialize__", deserialize, true);
        }
        deserialize(self, obj, serialized, klass, target);
        false, false;
      }
      _Deserializer.pool = new js.Pool(function(obj) {
        obj.result = null;
        obj.customEnv = null;
        obj.deserializedList.length = 0;
        obj.deserializedData = null;
        obj._classFinder = null;
        false;
        obj._idList.length = 0;
        obj._idObjList.length = 0;
        obj._idPropList.length = 0;
      }, 1);
      _Deserializer.pool.get = function(result, target, classFinder, customEnv, ignoreEditorOnly) {
        var cache = this._get();
        if (cache) {
          cache.result = result;
          cache.customEnv = customEnv;
          cache._classFinder = classFinder;
          false;
          return cache;
        }
        return new _Deserializer(result, target, classFinder, customEnv, ignoreEditorOnly);
      };
      return _Deserializer;
    })();
    cc.deserialize = function(data, details, options) {
      options = options || {};
      var classFinder = options.classFinder || js._getClassById;
      var createAssetRefs = options.createAssetRefs || cc.sys.platform === cc.sys.EDITOR_CORE;
      var target = (false, false) && options.target;
      var customEnv = options.customEnv;
      var ignoreEditorOnly = options.ignoreEditorOnly;
      false;
      "string" === typeof data && (data = JSON.parse(data));
      var tempDetails = !details;
      details = details || Details.pool.get();
      var deserializer = _Deserializer.pool.get(details, target, classFinder, customEnv, ignoreEditorOnly);
      cc.game._isCloning = true;
      var res = deserializer.deserialize(data);
      cc.game._isCloning = false;
      _Deserializer.pool.put(deserializer);
      createAssetRefs && details.assignAssetsBy(Editor.serialize.asAsset);
      tempDetails && Details.pool.put(details);
      return res;
    };
    cc.deserialize.Details = Details;
    cc.deserialize.reportMissingClass = function(id) {
      false;
      cc.warnID(5302, id);
    };
  }), {
    "../utils/misc": 139,
    "./CCClass": 86,
    "./attribute": 98,
    "./js": 106
  } ],
  102: [ (function(require, module, exports) {
    var NonUuidMark = ".";
    function IdGenerater(category) {
      this.id = 0 | 998 * Math.random();
      this.prefix = category ? category + NonUuidMark : "";
    }
    IdGenerater.prototype.getNewId = function() {
      return this.prefix + ++this.id;
    };
    IdGenerater.global = new IdGenerater("global");
    module.exports = IdGenerater;
  }), {} ],
  103: [ (function(require, module, exports) {
    require("./js");
    require("./CCClass");
    require("./CCClassDecorator");
    require("./CCEnum");
    require("./CCObject");
    require("./callbacks-invoker");
    require("./url");
    require("./deserialize");
    require("./instantiate");
    require("./instantiate-jit");
    require("./requiring-frame");
    require("./CCSys");
    require("./CCMacro");
    true;
    require("./CCAssetLibrary");
    require("./CCVisibleRect");
  }), {
    "./CCAssetLibrary": 85,
    "./CCClass": 86,
    "./CCClassDecorator": 87,
    "./CCEnum": 88,
    "./CCMacro": 91,
    "./CCObject": 92,
    "./CCSys": 95,
    "./CCVisibleRect": 97,
    "./callbacks-invoker": 99,
    "./deserialize": 101,
    "./instantiate": 105,
    "./instantiate-jit": 104,
    "./js": 106,
    "./requiring-frame": 108,
    "./url": 109
  } ],
  104: [ (function(require, module, exports) {
    var CCObject = require("./CCObject");
    var Destroyed = CCObject.Flags.Destroyed;
    var PersistentMask = CCObject.Flags.PersistentMask;
    var Attr = require("./attribute");
    var js = require("./js");
    var CCClass = require("./CCClass");
    var Compiler = require("./compiler");
    var DEFAULT = Attr.DELIMETER + "default";
    var IDENTIFIER_RE = CCClass.IDENTIFIER_RE;
    var escapeForJS = CCClass.escapeForJS;
    var VAR = "var ";
    var LOCAL_OBJ = "o";
    var LOCAL_TEMP_OBJ = "t";
    var LOCAL_ARRAY = "a";
    var LINE_INDEX_OF_NEW_OBJ = 0;
    var DEFAULT_MODULE_CACHE = {
      "cc.Node": "cc.Node",
      "cc.Sprite": "cc.Sprite",
      "cc.Label": "cc.Label",
      "cc.Button": "cc.Button",
      "cc.Widget": "cc.Widget",
      "cc.Animation": "cc.Animation",
      "cc.ClickEvent": false,
      "cc.PrefabInfo": false
    };
    function Declaration(varName, expression) {
      this.varName = varName;
      this.expression = expression;
    }
    Declaration.prototype.toString = function() {
      return VAR + this.varName + "=" + this.expression + ";";
    };
    function mergeDeclaration(statement, expression) {
      return expression instanceof Declaration ? new Declaration(expression.varName, statement + expression.expression) : statement + expression;
    }
    function writeAssignment(codeArray, statement, expression) {
      if (Array.isArray(expression)) {
        expression[0] = mergeDeclaration(statement, expression[0]);
        codeArray.push(expression);
      } else codeArray.push(mergeDeclaration(statement, expression) + ";");
    }
    function Assignments(targetExpression) {
      this._exps = [];
      this._targetExp = targetExpression;
    }
    Assignments.prototype.append = function(key, expression) {
      this._exps.push([ key, expression ]);
    };
    Assignments.prototype.writeCode = function(codeArray) {
      var targetVar;
      if (this._exps.length > 1) {
        codeArray.push(LOCAL_TEMP_OBJ + "=" + this._targetExp + ";");
        targetVar = LOCAL_TEMP_OBJ;
      } else {
        if (1 !== this._exps.length) return;
        targetVar = this._targetExp;
      }
      for (var i = 0; i < this._exps.length; i++) {
        var pair = this._exps[i];
        writeAssignment(codeArray, targetVar + getPropAccessor(pair[0]) + "=", pair[1]);
      }
    };
    Assignments.pool = new js.Pool(function(obj) {
      obj._exps.length = 0;
      obj._targetExp = null;
    }, 1);
    Assignments.pool.get = function(targetExpression) {
      var cache = this._get() || new Assignments();
      cache._targetExp = targetExpression;
      return cache;
    };
    function equalsToDefault(def, value) {
      if ("function" === typeof def) try {
        def = def();
      } catch (e) {
        return false;
      }
      if (def === value) return true;
      if (def && value) {
        if (def instanceof cc.ValueType && def.equals(value)) return true;
        if (Array.isArray(def) && Array.isArray(value) || def.constructor === Object && value.constructor === Object) try {
          return Array.isArray(def) && Array.isArray(value) && 0 === def.length && 0 === value.length;
        } catch (e) {}
      }
      return false;
    }
    function getPropAccessor(key) {
      return IDENTIFIER_RE.test(key) ? "." + key : "[" + escapeForJS(key) + "]";
    }
    function Parser(obj, parent) {
      this.parent = parent;
      this.objsToClear_iN$t = [];
      this.codeArray = [];
      this.objs = [];
      this.funcs = [];
      this.funcModuleCache = js.createMap();
      js.mixin(this.funcModuleCache, DEFAULT_MODULE_CACHE);
      this.globalVariables = [];
      this.globalVariableId = 0;
      this.localVariableId = 0;
      this.codeArray.push(VAR + LOCAL_OBJ + "," + LOCAL_TEMP_OBJ + ";", "if(R){", LOCAL_OBJ + "=R;", "}else{", LOCAL_OBJ + "=R=new " + this.getFuncModule(obj.constructor, true) + "();", "}");
      obj._iN$t = {
        globalVar: "R"
      };
      this.objsToClear_iN$t.push(obj);
      this.enumerateObject(this.codeArray, obj);
      var globalVariablesDeclaration;
      this.globalVariables.length > 0 && (globalVariablesDeclaration = VAR + this.globalVariables.join(",") + ";");
      var code = Compiler.flattenCodeArray([ "return (function(R){", globalVariablesDeclaration || [], this.codeArray, "return o;", "})" ]);
      this.result = Function("O", "F", code)(this.objs, this.funcs);
      for (var i = 0, len = this.objsToClear_iN$t.length; i < len; ++i) this.objsToClear_iN$t[i]._iN$t = null;
      this.objsToClear_iN$t.length = 0;
    }
    var proto = Parser.prototype;
    proto.getFuncModule = function(func, usedInNew) {
      var clsName = js.getClassName(func);
      if (clsName) {
        var cache = this.funcModuleCache[clsName];
        if (cache) return cache;
        if (void 0 === cache) {
          var clsNameIsModule = -1 !== clsName.indexOf(".");
          if (clsNameIsModule) try {
            clsNameIsModule = func === Function("return " + clsName)();
            if (clsNameIsModule) {
              this.funcModuleCache[clsName] = clsName;
              return clsName;
            }
          } catch (e) {}
        }
      }
      var index = this.funcs.indexOf(func);
      if (index < 0) {
        index = this.funcs.length;
        this.funcs.push(func);
      }
      var res = "F[" + index + "]";
      usedInNew && (res = "(" + res + ")");
      this.funcModuleCache[clsName] = res;
      return res;
    };
    proto.getObjRef = function(obj) {
      var index = this.objs.indexOf(obj);
      if (index < 0) {
        index = this.objs.length;
        this.objs.push(obj);
      }
      return "O[" + index + "]";
    };
    proto.setValueType = function(codeArray, defaultValue, srcValue, targetExpression) {
      var assignments = Assignments.pool.get(targetExpression);
      var fastDefinedProps = defaultValue.constructor.__props__;
      fastDefinedProps || (fastDefinedProps = Object.keys(defaultValue));
      for (var i = 0; i < fastDefinedProps.length; i++) {
        var propName = fastDefinedProps[i];
        var prop = srcValue[propName];
        if (defaultValue[propName] === prop) continue;
        var expression = this.enumerateField(srcValue, propName, prop);
        assignments.append(propName, expression);
      }
      assignments.writeCode(codeArray);
      Assignments.pool.put(assignments);
    };
    proto.enumerateCCClass = function(codeArray, obj, klass) {
      var props = klass.__values__;
      var attrs = Attr.getClassAttrs(klass);
      for (var p = 0; p < props.length; p++) {
        var key = props[p];
        var val = obj[key];
        var defaultValue = attrs[key + DEFAULT];
        if (equalsToDefault(defaultValue, val)) continue;
        if ("object" === typeof val && val instanceof cc.ValueType) {
          defaultValue = CCClass.getDefault(defaultValue);
          if (defaultValue && defaultValue.constructor === val.constructor) {
            var targetExpression = LOCAL_OBJ + getPropAccessor(key);
            this.setValueType(codeArray, defaultValue, val, targetExpression);
            continue;
          }
        }
        this.setObjProp(codeArray, obj, key, val);
      }
    };
    proto.instantiateArray = function(value) {
      if (0 === value.length) return "[]";
      var arrayVar = LOCAL_ARRAY + ++this.localVariableId;
      var declaration = new Declaration(arrayVar, "new Array(" + value.length + ")");
      var codeArray = [ declaration ];
      value._iN$t = {
        globalVar: "",
        source: codeArray
      };
      this.objsToClear_iN$t.push(value);
      for (var i = 0; i < value.length; ++i) {
        var statement = arrayVar + "[" + i + "]=";
        var expression = this.enumerateField(value, i, value[i]);
        writeAssignment(codeArray, statement, expression);
      }
      return codeArray;
    };
    proto.enumerateField = function(obj, key, value) {
      if ("object" === typeof value && value) {
        var _iN$t = value._iN$t;
        if (_iN$t) {
          var globalVar = _iN$t.globalVar;
          if (!globalVar) {
            globalVar = _iN$t.globalVar = "v" + ++this.globalVariableId;
            this.globalVariables.push(globalVar);
            var line = _iN$t.source[LINE_INDEX_OF_NEW_OBJ];
            _iN$t.source[LINE_INDEX_OF_NEW_OBJ] = mergeDeclaration(globalVar + "=", line);
          }
          return globalVar;
        }
        return Array.isArray(value) ? this.instantiateArray(value) : this.instantiateObj(value);
      }
      if ("function" === typeof value) return this.getFuncModule(value);
      if ("string" === typeof value) return escapeForJS(value);
      "_objFlags" === key && obj instanceof CCObject && (value &= PersistentMask);
      return value;
    };
    proto.setObjProp = function(codeArray, obj, key, value) {
      var statement = LOCAL_OBJ + getPropAccessor(key) + "=";
      var expression = this.enumerateField(obj, key, value);
      writeAssignment(codeArray, statement, expression);
    };
    proto.enumerateObject = function(codeArray, obj) {
      var klass = obj.constructor;
      if (cc.Class._isCCClass(klass)) this.enumerateCCClass(codeArray, obj, klass); else for (var key in obj) {
        if (!obj.hasOwnProperty(key) || 95 === key.charCodeAt(0) && 95 === key.charCodeAt(1) && "__type__" !== key) continue;
        var value = obj[key];
        if ("object" === typeof value && value && value === obj._iN$t) continue;
        this.setObjProp(codeArray, obj, key, value);
      }
    };
    proto.instantiateObj = function(obj) {
      if (obj instanceof cc.ValueType) return CCClass.getNewValueTypeCode(obj);
      if (obj instanceof cc.Asset) return this.getObjRef(obj);
      if (obj._objFlags & Destroyed) return null;
      var createCode;
      var ctor = obj.constructor;
      if (cc.Class._isCCClass(ctor)) {
        if (this.parent) if (this.parent instanceof cc.Component) {
          if (obj instanceof cc._BaseNode || obj instanceof cc.Component) return this.getObjRef(obj);
        } else if (this.parent instanceof cc._BaseNode) if (obj instanceof cc._BaseNode) {
          if (!obj.isChildOf(this.parent)) return this.getObjRef(obj);
        } else if (obj instanceof cc.Component && !obj.node.isChildOf(this.parent)) return this.getObjRef(obj);
        createCode = new Declaration(LOCAL_OBJ, "new " + this.getFuncModule(ctor, true) + "()");
      } else if (ctor === Object) createCode = new Declaration(LOCAL_OBJ, "{}"); else {
        if (ctor) return this.getObjRef(obj);
        createCode = new Declaration(LOCAL_OBJ, "Object.create(null)");
      }
      var codeArray = [ createCode ];
      obj._iN$t = {
        globalVar: "",
        source: codeArray
      };
      this.objsToClear_iN$t.push(obj);
      this.enumerateObject(codeArray, obj);
      return [ "(function(){", codeArray, "return o;})();" ];
    };
    function compile(node) {
      var root = node instanceof cc._BaseNode && node;
      var parser = new Parser(node, root);
      return parser.result;
    }
    module.exports = {
      compile: compile,
      equalsToDefault: equalsToDefault
    };
    false;
  }), {
    "./CCClass": 86,
    "./CCObject": 92,
    "./attribute": 98,
    "./compiler": 100,
    "./js": 106
  } ],
  105: [ (function(require, module, exports) {
    var CCObject = require("./CCObject");
    var CCValueType = require("../value-types/value-type");
    var Destroyed = CCObject.Flags.Destroyed;
    var PersistentMask = CCObject.Flags.PersistentMask;
    var _isDomNode = require("./utils").isDomNode;
    function instantiate(original, internal_force) {
      if (!internal_force) {
        if ("object" !== typeof original || Array.isArray(original)) {
          false;
          return null;
        }
        if (!original) {
          false;
          return null;
        }
        if (!cc.isValid(original)) {
          false;
          return null;
        }
        false;
      }
      var clone;
      if (original instanceof CCObject) {
        if (original._instantiate) {
          cc.game._isCloning = true;
          clone = original._instantiate();
          cc.game._isCloning = false;
          return clone;
        }
        if (original instanceof cc.Asset) {
          false;
          return null;
        }
      }
      cc.game._isCloning = true;
      clone = doInstantiate(original);
      cc.game._isCloning = false;
      return clone;
    }
    var objsToClearTmpVar = [];
    function doInstantiate(obj, parent) {
      if (Array.isArray(obj)) {
        false;
        return null;
      }
      if (_isDomNode && _isDomNode(obj)) {
        false;
        return null;
      }
      var clone;
      if (obj._iN$t) clone = obj._iN$t; else if (obj.constructor) {
        var klass = obj.constructor;
        clone = new klass();
      } else clone = Object.create(null);
      enumerateObject(obj, clone, parent);
      for (var i = 0, len = objsToClearTmpVar.length; i < len; ++i) objsToClearTmpVar[i]._iN$t = null;
      objsToClearTmpVar.length = 0;
      return clone;
    }
    function enumerateCCClass(klass, obj, clone, parent) {
      var props = klass.__values__;
      for (var p = 0; p < props.length; p++) {
        var key = props[p];
        var value = obj[key];
        if ("object" === typeof value && value) {
          var initValue = clone[key];
          initValue instanceof CCValueType && initValue.constructor === value.constructor ? initValue.set(value) : clone[key] = value._iN$t || instantiateObj(value, parent);
        } else clone[key] = value;
      }
    }
    function enumerateObject(obj, clone, parent) {
      obj._iN$t = clone;
      objsToClearTmpVar.push(obj);
      var klass = obj.constructor;
      if (cc.Class._isCCClass(klass)) enumerateCCClass(klass, obj, clone, parent); else for (var key in obj) {
        if (!obj.hasOwnProperty(key) || 95 === key.charCodeAt(0) && 95 === key.charCodeAt(1) && "__type__" !== key) continue;
        var value = obj[key];
        if ("object" === typeof value && value) {
          if (value === clone) continue;
          clone[key] = value._iN$t || instantiateObj(value, parent);
        } else clone[key] = value;
      }
      obj instanceof CCObject && (clone._objFlags &= PersistentMask);
    }
    function instantiateObj(obj, parent) {
      if (obj instanceof CCValueType) return obj.clone();
      if (obj instanceof cc.Asset) return obj;
      var clone;
      if (Array.isArray(obj)) {
        var len = obj.length;
        clone = new Array(len);
        obj._iN$t = clone;
        for (var i = 0; i < len; ++i) {
          var value = obj[i];
          clone[i] = "object" === typeof value && value ? value._iN$t || instantiateObj(value, parent) : value;
        }
        objsToClearTmpVar.push(obj);
        return clone;
      }
      if (obj._objFlags & Destroyed) return null;
      var ctor = obj.constructor;
      if (cc.Class._isCCClass(ctor)) {
        if (parent) if (parent instanceof cc.Component) {
          if (obj instanceof cc._BaseNode || obj instanceof cc.Component) return obj;
        } else if (parent instanceof cc._BaseNode) if (obj instanceof cc._BaseNode) {
          if (!obj.isChildOf(parent)) return obj;
        } else if (obj instanceof cc.Component && !obj.node.isChildOf(parent)) return obj;
        clone = new ctor();
      } else if (ctor === Object) clone = {}; else {
        if (ctor) return obj;
        clone = Object.create(null);
      }
      enumerateObject(obj, clone, parent);
      return clone;
    }
    instantiate._clone = doInstantiate;
    cc.instantiate = instantiate;
    module.exports = instantiate;
  }), {
    "../value-types/value-type": 153,
    "./CCObject": 92,
    "./utils": 110
  } ],
  106: [ (function(require, module, exports) {
    var tempCIDGenerater = new (require("./id-generater"))("TmpCId.");
    function _getPropertyDescriptor(obj, name) {
      while (obj) {
        var pd = Object.getOwnPropertyDescriptor(obj, name);
        if (pd) return pd;
        obj = Object.getPrototypeOf(obj);
      }
      return null;
    }
    function _copyprop(name, source, target) {
      var pd = _getPropertyDescriptor(source, name);
      Object.defineProperty(target, name, pd);
    }
    var js = {
      isNumber: function(obj) {
        return "number" === typeof obj || obj instanceof Number;
      },
      isString: function(obj) {
        return "string" === typeof obj || obj instanceof String;
      },
      addon: function(obj) {
        "use strict";
        obj = obj || {};
        for (var i = 1, length = arguments.length; i < length; i++) {
          var source = arguments[i];
          if (source) {
            if ("object" !== typeof source) {
              cc.errorID(5402, source);
              continue;
            }
            for (var name in source) name in obj || _copyprop(name, source, obj);
          }
        }
        return obj;
      },
      mixin: function(obj) {
        "use strict";
        obj = obj || {};
        for (var i = 1, length = arguments.length; i < length; i++) {
          var source = arguments[i];
          if (source) {
            if ("object" !== typeof source) {
              cc.errorID(5403, source);
              continue;
            }
            for (var name in source) _copyprop(name, source, obj);
          }
        }
        return obj;
      },
      extend: function(cls, base) {
        false;
        for (var p in base) base.hasOwnProperty(p) && (cls[p] = base[p]);
        cls.prototype = Object.create(base.prototype, {
          constructor: {
            value: cls,
            writable: true,
            configurable: true
          }
        });
        return cls;
      },
      getSuper: function(ctor) {
        var proto = ctor.prototype;
        var dunderProto = proto && Object.getPrototypeOf(proto);
        return dunderProto && dunderProto.constructor;
      },
      isChildClassOf: function(subclass, superclass) {
        if (subclass && superclass) {
          if ("function" !== typeof subclass) return false;
          if ("function" !== typeof superclass) {
            false;
            return false;
          }
          if (subclass === superclass) return true;
          for (;;) {
            subclass = js.getSuper(subclass);
            if (!subclass) return false;
            if (subclass === superclass) return true;
          }
        }
        return false;
      },
      clear: function(obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) delete obj[keys[i]];
      },
      getPropertyDescriptor: _getPropertyDescriptor
    };
    var tmpValueDesc = {
      value: void 0,
      enumerable: false,
      writable: false,
      configurable: true
    };
    js.value = function(obj, prop, value, writable, enumerable) {
      tmpValueDesc.value = value;
      tmpValueDesc.writable = writable;
      tmpValueDesc.enumerable = enumerable;
      Object.defineProperty(obj, prop, tmpValueDesc);
      tmpValueDesc.value = void 0;
    };
    var tmpGetSetDesc = {
      get: null,
      set: null,
      enumerable: false
    };
    js.getset = function(obj, prop, getter, setter, enumerable, configurable) {
      if ("function" !== typeof setter) {
        enumerable = setter;
        setter = void 0;
      }
      tmpGetSetDesc.get = getter;
      tmpGetSetDesc.set = setter;
      tmpGetSetDesc.enumerable = enumerable;
      tmpGetSetDesc.configurable = configurable;
      Object.defineProperty(obj, prop, tmpGetSetDesc);
      tmpGetSetDesc.get = null;
      tmpGetSetDesc.set = null;
    };
    var tmpGetDesc = {
      get: null,
      enumerable: false,
      configurable: false
    };
    js.get = function(obj, prop, getter, enumerable, configurable) {
      tmpGetDesc.get = getter;
      tmpGetDesc.enumerable = enumerable;
      tmpGetDesc.configurable = configurable;
      Object.defineProperty(obj, prop, tmpGetDesc);
      tmpGetDesc.get = null;
    };
    var tmpSetDesc = {
      set: null,
      enumerable: false,
      configurable: false
    };
    js.set = function(obj, prop, setter, enumerable, configurable) {
      tmpSetDesc.set = setter;
      tmpSetDesc.enumerable = enumerable;
      tmpSetDesc.configurable = configurable;
      Object.defineProperty(obj, prop, tmpSetDesc);
      tmpSetDesc.set = null;
    };
    js.getClassName = function(objOrCtor) {
      if ("function" === typeof objOrCtor) {
        var prototype = objOrCtor.prototype;
        if (prototype && prototype.hasOwnProperty("__classname__") && prototype.__classname__) return prototype.__classname__;
        var retval = "";
        objOrCtor.name && (retval = objOrCtor.name);
        if (objOrCtor.toString) {
          var arr, str = objOrCtor.toString();
          arr = "[" === str.charAt(0) ? str.match(/\[\w+\s*(\w+)\]/) : str.match(/function\s*(\w+)/);
          arr && 2 === arr.length && (retval = arr[1]);
        }
        return "Object" !== retval ? retval : "";
      }
      if (objOrCtor && objOrCtor.constructor) return js.getClassName(objOrCtor.constructor);
      return "";
    };
    function isTempClassId(id) {
      return "string" !== typeof id || id.startsWith(tempCIDGenerater.prefix);
    }
    (function() {
      var _idToClass = {};
      var _nameToClass = {};
      function setup(key, publicName, table) {
        js.getset(js, publicName, (function() {
          return Object.assign({}, table);
        }), (function(value) {
          js.clear(table);
          Object.assign(table, value);
        }));
        return function(id, constructor) {
          constructor.prototype.hasOwnProperty(key) && delete table[constructor.prototype[key]];
          js.value(constructor.prototype, key, id);
          if (id) {
            var registered = table[id];
            if (registered && registered !== constructor) {
              var error = "A Class already exists with the same " + key + ' : "' + id + '".';
              false;
              cc.error(error);
            } else table[id] = constructor;
          }
        };
      }
      js._setClassId = setup("__cid__", "_registeredClassIds", _idToClass);
      var doSetClassName = setup("__classname__", "_registeredClassNames", _nameToClass);
      js.setClassName = function(className, constructor) {
        doSetClassName(className, constructor);
        if (!constructor.prototype.hasOwnProperty("__cid__")) {
          var id = className || tempCIDGenerater.getNewId();
          id && js._setClassId(id, constructor);
        }
      };
      js.unregisterClass = function() {
        for (var i = 0; i < arguments.length; i++) {
          var p = arguments[i].prototype;
          var classId = p.__cid__;
          classId && delete _idToClass[classId];
          var classname = p.__classname__;
          classname && delete _nameToClass[classname];
        }
      };
      js._getClassById = function(classId) {
        return _idToClass[classId];
      };
      js.getClassByName = function(classname) {
        return _nameToClass[classname];
      };
      js._getClassId = function(obj, allowTempId) {
        allowTempId = "undefined" === typeof allowTempId || allowTempId;
        var res;
        if ("function" === typeof obj && obj.prototype.hasOwnProperty("__cid__")) {
          res = obj.prototype.__cid__;
          if (!allowTempId && (false, false) && isTempClassId(res)) return "";
          return res;
        }
        if (obj && obj.constructor) {
          var prototype = obj.constructor.prototype;
          if (prototype && prototype.hasOwnProperty("__cid__")) {
            res = obj.__cid__;
            if (!allowTempId && (false, false) && isTempClassId(res)) return "";
            return res;
          }
        }
        return "";
      };
    })();
    js.obsolete = function(obj, obsoleted, newExpr, writable) {
      var extractPropName = /([^.]+)$/;
      var oldProp = extractPropName.exec(obsoleted)[0];
      var newProp = extractPropName.exec(newExpr)[0];
      function get() {
        false;
        return this[newProp];
      }
      writable ? js.getset(obj, oldProp, get, (function(value) {
        false;
        this[newProp] = value;
      })) : js.get(obj, oldProp, get);
    };
    js.obsoletes = function(obj, objName, props, writable) {
      for (var obsoleted in props) {
        var newName = props[obsoleted];
        js.obsolete(obj, objName + "." + obsoleted, newName, writable);
      }
    };
    var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
    var REGEXP_STR = /%s/;
    js.formatStr = function() {
      var argLen = arguments.length;
      if (0 === argLen) return "";
      var msg = arguments[0];
      if (1 === argLen) return "" + msg;
      var hasSubstitution = "string" === typeof msg && REGEXP_NUM_OR_STR.test(msg);
      if (hasSubstitution) for (var i = 1; i < argLen; ++i) {
        var arg = arguments[i];
        var regExpToTest = "number" === typeof arg ? REGEXP_NUM_OR_STR : REGEXP_STR;
        regExpToTest.test(msg) ? msg = msg.replace(regExpToTest, arg) : msg += " " + arg;
      } else for (var _i = 1; _i < argLen; ++_i) msg += " " + arguments[_i];
      return msg;
    };
    js.shiftArguments = function() {
      var len = arguments.length - 1;
      var args = new Array(len);
      for (var i = 0; i < len; ++i) args[i] = arguments[i + 1];
      return args;
    };
    js.createMap = function(forceDictMode) {
      var map = Object.create(null);
      if (forceDictMode) {
        var INVALID_IDENTIFIER_1 = ".";
        var INVALID_IDENTIFIER_2 = "/";
        map[INVALID_IDENTIFIER_1] = true;
        map[INVALID_IDENTIFIER_2] = true;
        delete map[INVALID_IDENTIFIER_1];
        delete map[INVALID_IDENTIFIER_2];
      }
      return map;
    };
    function removeAt(array, index) {
      array.splice(index, 1);
    }
    function fastRemoveAt(array, index) {
      var length = array.length;
      if (index < 0 || index >= length) return;
      array[index] = array[length - 1];
      array.length = length - 1;
    }
    function remove(array, value) {
      var index = array.indexOf(value);
      if (index >= 0) {
        removeAt(array, index);
        return true;
      }
      return false;
    }
    function fastRemove(array, value) {
      var index = array.indexOf(value);
      if (index >= 0) {
        array[index] = array[array.length - 1];
        --array.length;
      }
    }
    function verifyType(array, type) {
      if (array && array.length > 0) for (var i = 0; i < array.length; i++) if (!(array[i] instanceof type)) {
        cc.logID(1300);
        return false;
      }
      return true;
    }
    function removeArray(array, minusArr) {
      for (var i = 0, l = minusArr.length; i < l; i++) remove(array, minusArr[i]);
    }
    function appendObjectsAt(array, addObjs, index) {
      array.splice.apply(array, [ index, 0 ].concat(addObjs));
      return array;
    }
    var indexOf = Array.prototype.indexOf;
    function contains(array, value) {
      return array.indexOf(value) >= 0;
    }
    function copy(array) {
      var i, len = array.length, arr_clone = new Array(len);
      for (i = 0; i < len; i += 1) arr_clone[i] = array[i];
      return arr_clone;
    }
    js.array = {
      remove: remove,
      fastRemove: fastRemove,
      removeAt: removeAt,
      fastRemoveAt: fastRemoveAt,
      contains: contains,
      verifyType: verifyType,
      removeArray: removeArray,
      appendObjectsAt: appendObjectsAt,
      copy: copy,
      indexOf: indexOf,
      MutableForwardIterator: require("../utils/mutable-forward-iterator")
    };
    function Pool(cleanupFunc, size) {
      if (void 0 === size) {
        size = cleanupFunc;
        cleanupFunc = null;
      }
      this.get = null;
      this.count = 0;
      this._pool = new Array(size);
      this._cleanup = cleanupFunc;
    }
    Pool.prototype._get = function() {
      if (this.count > 0) {
        --this.count;
        var cache = this._pool[this.count];
        this._pool[this.count] = null;
        return cache;
      }
      return null;
    };
    Pool.prototype.put = function(obj) {
      var pool = this._pool;
      if (this.count < pool.length) {
        if (this._cleanup && false === this._cleanup(obj)) return;
        pool[this.count] = obj;
        ++this.count;
      }
    };
    Pool.prototype.resize = function(length) {
      if (length >= 0) {
        this._pool.length = length;
        this.count > length && (this.count = length);
      }
    };
    js.Pool = Pool;
    cc.js = js;
    module.exports = js;
  }), {
    "../utils/mutable-forward-iterator": 140,
    "./id-generater": 102
  } ],
  107: [ (function(require, module, exports) {
    var js = require("./js");
    var SerializableAttrs = {
      url: {
        canUsedInGet: true
      },
      default: {},
      serializable: {},
      editorOnly: {},
      formerlySerializedAs: {}
    };
    var TYPO_TO_CORRECT_DEV = false;
    function parseNotify(val, propName, notify, properties) {
      if (val.get || val.set) {
        false;
        return;
      }
      if (val.hasOwnProperty("default")) {
        var newKey = "_N$" + propName;
        val.get = function() {
          return this[newKey];
        };
        val.set = function(value) {
          var oldValue = this[newKey];
          this[newKey] = value;
          notify.call(this, oldValue);
        };
        var newValue = {};
        properties[newKey] = newValue;
        for (var attr in SerializableAttrs) {
          var v = SerializableAttrs[attr];
          if (val.hasOwnProperty(attr)) {
            newValue[attr] = val[attr];
            v.canUsedInGet || delete val[attr];
          }
        }
      } else false;
    }
    function checkUrl(val, className, propName, url) {
      Array.isArray(url) && url.length > 0 && (url = url[0]);
      false;
      val.type = url;
    }
    function parseType(val, type, className, propName) {
      if (Array.isArray(type)) {
        var isArray;
        false;
        if (!(type.length > 0)) return cc.errorID(5508, className, propName);
        if (cc.RawAsset.isRawAssetType(type[0])) {
          val.url = type[0];
          delete val.type;
          return;
        }
        val.type = type = type[0];
      }
      false;
    }
    function postCheckType(val, type, className, propName) {
      false;
    }
    function getBaseClassWherePropertyDefined_DEV(propName, cls) {
      var res;
      false;
    }
    exports.getFullFormOfProperty = function(options, propname_dev, classname_dev) {
      var isLiteral = options && options.constructor === Object;
      if (!isLiteral) {
        if (Array.isArray(options) && options.length > 0) {
          var type = options[0];
          false;
          return {
            default: [],
            type: options,
            _short: true
          };
        }
        if ("function" === typeof options) {
          var type = options;
          if (!cc.RawAsset.isRawAssetType(type)) {
            if (!cc.RawAsset.wasRawAssetType(type)) return {
              default: js.isChildClassOf(type, cc.ValueType) ? new type() : null,
              type: type,
              _short: true
            };
            false;
          }
          return {
            default: "",
            url: type,
            _short: true
          };
        }
        return {
          default: options,
          _short: true
        };
      }
      return null;
    };
    exports.preprocessAttrs = function(properties, className, cls, es6) {
      for (var propName in properties) {
        var val = properties[propName];
        var fullForm = exports.getFullFormOfProperty(val, propName, className);
        fullForm && (val = properties[propName] = fullForm);
        if (val) {
          var maybeTypeScript;
          false;
          var baseClass;
          false;
          var notify = val.notify;
          if (notify) {
            false;
            parseNotify(val, propName, notify, properties);
          }
          "type" in val && parseType(val, val.type, className, propName);
          "url" in val && checkUrl(val, className, propName, val.url);
          "type" in val && postCheckType(val, val.type, className, propName);
        }
      }
    };
    false;
    exports.validateMethodWithProps = function(func, funcName, className, cls, base) {
      false;
      if ("function" !== typeof func && null !== func) {
        var overrided;
        var baseFuc;
        var subFuc;
        var correct;
        false;
        return false;
      }
      false;
      return true;
    };
  }), {
    "./CCClass": 86,
    "./js": 106
  } ],
  108: [ (function(require, module, exports) {
    var requiringFrames = [];
    cc._RF = {
      push: function(module, uuid, script) {
        if (void 0 === script) {
          script = uuid;
          uuid = "";
        }
        requiringFrames.push({
          uuid: uuid,
          script: script,
          module: module,
          exports: module.exports,
          beh: null
        });
      },
      pop: function() {
        var frameInfo = requiringFrames.pop();
        var module = frameInfo.module;
        var exports = module.exports;
        if (exports === frameInfo.exports) {
          for (var anyKey in exports) return;
          module.exports = exports = frameInfo.cls;
        }
      },
      peek: function() {
        return requiringFrames[requiringFrames.length - 1];
      }
    };
    false;
  }), {} ],
  109: [ (function(require, module, exports) {
    cc.url = {
      _rawAssets: "",
      normalize: function(url) {
        url && (46 === url.charCodeAt(0) && 47 === url.charCodeAt(1) ? url = url.slice(2) : 47 === url.charCodeAt(0) && (url = url.slice(1)));
        return url;
      },
      raw: function(url) {
        false;
        url = this.normalize(url);
        if (url.startsWith("resources/")) {
          var uuid = cc.loader._getResUuid(url.slice(10), cc.Asset, true);
          if (uuid) return cc.AssetLibrary.getLibUrlNoExt(uuid, true) + cc.path.extname(url);
        } else cc.errorID(7002, url);
        return this._rawAssets + url;
      },
      _init: function(assets) {
        this._rawAssets = cc.path.stripSep(assets) + "/";
      }
    };
    module.exports = cc.url;
  }), {} ],
  110: [ (function(require, module, exports) {
    module.exports = {
      contains: function(refNode, otherNode) {
        if ("function" == typeof refNode.contains) return refNode.contains(otherNode);
        if ("function" == typeof refNode.compareDocumentPosition) return !!(16 & refNode.compareDocumentPosition(otherNode));
        var node = otherNode.parentNode;
        if (node) do {
          if (node === refNode) return true;
          node = node.parentNode;
        } while (null !== node);
        return false;
      },
      isDomNode: "object" === typeof window && ("function" === typeof Node ? function(obj) {
        return obj instanceof Node;
      } : function(obj) {
        return obj && "object" === typeof obj && "number" === typeof obj.nodeType && "string" === typeof obj.nodeName;
      }),
      callInNextTick: function(callback, p1, p2) {
        callback && setTimeout((function() {
          callback(p1, p2);
        }), 0);
      }
    };
    false;
    false;
  }), {} ],
  111: [ (function(require, module, exports) {
    require("./platform/js");
    require("./value-types");
    require("./utils");
    require("./platform/CCInputManager");
    require("./platform/CCInputExtension");
    require("./event");
    require("./platform/CCSys");
    require("./platform/CCMacro");
    require("./load-pipeline");
    require("./CCDirector");
    require("./renderer");
    true;
    require("./platform/CCView");
    require("./platform/CCScreen");
    require("./CCScheduler");
    require("./event-manager");
  }), {
    "./CCDirector": 4,
    "./CCScheduler": 9,
    "./event": 52,
    "./event-manager": 48,
    "./load-pipeline": 67,
    "./platform/CCInputExtension": 89,
    "./platform/CCInputManager": 90,
    "./platform/CCMacro": 91,
    "./platform/CCScreen": 94,
    "./platform/CCSys": 95,
    "./platform/CCView": 96,
    "./platform/js": 106,
    "./renderer": 127,
    "./utils": 137,
    "./value-types": 148
  } ],
  112: [ (function(require, module, exports) {
    var js = require("../../platform/js");
    var RenderFlow = require("../render-flow");
    require("./renderers");
    var RenderComponentWalker = function(device, defaultCamera) {
      this._device = device;
      this._camera = defaultCamera;
      this.parentOpacity = 1;
      this.parentOpacityDirty = 0;
      this.worldMatDirty = 0;
      RenderFlow.init(this);
    };
    RenderComponentWalker.prototype = {
      constructor: RenderComponentWalker,
      reset: function() {},
      _commitComp: function(comp, assembler) {
        var ctx = this._device._ctx;
        var cam = this._camera;
        ctx.setTransform(cam.a, cam.b, cam.c, cam.d, cam.tx, cam.ty);
        ctx.scale(1, -1);
        assembler.draw(ctx, comp);
      },
      visit: function(scene) {
        var ctx = this._device._ctx;
        var canvas = this._device._canvas;
        var color = cc.Camera.main.backgroundColor;
        var rgba = "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a / 255 + ")";
        ctx.fillStyle = rgba;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._device._stats.drawcalls = 0;
        RenderFlow.render(scene);
      }
    };
    module.exports = RenderComponentWalker;
  }), {
    "../../platform/js": 106,
    "../render-flow": 129,
    "./renderers": 117
  } ],
  113: [ (function(require, module, exports) {
    var ForwardRenderer = function() {};
    ForwardRenderer.prototype = {
      constructor: ForwardRenderer,
      _reset: function() {},
      render: function() {}
    };
    module.exports = ForwardRenderer;
  }), {} ],
  114: [ (function(require, module, exports) {
    module.exports = {
      ForwardRenderer: require("./forward-renderer"),
      RenderComponentWalker: require("./canvas-render-walker"),
      _renderers: require("./renderers")
    };
  }), {
    "./canvas-render-walker": 112,
    "./forward-renderer": 113,
    "./renderers": 117
  } ],
  115: [ (function(require, module, exports) {
    var Helper = require("../../../../graphics/helper");
    var Types = require("../../../../graphics/types");
    var js = require("../../../../platform/js");
    var PointFlags = Types.PointFlags;
    var LineJoin = Types.LineJoin;
    var LineCap = Types.LineCap;
    function Impl() {
      this.cmds = [];
      this.style = {
        strokeStyle: "black",
        fillStyle: "white",
        lineCap: "butt",
        lineJoin: "miter",
        miterLimit: 10
      };
    }
    var _proto = Impl.prototype;
    js.mixin(_proto, {
      moveTo: function(x, y) {
        this.cmds.push([ "moveTo", [ x, y ] ]);
      },
      lineTo: function(x, y) {
        this.cmds.push([ "lineTo", [ x, y ] ]);
      },
      bezierCurveTo: function(c1x, c1y, c2x, c2y, x, y) {
        this.cmds.push([ "bezierCurveTo", [ c1x, c1y, c2x, c2y, x, y ] ]);
      },
      quadraticCurveTo: function(cx, cy, x, y) {
        this.cmds.push([ "quadraticCurveTo", [ cx, cy, x, y ] ]);
      },
      arc: function(cx, cy, r, startAngle, endAngle, counterclockwise) {
        Helper.arc(this, cx, cy, r, startAngle, endAngle, counterclockwise);
      },
      ellipse: function(cx, cy, rx, ry) {
        Helper.ellipse(this, cx, cy, rx, ry);
      },
      circle: function(cx, cy, r) {
        Helper.ellipse(this, cx, cy, r, r);
      },
      rect: function(x, y, w, h) {
        this.moveTo(x, y);
        this.lineTo(x, y + h);
        this.lineTo(x + w, y + h);
        this.lineTo(x + w, y);
        this.close();
      },
      roundRect: function(x, y, w, h, r) {
        Helper.roundRect(this, x, y, w, h, r);
      },
      clear: function(comp, clean) {
        this.cmds.length = 0;
      },
      close: function() {
        this.cmds.push([ "closePath", [] ]);
      },
      stroke: function() {
        this.cmds.push([ "stroke", [] ]);
      },
      fill: function() {
        this.cmds.push([ "fill", [] ]);
      }
    });
    js.set(_proto, "strokeColor", (function(v) {
      var strokeStyle = "rgba(" + (0 | v.r) + "," + (0 | v.g) + "," + (0 | v.b) + "," + v.a / 255 + ")";
      this.cmds.push([ "strokeStyle", strokeStyle ]);
      this.style.strokeStyle = strokeStyle;
    }));
    js.set(_proto, "fillColor", (function(v) {
      var fillStyle = "rgba(" + (0 | v.r) + "," + (0 | v.g) + "," + (0 | v.b) + "," + v.a / 255 + ")";
      this.cmds.push([ "fillStyle", fillStyle ]);
      this.style.fillStyle = fillStyle;
    }));
    js.set(_proto, "lineWidth", (function(v) {
      this.cmds.push([ "lineWidth", v ]);
      this.style.lineWidth = v;
    }));
    js.set(_proto, "lineCap", (function(v) {
      var lineCap = "butt";
      v === LineCap.BUTT ? lineCap = "butt" : v === LineCap.ROUND ? lineCap = "round" : v === LineCap.SQUARE && (lineCap = "square");
      this.cmds.push([ "lineCap", lineCap ]);
      this.style.lineCap = lineCap;
    }));
    js.set(_proto, "lineJoin", (function(v) {
      var lineJoin = "bevel";
      v === LineJoin.BEVEL ? lineJoin = "bevel" : v === LineJoin.ROUND ? lineJoin = "round" : v === LineJoin.MITER && (lineJoin = "miter");
      this.cmds.push([ "lineJoin", lineJoin ]);
      this.style.lineJoin = lineJoin;
    }));
    js.set(_proto, "miterLimit", (function(v) {
      this.cmds.push([ "miterLimit", v ]);
      this.style.miterLimit = v;
    }));
    module.exports = Impl;
  }), {
    "../../../../graphics/helper": 55,
    "../../../../graphics/types": 57,
    "../../../../platform/js": 106
  } ],
  116: [ (function(require, module, exports) {
    var Impl = require("./impl");
    module.exports = {
      createImpl: function() {
        return new Impl();
      },
      draw: function(ctx, comp) {
        var node = comp.node;
        var matrix = node._worldMatrix;
        var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
        ctx.transform(a, b, c, d, tx, ty);
        ctx.save();
        ctx.globalAlpha = node.opacity / 255;
        var style = comp._impl.style;
        ctx.strokeStyle = style.strokeStyle;
        ctx.fillStyle = style.fillStyle;
        ctx.lineWidth = style.lineWidth;
        ctx.lineJoin = style.lineJoin;
        ctx.miterLimit = style.miterLimit;
        var endPath = true;
        var cmds = comp._impl.cmds;
        for (var i = 0, l = cmds.length; i < l; i++) {
          var cmd = cmds[i];
          var ctxCmd = cmd[0], args = cmd[1];
          if ("moveTo" === ctxCmd && endPath) {
            ctx.beginPath();
            endPath = false;
          } else "fill" !== ctxCmd && "stroke" !== ctxCmd && "fillRect" !== ctxCmd || (endPath = true);
          "function" === typeof ctx[ctxCmd] ? ctx[ctxCmd].apply(ctx, args) : ctx[ctxCmd] = args;
        }
        ctx.restore();
        return 1;
      },
      stroke: function(comp) {
        comp._impl.stroke();
      },
      fill: function(comp) {
        comp._impl.fill();
      }
    };
  }), {
    "./impl": 115
  } ],
  117: [ (function(require, module, exports) {
    var js = require("../../../platform/js");
    var Sprite = require("../../../components/CCSprite");
    var Label = require("../../../components/CCLabel");
    var Mask = require("../../../components/CCMask");
    var Graphics = require("../../../graphics/graphics");
    var spriteRenderer = require("./sprite");
    var labelRenderer = require("./label");
    var graphicsRenderer = require("./graphics");
    var maskRenderer = require("./mask");
    var map = {};
    var postMap = {};
    function addRenderer(Component, handler, postHandler) {
      var name = js.getClassName(Component);
      map[name] = handler;
      postHandler && (postMap[name] = postHandler);
      Component._assembler = handler;
      Component._postAssembler = postHandler;
    }
    addRenderer(Sprite, spriteRenderer);
    addRenderer(Label, labelRenderer);
    Mask && addRenderer(Mask, maskRenderer.beforeHandler, maskRenderer.afterHandler);
    Graphics && addRenderer(Graphics, graphicsRenderer);
    module.exports = {
      map: map,
      postMap: postMap,
      addRenderer: addRenderer
    };
  }), {
    "../../../components/CCLabel": 33,
    "../../../components/CCMask": 35,
    "../../../components/CCSprite": 39,
    "../../../graphics/graphics": 54,
    "../../../platform/js": 106,
    "./graphics": 116,
    "./label": 119,
    "./mask": 121,
    "./sprite": 122
  } ],
  118: [ (function(require, module, exports) {
    var bmfontUtils = require("../../../utils/label/bmfont");
    var js = require("../../../../platform/js");
    var utils = require("../utils");
    module.exports = js.addon({
      createData: function(comp) {
        return comp.requestRenderData();
      },
      appendQuad: function(renderData, texture, rect, rotated, x, y, scale) {
        var dataOffset = renderData.dataLength;
        renderData.dataLength += 2;
        var data = renderData._data;
        var texw = texture.width, texh = texture.height;
        var rectWidth = rect.width, rectHeight = rect.height;
        var l = void 0, b = void 0, r = void 0, t = void 0;
        if (rotated) {
          l = rect.x;
          r = rect.x + rectHeight;
          b = rect.y;
          t = rect.y + rectWidth;
          data[dataOffset].u = l;
          data[dataOffset].v = t;
          data[dataOffset + 1].u = l;
          data[dataOffset + 1].v = b;
        } else {
          l = rect.x;
          r = rect.x + rectWidth;
          b = rect.y;
          t = rect.y + rectHeight;
          data[dataOffset].u = l;
          data[dataOffset].v = b;
          data[dataOffset + 1].u = r;
          data[dataOffset + 1].v = t;
        }
        data[dataOffset].x = x;
        data[dataOffset].y = y - rectHeight * scale;
        data[dataOffset + 1].x = x + rectWidth * scale;
        data[dataOffset + 1].y = y;
      },
      draw: function(ctx, comp) {
        var node = comp.node;
        var matrix = node._worldMatrix;
        var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
        ctx.transform(a, b, c, d, tx, ty);
        ctx.scale(1, -1);
        ctx.globalAlpha = node.opacity / 255;
        var tex = comp._texture, data = comp._renderData._data;
        var image = tex.getHtmlElementObj();
        for (var i = 0, l = data.length; i < l; i += 2) {
          var x = data[i].x;
          var y = data[i].y;
          var w = data[i + 1].x - x;
          var h = data[i + 1].y - y;
          y = -y - h;
          var sx = data[i].u;
          var sy = data[i].v;
          var sw = data[i + 1].u - sx;
          var sh = data[i + 1].v - sy;
          ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
        }
        return 1;
      }
    }, bmfontUtils);
  }), {
    "../../../../platform/js": 106,
    "../../../utils/label/bmfont": 130,
    "../utils": 126
  } ],
  119: [ (function(require, module, exports) {
    var ttf = require("./ttf");
    var bmfont = require("./bmfont");
    module.exports = {
      getAssembler: function(comp) {
        var assembler = ttf;
        comp.font instanceof cc.BitmapFont && (assembler = bmfont);
        return assembler;
      },
      createData: function(comp) {
        return comp._assembler.createData(comp);
      },
      draw: function(ctx, comp) {
        if (!comp._texture) return 0;
        var assembler = comp._assembler;
        if (!assembler) return 0;
        assembler.updateRenderData(comp);
        return assembler.draw(ctx, comp);
      }
    };
  }), {
    "./bmfont": 118,
    "./ttf": 120
  } ],
  120: [ (function(require, module, exports) {
    var ttfUtils = require("../../../utils/label/ttf");
    var js = require("../../../../platform/js");
    var utils = require("../utils");
    module.exports = js.addon({
      createData: function(sprite) {
        var renderData = sprite.requestRenderData();
        renderData.dataLength = 2;
        return renderData;
      },
      _updateVerts: function(comp) {
        var renderData = comp._renderData;
        var node = comp.node, width = node.width, height = node.height, appx = node.anchorX * width, appy = node.anchorY * height;
        var data = renderData._data;
        data[0].x = -appx;
        data[0].y = -appy;
        data[1].x = width - appx;
        data[1].y = height - appy;
      },
      _updateTexture: function(comp) {
        ttfUtils._updateTexture(comp);
        utils.dropColorizedImage(comp._texture, comp.node.color);
      },
      draw: function(ctx, comp) {
        var node = comp.node;
        var matrix = node._worldMatrix;
        var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
        ctx.transform(a, b, c, d, tx, ty);
        ctx.scale(1, -1);
        ctx.globalAlpha = node.opacity / 255;
        var tex = comp._texture, data = comp._renderData._data;
        var image = tex.getHtmlElementObj();
        var x = data[0].x;
        var y = data[0].y;
        var w = data[1].x - x;
        var h = data[1].y - y;
        y = -y - h;
        ctx.drawImage(image, x, y, w, h);
        return 1;
      }
    }, ttfUtils);
  }), {
    "../../../../platform/js": 106,
    "../../../utils/label/ttf": 131,
    "../utils": 126
  } ],
  121: [ (function(require, module, exports) {
    var Mask = require("../../../components/CCMask");
    var graphicsHandler = require("./graphics");
    var beforeHandler = {
      updateRenderData: function(comp) {},
      draw: function(ctx, mask) {
        ctx.save();
        graphicsHandler.draw(ctx, mask._graphics);
        ctx.clip();
      }
    };
    var afterHandler = {
      updateRenderData: function(comp) {},
      draw: function(ctx, mask) {
        ctx.restore();
      }
    };
    module.exports = {
      beforeHandler: beforeHandler,
      afterHandler: afterHandler
    };
  }), {
    "../../../components/CCMask": 35,
    "./graphics": 116
  } ],
  122: [ (function(require, module, exports) {
    var Sprite = require("../../../../components/CCSprite");
    var SpriteType = Sprite.Type;
    var FillType = Sprite.FillType;
    var simple = require("./simple");
    var sliced = require("./sliced");
    var tiled = require("./tiled");
    module.exports = {
      getAssembler: function(sprite) {
        switch (sprite.type) {
         case SpriteType.SIMPLE:
          return simple;

         case SpriteType.SLICED:
          return sliced;

         case SpriteType.TILED:
          return tiled;

         case SpriteType.FILLED:
          return sprite._fillType === FillType.RADIAL, null;
        }
      },
      createData: function(sprite) {
        return sprite._assembler.createData(sprite);
      }
    };
  }), {
    "../../../../components/CCSprite": 39,
    "./simple": 123,
    "./sliced": 124,
    "./tiled": 125
  } ],
  123: [ (function(require, module, exports) {
    var utils = require("../utils");
    var renderer = {
      createData: function(sprite) {
        var renderData = sprite.requestRenderData();
        renderData.dataLength = 2;
        return renderData;
      },
      updateRenderData: function(sprite) {
        sprite._material || sprite._activateMaterial();
        var renderData = sprite._renderData;
        renderData.uvDirty && this.updateUVs(sprite);
        renderData.vertDirty && this.updateVerts(sprite);
      },
      updateUVs: function(sprite) {
        var frame = sprite.spriteFrame;
        var renderData = sprite._renderData;
        var data = renderData._data;
        var rect = frame._rect;
        var texture = frame._texture;
        if (frame._rotated) {
          var l = rect.x;
          var r = rect.height;
          var b = rect.y;
          var t = rect.width;
          data[0].u = l;
          data[0].v = t;
          data[1].u = r;
          data[1].v = b;
        } else {
          var _l = rect.x;
          var _r = rect.width;
          var _b = rect.y;
          var _t = rect.height;
          data[0].u = _l;
          data[0].v = _b;
          data[1].u = _r;
          data[1].v = _t;
        }
        renderData.uvDirty = false;
      },
      updateVerts: function(sprite) {
        var renderData = sprite._renderData, node = sprite.node, data = renderData._data, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l = void 0, b = void 0, r = void 0, t = void 0;
        if (sprite.trim) {
          l = -appx;
          b = -appy;
          r = cw;
          t = ch;
        } else {
          var frame = sprite.spriteFrame, ow = frame._originalSize.width, oh = frame._originalSize.height, rw = frame._rect.width, rh = frame._rect.height, offset = frame._offset, scaleX = cw / ow, scaleY = ch / oh;
          var trimLeft = offset.x + (ow - rw) / 2;
          var trimRight = offset.x - (ow - rw) / 2;
          var trimBottom = offset.y + (oh - rh) / 2;
          var trimTop = offset.y - (oh - rh) / 2;
          l = trimLeft * scaleX - appx;
          b = trimBottom * scaleY - appy;
          r = cw;
          t = ch;
        }
        data[0].x = l;
        data[0].y = b;
        data[1].x = r;
        data[1].y = t;
        renderData.vertDirty = false;
      },
      draw: function(ctx, comp) {
        var node = comp.node;
        var matrix = node._worldMatrix;
        var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
        ctx.transform(a, b, c, d, tx, ty);
        ctx.scale(1, -1);
        ctx.globalAlpha = node.opacity / 255;
        var tex = comp._spriteFrame._texture, data = comp._renderData._data;
        var image = utils.getColorizedImage(tex, node._color);
        var x = data[0].x;
        var y = data[0].y;
        var w = data[1].x;
        var h = data[1].y;
        y = -y - h;
        var sx = data[0].u;
        var sy = data[0].v;
        var sw = data[1].u;
        var sh = data[1].v;
        ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
        return 1;
      }
    };
    module.exports = renderer;
  }), {
    "../utils": 126
  } ],
  124: [ (function(require, module, exports) {
    var utils = require("../utils");
    var simple = require("./simple");
    var renderer = {
      createData: function(sprite) {
        var renderData = sprite.requestRenderData();
        renderData.dataLength = 4;
        return renderData;
      },
      updateRenderData: simple.updateRenderData,
      updateUVs: function(sprite) {
        var frame = sprite.spriteFrame;
        var renderData = sprite._renderData;
        var rect = frame._rect;
        var texture = frame._texture;
        var leftWidth = frame.insetLeft;
        var rightWidth = frame.insetRight;
        var centerWidth = rect.width - leftWidth - rightWidth;
        var topHeight = frame.insetTop;
        var bottomHeight = frame.insetBottom;
        var centerHeight = rect.height - topHeight - bottomHeight;
        var data = renderData._data;
        if (frame._rotated) {
          data[0].u = rect.x;
          data[1].u = bottomHeight + rect.x;
          data[2].u = bottomHeight + centerHeight + rect.x;
          data[3].u = rect.x + rect.height;
          data[3].v = rect.y;
          data[2].v = leftWidth + rect.y;
          data[1].v = leftWidth + centerWidth + rect.y;
          data[0].v = rect.y + rect.width;
        } else {
          data[0].u = rect.x;
          data[1].u = leftWidth + rect.x;
          data[2].u = leftWidth + centerWidth + rect.x;
          data[3].u = rect.x + rect.width;
          data[3].v = rect.y;
          data[2].v = topHeight + rect.y;
          data[1].v = topHeight + centerHeight + rect.y;
          data[0].v = rect.y + rect.height;
        }
        renderData.uvDirty = false;
      },
      updateVerts: function(sprite) {
        var renderData = sprite._renderData, data = renderData._data, node = sprite.node, width = node.width, height = node.height, appx = node.anchorX * width, appy = node.anchorY * height;
        var frame = sprite.spriteFrame;
        var rect = frame._rect;
        var leftWidth = frame.insetLeft;
        var rightWidth = frame.insetRight;
        var topHeight = frame.insetTop;
        var bottomHeight = frame.insetBottom;
        var sizableWidth = width - leftWidth - rightWidth;
        var sizableHeight = height - topHeight - bottomHeight;
        var xScale = width / (leftWidth + rightWidth);
        var yScale = height / (topHeight + bottomHeight);
        xScale = isNaN(xScale) || xScale > 1 ? 1 : xScale;
        yScale = isNaN(yScale) || yScale > 1 ? 1 : yScale;
        sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
        sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
        data[0].x = -appx;
        data[0].y = -appy;
        data[1].x = leftWidth * xScale - appx;
        data[1].y = bottomHeight * yScale - appy;
        data[2].x = data[1].x + sizableWidth;
        data[2].y = data[1].y + sizableHeight;
        data[3].x = width - appx;
        data[3].y = height - appy;
        renderData.vertDirty = false;
      },
      draw: function(ctx, comp) {
        var node = comp.node;
        var matrix = node._worldMatrix;
        var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
        ctx.transform(a, b, c, d, tx, ty);
        ctx.scale(1, -1);
        ctx.globalAlpha = node.opacity / 255;
        var tex = comp._spriteFrame._texture, data = comp._renderData._data;
        var image = utils.getColorizedImage(tex, node._color);
        var drawCall = 0;
        var off = void 0, ld = void 0, rd = void 0, td = void 0, bd = void 0, x = void 0, y = void 0, w = void 0, h = void 0, sx = void 0, sy = void 0, sw = void 0, sh = void 0;
        for (var r = 0; r < 3; ++r) {
          bd = data[r];
          td = data[r + 1];
          for (var _c = 0; _c < 3; ++_c) {
            ld = data[_c];
            rd = data[_c + 1];
            x = ld.x;
            y = bd.y;
            w = rd.x - x;
            h = td.y - y;
            y = -y - h;
            sx = ld.u;
            sy = td.v;
            sw = rd.u - sx;
            sh = bd.v - sy;
            if (sw > 0 && sh > 0 && w > 0 && h > 0) {
              ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
              drawCall++;
            }
          }
        }
        return drawCall;
      }
    };
    module.exports = renderer;
  }), {
    "../utils": 126,
    "./simple": 123
  } ],
  125: [ (function(require, module, exports) {
    var utils = require("../utils");
    var simple = require("./simple");
    var renderer = {
      createData: function(sprite) {
        var renderData = sprite.requestRenderData();
        return renderData;
      },
      updateRenderData: function(sprite) {
        sprite._material || sprite._activateMaterial();
      },
      draw: function(ctx, sprite) {
        var node = sprite.node;
        var matrix = node._worldMatrix;
        var a = matrix.m00, b = matrix.m01, c = matrix.m04, d = matrix.m05, tx = matrix.m12, ty = matrix.m13;
        ctx.transform(a, b, c, d, tx, ty);
        ctx.scale(1, -1);
        ctx.globalAlpha = node.opacity / 255;
        var frame = sprite.spriteFrame;
        var rect = frame._rect;
        var tex = frame._texture;
        var sx = rect.x;
        var sy = rect.y;
        var sw = frame._rotated ? rect.height : rect.width;
        var sh = frame._rotated ? rect.width : rect.height;
        var image = utils.getFrameCache(tex, node._color, sx, sy, sw, sh);
        var w = node.width, h = node.height, x = -node.anchorX * w, y = -node.anchorY * h;
        y = -y - h;
        ctx.translate(x, y);
        ctx.fillStyle = ctx.createPattern(image, "repeat");
        ctx.fillRect(0, 0, w, h);
        return 1;
      }
    };
    module.exports = renderer;
  }), {
    "../utils": 126,
    "./simple": 123
  } ],
  126: [ (function(require, module, exports) {
    var WHITE = 16777215;
    var MAX_CANVAS_COUNT = 32;
    function colorizedFrame(canvas, texture, color, sx, sy, sw, sh) {
      if (cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) return canvas;
      var image = texture._image;
      var ctx = canvas.getContext("2d");
      canvas.width = sw;
      canvas.height = sh;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      ctx.fillRect(0, 0, sw, sh);
      ctx.globalCompositeOperation = "multiply";
      ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
      ctx.globalCompositeOperation = "destination-atop";
      ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
      return canvas;
    }
    var canvasMgr = {
      canvasMap: {},
      canvasUsed: {},
      canvasPool: [],
      checking: false,
      check: function() {
        var exist = false;
        for (var key in this.canvasUsed) {
          exist = true;
          if (this.canvasUsed[key]) this.canvasUsed[key] = false; else {
            var canvas = this.canvasMap[key];
            canvas.width = 0;
            canvas.height = 0;
            this.canvasPool.length < 32 && this.canvasPool.push(canvas);
            delete this.canvasMap[key];
            delete this.canvasUsed[key];
          }
        }
        if (!exist) {
          cc.director.off(cc.Director.EVENT_AFTER_DRAW, this.check, this);
          this.checking = false;
        }
      },
      startCheck: function() {
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, this.check, this);
        this.checking = true;
      },
      getCanvas: function(key) {
        this.canvasUsed[key] = true;
        return this.canvasMap[key];
      },
      cacheCanvas: function(canvas, key) {
        this.canvasMap[key] = canvas;
        this.canvasUsed[key] = true;
        this.checking || this.startCheck();
      },
      dropImage: function(key) {
        this.canvasMap[key] && delete this.canvasMap[key];
      }
    };
    module.exports = {
      getColorizedImage: function(texture, color) {
        if (!texture) return null;
        if (0 === texture.width || 0 === texture.height) return texture._image;
        var cval = 16777215 & color._val;
        if (cval === WHITE) return texture._image;
        var key = texture.url + cval;
        var cache = canvasMgr.getCanvas(key);
        if (!cache) {
          cache = canvasMgr.canvasPool.pop() || document.createElement("canvas");
          colorizedFrame(cache, texture, color, 0, 0, texture.width, texture.height);
          canvasMgr.cacheCanvas(cache, key);
        }
        return cache;
      },
      getFrameCache: function(texture, color, sx, sy, sw, sh) {
        if (!texture || !texture.url || sx < 0 || sy < 0 || sw <= 0 || sh <= 0) return null;
        var key = texture.url;
        var generate = false;
        var cval = 16777215 & color._val;
        if (cval !== WHITE) {
          key += cval;
          generate = true;
        }
        if (0 !== sx || 0 !== sy && sw !== texture.width && sh !== texture.height) {
          key += "_" + sx + "_" + sy + "_" + sw + "_" + sh;
          generate = true;
        }
        if (!generate) return texture._image;
        var cache = canvasMgr.getCanvas(key);
        if (!cache) {
          cache = canvasMgr.canvasPool.pop() || document.createElement("canvas");
          colorizedFrame(cache, texture, color, sx, sy, sw, sh);
          canvasMgr.cacheCanvas(cache, key);
        }
        return cache;
      },
      dropColorizedImage: function(texture, color) {
        var key = texture.url + (16777215 & color._val);
        canvasMgr.dropImage(key);
      }
    };
  }), {} ],
  127: [ (function(require, module, exports) {
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var math = renderEngine.math;
    var _pos = math.vec3.create();
    function _initBuiltins(device) {
      var defaultTexture = new renderEngine.Texture2D(device, {
        images: [],
        width: 128,
        height: 128,
        wrapS: renderEngine.gfx.WRAP_REPEAT,
        wrapT: renderEngine.gfx.WRAP_REPEAT,
        format: renderEngine.gfx.TEXTURE_FMT_RGB8,
        mipmap: false
      });
      return {
        defaultTexture: defaultTexture,
        programTemplates: renderEngine.shaders.templates,
        programChunks: renderEngine.shaders.chunks
      };
    }
    cc.renderer = module.exports = {
      renderEngine: renderEngine,
      Texture2D: null,
      canvas: null,
      device: null,
      scene: null,
      drawCalls: 0,
      _walker: null,
      _cameraNode: null,
      _camera: null,
      _forward: null,
      initWebGL: function(canvas, opts) {
        require("./webgl/assemblers");
        var RenderComponentWalker = require("./webgl/render-component-walker");
        this.Texture2D = renderEngine.Texture2D;
        this.canvas = canvas;
        false;
        this.device = new renderEngine.Device(canvas, opts);
        this.scene = new renderEngine.Scene();
        this._walker = new RenderComponentWalker(this.device, this.scene);
        var view;
        false;
        var builtins = _initBuiltins(this.device);
        this._forward = new renderEngine.ForwardRenderer(this.device, builtins);
      },
      initCanvas: function(canvas) {
        var canvasRenderer = require("./canvas");
        false;
        this.Texture2D = renderEngine.Texture2D;
        this.canvas = canvas;
        this.device = new renderEngine.Device(canvas);
        this._camera = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          tx: 0,
          ty: 0
        };
        this._walker = new canvasRenderer.RenderComponentWalker(this.device, this._camera);
        this._forward = new canvasRenderer.ForwardRenderer();
      },
      updateCameraViewport: function() {
        if (true, cc.director) {
          var ecScene = cc.director.getScene();
          ecScene.setScale(1, 1, 1);
        }
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
          var vp = cc.view.getViewportRect();
          this.device.setViewport(vp.x, vp.y, vp.width, vp.height);
          this._camera.a = cc.view.getScaleX();
          this._camera.d = cc.view.getScaleY();
          this._camera.tx = vp.x;
          this._camera.ty = vp.y + vp.height;
        } else {
          var canvas;
          var scaleX;
          var scaleY;
          var node;
          false;
        }
      },
      render: function(ecScene) {
        this.device._stats.drawcalls = 0;
        if (ecScene) {
          this._walker.visit(ecScene);
          this._forward.render(this.scene);
          this.drawCalls = this.device._stats.drawcalls;
        }
      },
      clear: function() {
        this._walker.reset();
        this._forward._reset();
      }
    };
  }), {
    "./canvas": 114,
    "./webgl/assemblers": void 0,
    "./webgl/render-component-walker": void 0,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  128: [ (function(require, module, exports) {
    "use strict";
    var DEFAULT_MIN_MERGE = 32;
    var DEFAULT_MIN_GALLOPING = 7;
    var DEFAULT_TMP_STORAGE_LENGTH = 256;
    var POWERS_OF_TEN = [ 1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9 ];
    function log10(x) {
      if (x < 1e5) {
        if (x < 100) return x < 10 ? 0 : 1;
        if (x < 1e4) return x < 1e3 ? 2 : 3;
        return 4;
      }
      if (x < 1e7) return x < 1e6 ? 5 : 6;
      if (x < 1e9) return x < 1e8 ? 7 : 8;
      return 9;
    }
    function alphabeticalCompare(a, b) {
      if (a === b) return 0;
      if (~~a === a && ~~b === b) {
        if (0 === a || 0 === b) return a < b ? -1 : 1;
        if (a < 0 || b < 0) {
          if (b >= 0) return -1;
          if (a >= 0) return 1;
          a = -a;
          b = -b;
        }
        var al = log10(a);
        var bl = log10(b);
        var t = 0;
        if (al < bl) {
          a *= POWERS_OF_TEN[bl - al - 1];
          b /= 10;
          t = -1;
        } else if (al > bl) {
          b *= POWERS_OF_TEN[al - bl - 1];
          a /= 10;
          t = 1;
        }
        if (a === b) return t;
        return a < b ? -1 : 1;
      }
      var aStr = String(a);
      var bStr = String(b);
      if (aStr === bStr) return 0;
      return aStr < bStr ? -1 : 1;
    }
    function minRunLength(n) {
      var r = 0;
      while (n >= DEFAULT_MIN_MERGE) {
        r |= 1 & n;
        n >>= 1;
      }
      return n + r;
    }
    function makeAscendingRun(array, lo, hi, compare) {
      var runHi = lo + 1;
      if (runHi === hi) return 1;
      if (compare(array[runHi++], array[lo]) < 0) {
        while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) runHi++;
        reverseRun(array, lo, runHi);
      } else while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) runHi++;
      return runHi - lo;
    }
    function reverseRun(array, lo, hi) {
      hi--;
      while (lo < hi) {
        var t = array[lo];
        array[lo++] = array[hi];
        array[hi--] = t;
      }
    }
    function binaryInsertionSort(array, lo, hi, start, compare) {
      start === lo && start++;
      for (;start < hi; start++) {
        var pivot = array[start];
        var left = lo;
        var right = start;
        while (left < right) {
          var mid = left + right >>> 1;
          compare(pivot, array[mid]) < 0 ? right = mid : left = mid + 1;
        }
        var n = start - left;
        switch (n) {
         case 3:
          array[left + 3] = array[left + 2];

         case 2:
          array[left + 2] = array[left + 1];

         case 1:
          array[left + 1] = array[left];
          break;

         default:
          while (n > 0) {
            array[left + n] = array[left + n - 1];
            n--;
          }
        }
        array[left] = pivot;
      }
    }
    function gallopLeft(value, array, start, length, hint, compare) {
      var lastOffset = 0;
      var maxOffset = 0;
      var offset = 1;
      if (compare(value, array[start + hint]) > 0) {
        maxOffset = length - hint;
        while (offset < maxOffset && compare(value, array[start + hint + offset]) > 0) {
          lastOffset = offset;
          offset = 1 + (offset << 1);
          offset <= 0 && (offset = maxOffset);
        }
        offset > maxOffset && (offset = maxOffset);
        lastOffset += hint;
        offset += hint;
      } else {
        maxOffset = hint + 1;
        while (offset < maxOffset && compare(value, array[start + hint - offset]) <= 0) {
          lastOffset = offset;
          offset = 1 + (offset << 1);
          offset <= 0 && (offset = maxOffset);
        }
        offset > maxOffset && (offset = maxOffset);
        var tmp = lastOffset;
        lastOffset = hint - offset;
        offset = hint - tmp;
      }
      lastOffset++;
      while (lastOffset < offset) {
        var m = lastOffset + (offset - lastOffset >>> 1);
        compare(value, array[start + m]) > 0 ? lastOffset = m + 1 : offset = m;
      }
      return offset;
    }
    function gallopRight(value, array, start, length, hint, compare) {
      var lastOffset = 0;
      var maxOffset = 0;
      var offset = 1;
      if (compare(value, array[start + hint]) < 0) {
        maxOffset = hint + 1;
        while (offset < maxOffset && compare(value, array[start + hint - offset]) < 0) {
          lastOffset = offset;
          offset = 1 + (offset << 1);
          offset <= 0 && (offset = maxOffset);
        }
        offset > maxOffset && (offset = maxOffset);
        var tmp = lastOffset;
        lastOffset = hint - offset;
        offset = hint - tmp;
      } else {
        maxOffset = length - hint;
        while (offset < maxOffset && compare(value, array[start + hint + offset]) >= 0) {
          lastOffset = offset;
          offset = 1 + (offset << 1);
          offset <= 0 && (offset = maxOffset);
        }
        offset > maxOffset && (offset = maxOffset);
        lastOffset += hint;
        offset += hint;
      }
      lastOffset++;
      while (lastOffset < offset) {
        var m = lastOffset + (offset - lastOffset >>> 1);
        compare(value, array[start + m]) < 0 ? offset = m : lastOffset = m + 1;
      }
      return offset;
    }
    var TimSort = function TimSort(array, compare) {
      this.array = array;
      this.compare = compare;
      this.minGallop = DEFAULT_MIN_GALLOPING;
      this.length = array.length;
      this.tmpStorageLength = DEFAULT_TMP_STORAGE_LENGTH;
      this.length < 2 * DEFAULT_TMP_STORAGE_LENGTH && (this.tmpStorageLength = this.length >>> 1);
      this.tmp = new Array(this.tmpStorageLength);
      this.stackLength = this.length < 120 ? 5 : this.length < 1542 ? 10 : this.length < 119151 ? 19 : 40;
      this.runStart = new Array(this.stackLength);
      this.runLength = new Array(this.stackLength);
      this.stackSize = 0;
    };
    TimSort.prototype.pushRun = function pushRun(runStart, runLength) {
      this.runStart[this.stackSize] = runStart;
      this.runLength[this.stackSize] = runLength;
      this.stackSize += 1;
    };
    TimSort.prototype.mergeRuns = function mergeRuns() {
      var this$1 = this;
      while (this.stackSize > 1) {
        var n = this$1.stackSize - 2;
        if (n >= 1 && this$1.runLength[n - 1] <= this$1.runLength[n] + this$1.runLength[n + 1] || n >= 2 && this$1.runLength[n - 2] <= this$1.runLength[n] + this$1.runLength[n - 1]) this$1.runLength[n - 1] < this$1.runLength[n + 1] && n--; else if (this$1.runLength[n] > this$1.runLength[n + 1]) break;
        this$1.mergeAt(n);
      }
    };
    TimSort.prototype.forceMergeRuns = function forceMergeRuns() {
      var this$1 = this;
      while (this.stackSize > 1) {
        var n = this$1.stackSize - 2;
        n > 0 && this$1.runLength[n - 1] < this$1.runLength[n + 1] && n--;
        this$1.mergeAt(n);
      }
    };
    TimSort.prototype.mergeAt = function mergeAt(i) {
      var compare = this.compare;
      var array = this.array;
      var start1 = this.runStart[i];
      var length1 = this.runLength[i];
      var start2 = this.runStart[i + 1];
      var length2 = this.runLength[i + 1];
      this.runLength[i] = length1 + length2;
      if (i === this.stackSize - 3) {
        this.runStart[i + 1] = this.runStart[i + 2];
        this.runLength[i + 1] = this.runLength[i + 2];
      }
      this.stackSize--;
      var k = gallopRight(array[start2], array, start1, length1, 0, compare);
      start1 += k;
      length1 -= k;
      if (0 === length1) return;
      length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);
      if (0 === length2) return;
      length1 <= length2 ? this.mergeLow(start1, length1, start2, length2) : this.mergeHigh(start1, length1, start2, length2);
    };
    TimSort.prototype.mergeLow = function mergeLow(start1, length1, start2, length2) {
      var compare = this.compare;
      var array = this.array;
      var tmp = this.tmp;
      var i = 0;
      for (i = 0; i < length1; i++) tmp[i] = array[start1 + i];
      var cursor1 = 0;
      var cursor2 = start2;
      var dest = start1;
      array[dest++] = array[cursor2++];
      if (0 === --length2) {
        for (i = 0; i < length1; i++) array[dest + i] = tmp[cursor1 + i];
        return;
      }
      if (1 === length1) {
        for (i = 0; i < length2; i++) array[dest + i] = array[cursor2 + i];
        array[dest + length2] = tmp[cursor1];
        return;
      }
      var minGallop = this.minGallop;
      while (true) {
        var count1 = 0;
        var count2 = 0;
        var exit = false;
        do {
          if (compare(array[cursor2], tmp[cursor1]) < 0) {
            array[dest++] = array[cursor2++];
            count2++;
            count1 = 0;
            if (0 === --length2) {
              exit = true;
              break;
            }
          } else {
            array[dest++] = tmp[cursor1++];
            count1++;
            count2 = 0;
            if (1 === --length1) {
              exit = true;
              break;
            }
          }
        } while ((count1 | count2) < minGallop);
        if (exit) break;
        do {
          count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);
          if (0 !== count1) {
            for (i = 0; i < count1; i++) array[dest + i] = tmp[cursor1 + i];
            dest += count1;
            cursor1 += count1;
            length1 -= count1;
            if (length1 <= 1) {
              exit = true;
              break;
            }
          }
          array[dest++] = array[cursor2++];
          if (0 === --length2) {
            exit = true;
            break;
          }
          count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);
          if (0 !== count2) {
            for (i = 0; i < count2; i++) array[dest + i] = array[cursor2 + i];
            dest += count2;
            cursor2 += count2;
            length2 -= count2;
            if (0 === length2) {
              exit = true;
              break;
            }
          }
          array[dest++] = tmp[cursor1++];
          if (1 === --length1) {
            exit = true;
            break;
          }
          minGallop--;
        } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
        if (exit) break;
        minGallop < 0 && (minGallop = 0);
        minGallop += 2;
      }
      this.minGallop = minGallop;
      minGallop < 1 && (this.minGallop = 1);
      if (1 === length1) {
        for (i = 0; i < length2; i++) array[dest + i] = array[cursor2 + i];
        array[dest + length2] = tmp[cursor1];
      } else {
        if (0 === length1) throw new Error("mergeLow preconditions were not respected");
        for (i = 0; i < length1; i++) array[dest + i] = tmp[cursor1 + i];
      }
    };
    TimSort.prototype.mergeHigh = function mergeHigh(start1, length1, start2, length2) {
      var compare = this.compare;
      var array = this.array;
      var tmp = this.tmp;
      var i = 0;
      for (i = 0; i < length2; i++) tmp[i] = array[start2 + i];
      var cursor1 = start1 + length1 - 1;
      var cursor2 = length2 - 1;
      var dest = start2 + length2 - 1;
      var customCursor = 0;
      var customDest = 0;
      array[dest--] = array[cursor1--];
      if (0 === --length1) {
        customCursor = dest - (length2 - 1);
        for (i = 0; i < length2; i++) array[customCursor + i] = tmp[i];
        return;
      }
      if (1 === length2) {
        dest -= length1;
        cursor1 -= length1;
        customDest = dest + 1;
        customCursor = cursor1 + 1;
        for (i = length1 - 1; i >= 0; i--) array[customDest + i] = array[customCursor + i];
        array[dest] = tmp[cursor2];
        return;
      }
      var minGallop = this.minGallop;
      while (true) {
        var count1 = 0;
        var count2 = 0;
        var exit = false;
        do {
          if (compare(tmp[cursor2], array[cursor1]) < 0) {
            array[dest--] = array[cursor1--];
            count1++;
            count2 = 0;
            if (0 === --length1) {
              exit = true;
              break;
            }
          } else {
            array[dest--] = tmp[cursor2--];
            count2++;
            count1 = 0;
            if (1 === --length2) {
              exit = true;
              break;
            }
          }
        } while ((count1 | count2) < minGallop);
        if (exit) break;
        do {
          count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);
          if (0 !== count1) {
            dest -= count1;
            cursor1 -= count1;
            length1 -= count1;
            customDest = dest + 1;
            customCursor = cursor1 + 1;
            for (i = count1 - 1; i >= 0; i--) array[customDest + i] = array[customCursor + i];
            if (0 === length1) {
              exit = true;
              break;
            }
          }
          array[dest--] = tmp[cursor2--];
          if (1 === --length2) {
            exit = true;
            break;
          }
          count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);
          if (0 !== count2) {
            dest -= count2;
            cursor2 -= count2;
            length2 -= count2;
            customDest = dest + 1;
            customCursor = cursor2 + 1;
            for (i = 0; i < count2; i++) array[customDest + i] = tmp[customCursor + i];
            if (length2 <= 1) {
              exit = true;
              break;
            }
          }
          array[dest--] = array[cursor1--];
          if (0 === --length1) {
            exit = true;
            break;
          }
          minGallop--;
        } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
        if (exit) break;
        minGallop < 0 && (minGallop = 0);
        minGallop += 2;
      }
      this.minGallop = minGallop;
      minGallop < 1 && (this.minGallop = 1);
      if (1 === length2) {
        dest -= length1;
        cursor1 -= length1;
        customDest = dest + 1;
        customCursor = cursor1 + 1;
        for (i = length1 - 1; i >= 0; i--) array[customDest + i] = array[customCursor + i];
        array[dest] = tmp[cursor2];
      } else {
        if (0 === length2) throw new Error("mergeHigh preconditions were not respected");
        customCursor = dest - (length2 - 1);
        for (i = 0; i < length2; i++) array[customCursor + i] = tmp[i];
      }
    };
    function sort(array, lo, hi, compare) {
      if (!Array.isArray(array)) throw new TypeError("Can only sort arrays");
      void 0 === lo && (lo = 0);
      void 0 === hi && (hi = array.length);
      void 0 === compare && (compare = alphabeticalCompare);
      var remaining = hi - lo;
      if (remaining < 2) return;
      var runLength = 0;
      if (remaining < DEFAULT_MIN_MERGE) {
        runLength = makeAscendingRun(array, lo, hi, compare);
        binaryInsertionSort(array, lo, hi, lo + runLength, compare);
        return;
      }
      var ts = new TimSort(array, compare);
      var minRun = minRunLength(remaining);
      do {
        runLength = makeAscendingRun(array, lo, hi, compare);
        if (runLength < minRun) {
          var force = remaining;
          force > minRun && (force = minRun);
          binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
          runLength = force;
        }
        ts.pushRun(lo, runLength);
        ts.mergeRuns();
        remaining -= runLength;
        lo += runLength;
      } while (0 !== remaining);
      ts.forceMergeRuns();
    }
    var FixedArray = function FixedArray(size) {
      this._count = 0;
      this._data = new Array(size);
    };
    var prototypeAccessors = {
      length: {
        configurable: true
      },
      data: {
        configurable: true
      }
    };
    FixedArray.prototype._resize = function _resize(size) {
      var this$1 = this;
      if (size > this._data.length) for (var i = this._data.length; i < size; ++i) this$1._data[i] = void 0;
    };
    prototypeAccessors.length.get = function() {
      return this._count;
    };
    prototypeAccessors.data.get = function() {
      return this._data;
    };
    FixedArray.prototype.reset = function reset() {
      var this$1 = this;
      for (var i = 0; i < this._count; ++i) this$1._data[i] = void 0;
      this._count = 0;
    };
    FixedArray.prototype.push = function push(val) {
      this._count >= this._data.length && this._resize(2 * this._data.length);
      this._data[this._count] = val;
      ++this._count;
    };
    FixedArray.prototype.pop = function pop() {
      --this._count;
      this._count < 0 && (this._count = 0);
      var ret = this._data[this._count];
      this._data[this._count] = void 0;
      return ret;
    };
    FixedArray.prototype.fastRemove = function fastRemove(idx) {
      if (idx >= this._count) return;
      var last = this._count - 1;
      this._data[idx] = this._data[last];
      this._data[last] = void 0;
      this._count -= 1;
    };
    FixedArray.prototype.indexOf = function indexOf(val) {
      var idx = this._data.indexOf(val);
      if (idx >= this._count) return -1;
      return idx;
    };
    FixedArray.prototype.sort = function sort$1(cmp) {
      return sort(this._data, 0, this._count, cmp);
    };
    Object.defineProperties(FixedArray.prototype, prototypeAccessors);
    var Pool = function Pool(fn, size) {
      var this$1 = this;
      this._fn = fn;
      this._idx = size - 1;
      this._frees = new Array(size);
      for (var i = 0; i < size; ++i) this$1._frees[i] = fn();
    };
    Pool.prototype._expand = function _expand(size) {
      var this$1 = this;
      var old = this._frees;
      this._frees = new Array(size);
      var len = size - old.length;
      for (var i = 0; i < len; ++i) this$1._frees[i] = this$1._fn();
      for (var i$1 = len, j = 0; i$1 < size; ++i$1, ++j) this$1._frees[i$1] = old[j];
      this._idx += len;
    };
    Pool.prototype.alloc = function alloc() {
      this._idx < 0 && this._expand(Math.round(1.2 * this._frees.length) + 1);
      var ret = this._frees[this._idx];
      this._frees[this._idx] = null;
      --this._idx;
      return ret;
    };
    Pool.prototype.free = function free(obj) {
      ++this._idx;
      this._frees[this._idx] = obj;
    };
    var LinkedArray = function LinkedArray(fn, size) {
      this._fn = fn;
      this._count = 0;
      this._head = null;
      this._tail = null;
      this._pool = new Pool(fn, size);
    };
    var prototypeAccessors$1 = {
      head: {
        configurable: true
      },
      tail: {
        configurable: true
      },
      length: {
        configurable: true
      }
    };
    prototypeAccessors$1.head.get = function() {
      return this._head;
    };
    prototypeAccessors$1.tail.get = function() {
      return this._tail;
    };
    prototypeAccessors$1.length.get = function() {
      return this._count;
    };
    LinkedArray.prototype.add = function add() {
      var node = this._pool.alloc();
      if (this._tail) {
        this._tail._next = node;
        node._prev = this._tail;
      } else this._head = node;
      this._tail = node;
      this._count += 1;
      return node;
    };
    LinkedArray.prototype.remove = function remove(node) {
      node._prev ? node._prev._next = node._next : this._head = node._next;
      node._next ? node._next._prev = node._prev : this._tail = node._prev;
      node._next = null;
      node._prev = null;
      this._pool.free(node);
      this._count -= 1;
    };
    LinkedArray.prototype.forEach = function forEach(fn, binder) {
      var this$1 = this;
      var cursor = this._head;
      if (!cursor) return;
      binder && (fn = fn.bind(binder));
      var idx = 0;
      var next = cursor;
      while (cursor) {
        next = cursor._next;
        fn(cursor, idx, this$1);
        cursor = next;
        ++idx;
      }
    };
    Object.defineProperties(LinkedArray.prototype, prototypeAccessors$1);
    var RecyclePool = function RecyclePool(fn, size) {
      var this$1 = this;
      this._fn = fn;
      this._count = 0;
      this._data = new Array(size);
      for (var i = 0; i < size; ++i) this$1._data[i] = fn();
    };
    var prototypeAccessors$2 = {
      length: {
        configurable: true
      },
      data: {
        configurable: true
      }
    };
    prototypeAccessors$2.length.get = function() {
      return this._count;
    };
    prototypeAccessors$2.data.get = function() {
      return this._data;
    };
    RecyclePool.prototype.reset = function reset() {
      this._count = 0;
    };
    RecyclePool.prototype.resize = function resize(size) {
      var this$1 = this;
      if (size > this._data.length) for (var i = this._data.length; i < size; ++i) this$1._data[i] = this$1._fn();
    };
    RecyclePool.prototype.add = function add() {
      this._count >= this._data.length && this.resize(2 * this._data.length);
      return this._data[this._count++];
    };
    RecyclePool.prototype.remove = function remove(idx) {
      if (idx >= this._count) return;
      var last = this._count - 1;
      var tmp = this._data[idx];
      this._data[idx] = this._data[last];
      this._data[last] = tmp;
      this._count -= 1;
    };
    RecyclePool.prototype.sort = function sort$1(cmp) {
      return sort(this._data, 0, this._count, cmp);
    };
    Object.defineProperties(RecyclePool.prototype, prototypeAccessors$2);
    var _bufferPools = Array(8);
    for (var i = 0; i < 8; ++i) _bufferPools[i] = [];
    var BaseRenderData = function BaseRenderData() {
      this.material = null;
      this.vertexCount = 0;
      this.indiceCount = 0;
    };
    var _pool;
    var _dataPool = new Pool(function() {
      return {
        x: 0,
        y: 0,
        z: 0,
        u: 0,
        v: 0,
        color: 0
      };
    }, 128);
    var RenderData = (function(BaseRenderData$$1) {
      function RenderData() {
        BaseRenderData$$1.call(this);
        this._data = [];
        this._indices = [];
        this._pivotX = 0;
        this._pivotY = 0;
        this._width = 0;
        this._height = 0;
        this.uvDirty = true;
        this.vertDirty = true;
      }
      BaseRenderData$$1 && (RenderData.__proto__ = BaseRenderData$$1);
      RenderData.prototype = Object.create(BaseRenderData$$1 && BaseRenderData$$1.prototype);
      RenderData.prototype.constructor = RenderData;
      var prototypeAccessors = {
        type: {
          configurable: true
        },
        dataLength: {
          configurable: true
        }
      };
      prototypeAccessors.type.get = function() {
        return RenderData.type;
      };
      prototypeAccessors.dataLength.get = function() {
        return this._data.length;
      };
      prototypeAccessors.dataLength.set = function(length) {
        var data = this._data;
        if (data.length !== length) {
          for (var i = length; i < data.length; i++) _dataPool.free(data[i]);
          for (var i$1 = data.length; i$1 < length; i$1++) data[i$1] = _dataPool.alloc();
          data.length = length;
        }
      };
      RenderData.prototype.updateSizeNPivot = function updateSizeNPivot(width, height, pivotX, pivotY) {
        if (width !== this._width || height !== this._height || pivotX !== this._pivotX || pivotY !== this._pivotY) {
          this._width = width;
          this._height = height;
          this._pivotX = pivotX;
          this._pivotY = pivotY;
          this.vertDirty = true;
        }
      };
      RenderData.alloc = function alloc() {
        return _pool.alloc();
      };
      RenderData.free = function free(data) {
        if (data instanceof RenderData) {
          for (var i = data.length - 1; i > 0; i--) _dataPool.free(data._data[i]);
          data._data.length = 0;
          data._indices.length = 0;
          data.material = null;
          data.uvDirty = true;
          data.vertDirty = true;
          data.vertexCount = 0;
          data.indiceCount = 0;
          _pool.free(data);
        }
      };
      Object.defineProperties(RenderData.prototype, prototypeAccessors);
      return RenderData;
    })(BaseRenderData);
    RenderData.type = "RenderData";
    _pool = new Pool(function() {
      return new RenderData();
    }, 32);
    var _d2r = Math.PI / 180;
    var _r2d = 180 / Math.PI;
    var EPSILON = 1e-6;
    function equals(a, b) {
      return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
    }
    function approx(a, b, maxDiff) {
      maxDiff = maxDiff || EPSILON;
      return Math.abs(a - b) <= maxDiff;
    }
    function clamp(val, min, max) {
      return val < min ? min : val > max ? max : val;
    }
    function clamp01(val) {
      return val < 0 ? 0 : val > 1 ? 1 : val;
    }
    function lerp(from, to, ratio) {
      return from + (to - from) * ratio;
    }
    function toRadian(a) {
      return a * _d2r;
    }
    function toDegree(a) {
      return a * _r2d;
    }
    var random = Math.random;
    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    function randomRangeInt(min, max) {
      return Math.floor(randomRange(min, max));
    }
    function nextPow2(val) {
      --val;
      val |= val >> 1;
      val |= val >> 2;
      val |= val >> 4;
      val |= val >> 8;
      val |= val >> 16;
      ++val;
      return val;
    }
    var INT_BITS = 32;
    var INT_MAX = 2147483647;
    var INT_MIN = -1 << INT_BITS - 1;
    function sign(v) {
      return (v > 0) - (v < 0);
    }
    function abs(v) {
      var mask = v >> INT_BITS - 1;
      return (v ^ mask) - mask;
    }
    function min(x, y) {
      return y ^ (x ^ y) & -(x < y);
    }
    function max(x, y) {
      return x ^ (x ^ y) & -(x < y);
    }
    function isPow2(v) {
      return !(v & v - 1) && !!v;
    }
    function log2(v) {
      var r, shift;
      r = (v > 65535) << 4;
      v >>>= r;
      shift = (v > 255) << 3;
      v >>>= shift;
      r |= shift;
      shift = (v > 15) << 2;
      v >>>= shift;
      r |= shift;
      shift = (v > 3) << 1;
      v >>>= shift;
      r |= shift;
      return r | v >> 1;
    }
    function log10$1(v) {
      return v >= 1e9 ? 9 : v >= 1e8 ? 8 : v >= 1e7 ? 7 : v >= 1e6 ? 6 : v >= 1e5 ? 5 : v >= 1e4 ? 4 : v >= 1e3 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
    }
    function popCount(v) {
      v -= v >>> 1 & 1431655765;
      v = (858993459 & v) + (v >>> 2 & 858993459);
      return 16843009 * (v + (v >>> 4) & 252645135) >>> 24;
    }
    function countTrailingZeros(v) {
      var c = 32;
      v &= -v;
      v && c--;
      65535 & v && (c -= 16);
      16711935 & v && (c -= 8);
      252645135 & v && (c -= 4);
      858993459 & v && (c -= 2);
      1431655765 & v && (c -= 1);
      return c;
    }
    function nextPow2$1(v) {
      v += 0 === v;
      --v;
      v |= v >>> 1;
      v |= v >>> 2;
      v |= v >>> 4;
      v |= v >>> 8;
      v |= v >>> 16;
      return v + 1;
    }
    function prevPow2(v) {
      v |= v >>> 1;
      v |= v >>> 2;
      v |= v >>> 4;
      v |= v >>> 8;
      v |= v >>> 16;
      return v - (v >>> 1);
    }
    function parity(v) {
      v ^= v >>> 16;
      v ^= v >>> 8;
      v ^= v >>> 4;
      v &= 15;
      return 27030 >>> v & 1;
    }
    var REVERSE_TABLE = new Array(256);
    (function(tab) {
      for (var i = 0; i < 256; ++i) {
        var v = i, r = i, s = 7;
        for (v >>>= 1; v; v >>>= 1) {
          r <<= 1;
          r |= 1 & v;
          --s;
        }
        tab[i] = r << s & 255;
      }
    })(REVERSE_TABLE);
    function reverse(v) {
      return REVERSE_TABLE[255 & v] << 24 | REVERSE_TABLE[v >>> 8 & 255] << 16 | REVERSE_TABLE[v >>> 16 & 255] << 8 | REVERSE_TABLE[v >>> 24 & 255];
    }
    function interleave2(x, y) {
      x &= 65535;
      x = 16711935 & (x | x << 8);
      x = 252645135 & (x | x << 4);
      x = 858993459 & (x | x << 2);
      x = 1431655765 & (x | x << 1);
      y &= 65535;
      y = 16711935 & (y | y << 8);
      y = 252645135 & (y | y << 4);
      y = 858993459 & (y | y << 2);
      y = 1431655765 & (y | y << 1);
      return x | y << 1;
    }
    function deinterleave2(v, n) {
      v = v >>> n & 1431655765;
      v = 858993459 & (v | v >>> 1);
      v = 252645135 & (v | v >>> 2);
      v = 16711935 & (v | v >>> 4);
      v = 65535 & (v | v >>> 16);
      return v << 16 >> 16;
    }
    function interleave3(x, y, z) {
      x &= 1023;
      x = 4278190335 & (x | x << 16);
      x = 251719695 & (x | x << 8);
      x = 3272356035 & (x | x << 4);
      x = 1227133513 & (x | x << 2);
      y &= 1023;
      y = 4278190335 & (y | y << 16);
      y = 251719695 & (y | y << 8);
      y = 3272356035 & (y | y << 4);
      y = 1227133513 & (y | y << 2);
      x |= y << 1;
      z &= 1023;
      z = 4278190335 & (z | z << 16);
      z = 251719695 & (z | z << 8);
      z = 3272356035 & (z | z << 4);
      z = 1227133513 & (z | z << 2);
      return x | z << 2;
    }
    function deinterleave3(v, n) {
      v = v >>> n & 1227133513;
      v = 3272356035 & (v | v >>> 2);
      v = 251719695 & (v | v >>> 4);
      v = 4278190335 & (v | v >>> 8);
      v = 1023 & (v | v >>> 16);
      return v << 22 >> 22;
    }
    function nextCombination(v) {
      var t = v | v - 1;
      return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
    }
    var bits_ = Object.freeze({
      INT_BITS: INT_BITS,
      INT_MAX: INT_MAX,
      INT_MIN: INT_MIN,
      sign: sign,
      abs: abs,
      min: min,
      max: max,
      isPow2: isPow2,
      log2: log2,
      log10: log10$1,
      popCount: popCount,
      countTrailingZeros: countTrailingZeros,
      nextPow2: nextPow2$1,
      prevPow2: prevPow2,
      parity: parity,
      reverse: reverse,
      interleave2: interleave2,
      deinterleave2: deinterleave2,
      interleave3: interleave3,
      deinterleave3: deinterleave3,
      nextCombination: nextCombination
    });
    var _tmp = new Array(2);
    var _vec2 = function _vec2(x, y) {
      this.x = x;
      this.y = y;
    };
    _vec2.prototype.toJSON = function toJSON() {
      _tmp[0] = this.x;
      _tmp[1] = this.y;
      return _tmp;
    };
    var vec2 = {};
    vec2.create = function() {
      return new _vec2(0, 0);
    };
    vec2.new = function(x, y) {
      return new _vec2(x, y);
    };
    vec2.clone = function(a) {
      return new _vec2(a.x, a.y);
    };
    vec2.copy = function(out, a) {
      out.x = a.x;
      out.y = a.y;
      return out;
    };
    vec2.set = function(out, x, y) {
      out.x = x;
      out.y = y;
      return out;
    };
    vec2.add = function(out, a, b) {
      out.x = a.x + b.x;
      out.y = a.y + b.y;
      return out;
    };
    vec2.subtract = function(out, a, b) {
      out.x = a.x - b.x;
      out.y = a.y - b.y;
      return out;
    };
    vec2.sub = vec2.subtract;
    vec2.multiply = function(out, a, b) {
      out.x = a.x * b.x;
      out.y = a.y * b.y;
      return out;
    };
    vec2.mul = vec2.multiply;
    vec2.divide = function(out, a, b) {
      out.x = a.x / b.x;
      out.y = a.y / b.y;
      return out;
    };
    vec2.div = vec2.divide;
    vec2.ceil = function(out, a) {
      out.x = Math.ceil(a.x);
      out.y = Math.ceil(a.y);
      return out;
    };
    vec2.floor = function(out, a) {
      out.x = Math.floor(a.x);
      out.y = Math.floor(a.y);
      return out;
    };
    vec2.min = function(out, a, b) {
      out.x = Math.min(a.x, b.x);
      out.y = Math.min(a.y, b.y);
      return out;
    };
    vec2.max = function(out, a, b) {
      out.x = Math.max(a.x, b.x);
      out.y = Math.max(a.y, b.y);
      return out;
    };
    vec2.round = function(out, a) {
      out.x = Math.round(a.x);
      out.y = Math.round(a.y);
      return out;
    };
    vec2.scale = function(out, a, b) {
      out.x = a.x * b;
      out.y = a.y * b;
      return out;
    };
    vec2.scaleAndAdd = function(out, a, b, scale) {
      out.x = a.x + b.x * scale;
      out.y = a.y + b.y * scale;
      return out;
    };
    vec2.distance = function(a, b) {
      var x = b.x - a.x, y = b.y - a.y;
      return Math.sqrt(x * x + y * y);
    };
    vec2.dist = vec2.distance;
    vec2.squaredDistance = function(a, b) {
      var x = b.x - a.x, y = b.y - a.y;
      return x * x + y * y;
    };
    vec2.sqrDist = vec2.squaredDistance;
    vec2.length = function(a) {
      var x = a.x, y = a.y;
      return Math.sqrt(x * x + y * y);
    };
    vec2.len = vec2.length;
    vec2.squaredLength = function(a) {
      var x = a.x, y = a.y;
      return x * x + y * y;
    };
    vec2.sqrLen = vec2.squaredLength;
    vec2.negate = function(out, a) {
      out.x = -a.x;
      out.y = -a.y;
      return out;
    };
    vec2.inverse = function(out, a) {
      out.x = 1 / a.x;
      out.y = 1 / a.y;
      return out;
    };
    vec2.inverseSafe = function(out, a) {
      var x = a.x, y = a.y;
      Math.abs(x) < EPSILON ? out.x = 0 : out.x = 1 / x;
      Math.abs(y) < EPSILON ? out.y = 0 : out.y = 1 / a.y;
      return out;
    };
    vec2.normalize = function(out, a) {
      var x = a.x, y = a.y;
      var len = x * x + y * y;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out.x = a.x * len;
        out.y = a.y * len;
      }
      return out;
    };
    vec2.dot = function(a, b) {
      return a.x * b.x + a.y * b.y;
    };
    vec2.cross = function(out, a, b) {
      var z = a.x * b.y - a.y * b.x;
      out.x = out.y = 0;
      out.z = z;
      return out;
    };
    vec2.lerp = function(out, a, b, t) {
      var ax = a.x, ay = a.y;
      out.x = ax + t * (b.x - ax);
      out.y = ay + t * (b.y - ay);
      return out;
    };
    vec2.random = function(out, scale) {
      scale = scale || 1;
      var r = 2 * random() * Math.PI;
      out.x = Math.cos(r) * scale;
      out.y = Math.sin(r) * scale;
      return out;
    };
    vec2.transformMat2 = function(out, a, m) {
      var x = a.x, y = a.y;
      out.x = m.m00 * x + m.m02 * y;
      out.y = m.m01 * x + m.m03 * y;
      return out;
    };
    vec2.transformMat23 = function(out, a, m) {
      var x = a.x, y = a.y;
      out.x = m.m00 * x + m.m02 * y + m.m04;
      out.y = m.m01 * x + m.m03 * y + m.m05;
      return out;
    };
    vec2.transformMat3 = function(out, a, m) {
      var x = a.x, y = a.y;
      out.x = m.m00 * x + m.m03 * y + m.m06;
      out.y = m.m01 * x + m.m04 * y + m.m07;
      return out;
    };
    vec2.transformMat4 = function(out, a, m) {
      var x = a.x, y = a.y;
      out.x = m.m00 * x + m.m04 * y + m.m12;
      out.y = m.m01 * x + m.m05 * y + m.m13;
      return out;
    };
    vec2.forEach = (function() {
      var vec = vec2.create();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        stride || (stride = 2);
        offset || (offset = 0);
        l = count ? Math.min(count * stride + offset, a.length) : a.length;
        for (i = offset; i < l; i += stride) {
          vec.x = a[i];
          vec.y = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec.x;
          a[i + 1] = vec.y;
        }
        return a;
      };
    })();
    vec2.str = function(a) {
      return "vec2(" + a.x + ", " + a.y + ")";
    };
    vec2.array = function(out, v) {
      out[0] = v.x;
      out[1] = v.y;
      return out;
    };
    vec2.exactEquals = function(a, b) {
      return a.x === b.x && a.y === b.y;
    };
    vec2.equals = function(a, b) {
      var a0 = a.x, a1 = a.y;
      var b0 = b.x, b1 = b.y;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
    };
    var _tmp$1 = new Array(3);
    var _vec3 = function _vec3(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    };
    _vec3.prototype.toJSON = function toJSON() {
      _tmp$1[0] = this.x;
      _tmp$1[1] = this.y;
      _tmp$1[2] = this.z;
      return _tmp$1;
    };
    var vec3 = {};
    vec3.create = function() {
      return new _vec3(0, 0, 0);
    };
    vec3.new = function(x, y, z) {
      return new _vec3(x, y, z);
    };
    vec3.clone = function(a) {
      return new _vec3(a.x, a.y, a.z);
    };
    vec3.copy = function(out, a) {
      out.x = a.x;
      out.y = a.y;
      out.z = a.z;
      return out;
    };
    vec3.set = function(out, x, y, z) {
      out.x = x;
      out.y = y;
      out.z = z;
      return out;
    };
    vec3.add = function(out, a, b) {
      out.x = a.x + b.x;
      out.y = a.y + b.y;
      out.z = a.z + b.z;
      return out;
    };
    vec3.subtract = function(out, a, b) {
      out.x = a.x - b.x;
      out.y = a.y - b.y;
      out.z = a.z - b.z;
      return out;
    };
    vec3.sub = vec3.subtract;
    vec3.multiply = function(out, a, b) {
      out.x = a.x * b.x;
      out.y = a.y * b.y;
      out.z = a.z * b.z;
      return out;
    };
    vec3.mul = vec3.multiply;
    vec3.divide = function(out, a, b) {
      out.x = a.x / b.x;
      out.y = a.y / b.y;
      out.z = a.z / b.z;
      return out;
    };
    vec3.div = vec3.divide;
    vec3.ceil = function(out, a) {
      out.x = Math.ceil(a.x);
      out.y = Math.ceil(a.y);
      out.z = Math.ceil(a.z);
      return out;
    };
    vec3.floor = function(out, a) {
      out.x = Math.floor(a.x);
      out.y = Math.floor(a.y);
      out.z = Math.floor(a.z);
      return out;
    };
    vec3.min = function(out, a, b) {
      out.x = Math.min(a.x, b.x);
      out.y = Math.min(a.y, b.y);
      out.z = Math.min(a.z, b.z);
      return out;
    };
    vec3.max = function(out, a, b) {
      out.x = Math.max(a.x, b.x);
      out.y = Math.max(a.y, b.y);
      out.z = Math.max(a.z, b.z);
      return out;
    };
    vec3.round = function(out, a) {
      out.x = Math.round(a.x);
      out.y = Math.round(a.y);
      out.z = Math.round(a.z);
      return out;
    };
    vec3.scale = function(out, a, b) {
      out.x = a.x * b;
      out.y = a.y * b;
      out.z = a.z * b;
      return out;
    };
    vec3.scaleAndAdd = function(out, a, b, scale) {
      out.x = a.x + b.x * scale;
      out.y = a.y + b.y * scale;
      out.z = a.z + b.z * scale;
      return out;
    };
    vec3.distance = function(a, b) {
      var x = b.x - a.x, y = b.y - a.y, z = b.z - a.z;
      return Math.sqrt(x * x + y * y + z * z);
    };
    vec3.dist = vec3.distance;
    vec3.squaredDistance = function(a, b) {
      var x = b.x - a.x, y = b.y - a.y, z = b.z - a.z;
      return x * x + y * y + z * z;
    };
    vec3.sqrDist = vec3.squaredDistance;
    vec3.length = function(a) {
      var x = a.x, y = a.y, z = a.z;
      return Math.sqrt(x * x + y * y + z * z);
    };
    vec3.len = vec3.length;
    vec3.squaredLength = function(a) {
      var x = a.x, y = a.y, z = a.z;
      return x * x + y * y + z * z;
    };
    vec3.sqrLen = vec3.squaredLength;
    vec3.negate = function(out, a) {
      out.x = -a.x;
      out.y = -a.y;
      out.z = -a.z;
      return out;
    };
    vec3.inverse = function(out, a) {
      out.x = 1 / a.x;
      out.y = 1 / a.y;
      out.z = 1 / a.z;
      return out;
    };
    vec3.inverseSafe = function(out, a) {
      var x = a.x, y = a.y, z = a.z;
      Math.abs(x) < EPSILON ? out.x = 0 : out.x = 1 / x;
      Math.abs(y) < EPSILON ? out.y = 0 : out.y = 1 / y;
      Math.abs(z) < EPSILON ? out.z = 0 : out.z = 1 / z;
      return out;
    };
    vec3.normalize = function(out, a) {
      var x = a.x, y = a.y, z = a.z;
      var len = x * x + y * y + z * z;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out.x = x * len;
        out.y = y * len;
        out.z = z * len;
      }
      return out;
    };
    vec3.dot = function(a, b) {
      return a.x * b.x + a.y * b.y + a.z * b.z;
    };
    vec3.cross = function(out, a, b) {
      var ax = a.x, ay = a.y, az = a.z, bx = b.x, by = b.y, bz = b.z;
      out.x = ay * bz - az * by;
      out.y = az * bx - ax * bz;
      out.z = ax * by - ay * bx;
      return out;
    };
    vec3.lerp = function(out, a, b, t) {
      var ax = a.x, ay = a.y, az = a.z;
      out.x = ax + t * (b.x - ax);
      out.y = ay + t * (b.y - ay);
      out.z = az + t * (b.z - az);
      return out;
    };
    vec3.hermite = function(out, a, b, c, d, t) {
      var factorTimes2 = t * t, factor1 = factorTimes2 * (2 * t - 3) + 1, factor2 = factorTimes2 * (t - 2) + t, factor3 = factorTimes2 * (t - 1), factor4 = factorTimes2 * (3 - 2 * t);
      out.x = a.x * factor1 + b.x * factor2 + c.x * factor3 + d.x * factor4;
      out.y = a.y * factor1 + b.y * factor2 + c.y * factor3 + d.y * factor4;
      out.z = a.z * factor1 + b.z * factor2 + c.z * factor3 + d.z * factor4;
      return out;
    };
    vec3.bezier = function(out, a, b, c, d, t) {
      var inverseFactor = 1 - t, inverseFactorTimesTwo = inverseFactor * inverseFactor, factorTimes2 = t * t, factor1 = inverseFactorTimesTwo * inverseFactor, factor2 = 3 * t * inverseFactorTimesTwo, factor3 = 3 * factorTimes2 * inverseFactor, factor4 = factorTimes2 * t;
      out.x = a.x * factor1 + b.x * factor2 + c.x * factor3 + d.x * factor4;
      out.y = a.y * factor1 + b.y * factor2 + c.y * factor3 + d.y * factor4;
      out.z = a.z * factor1 + b.z * factor2 + c.z * factor3 + d.z * factor4;
      return out;
    };
    vec3.random = function(out, scale) {
      scale = scale || 1;
      var r = 2 * random() * Math.PI;
      var z = 2 * random() - 1;
      var zScale = Math.sqrt(1 - z * z) * scale;
      out.x = Math.cos(r) * zScale;
      out.y = Math.sin(r) * zScale;
      out.z = z * scale;
      return out;
    };
    vec3.transformMat4 = function(out, a, m) {
      var x = a.x, y = a.y, z = a.z, w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
      w = w || 1;
      out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) / w;
      out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) / w;
      out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) / w;
      return out;
    };
    vec3.transformMat3 = function(out, a, m) {
      var x = a.x, y = a.y, z = a.z;
      out.x = x * m.m00 + y * m.m03 + z * m.m06;
      out.y = x * m.m01 + y * m.m04 + z * m.m07;
      out.z = x * m.m02 + y * m.m05 + z * m.m08;
      return out;
    };
    vec3.transformQuat = function(out, a, q) {
      var x = a.x, y = a.y, z = a.z;
      var qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;
      out.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      return out;
    };
    vec3.rotateX = function(out, a, b, c) {
      var p = [], r = [];
      p.x = a.x - b.x;
      p.y = a.y - b.y;
      p.z = a.z - b.z;
      r.x = p.x;
      r.y = p.y * Math.cos(c) - p.z * Math.sin(c);
      r.z = p.y * Math.sin(c) + p.z * Math.cos(c);
      out.x = r.x + b.x;
      out.y = r.y + b.y;
      out.z = r.z + b.z;
      return out;
    };
    vec3.rotateY = function(out, a, b, c) {
      var p = [], r = [];
      p.x = a.x - b.x;
      p.y = a.y - b.y;
      p.z = a.z - b.z;
      r.x = p.z * Math.sin(c) + p.x * Math.cos(c);
      r.y = p.y;
      r.z = p.z * Math.cos(c) - p.x * Math.sin(c);
      out.x = r.x + b.x;
      out.y = r.y + b.y;
      out.z = r.z + b.z;
      return out;
    };
    vec3.rotateZ = function(out, a, b, c) {
      var p = [], r = [];
      p.x = a.x - b.x;
      p.y = a.y - b.y;
      p.z = a.z - b.z;
      r.x = p.x * Math.cos(c) - p.y * Math.sin(c);
      r.y = p.x * Math.sin(c) + p.y * Math.cos(c);
      r.z = p.z;
      out.x = r.x + b.x;
      out.y = r.y + b.y;
      out.z = r.z + b.z;
      return out;
    };
    vec3.forEach = (function() {
      var vec = vec3.create();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        stride || (stride = 3);
        offset || (offset = 0);
        l = count ? Math.min(count * stride + offset, a.length) : a.length;
        for (i = offset; i < l; i += stride) {
          vec.x = a[i];
          vec.y = a[i + 1];
          vec.z = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec.x;
          a[i + 1] = vec.y;
          a[i + 2] = vec.z;
        }
        return a;
      };
    })();
    vec3.angle = (function() {
      var tempA = vec3.create();
      var tempB = vec3.create();
      return function(a, b) {
        vec3.copy(tempA, a);
        vec3.copy(tempB, b);
        vec3.normalize(tempA, tempA);
        vec3.normalize(tempB, tempB);
        var cosine = vec3.dot(tempA, tempB);
        if (cosine > 1) return 0;
        if (cosine < -1) return Math.PI;
        return Math.acos(cosine);
      };
    })();
    vec3.str = function(a) {
      return "vec3(" + a.x + ", " + a.y + ", " + a.z + ")";
    };
    vec3.array = function(out, v) {
      out[0] = v.x;
      out[1] = v.y;
      out[2] = v.z;
      return out;
    };
    vec3.exactEquals = function(a, b) {
      return a.x === b.x && a.y === b.y && a.z === b.z;
    };
    vec3.equals = function(a, b) {
      var a0 = a.x, a1 = a.y, a2 = a.z;
      var b0 = b.x, b1 = b.y, b2 = b.z;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
    };
    var _tmp$2 = new Array(4);
    var _vec4 = function _vec4(x, y, z, w) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    };
    _vec4.prototype.toJSON = function toJSON() {
      _tmp$2[0] = this.x;
      _tmp$2[1] = this.y;
      _tmp$2[2] = this.z;
      _tmp$2[3] = this.w;
      return _tmp$2;
    };
    var vec4 = {};
    vec4.create = function() {
      return new _vec4(0, 0, 0, 0);
    };
    vec4.new = function(x, y, z, w) {
      return new _vec4(x, y, z, w);
    };
    vec4.clone = function(a) {
      return new _vec4(a.x, a.y, a.z, a.w);
    };
    vec4.copy = function(out, a) {
      out.x = a.x;
      out.y = a.y;
      out.z = a.z;
      out.w = a.w;
      return out;
    };
    vec4.set = function(out, x, y, z, w) {
      out.x = x;
      out.y = y;
      out.z = z;
      out.w = w;
      return out;
    };
    vec4.add = function(out, a, b) {
      out.x = a.x + b.x;
      out.y = a.y + b.y;
      out.z = a.z + b.z;
      out.w = a.w + b.w;
      return out;
    };
    vec4.subtract = function(out, a, b) {
      out.x = a.x - b.x;
      out.y = a.y - b.y;
      out.z = a.z - b.z;
      out.w = a.w - b.w;
      return out;
    };
    vec4.sub = vec4.subtract;
    vec4.multiply = function(out, a, b) {
      out.x = a.x * b.x;
      out.y = a.y * b.y;
      out.z = a.z * b.z;
      out.w = a.w * b.w;
      return out;
    };
    vec4.mul = vec4.multiply;
    vec4.divide = function(out, a, b) {
      out.x = a.x / b.x;
      out.y = a.y / b.y;
      out.z = a.z / b.z;
      out.w = a.w / b.w;
      return out;
    };
    vec4.div = vec4.divide;
    vec4.ceil = function(out, a) {
      out.x = Math.ceil(a.x);
      out.y = Math.ceil(a.y);
      out.z = Math.ceil(a.z);
      out.w = Math.ceil(a.w);
      return out;
    };
    vec4.floor = function(out, a) {
      out.x = Math.floor(a.x);
      out.y = Math.floor(a.y);
      out.z = Math.floor(a.z);
      out.w = Math.floor(a.w);
      return out;
    };
    vec4.min = function(out, a, b) {
      out.x = Math.min(a.x, b.x);
      out.y = Math.min(a.y, b.y);
      out.z = Math.min(a.z, b.z);
      out.w = Math.min(a.w, b.w);
      return out;
    };
    vec4.max = function(out, a, b) {
      out.x = Math.max(a.x, b.x);
      out.y = Math.max(a.y, b.y);
      out.z = Math.max(a.z, b.z);
      out.w = Math.max(a.w, b.w);
      return out;
    };
    vec4.round = function(out, a) {
      out.x = Math.round(a.x);
      out.y = Math.round(a.y);
      out.z = Math.round(a.z);
      out.w = Math.round(a.w);
      return out;
    };
    vec4.scale = function(out, a, b) {
      out.x = a.x * b;
      out.y = a.y * b;
      out.z = a.z * b;
      out.w = a.w * b;
      return out;
    };
    vec4.scaleAndAdd = function(out, a, b, scale) {
      out.x = a.x + b.x * scale;
      out.y = a.y + b.y * scale;
      out.z = a.z + b.z * scale;
      out.w = a.w + b.w * scale;
      return out;
    };
    vec4.distance = function(a, b) {
      var x = b.x - a.x, y = b.y - a.y, z = b.z - a.z, w = b.w - a.w;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    vec4.dist = vec4.distance;
    vec4.squaredDistance = function(a, b) {
      var x = b.x - a.x, y = b.y - a.y, z = b.z - a.z, w = b.w - a.w;
      return x * x + y * y + z * z + w * w;
    };
    vec4.sqrDist = vec4.squaredDistance;
    vec4.length = function(a) {
      var x = a.x, y = a.y, z = a.z, w = a.w;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    vec4.len = vec4.length;
    vec4.squaredLength = function(a) {
      var x = a.x, y = a.y, z = a.z, w = a.w;
      return x * x + y * y + z * z + w * w;
    };
    vec4.sqrLen = vec4.squaredLength;
    vec4.negate = function(out, a) {
      out.x = -a.x;
      out.y = -a.y;
      out.z = -a.z;
      out.w = -a.w;
      return out;
    };
    vec4.inverse = function(out, a) {
      out.x = 1 / a.x;
      out.y = 1 / a.y;
      out.z = 1 / a.z;
      out.w = 1 / a.w;
      return out;
    };
    vec4.inverseSafe = function(out, a) {
      var x = a.x, y = a.y, z = a.z, w = a.w;
      Math.abs(x) < EPSILON ? out.x = 0 : out.x = 1 / x;
      Math.abs(y) < EPSILON ? out.y = 0 : out.y = 1 / y;
      Math.abs(z) < EPSILON ? out.z = 0 : out.z = 1 / z;
      Math.abs(w) < EPSILON ? out.w = 0 : out.w = 1 / w;
      return out;
    };
    vec4.normalize = function(out, a) {
      var x = a.x, y = a.y, z = a.z, w = a.w;
      var len = x * x + y * y + z * z + w * w;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out.x = x * len;
        out.y = y * len;
        out.z = z * len;
        out.w = w * len;
      }
      return out;
    };
    vec4.dot = function(a, b) {
      return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
    };
    vec4.lerp = function(out, a, b, t) {
      var ax = a.x, ay = a.y, az = a.z, aw = a.w;
      out.x = ax + t * (b.x - ax);
      out.y = ay + t * (b.y - ay);
      out.z = az + t * (b.z - az);
      out.w = aw + t * (b.w - aw);
      return out;
    };
    vec4.random = function(out, scale) {
      scale = scale || 1;
      out.x = random();
      out.y = random();
      out.z = random();
      out.w = random();
      vec4.normalize(out, out);
      vec4.scale(out, out, scale);
      return out;
    };
    vec4.transformMat4 = function(out, a, m) {
      var x = a.x, y = a.y, z = a.z, w = a.w;
      out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
      out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
      out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
      out.w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15 * w;
      return out;
    };
    vec4.transformQuat = function(out, a, q) {
      var x = a.x, y = a.y, z = a.z;
      var qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;
      out.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      out.w = a.w;
      return out;
    };
    vec4.forEach = (function() {
      var vec = vec4.create();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        stride || (stride = 4);
        offset || (offset = 0);
        l = count ? Math.min(count * stride + offset, a.length) : a.length;
        for (i = offset; i < l; i += stride) {
          vec.x = a[i];
          vec.y = a[i + 1];
          vec.z = a[i + 2];
          vec.w = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec.x;
          a[i + 1] = vec.y;
          a[i + 2] = vec.z;
          a[i + 3] = vec.w;
        }
        return a;
      };
    })();
    vec4.str = function(a) {
      return "vec4(" + a.x + ", " + a.y + ", " + a.z + ", " + a.w + ")";
    };
    vec4.array = function(out, v) {
      out[0] = v.x;
      out[1] = v.y;
      out[2] = v.z;
      out[3] = v.w;
      return out;
    };
    vec4.exactEquals = function(a, b) {
      return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
    };
    vec4.equals = function(a, b) {
      var a0 = a.x, a1 = a.y, a2 = a.z, a3 = a.w;
      var b0 = b.x, b1 = b.y, b2 = b.z, b3 = b.w;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
    };
    var _tmp$3 = new Array(9);
    var _mat3 = function _mat3(m00, m01, m02, m03, m04, m05, m06, m07, m08) {
      this.m00 = m00;
      this.m01 = m01;
      this.m02 = m02;
      this.m03 = m03;
      this.m04 = m04;
      this.m05 = m05;
      this.m06 = m06;
      this.m07 = m07;
      this.m08 = m08;
    };
    _mat3.prototype.toJSON = function toJSON() {
      _tmp$3[0] = this.m00;
      _tmp$3[1] = this.m01;
      _tmp$3[2] = this.m02;
      _tmp$3[3] = this.m03;
      _tmp$3[4] = this.m04;
      _tmp$3[5] = this.m05;
      _tmp$3[6] = this.m06;
      _tmp$3[7] = this.m07;
      _tmp$3[8] = this.m08;
      return _tmp$3;
    };
    var mat3 = {};
    mat3.create = function() {
      return new _mat3(1, 0, 0, 0, 1, 0, 0, 0, 1);
    };
    mat3.new = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      return new _mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    };
    mat3.clone = function(a) {
      return new _mat3(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08);
    };
    mat3.copy = function(out, a) {
      out.m00 = a.m00;
      out.m01 = a.m01;
      out.m02 = a.m02;
      out.m03 = a.m03;
      out.m04 = a.m04;
      out.m05 = a.m05;
      out.m06 = a.m06;
      out.m07 = a.m07;
      out.m08 = a.m08;
      return out;
    };
    mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      out.m00 = m00;
      out.m01 = m01;
      out.m02 = m02;
      out.m03 = m10;
      out.m04 = m11;
      out.m05 = m12;
      out.m06 = m20;
      out.m07 = m21;
      out.m08 = m22;
      return out;
    };
    mat3.identity = function(out) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 1;
      out.m05 = 0;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 1;
      return out;
    };
    mat3.transpose = function(out, a) {
      if (out === a) {
        var a01 = a.m01, a02 = a.m02, a12 = a.m05;
        out.m01 = a.m03;
        out.m02 = a.m06;
        out.m03 = a01;
        out.m05 = a.m07;
        out.m06 = a02;
        out.m07 = a12;
      } else {
        out.m00 = a.m00;
        out.m01 = a.m03;
        out.m02 = a.m06;
        out.m03 = a.m01;
        out.m04 = a.m04;
        out.m05 = a.m07;
        out.m06 = a.m02;
        out.m07 = a.m05;
        out.m08 = a.m08;
      }
      return out;
    };
    mat3.invert = function(out, a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a10 = a.m03, a11 = a.m04, a12 = a.m05, a20 = a.m06, a21 = a.m07, a22 = a.m08;
      var b01 = a22 * a11 - a12 * a21;
      var b11 = -a22 * a10 + a12 * a20;
      var b21 = a21 * a10 - a11 * a20;
      var det = a00 * b01 + a01 * b11 + a02 * b21;
      if (!det) return null;
      det = 1 / det;
      out.m00 = b01 * det;
      out.m01 = (-a22 * a01 + a02 * a21) * det;
      out.m02 = (a12 * a01 - a02 * a11) * det;
      out.m03 = b11 * det;
      out.m04 = (a22 * a00 - a02 * a20) * det;
      out.m05 = (-a12 * a00 + a02 * a10) * det;
      out.m06 = b21 * det;
      out.m07 = (-a21 * a00 + a01 * a20) * det;
      out.m08 = (a11 * a00 - a01 * a10) * det;
      return out;
    };
    mat3.adjoint = function(out, a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a10 = a.m03, a11 = a.m04, a12 = a.m05, a20 = a.m06, a21 = a.m07, a22 = a.m08;
      out.m00 = a11 * a22 - a12 * a21;
      out.m01 = a02 * a21 - a01 * a22;
      out.m02 = a01 * a12 - a02 * a11;
      out.m03 = a12 * a20 - a10 * a22;
      out.m04 = a00 * a22 - a02 * a20;
      out.m05 = a02 * a10 - a00 * a12;
      out.m06 = a10 * a21 - a11 * a20;
      out.m07 = a01 * a20 - a00 * a21;
      out.m08 = a00 * a11 - a01 * a10;
      return out;
    };
    mat3.determinant = function(a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a10 = a.m03, a11 = a.m04, a12 = a.m05, a20 = a.m06, a21 = a.m07, a22 = a.m08;
      return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    };
    mat3.multiply = function(out, a, b) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a10 = a.m03, a11 = a.m04, a12 = a.m05, a20 = a.m06, a21 = a.m07, a22 = a.m08;
      var b00 = b.m00, b01 = b.m01, b02 = b.m02;
      var b10 = b.m03, b11 = b.m04, b12 = b.m05;
      var b20 = b.m06, b21 = b.m07, b22 = b.m08;
      out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
      out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
      out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
      out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
      out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
      out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
      out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
      out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
      out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
      return out;
    };
    mat3.mul = mat3.multiply;
    mat3.translate = function(out, a, v) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a10 = a.m03, a11 = a.m04, a12 = a.m05, a20 = a.m06, a21 = a.m07, a22 = a.m08;
      var x = v.x, y = v.y;
      out.m00 = a00;
      out.m01 = a01;
      out.m02 = a02;
      out.m03 = a10;
      out.m04 = a11;
      out.m05 = a12;
      out.m06 = x * a00 + y * a10 + a20;
      out.m07 = x * a01 + y * a11 + a21;
      out.m08 = x * a02 + y * a12 + a22;
      return out;
    };
    mat3.rotate = function(out, a, rad) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a10 = a.m03, a11 = a.m04, a12 = a.m05, a20 = a.m06, a21 = a.m07, a22 = a.m08;
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      out.m00 = c * a00 + s * a10;
      out.m01 = c * a01 + s * a11;
      out.m02 = c * a02 + s * a12;
      out.m03 = c * a10 - s * a00;
      out.m04 = c * a11 - s * a01;
      out.m05 = c * a12 - s * a02;
      out.m06 = a20;
      out.m07 = a21;
      out.m08 = a22;
      return out;
    };
    mat3.scale = function(out, a, v) {
      var x = v.x, y = v.y;
      out.m00 = x * a.m00;
      out.m01 = x * a.m01;
      out.m02 = x * a.m02;
      out.m03 = y * a.m03;
      out.m04 = y * a.m04;
      out.m05 = y * a.m05;
      out.m06 = a.m06;
      out.m07 = a.m07;
      out.m08 = a.m08;
      return out;
    };
    mat3.fromMat4 = function(out, a) {
      out.m00 = a.m00;
      out.m01 = a.m01;
      out.m02 = a.m02;
      out.m03 = a.m04;
      out.m04 = a.m05;
      out.m05 = a.m06;
      out.m06 = a.m08;
      out.m07 = a.m09;
      out.m08 = a.m10;
      return out;
    };
    mat3.fromTranslation = function(out, v) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 1;
      out.m05 = 0;
      out.m06 = v.x;
      out.m07 = v.y;
      out.m08 = 1;
      return out;
    };
    mat3.fromRotation = function(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = c;
      out.m01 = s;
      out.m02 = 0;
      out.m03 = -s;
      out.m04 = c;
      out.m05 = 0;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 1;
      return out;
    };
    mat3.fromScaling = function(out, v) {
      out.m00 = v.x;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = v.y;
      out.m05 = 0;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 1;
      return out;
    };
    mat3.fromMat2d = function(out, a) {
      out.m00 = a.m00;
      out.m01 = a.m01;
      out.m02 = 0;
      out.m03 = a.m02;
      out.m04 = a.m03;
      out.m05 = 0;
      out.m06 = a.m04;
      out.m07 = a.m05;
      out.m08 = 1;
      return out;
    };
    mat3.fromQuat = function(out, q) {
      var x = q.x, y = q.y, z = q.z, w = q.w;
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out.m00 = 1 - yy - zz;
      out.m03 = yx - wz;
      out.m06 = zx + wy;
      out.m01 = yx + wz;
      out.m04 = 1 - xx - zz;
      out.m07 = zy - wx;
      out.m02 = zx - wy;
      out.m05 = zy + wx;
      out.m08 = 1 - xx - yy;
      return out;
    };
    mat3.fromViewUp = (function() {
      var default_up = vec3.new(0, 1, 0);
      var x = vec3.create();
      var y = vec3.create();
      return function(out, view, up) {
        if (vec3.sqrLen(view) < EPSILON * EPSILON) {
          mat3.identity(out);
          return out;
        }
        up = up || default_up;
        vec3.cross(x, up, view);
        if (vec3.sqrLen(x) < EPSILON * EPSILON) {
          mat3.identity(out);
          return out;
        }
        vec3.cross(y, view, x);
        mat3.set(out, x.x, x.y, x.z, y.x, y.y, y.z, view.x, view.y, view.z);
        return out;
      };
    })();
    mat3.normalFromMat4 = function(out, a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11, a30 = a.m12, a31 = a.m13, a32 = a.m14, a33 = a.m15;
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;
      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      if (!det) return null;
      det = 1 / det;
      out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out.m03 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out.m04 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out.m05 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out.m06 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out.m07 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out.m08 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      return out;
    };
    mat3.str = function(a) {
      return "mat3(" + a.m00 + ", " + a.m01 + ", " + a.m02 + ", " + a.m03 + ", " + a.m04 + ", " + a.m05 + ", " + a.m06 + ", " + a.m07 + ", " + a.m08 + ")";
    };
    mat3.array = function(out, m) {
      out[0] = m.m00;
      out[1] = m.m01;
      out[2] = m.m02;
      out[3] = m.m03;
      out[4] = m.m04;
      out[5] = m.m05;
      out[6] = m.m06;
      out[7] = m.m07;
      out[8] = m.m08;
      return out;
    };
    mat3.frob = function(a) {
      return Math.sqrt(Math.pow(a.m00, 2) + Math.pow(a.m01, 2) + Math.pow(a.m02, 2) + Math.pow(a.m03, 2) + Math.pow(a.m04, 2) + Math.pow(a.m05, 2) + Math.pow(a.m06, 2) + Math.pow(a.m07, 2) + Math.pow(a.m08, 2));
    };
    mat3.add = function(out, a, b) {
      out.m00 = a.m00 + b.m00;
      out.m01 = a.m01 + b.m01;
      out.m02 = a.m02 + b.m02;
      out.m03 = a.m03 + b.m03;
      out.m04 = a.m04 + b.m04;
      out.m05 = a.m05 + b.m05;
      out.m06 = a.m06 + b.m06;
      out.m07 = a.m07 + b.m07;
      out.m08 = a.m08 + b.m08;
      return out;
    };
    mat3.subtract = function(out, a, b) {
      out.m00 = a.m00 - b.m00;
      out.m01 = a.m01 - b.m01;
      out.m02 = a.m02 - b.m02;
      out.m03 = a.m03 - b.m03;
      out.m04 = a.m04 - b.m04;
      out.m05 = a.m05 - b.m05;
      out.m06 = a.m06 - b.m06;
      out.m07 = a.m07 - b.m07;
      out.m08 = a.m08 - b.m08;
      return out;
    };
    mat3.sub = mat3.subtract;
    mat3.multiplyScalar = function(out, a, b) {
      out.m00 = a.m00 * b;
      out.m01 = a.m01 * b;
      out.m02 = a.m02 * b;
      out.m03 = a.m03 * b;
      out.m04 = a.m04 * b;
      out.m05 = a.m05 * b;
      out.m06 = a.m06 * b;
      out.m07 = a.m07 * b;
      out.m08 = a.m08 * b;
      return out;
    };
    mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
      out.m00 = a.m00 + b.m00 * scale;
      out.m01 = a.m01 + b.m01 * scale;
      out.m02 = a.m02 + b.m02 * scale;
      out.m03 = a.m03 + b.m03 * scale;
      out.m04 = a.m04 + b.m04 * scale;
      out.m05 = a.m05 + b.m05 * scale;
      out.m06 = a.m06 + b.m06 * scale;
      out.m07 = a.m07 + b.m07 * scale;
      out.m08 = a.m08 + b.m08 * scale;
      return out;
    };
    mat3.exactEquals = function(a, b) {
      return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08;
    };
    mat3.equals = function(a, b) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05, a6 = a.m06, a7 = a.m07, a8 = a.m08;
      var b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03, b4 = b.m04, b5 = b.m05, b6 = b.m06, b7 = b.m07, b8 = b.m08;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8));
    };
    var _tmp$4 = new Array(4);
    var _quat = function _quat(x, y, z, w) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    };
    _quat.prototype.toJSON = function toJSON() {
      _tmp$4[0] = this.x;
      _tmp$4[1] = this.y;
      _tmp$4[2] = this.z;
      _tmp$4[3] = this.w;
      return _tmp$4;
    };
    var quat = {};
    quat.create = function() {
      return new _quat(0, 0, 0, 1);
    };
    quat.new = function(x, y, z, w) {
      return new _quat(x, y, z, w);
    };
    quat.clone = function(a) {
      return new _quat(a.x, a.y, a.z, a.w);
    };
    quat.copy = vec4.copy;
    quat.set = vec4.set;
    quat.identity = function(out) {
      out.x = 0;
      out.y = 0;
      out.z = 0;
      out.w = 1;
      return out;
    };
    quat.rotationTo = (function() {
      var tmpvec3 = vec3.create();
      var xUnitVec3 = vec3.new(1, 0, 0);
      var yUnitVec3 = vec3.new(0, 1, 0);
      return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -.999999) {
          vec3.cross(tmpvec3, xUnitVec3, a);
          vec3.length(tmpvec3) < 1e-6 && vec3.cross(tmpvec3, yUnitVec3, a);
          vec3.normalize(tmpvec3, tmpvec3);
          quat.fromAxisAngle(out, tmpvec3, Math.PI);
          return out;
        }
        if (dot > .999999) {
          out.x = 0;
          out.y = 0;
          out.z = 0;
          out.w = 1;
          return out;
        }
        vec3.cross(tmpvec3, a, b);
        out.x = tmpvec3.x;
        out.y = tmpvec3.y;
        out.z = tmpvec3.z;
        out.w = 1 + dot;
        return quat.normalize(out, out);
      };
    })();
    quat.getAxisAngle = function(out_axis, q) {
      var rad = 2 * Math.acos(q.w);
      var s = Math.sin(rad / 2);
      if (0 != s) {
        out_axis.x = q.x / s;
        out_axis.y = q.y / s;
        out_axis.z = q.z / s;
      } else {
        out_axis.x = 1;
        out_axis.y = 0;
        out_axis.z = 0;
      }
      return rad;
    };
    quat.multiply = function(out, a, b) {
      var ax = a.x, ay = a.y, az = a.z, aw = a.w, bx = b.x, by = b.y, bz = b.z, bw = b.w;
      out.x = ax * bw + aw * bx + ay * bz - az * by;
      out.y = ay * bw + aw * by + az * bx - ax * bz;
      out.z = az * bw + aw * bz + ax * by - ay * bx;
      out.w = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    };
    quat.mul = quat.multiply;
    quat.scale = vec4.scale;
    quat.rotateX = function(out, a, rad) {
      rad *= .5;
      var ax = a.x, ay = a.y, az = a.z, aw = a.w, bx = Math.sin(rad), bw = Math.cos(rad);
      out.x = ax * bw + aw * bx;
      out.y = ay * bw + az * bx;
      out.z = az * bw - ay * bx;
      out.w = aw * bw - ax * bx;
      return out;
    };
    quat.rotateY = function(out, a, rad) {
      rad *= .5;
      var ax = a.x, ay = a.y, az = a.z, aw = a.w, by = Math.sin(rad), bw = Math.cos(rad);
      out.x = ax * bw - az * by;
      out.y = ay * bw + aw * by;
      out.z = az * bw + ax * by;
      out.w = aw * bw - ay * by;
      return out;
    };
    quat.rotateZ = function(out, a, rad) {
      rad *= .5;
      var ax = a.x, ay = a.y, az = a.z, aw = a.w, bz = Math.sin(rad), bw = Math.cos(rad);
      out.x = ax * bw + ay * bz;
      out.y = ay * bw - ax * bz;
      out.z = az * bw + aw * bz;
      out.w = aw * bw - az * bz;
      return out;
    };
    quat.rotateAround = (function() {
      var v3_tmp = vec3.create();
      var q_tmp = quat.create();
      return function(out, rot, axis, rad) {
        quat.invert(q_tmp, rot);
        vec3.transformQuat(v3_tmp, axis, q_tmp);
        quat.fromAxisAngle(q_tmp, v3_tmp, rad);
        quat.mul(out, rot, q_tmp);
        return out;
      };
    })();
    quat.rotateAroundLocal = (function() {
      var q_tmp = quat.create();
      return function(out, rot, axis, rad) {
        quat.fromAxisAngle(q_tmp, axis, rad);
        quat.mul(out, rot, q_tmp);
        return out;
      };
    })();
    quat.calculateW = function(out, a) {
      var x = a.x, y = a.y, z = a.z;
      out.x = x;
      out.y = y;
      out.z = z;
      out.w = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
      return out;
    };
    quat.dot = vec4.dot;
    quat.lerp = vec4.lerp;
    quat.slerp = function(out, a, b, t) {
      var ax = a.x, ay = a.y, az = a.z, aw = a.w, bx = b.x, by = b.y, bz = b.z, bw = b.w;
      var omega, cosom, sinom, scale0, scale1;
      cosom = ax * bx + ay * by + az * bz + aw * bw;
      if (cosom < 0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      }
      if (1 - cosom > 1e-6) {
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        scale0 = 1 - t;
        scale1 = t;
      }
      out.x = scale0 * ax + scale1 * bx;
      out.y = scale0 * ay + scale1 * by;
      out.z = scale0 * az + scale1 * bz;
      out.w = scale0 * aw + scale1 * bw;
      return out;
    };
    quat.sqlerp = (function() {
      var temp1 = quat.create();
      var temp2 = quat.create();
      return function(out, a, b, c, d, t) {
        quat.slerp(temp1, a, d, t);
        quat.slerp(temp2, b, c, t);
        quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
      };
    })();
    quat.invert = function(out, a) {
      var a0 = a.x, a1 = a.y, a2 = a.z, a3 = a.w;
      var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot ? 1 / dot : 0;
      out.x = -a0 * invDot;
      out.y = -a1 * invDot;
      out.z = -a2 * invDot;
      out.w = a3 * invDot;
      return out;
    };
    quat.conjugate = function(out, a) {
      out.x = -a.x;
      out.y = -a.y;
      out.z = -a.z;
      out.w = a.w;
      return out;
    };
    quat.length = vec4.length;
    quat.len = quat.length;
    quat.squaredLength = vec4.squaredLength;
    quat.sqrLen = quat.squaredLength;
    quat.normalize = vec4.normalize;
    quat.fromAxes = (function() {
      var matr = mat3.create();
      return function(out, xAxis, yAxis, zAxis) {
        mat3.set(matr, xAxis.x, xAxis.y, xAxis.z, yAxis.x, yAxis.y, yAxis.z, zAxis.x, zAxis.y, zAxis.z);
        return quat.normalize(out, quat.fromMat3(out, matr));
      };
    })();
    quat.fromViewUp = (function() {
      var matr = mat3.create();
      return function(out, view, up) {
        mat3.fromViewUp(matr, view, up);
        if (!matr) return null;
        return quat.normalize(out, quat.fromMat3(out, matr));
      };
    })();
    quat.fromAxisAngle = function(out, axis, rad) {
      rad *= .5;
      var s = Math.sin(rad);
      out.x = s * axis.x;
      out.y = s * axis.y;
      out.z = s * axis.z;
      out.w = Math.cos(rad);
      return out;
    };
    quat.fromMat3 = function(out, m) {
      var m00 = m.m00, m01 = m.m03, m02 = m.m06, m10 = m.m01, m11 = m.m04, m12 = m.m07, m20 = m.m02, m21 = m.m05, m22 = m.m08;
      var trace = m00 + m11 + m22;
      if (trace > 0) {
        var s = .5 / Math.sqrt(trace + 1);
        out.w = .25 / s;
        out.x = (m21 - m12) * s;
        out.y = (m02 - m20) * s;
        out.z = (m10 - m01) * s;
      } else if (m00 > m11 && m00 > m22) {
        var s$1 = 2 * Math.sqrt(1 + m00 - m11 - m22);
        out.w = (m21 - m12) / s$1;
        out.x = .25 * s$1;
        out.y = (m01 + m10) / s$1;
        out.z = (m02 + m20) / s$1;
      } else if (m11 > m22) {
        var s$2 = 2 * Math.sqrt(1 + m11 - m00 - m22);
        out.w = (m02 - m20) / s$2;
        out.x = (m01 + m10) / s$2;
        out.y = .25 * s$2;
        out.z = (m12 + m21) / s$2;
      } else {
        var s$3 = 2 * Math.sqrt(1 + m22 - m00 - m11);
        out.w = (m10 - m01) / s$3;
        out.x = (m02 + m20) / s$3;
        out.y = (m12 + m21) / s$3;
        out.z = .25 * s$3;
      }
      return out;
    };
    quat.fromEuler = function(out, x, y, z) {
      var halfToRad = .5 * Math.PI / 180;
      x *= halfToRad;
      y *= halfToRad;
      z *= halfToRad;
      var sx = Math.sin(x);
      var cx = Math.cos(x);
      var sy = Math.sin(y);
      var cy = Math.cos(y);
      var sz = Math.sin(z);
      var cz = Math.cos(z);
      out.x = sx * cy * cz + cx * sy * sz;
      out.y = cx * sy * cz + sx * cy * sz;
      out.z = cx * cy * sz - sx * sy * cz;
      out.w = cx * cy * cz - sx * sy * sz;
      return out;
    };
    quat.toEuler = function(out, q) {
      var x = q.x, y = q.y, z = q.z, w = q.w;
      var heading, attitude, bank;
      var test = x * y + z * w;
      if (test > .499) {
        heading = 2 * Math.atan2(x, w);
        attitude = Math.PI / 2;
        bank = 0;
      }
      if (test < -.499) {
        heading = -2 * Math.atan2(x, w);
        attitude = -Math.PI / 2;
        bank = 0;
      }
      if (isNaN(heading)) {
        var sqx = x * x;
        var sqy = y * y;
        var sqz = z * z;
        heading = Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz);
        attitude = Math.asin(2 * test);
        bank = Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz);
      }
      out.y = toDegree(heading);
      out.z = toDegree(attitude);
      out.x = toDegree(bank);
      return out;
    };
    quat.str = function(a) {
      return "quat(" + a.x + ", " + a.y + ", " + a.z + ", " + a.w + ")";
    };
    quat.array = function(out, q) {
      out[0] = q.x;
      out[1] = q.y;
      out[2] = q.z;
      out[3] = q.w;
      return out;
    };
    quat.exactEquals = vec4.exactEquals;
    quat.equals = vec4.equals;
    var _tmp$5 = new Array(4);
    var _mat2 = function _mat2(m00, m01, m02, m03) {
      this.m00 = m00;
      this.m01 = m01;
      this.m02 = m02;
      this.m03 = m03;
    };
    _mat2.prototype.toJSON = function toJSON() {
      _tmp$5[0] = this.m00;
      _tmp$5[1] = this.m01;
      _tmp$5[2] = this.m02;
      _tmp$5[3] = this.m03;
      return _tmp$5;
    };
    var mat2 = {};
    mat2.create = function() {
      return new _mat2(1, 0, 0, 1);
    };
    mat2.new = function(m00, m01, m10, m11) {
      return new _mat2(m00, m01, m10, m11);
    };
    mat2.clone = function(a) {
      return new _mat2(a.m00, a.m01, a.m02, a.m03);
    };
    mat2.copy = function(out, a) {
      out.m00 = a.m00;
      out.m01 = a.m01;
      out.m02 = a.m02;
      out.m03 = a.m03;
      return out;
    };
    mat2.identity = function(out) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 1;
      return out;
    };
    mat2.set = function(out, m00, m01, m10, m11) {
      out.m00 = m00;
      out.m01 = m01;
      out.m02 = m10;
      out.m03 = m11;
      return out;
    };
    mat2.transpose = function(out, a) {
      if (out === a) {
        var a1 = a.m01;
        out.m01 = a.m02;
        out.m02 = a1;
      } else {
        out.m00 = a.m00;
        out.m01 = a.m02;
        out.m02 = a.m01;
        out.m03 = a.m03;
      }
      return out;
    };
    mat2.invert = function(out, a) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03;
      var det = a0 * a3 - a2 * a1;
      if (!det) return null;
      det = 1 / det;
      out.m00 = a3 * det;
      out.m01 = -a1 * det;
      out.m02 = -a2 * det;
      out.m03 = a0 * det;
      return out;
    };
    mat2.adjoint = function(out, a) {
      var a0 = a.m00;
      out.m00 = a.m03;
      out.m01 = -a.m01;
      out.m02 = -a.m02;
      out.m03 = a0;
      return out;
    };
    mat2.determinant = function(a) {
      return a.m00 * a.m03 - a.m02 * a.m01;
    };
    mat2.multiply = function(out, a, b) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03;
      var b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03;
      out.m00 = a0 * b0 + a2 * b1;
      out.m01 = a1 * b0 + a3 * b1;
      out.m02 = a0 * b2 + a2 * b3;
      out.m03 = a1 * b2 + a3 * b3;
      return out;
    };
    mat2.mul = mat2.multiply;
    mat2.rotate = function(out, a, rad) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = a0 * c + a2 * s;
      out.m01 = a1 * c + a3 * s;
      out.m02 = a0 * -s + a2 * c;
      out.m03 = a1 * -s + a3 * c;
      return out;
    };
    mat2.scale = function(out, a, v) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, v0 = v.x, v1 = v.y;
      out.m00 = a0 * v0;
      out.m01 = a1 * v0;
      out.m02 = a2 * v1;
      out.m03 = a3 * v1;
      return out;
    };
    mat2.fromRotation = function(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = c;
      out.m01 = s;
      out.m02 = -s;
      out.m03 = c;
      return out;
    };
    mat2.fromScaling = function(out, v) {
      out.m00 = v.x;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = v.y;
      return out;
    };
    mat2.str = function(a) {
      return "mat2(" + a.m00 + ", " + a.m01 + ", " + a.m02 + ", " + a.m03 + ")";
    };
    mat2.array = function(out, m) {
      out[0] = m.m00;
      out[1] = m.m01;
      out[2] = m.m02;
      out[3] = m.m03;
      return out;
    };
    mat2.frob = function(a) {
      return Math.sqrt(Math.pow(a.m00, 2) + Math.pow(a.m01, 2) + Math.pow(a.m02, 2) + Math.pow(a.m03, 2));
    };
    mat2.LDU = function(L, D, U, a) {
      L.m02 = a.m02 / a.m00;
      U.m00 = a.m00;
      U.m01 = a.m01;
      U.m03 = a.m03 - L.m02 * U.m01;
    };
    mat2.add = function(out, a, b) {
      out.m00 = a.m00 + b.m00;
      out.m01 = a.m01 + b.m01;
      out.m02 = a.m02 + b.m02;
      out.m03 = a.m03 + b.m03;
      return out;
    };
    mat2.subtract = function(out, a, b) {
      out.m00 = a.m00 - b.m00;
      out.m01 = a.m01 - b.m01;
      out.m02 = a.m02 - b.m02;
      out.m03 = a.m03 - b.m03;
      return out;
    };
    mat2.sub = mat2.subtract;
    mat2.exactEquals = function(a, b) {
      return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03;
    };
    mat2.equals = function(a, b) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03;
      var b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
    };
    mat2.multiplyScalar = function(out, a, b) {
      out.m00 = a.m00 * b;
      out.m01 = a.m01 * b;
      out.m02 = a.m02 * b;
      out.m03 = a.m03 * b;
      return out;
    };
    mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
      out.m00 = a.m00 + b.m00 * scale;
      out.m01 = a.m01 + b.m01 * scale;
      out.m02 = a.m02 + b.m02 * scale;
      out.m03 = a.m03 + b.m03 * scale;
      return out;
    };
    var _tmp$6 = new Array(6);
    var _mat23 = function _mat23(m00, m01, m02, m03, m04, m05) {
      this.m00 = m00;
      this.m01 = m01;
      this.m02 = m02;
      this.m03 = m03;
      this.m04 = m04;
      this.m05 = m05;
    };
    _mat23.prototype.toJSON = function toJSON() {
      _tmp$6[0] = this.m00;
      _tmp$6[1] = this.m01;
      _tmp$6[2] = this.m02;
      _tmp$6[3] = this.m03;
      _tmp$6[4] = this.m04;
      _tmp$6[5] = this.m05;
      return _tmp$6;
    };
    var mat23 = {};
    mat23.create = function() {
      return new _mat23(1, 0, 0, 1, 0, 0);
    };
    mat23.new = function(a, b, c, d, tx, ty) {
      return new _mat23(a, b, c, d, tx, ty);
    };
    mat23.clone = function(a) {
      return new _mat23(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05);
    };
    mat23.copy = function(out, a) {
      out.m00 = a.m00;
      out.m01 = a.m01;
      out.m02 = a.m02;
      out.m03 = a.m03;
      out.m04 = a.m04;
      out.m05 = a.m05;
      return out;
    };
    mat23.identity = function(out) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 1;
      out.m04 = 0;
      out.m05 = 0;
      return out;
    };
    mat23.set = function(out, a, b, c, d, tx, ty) {
      out.m00 = a;
      out.m01 = b;
      out.m02 = c;
      out.m03 = d;
      out.m04 = tx;
      out.m05 = ty;
      return out;
    };
    mat23.invert = function(out, a) {
      var aa = a.m00, ab = a.m01, ac = a.m02, ad = a.m03, atx = a.m04, aty = a.m05;
      var det = aa * ad - ab * ac;
      if (!det) return null;
      det = 1 / det;
      out.m00 = ad * det;
      out.m01 = -ab * det;
      out.m02 = -ac * det;
      out.m03 = aa * det;
      out.m04 = (ac * aty - ad * atx) * det;
      out.m05 = (ab * atx - aa * aty) * det;
      return out;
    };
    mat23.determinant = function(a) {
      return a.m00 * a.m03 - a.m01 * a.m02;
    };
    mat23.multiply = function(out, a, b) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05, b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03, b4 = b.m04, b5 = b.m05;
      out.m00 = a0 * b0 + a2 * b1;
      out.m01 = a1 * b0 + a3 * b1;
      out.m02 = a0 * b2 + a2 * b3;
      out.m03 = a1 * b2 + a3 * b3;
      out.m04 = a0 * b4 + a2 * b5 + a4;
      out.m05 = a1 * b4 + a3 * b5 + a5;
      return out;
    };
    mat23.mul = mat23.multiply;
    mat23.rotate = function(out, a, rad) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05, s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = a0 * c + a2 * s;
      out.m01 = a1 * c + a3 * s;
      out.m02 = a0 * -s + a2 * c;
      out.m03 = a1 * -s + a3 * c;
      out.m04 = a4;
      out.m05 = a5;
      return out;
    };
    mat23.scale = function(out, a, v) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05, v0 = v.x, v1 = v.y;
      out.m00 = a0 * v0;
      out.m01 = a1 * v0;
      out.m02 = a2 * v1;
      out.m03 = a3 * v1;
      out.m04 = a4;
      out.m05 = a5;
      return out;
    };
    mat23.translate = function(out, a, v) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05, v0 = v.x, v1 = v.y;
      out.m00 = a0;
      out.m01 = a1;
      out.m02 = a2;
      out.m03 = a3;
      out.m04 = a0 * v0 + a2 * v1 + a4;
      out.m05 = a1 * v0 + a3 * v1 + a5;
      return out;
    };
    mat23.fromRotation = function(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = c;
      out.m01 = s;
      out.m02 = -s;
      out.m03 = c;
      out.m04 = 0;
      out.m05 = 0;
      return out;
    };
    mat23.fromScaling = function(out, v) {
      out.m00 = v.m00;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = v.m01;
      out.m04 = 0;
      out.m05 = 0;
      return out;
    };
    mat23.fromTranslation = function(out, v) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 1;
      out.m04 = v.x;
      out.m05 = v.y;
      return out;
    };
    mat23.str = function(a) {
      return "mat23(" + a.m00 + ", " + a.m01 + ", " + a.m02 + ", " + a.m03 + ", " + a.m04 + ", " + a.m05 + ")";
    };
    mat23.array = function(out, m) {
      out[0] = m.m00;
      out[1] = m.m01;
      out[2] = m.m02;
      out[3] = m.m03;
      out[4] = m.m04;
      out[5] = m.m05;
      return out;
    };
    mat23.array4x4 = function(out, m) {
      out[0] = m.m00;
      out[1] = m.m01;
      out[2] = 0;
      out[3] = 0;
      out[4] = m.m02;
      out[5] = m.m03;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = m.m04;
      out[13] = m.m05;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    mat23.frob = function(a) {
      return Math.sqrt(Math.pow(a.m00, 2) + Math.pow(a.m01, 2) + Math.pow(a.m02, 2) + Math.pow(a.m03, 2) + Math.pow(a.m04, 2) + Math.pow(a.m05, 2) + 1);
    };
    mat23.add = function(out, a, b) {
      out.m00 = a.m00 + b.m00;
      out.m01 = a.m01 + b.m01;
      out.m02 = a.m02 + b.m02;
      out.m03 = a.m03 + b.m03;
      out.m04 = a.m04 + b.m04;
      out.m05 = a.m05 + b.m05;
      return out;
    };
    mat23.subtract = function(out, a, b) {
      out.m00 = a.m00 - b.m00;
      out.m01 = a.m01 - b.m01;
      out.m02 = a.m02 - b.m02;
      out.m03 = a.m03 - b.m03;
      out.m04 = a.m04 - b.m04;
      out.m05 = a.m05 - b.m05;
      return out;
    };
    mat23.sub = mat23.subtract;
    mat23.multiplyScalar = function(out, a, b) {
      out.m00 = a.m00 * b;
      out.m01 = a.m01 * b;
      out.m02 = a.m02 * b;
      out.m03 = a.m03 * b;
      out.m04 = a.m04 * b;
      out.m05 = a.m05 * b;
      return out;
    };
    mat23.multiplyScalarAndAdd = function(out, a, b, scale) {
      out.m00 = a.m00 + b.m00 * scale;
      out.m01 = a.m01 + b.m01 * scale;
      out.m02 = a.m02 + b.m02 * scale;
      out.m03 = a.m03 + b.m03 * scale;
      out.m04 = a.m04 + b.m04 * scale;
      out.m05 = a.m05 + b.m05 * scale;
      return out;
    };
    mat23.exactEquals = function(a, b) {
      return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05;
    };
    mat23.equals = function(a, b) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05;
      var b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03, b4 = b.m04, b5 = b.m05;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5));
    };
    var _tmp$7 = new Array(16);
    var _mat4 = function _mat4(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
      this.m00 = m00;
      this.m01 = m01;
      this.m02 = m02;
      this.m03 = m03;
      this.m04 = m04;
      this.m05 = m05;
      this.m06 = m06;
      this.m07 = m07;
      this.m08 = m08;
      this.m09 = m09;
      this.m10 = m10;
      this.m11 = m11;
      this.m12 = m12;
      this.m13 = m13;
      this.m14 = m14;
      this.m15 = m15;
    };
    _mat4.prototype.toJSON = function toJSON() {
      _tmp$7[0] = this.m00;
      _tmp$7[1] = this.m01;
      _tmp$7[2] = this.m02;
      _tmp$7[3] = this.m03;
      _tmp$7[4] = this.m04;
      _tmp$7[5] = this.m05;
      _tmp$7[6] = this.m06;
      _tmp$7[7] = this.m07;
      _tmp$7[8] = this.m08;
      _tmp$7[9] = this.m09;
      _tmp$7[10] = this.m10;
      _tmp$7[11] = this.m11;
      _tmp$7[12] = this.m12;
      _tmp$7[13] = this.m13;
      _tmp$7[14] = this.m14;
      _tmp$7[15] = this.m15;
      return _tmp$7;
    };
    var mat4 = {};
    mat4.create = function() {
      return new _mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    };
    mat4.new = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      return new _mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    };
    mat4.clone = function(a) {
      return new _mat4(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08, a.m09, a.m10, a.m11, a.m12, a.m13, a.m14, a.m15);
    };
    mat4.copy = function(out, a) {
      out.m00 = a.m00;
      out.m01 = a.m01;
      out.m02 = a.m02;
      out.m03 = a.m03;
      out.m04 = a.m04;
      out.m05 = a.m05;
      out.m06 = a.m06;
      out.m07 = a.m07;
      out.m08 = a.m08;
      out.m09 = a.m09;
      out.m10 = a.m10;
      out.m11 = a.m11;
      out.m12 = a.m12;
      out.m13 = a.m13;
      out.m14 = a.m14;
      out.m15 = a.m15;
      return out;
    };
    mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      out.m00 = m00;
      out.m01 = m01;
      out.m02 = m02;
      out.m03 = m03;
      out.m04 = m10;
      out.m05 = m11;
      out.m06 = m12;
      out.m07 = m13;
      out.m08 = m20;
      out.m09 = m21;
      out.m10 = m22;
      out.m11 = m23;
      out.m12 = m30;
      out.m13 = m31;
      out.m14 = m32;
      out.m15 = m33;
      return out;
    };
    mat4.identity = function(out) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = 1;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = 0;
      out.m10 = 1;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.transpose = function(out, a) {
      if (out === a) {
        var a01 = a.m01, a02 = a.m02, a03 = a.m03, a12 = a.m06, a13 = a.m07, a23 = a.m11;
        out.m01 = a.m04;
        out.m02 = a.m08;
        out.m03 = a.m12;
        out.m04 = a01;
        out.m06 = a.m09;
        out.m07 = a.m13;
        out.m08 = a02;
        out.m09 = a12;
        out.m11 = a.m14;
        out.m12 = a03;
        out.m13 = a13;
        out.m14 = a23;
      } else {
        out.m00 = a.m00;
        out.m01 = a.m04;
        out.m02 = a.m08;
        out.m03 = a.m12;
        out.m04 = a.m01;
        out.m05 = a.m05;
        out.m06 = a.m09;
        out.m07 = a.m13;
        out.m08 = a.m02;
        out.m09 = a.m06;
        out.m10 = a.m10;
        out.m11 = a.m14;
        out.m12 = a.m03;
        out.m13 = a.m07;
        out.m14 = a.m11;
        out.m15 = a.m15;
      }
      return out;
    };
    mat4.invert = function(out, a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11, a30 = a.m12, a31 = a.m13, a32 = a.m14, a33 = a.m15;
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;
      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      if (!det) return null;
      det = 1 / det;
      out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      return out;
    };
    mat4.adjoint = function(out, a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11, a30 = a.m12, a31 = a.m13, a32 = a.m14, a33 = a.m15;
      out.m00 = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
      out.m01 = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
      out.m02 = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
      out.m03 = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
      out.m04 = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
      out.m05 = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
      out.m06 = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
      out.m07 = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
      out.m08 = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
      out.m09 = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
      out.m10 = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
      out.m11 = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
      out.m12 = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
      out.m13 = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
      out.m14 = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
      out.m15 = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
      return out;
    };
    mat4.determinant = function(a) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11, a30 = a.m12, a31 = a.m13, a32 = a.m14, a33 = a.m15;
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;
      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    };
    mat4.multiply = function(out, a, b) {
      var a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11, a30 = a.m12, a31 = a.m13, a32 = a.m14, a33 = a.m15;
      var b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03;
      out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b.m04;
      b1 = b.m05;
      b2 = b.m06;
      b3 = b.m07;
      out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b.m08;
      b1 = b.m09;
      b2 = b.m10;
      b3 = b.m11;
      out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b.m12;
      b1 = b.m13;
      b2 = b.m14;
      b3 = b.m15;
      out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    };
    mat4.mul = mat4.multiply;
    mat4.translate = function(out, a, v) {
      var x = v.x, y = v.y, z = v.z, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23;
      if (a === out) {
        out.m12 = a.m00 * x + a.m04 * y + a.m08 * z + a.m12;
        out.m13 = a.m01 * x + a.m05 * y + a.m09 * z + a.m13;
        out.m14 = a.m02 * x + a.m06 * y + a.m10 * z + a.m14;
        out.m15 = a.m03 * x + a.m07 * y + a.m11 * z + a.m15;
      } else {
        a00 = a.m00;
        a01 = a.m01;
        a02 = a.m02;
        a03 = a.m03;
        a10 = a.m04;
        a11 = a.m05;
        a12 = a.m06;
        a13 = a.m07;
        a20 = a.m08;
        a21 = a.m09;
        a22 = a.m10;
        a23 = a.m11;
        out.m00 = a00;
        out.m01 = a01;
        out.m02 = a02;
        out.m03 = a03;
        out.m04 = a10;
        out.m05 = a11;
        out.m06 = a12;
        out.m07 = a13;
        out.m08 = a20;
        out.m09 = a21;
        out.m10 = a22;
        out.m11 = a23;
        out.m12 = a00 * x + a10 * y + a20 * z + a.m12;
        out.m13 = a01 * x + a11 * y + a21 * z + a.m13;
        out.m14 = a02 * x + a12 * y + a22 * z + a.m14;
        out.m15 = a03 * x + a13 * y + a23 * z + a.m15;
      }
      return out;
    };
    mat4.scale = function(out, a, v) {
      var x = v.x, y = v.y, z = v.z;
      out.m00 = a.m00 * x;
      out.m01 = a.m01 * x;
      out.m02 = a.m02 * x;
      out.m03 = a.m03 * x;
      out.m04 = a.m04 * y;
      out.m05 = a.m05 * y;
      out.m06 = a.m06 * y;
      out.m07 = a.m07 * y;
      out.m08 = a.m08 * z;
      out.m09 = a.m09 * z;
      out.m10 = a.m10 * z;
      out.m11 = a.m11 * z;
      out.m12 = a.m12;
      out.m13 = a.m13;
      out.m14 = a.m14;
      out.m15 = a.m15;
      return out;
    };
    mat4.rotate = function(out, a, rad, axis) {
      var x = axis.x, y = axis.y, z = axis.z;
      var s, c, t, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, b00, b01, b02, b10, b11, b12, b20, b21, b22;
      var len = Math.sqrt(x * x + y * y + z * z);
      if (Math.abs(len) < EPSILON) return null;
      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      a00 = a.m00;
      a01 = a.m01;
      a02 = a.m02;
      a03 = a.m03;
      a10 = a.m04;
      a11 = a.m05;
      a12 = a.m06;
      a13 = a.m07;
      a20 = a.m08;
      a21 = a.m09;
      a22 = a.m10;
      a23 = a.m11;
      b00 = x * x * t + c;
      b01 = y * x * t + z * s;
      b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;
      b11 = y * y * t + c;
      b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;
      b21 = y * z * t - x * s;
      b22 = z * z * t + c;
      out.m00 = a00 * b00 + a10 * b01 + a20 * b02;
      out.m01 = a01 * b00 + a11 * b01 + a21 * b02;
      out.m02 = a02 * b00 + a12 * b01 + a22 * b02;
      out.m03 = a03 * b00 + a13 * b01 + a23 * b02;
      out.m04 = a00 * b10 + a10 * b11 + a20 * b12;
      out.m05 = a01 * b10 + a11 * b11 + a21 * b12;
      out.m06 = a02 * b10 + a12 * b11 + a22 * b12;
      out.m07 = a03 * b10 + a13 * b11 + a23 * b12;
      out.m08 = a00 * b20 + a10 * b21 + a20 * b22;
      out.m09 = a01 * b20 + a11 * b21 + a21 * b22;
      out.m10 = a02 * b20 + a12 * b21 + a22 * b22;
      out.m11 = a03 * b20 + a13 * b21 + a23 * b22;
      if (a !== out) {
        out.m12 = a.m12;
        out.m13 = a.m13;
        out.m14 = a.m14;
        out.m15 = a.m15;
      }
      return out;
    };
    mat4.rotateX = function(out, a, rad) {
      var s = Math.sin(rad), c = Math.cos(rad), a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11;
      if (a !== out) {
        out.m00 = a.m00;
        out.m01 = a.m01;
        out.m02 = a.m02;
        out.m03 = a.m03;
        out.m12 = a.m12;
        out.m13 = a.m13;
        out.m14 = a.m14;
        out.m15 = a.m15;
      }
      out.m04 = a10 * c + a20 * s;
      out.m05 = a11 * c + a21 * s;
      out.m06 = a12 * c + a22 * s;
      out.m07 = a13 * c + a23 * s;
      out.m08 = a20 * c - a10 * s;
      out.m09 = a21 * c - a11 * s;
      out.m10 = a22 * c - a12 * s;
      out.m11 = a23 * c - a13 * s;
      return out;
    };
    mat4.rotateY = function(out, a, rad) {
      var s = Math.sin(rad), c = Math.cos(rad), a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a20 = a.m08, a21 = a.m09, a22 = a.m10, a23 = a.m11;
      if (a !== out) {
        out.m04 = a.m04;
        out.m05 = a.m05;
        out.m06 = a.m06;
        out.m07 = a.m07;
        out.m12 = a.m12;
        out.m13 = a.m13;
        out.m14 = a.m14;
        out.m15 = a.m15;
      }
      out.m00 = a00 * c - a20 * s;
      out.m01 = a01 * c - a21 * s;
      out.m02 = a02 * c - a22 * s;
      out.m03 = a03 * c - a23 * s;
      out.m08 = a00 * s + a20 * c;
      out.m09 = a01 * s + a21 * c;
      out.m10 = a02 * s + a22 * c;
      out.m11 = a03 * s + a23 * c;
      return out;
    };
    mat4.rotateZ = function(out, a, rad) {
      var s = Math.sin(rad), c = Math.cos(rad), a00 = a.m00, a01 = a.m01, a02 = a.m02, a03 = a.m03, a10 = a.m04, a11 = a.m05, a12 = a.m06, a13 = a.m07;
      if (a !== out) {
        out.m08 = a.m08;
        out.m09 = a.m09;
        out.m10 = a.m10;
        out.m11 = a.m11;
        out.m12 = a.m12;
        out.m13 = a.m13;
        out.m14 = a.m14;
        out.m15 = a.m15;
      }
      out.m00 = a00 * c + a10 * s;
      out.m01 = a01 * c + a11 * s;
      out.m02 = a02 * c + a12 * s;
      out.m03 = a03 * c + a13 * s;
      out.m04 = a10 * c - a00 * s;
      out.m05 = a11 * c - a01 * s;
      out.m06 = a12 * c - a02 * s;
      out.m07 = a13 * c - a03 * s;
      return out;
    };
    mat4.fromTranslation = function(out, v) {
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = 1;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = 0;
      out.m10 = 1;
      out.m11 = 0;
      out.m12 = v.x;
      out.m13 = v.y;
      out.m14 = v.z;
      out.m15 = 1;
      return out;
    };
    mat4.fromScaling = function(out, v) {
      out.m00 = v.x;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = v.y;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = 0;
      out.m10 = v.z;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.fromRotation = function(out, rad, axis) {
      var x = axis.x, y = axis.y, z = axis.z;
      var len = Math.sqrt(x * x + y * y + z * z);
      var s, c, t;
      if (Math.abs(len) < EPSILON) return null;
      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      out.m00 = x * x * t + c;
      out.m01 = y * x * t + z * s;
      out.m02 = z * x * t - y * s;
      out.m03 = 0;
      out.m04 = x * y * t - z * s;
      out.m05 = y * y * t + c;
      out.m06 = z * y * t + x * s;
      out.m07 = 0;
      out.m08 = x * z * t + y * s;
      out.m09 = y * z * t - x * s;
      out.m10 = z * z * t + c;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.fromXRotation = function(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = 1;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = c;
      out.m06 = s;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = -s;
      out.m10 = c;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.fromYRotation = function(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = c;
      out.m01 = 0;
      out.m02 = -s;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = 1;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = s;
      out.m09 = 0;
      out.m10 = c;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.fromZRotation = function(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out.m00 = c;
      out.m01 = s;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = -s;
      out.m05 = c;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = 0;
      out.m10 = 1;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.fromRT = function(out, q, v) {
      var x = q.x, y = q.y, z = q.z, w = q.w;
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out.m00 = 1 - (yy + zz);
      out.m01 = xy + wz;
      out.m02 = xz - wy;
      out.m03 = 0;
      out.m04 = xy - wz;
      out.m05 = 1 - (xx + zz);
      out.m06 = yz + wx;
      out.m07 = 0;
      out.m08 = xz + wy;
      out.m09 = yz - wx;
      out.m10 = 1 - (xx + yy);
      out.m11 = 0;
      out.m12 = v.x;
      out.m13 = v.y;
      out.m14 = v.z;
      out.m15 = 1;
      return out;
    };
    mat4.getTranslation = function(out, mat) {
      out.x = mat.m12;
      out.y = mat.m13;
      out.z = mat.m14;
      return out;
    };
    mat4.getScaling = function(out, mat) {
      var m11 = mat.m00, m12 = mat.m01, m13 = mat.m02, m21 = mat.m04, m22 = mat.m05, m23 = mat.m06, m31 = mat.m08, m32 = mat.m09, m33 = mat.m10;
      out.x = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
      out.y = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
      out.z = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
      return out;
    };
    mat4.getRotation = function(out, mat) {
      var trace = mat.m00 + mat.m05 + mat.m10;
      var S = 0;
      if (trace > 0) {
        S = 2 * Math.sqrt(trace + 1);
        out.w = .25 * S;
        out.x = (mat.m06 - mat.m09) / S;
        out.y = (mat.m08 - mat.m02) / S;
        out.z = (mat.m01 - mat.m04) / S;
      } else if (mat.m00 > mat.m05 & mat.m00 > mat.m10) {
        S = 2 * Math.sqrt(1 + mat.m00 - mat.m05 - mat.m10);
        out.w = (mat.m06 - mat.m09) / S;
        out.x = .25 * S;
        out.y = (mat.m01 + mat.m04) / S;
        out.z = (mat.m08 + mat.m02) / S;
      } else if (mat.m05 > mat.m10) {
        S = 2 * Math.sqrt(1 + mat.m05 - mat.m00 - mat.m10);
        out.w = (mat.m08 - mat.m02) / S;
        out.x = (mat.m01 + mat.m04) / S;
        out.y = .25 * S;
        out.z = (mat.m06 + mat.m09) / S;
      } else {
        S = 2 * Math.sqrt(1 + mat.m10 - mat.m00 - mat.m05);
        out.w = (mat.m01 - mat.m04) / S;
        out.x = (mat.m08 + mat.m02) / S;
        out.y = (mat.m06 + mat.m09) / S;
        out.z = .25 * S;
      }
      return out;
    };
    mat4.fromRTS = function(out, q, v, s) {
      var x = q.x, y = q.y, z = q.z, w = q.w;
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s.x;
      var sy = s.y;
      var sz = s.z;
      out.m00 = (1 - (yy + zz)) * sx;
      out.m01 = (xy + wz) * sx;
      out.m02 = (xz - wy) * sx;
      out.m03 = 0;
      out.m04 = (xy - wz) * sy;
      out.m05 = (1 - (xx + zz)) * sy;
      out.m06 = (yz + wx) * sy;
      out.m07 = 0;
      out.m08 = (xz + wy) * sz;
      out.m09 = (yz - wx) * sz;
      out.m10 = (1 - (xx + yy)) * sz;
      out.m11 = 0;
      out.m12 = v.x;
      out.m13 = v.y;
      out.m14 = v.z;
      out.m15 = 1;
      return out;
    };
    mat4.fromRTSOrigin = function(out, q, v, s, o) {
      var x = q.x, y = q.y, z = q.z, w = q.w;
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s.x;
      var sy = s.y;
      var sz = s.z;
      var ox = o.x;
      var oy = o.y;
      var oz = o.z;
      out.m00 = (1 - (yy + zz)) * sx;
      out.m01 = (xy + wz) * sx;
      out.m02 = (xz - wy) * sx;
      out.m03 = 0;
      out.m04 = (xy - wz) * sy;
      out.m05 = (1 - (xx + zz)) * sy;
      out.m06 = (yz + wx) * sy;
      out.m07 = 0;
      out.m08 = (xz + wy) * sz;
      out.m09 = (yz - wx) * sz;
      out.m10 = (1 - (xx + yy)) * sz;
      out.m11 = 0;
      out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
      out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
      out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
      out.m15 = 1;
      return out;
    };
    mat4.fromQuat = function(out, q) {
      var x = q.x, y = q.y, z = q.z, w = q.w;
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out.m00 = 1 - yy - zz;
      out.m01 = yx + wz;
      out.m02 = zx - wy;
      out.m03 = 0;
      out.m04 = yx - wz;
      out.m05 = 1 - xx - zz;
      out.m06 = zy + wx;
      out.m07 = 0;
      out.m08 = zx + wy;
      out.m09 = zy - wx;
      out.m10 = 1 - xx - yy;
      out.m11 = 0;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 0;
      out.m15 = 1;
      return out;
    };
    mat4.frustum = function(out, left, right, bottom, top, near, far) {
      var rl = 1 / (right - left);
      var tb = 1 / (top - bottom);
      var nf = 1 / (near - far);
      out.m00 = 2 * near * rl;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = 2 * near * tb;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = (right + left) * rl;
      out.m09 = (top + bottom) * tb;
      out.m10 = (far + near) * nf;
      out.m11 = -1;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = far * near * 2 * nf;
      out.m15 = 0;
      return out;
    };
    mat4.perspective = function(out, fovy, aspect, near, far) {
      var f = 1 / Math.tan(fovy / 2);
      var nf = 1 / (near - far);
      out.m00 = f / aspect;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = f;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = 0;
      out.m10 = (far + near) * nf;
      out.m11 = -1;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = 2 * far * near * nf;
      out.m15 = 0;
      return out;
    };
    mat4.perspectiveFromFieldOfView = function(out, fov, near, far) {
      var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
      var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
      var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
      var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
      var xScale = 2 / (leftTan + rightTan);
      var yScale = 2 / (upTan + downTan);
      out.m00 = xScale;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = yScale;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = -(leftTan - rightTan) * xScale * .5;
      out.m09 = (upTan - downTan) * yScale * .5;
      out.m10 = far / (near - far);
      out.m11 = -1;
      out.m12 = 0;
      out.m13 = 0;
      out.m14 = far * near / (near - far);
      out.m15 = 0;
      return out;
    };
    mat4.ortho = function(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right);
      var bt = 1 / (bottom - top);
      var nf = 1 / (near - far);
      out.m00 = -2 * lr;
      out.m01 = 0;
      out.m02 = 0;
      out.m03 = 0;
      out.m04 = 0;
      out.m05 = -2 * bt;
      out.m06 = 0;
      out.m07 = 0;
      out.m08 = 0;
      out.m09 = 0;
      out.m10 = 2 * nf;
      out.m11 = 0;
      out.m12 = (left + right) * lr;
      out.m13 = (top + bottom) * bt;
      out.m14 = (far + near) * nf;
      out.m15 = 1;
      return out;
    };
    mat4.lookAt = function(out, eye, center, up) {
      var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
      var eyex = eye.x;
      var eyey = eye.y;
      var eyez = eye.z;
      var upx = up.x;
      var upy = up.y;
      var upz = up.z;
      var centerx = center.x;
      var centery = center.y;
      var centerz = center.z;
      if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) return mat4.identity(out);
      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;
      len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;
      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
      if (len) {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      } else {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      }
      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;
      len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
      if (len) {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
      } else {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      }
      out.m00 = x0;
      out.m01 = y0;
      out.m02 = z0;
      out.m03 = 0;
      out.m04 = x1;
      out.m05 = y1;
      out.m06 = z1;
      out.m07 = 0;
      out.m08 = x2;
      out.m09 = y2;
      out.m10 = z2;
      out.m11 = 0;
      out.m12 = -(x0 * eyex + x1 * eyey + x2 * eyez);
      out.m13 = -(y0 * eyex + y1 * eyey + y2 * eyez);
      out.m14 = -(z0 * eyex + z1 * eyey + z2 * eyez);
      out.m15 = 1;
      return out;
    };
    mat4.str = function(a) {
      return "mat4(" + a.m00 + ", " + a.m01 + ", " + a.m02 + ", " + a.m03 + ", " + a.m04 + ", " + a.m05 + ", " + a.m06 + ", " + a.m07 + ", " + a.m08 + ", " + a.m09 + ", " + a.m10 + ", " + a.m11 + ", " + a.m12 + ", " + a.m13 + ", " + a.m14 + ", " + a.m15 + ")";
    };
    mat4.array = function(out, m) {
      out[0] = m.m00;
      out[1] = m.m01;
      out[2] = m.m02;
      out[3] = m.m03;
      out[4] = m.m04;
      out[5] = m.m05;
      out[6] = m.m06;
      out[7] = m.m07;
      out[8] = m.m08;
      out[9] = m.m09;
      out[10] = m.m10;
      out[11] = m.m11;
      out[12] = m.m12;
      out[13] = m.m13;
      out[14] = m.m14;
      out[15] = m.m15;
      return out;
    };
    mat4.frob = function(a) {
      return Math.sqrt(Math.pow(a.m00, 2) + Math.pow(a.m01, 2) + Math.pow(a.m02, 2) + Math.pow(a.m03, 2) + Math.pow(a.m04, 2) + Math.pow(a.m05, 2) + Math.pow(a.m06, 2) + Math.pow(a.m07, 2) + Math.pow(a.m08, 2) + Math.pow(a.m09, 2) + Math.pow(a.m10, 2) + Math.pow(a.m11, 2) + Math.pow(a.m12, 2) + Math.pow(a.m13, 2) + Math.pow(a.m14, 2) + Math.pow(a.m15, 2));
    };
    mat4.add = function(out, a, b) {
      out.m00 = a.m00 + b.m00;
      out.m01 = a.m01 + b.m01;
      out.m02 = a.m02 + b.m02;
      out.m03 = a.m03 + b.m03;
      out.m04 = a.m04 + b.m04;
      out.m05 = a.m05 + b.m05;
      out.m06 = a.m06 + b.m06;
      out.m07 = a.m07 + b.m07;
      out.m08 = a.m08 + b.m08;
      out.m09 = a.m09 + b.m09;
      out.m10 = a.m10 + b.m10;
      out.m11 = a.m11 + b.m11;
      out.m12 = a.m12 + b.m12;
      out.m13 = a.m13 + b.m13;
      out.m14 = a.m14 + b.m14;
      out.m15 = a.m15 + b.m15;
      return out;
    };
    mat4.subtract = function(out, a, b) {
      out.m00 = a.m00 - b.m00;
      out.m01 = a.m01 - b.m01;
      out.m02 = a.m02 - b.m02;
      out.m03 = a.m03 - b.m03;
      out.m04 = a.m04 - b.m04;
      out.m05 = a.m05 - b.m05;
      out.m06 = a.m06 - b.m06;
      out.m07 = a.m07 - b.m07;
      out.m08 = a.m08 - b.m08;
      out.m09 = a.m09 - b.m09;
      out.m10 = a.m10 - b.m10;
      out.m11 = a.m11 - b.m11;
      out.m12 = a.m12 - b.m12;
      out.m13 = a.m13 - b.m13;
      out.m14 = a.m14 - b.m14;
      out.m15 = a.m15 - b.m15;
      return out;
    };
    mat4.sub = mat4.subtract;
    mat4.multiplyScalar = function(out, a, b) {
      out.m00 = a.m00 * b;
      out.m01 = a.m01 * b;
      out.m02 = a.m02 * b;
      out.m03 = a.m03 * b;
      out.m04 = a.m04 * b;
      out.m05 = a.m05 * b;
      out.m06 = a.m06 * b;
      out.m07 = a.m07 * b;
      out.m08 = a.m08 * b;
      out.m09 = a.m09 * b;
      out.m10 = a.m10 * b;
      out.m11 = a.m11 * b;
      out.m12 = a.m12 * b;
      out.m13 = a.m13 * b;
      out.m14 = a.m14 * b;
      out.m15 = a.m15 * b;
      return out;
    };
    mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
      out.m00 = a.m00 + b.m00 * scale;
      out.m01 = a.m01 + b.m01 * scale;
      out.m02 = a.m02 + b.m02 * scale;
      out.m03 = a.m03 + b.m03 * scale;
      out.m04 = a.m04 + b.m04 * scale;
      out.m05 = a.m05 + b.m05 * scale;
      out.m06 = a.m06 + b.m06 * scale;
      out.m07 = a.m07 + b.m07 * scale;
      out.m08 = a.m08 + b.m08 * scale;
      out.m09 = a.m09 + b.m09 * scale;
      out.m10 = a.m10 + b.m10 * scale;
      out.m11 = a.m11 + b.m11 * scale;
      out.m12 = a.m12 + b.m12 * scale;
      out.m13 = a.m13 + b.m13 * scale;
      out.m14 = a.m14 + b.m14 * scale;
      out.m15 = a.m15 + b.m15 * scale;
      return out;
    };
    mat4.exactEquals = function(a, b) {
      return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08 && a.m09 === b.m09 && a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12 && a.m13 === b.m13 && a.m14 === b.m14 && a.m15 === b.m15;
    };
    mat4.equals = function(a, b) {
      var a0 = a.m00, a1 = a.m01, a2 = a.m02, a3 = a.m03, a4 = a.m04, a5 = a.m05, a6 = a.m06, a7 = a.m07, a8 = a.m08, a9 = a.m09, a10 = a.m10, a11 = a.m11, a12 = a.m12, a13 = a.m13, a14 = a.m14, a15 = a.m15;
      var b0 = b.m00, b1 = b.m01, b2 = b.m02, b3 = b.m03, b4 = b.m04, b5 = b.m05, b6 = b.m06, b7 = b.m07, b8 = b.m08, b9 = b.m09, b10 = b.m10, b11 = b.m11, b12 = b.m12, b13 = b.m13, b14 = b.m14, b15 = b.m15;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
    };
    var _tmp$8 = new Array(3);
    var _color3 = function _color3(r, g, b) {
      this.r = r;
      this.g = g;
      this.b = b;
    };
    _color3.prototype.toJSON = function toJSON() {
      _tmp$8[0] = this.r;
      _tmp$8[1] = this.g;
      _tmp$8[2] = this.b;
      return _tmp$8;
    };
    var color3 = {};
    color3.create = function() {
      return new _color3(1, 1, 1);
    };
    color3.new = function(r, g, b) {
      return new _color3(r, g, b);
    };
    color3.clone = function(a) {
      return new _color3(a.r, a.g, a.b, a.a);
    };
    color3.copy = function(out, a) {
      out.r = a.r;
      out.g = a.g;
      out.b = a.b;
      return out;
    };
    color3.set = function(out, r, g, b) {
      out.r = r;
      out.g = g;
      out.b = b;
      return out;
    };
    color3.fromHex = function(out, hex) {
      var r = (hex >> 16) / 255;
      var g = (hex >> 8 & 255) / 255;
      var b = (255 & hex) / 255;
      out.r = r;
      out.g = g;
      out.b = b;
      return out;
    };
    color3.add = function(out, a, b) {
      out.r = a.r + b.r;
      out.g = a.g + b.g;
      out.b = a.b + b.b;
      return out;
    };
    color3.subtract = function(out, a, b) {
      out.r = a.r - b.r;
      out.g = a.g - b.g;
      out.b = a.b - b.b;
      return out;
    };
    color3.sub = color3.subtract;
    color3.multiply = function(out, a, b) {
      out.r = a.r * b.r;
      out.g = a.g * b.g;
      out.b = a.b * b.b;
      return out;
    };
    color3.mul = color3.multiply;
    color3.divide = function(out, a, b) {
      out.r = a.r / b.r;
      out.g = a.g / b.g;
      out.b = a.b / b.b;
      return out;
    };
    color3.div = color3.divide;
    color3.scale = function(out, a, b) {
      out.r = a.r * b;
      out.g = a.g * b;
      out.b = a.b * b;
      return out;
    };
    color3.lerp = function(out, a, b, t) {
      var ar = a.r, ag = a.g, ab = a.b;
      out.r = ar + t * (b.r - ar);
      out.g = ag + t * (b.g - ag);
      out.b = ab + t * (b.b - ab);
      return out;
    };
    color3.str = function(a) {
      return "color3(" + a.r + ", " + a.g + ", " + a.b + ")";
    };
    color3.array = function(out, a) {
      out[0] = a.r;
      out[1] = a.g;
      out[2] = a.b;
      return out;
    };
    color3.exactEquals = function(a, b) {
      return a.r === b.r && a.g === b.g && a.b === b.b;
    };
    color3.equals = function(a, b) {
      var a0 = a.r, a1 = a.g, a2 = a.b;
      var b0 = b.r, b1 = b.g, b2 = b.b;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
    };
    color3.hex = function(a) {
      return 255 * a.r << 16 | 255 * a.g << 8 | 255 * a.b;
    };
    var _tmp$9 = new Array(4);
    var _color4 = function _color4(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    };
    _color4.prototype.toJSON = function toJSON() {
      _tmp$9[0] = this.r;
      _tmp$9[1] = this.g;
      _tmp$9[2] = this.b;
      _tmp$9[3] = this.a;
      return _tmp$9;
    };
    var color4 = {};
    color4.create = function() {
      return new _color4(1, 1, 1, 1);
    };
    color4.new = function(r, g, b, a) {
      return new _color4(r, g, b, a);
    };
    color4.clone = function(a) {
      return new _color4(a.r, a.g, a.b, a.a);
    };
    color4.copy = function(out, a) {
      out.r = a.r;
      out.g = a.g;
      out.b = a.b;
      out.a = a.a;
      return out;
    };
    color4.set = function(out, r, g, b, a) {
      out.r = r;
      out.g = g;
      out.b = b;
      out.a = a;
      return out;
    };
    color4.fromHex = function(out, hex) {
      var r = (hex >> 24) / 255;
      var g = (hex >> 16 & 255) / 255;
      var b = (hex >> 8 & 255) / 255;
      var a = (255 & hex) / 255;
      out.r = r;
      out.g = g;
      out.b = b;
      out.a = a;
      return out;
    };
    color4.add = function(out, a, b) {
      out.r = a.r + b.r;
      out.g = a.g + b.g;
      out.b = a.b + b.b;
      out.a = a.a + b.a;
      return out;
    };
    color4.subtract = function(out, a, b) {
      out.r = a.r - b.r;
      out.g = a.g - b.g;
      out.b = a.b - b.b;
      out.a = a.a - b.a;
      return out;
    };
    color4.sub = color4.subtract;
    color4.multiply = function(out, a, b) {
      out.r = a.r * b.r;
      out.g = a.g * b.g;
      out.b = a.b * b.b;
      out.a = a.a * b.a;
      return out;
    };
    color4.mul = color4.multiply;
    color4.divide = function(out, a, b) {
      out.r = a.r / b.r;
      out.g = a.g / b.g;
      out.b = a.b / b.b;
      out.a = a.a / b.a;
      return out;
    };
    color4.div = color4.divide;
    color4.scale = function(out, a, b) {
      out.r = a.r * b;
      out.g = a.g * b;
      out.b = a.b * b;
      out.a = a.a * b;
      return out;
    };
    color4.lerp = function(out, a, b, t) {
      var ar = a.r, ag = a.g, ab = a.b, aa = a.a;
      out.r = ar + t * (b.r - ar);
      out.g = ag + t * (b.g - ag);
      out.b = ab + t * (b.b - ab);
      out.a = aa + t * (b.a - aa);
      return out;
    };
    color4.str = function(a) {
      return "color4(" + a.r + ", " + a.g + ", " + a.b + ", " + a.a + ")";
    };
    color4.array = function(out, a) {
      out[0] = a.r;
      out[1] = a.g;
      out[2] = a.b;
      out[3] = a.a;
      return out;
    };
    color4.exactEquals = function(a, b) {
      return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
    };
    color4.equals = function(a, b) {
      var a0 = a.r, a1 = a.g, a2 = a.b, a3 = a.a;
      var b0 = b.r, b1 = b.g, b2 = b.b, b3 = b.a;
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
    };
    color4.hex = function(a) {
      return (255 * a.r << 24 | 255 * a.g << 16 | 255 * a.b << 8 | 255 * a.a) >>> 0;
    };
    var bits = bits_;
    var math = Object.freeze({
      bits: bits,
      vec2: vec2,
      vec3: vec3,
      vec4: vec4,
      quat: quat,
      mat2: mat2,
      mat23: mat23,
      mat3: mat3,
      mat4: mat4,
      color3: color3,
      color4: color4,
      EPSILON: EPSILON,
      equals: equals,
      approx: approx,
      clamp: clamp,
      clamp01: clamp01,
      lerp: lerp,
      toRadian: toRadian,
      toDegree: toDegree,
      random: random,
      randomRange: randomRange,
      randomRangeInt: randomRangeInt,
      nextPow2: nextPow2
    });
    var Device = function Device(canvasEL) {
      var ctx;
      try {
        ctx = canvasEL.getContext("2d");
      } catch (err) {
        console.error(err);
        return;
      }
      this._canvas = canvasEL;
      this._ctx = ctx;
      this._caps = {};
      this._stats = {
        drawcalls: 0
      };
      this._vx = this._vy = this._vw = this._vh = 0;
      this._sx = this._sy = this._sw = this._sh = 0;
    };
    Device.prototype._restoreTexture = function _restoreTexture(unit) {};
    Device.prototype.setViewport = function setViewport(x, y, w, h) {
      if (this._vx !== x || this._vy !== y || this._vw !== w || this._vh !== h) {
        this._vx = x;
        this._vy = y;
        this._vw = w;
        this._vh = h;
      }
    };
    Device.prototype.setScissor = function setScissor(x, y, w, h) {
      if (this._sx !== x || this._sy !== y || this._sw !== w || this._sh !== h) {
        this._sx = x;
        this._sy = y;
        this._sw = w;
        this._sh = h;
      }
    };
    Device.prototype.clear = function clear(color) {
      var ctx = this._ctx;
      ctx.clearRect(this._vx, this._vy, this._vw, this._vh);
      if (color && (0 !== color[0] || 0 !== color[1] || 0 !== color[2])) {
        ctx.fillStyle = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
        ctx.globalAlpha = color[3];
        ctx.fillRect(this._vx, this._vy, this._vw, this._vh);
      }
    };
    var Texture2D = function Texture2D(device, options) {
      this._device = device;
      this._width = 4;
      this._height = 4;
      this._image = null;
      if (options) {
        void 0 !== options.width && (this._width = options.width);
        void 0 !== options.height && (this._height = options.height);
        this.updateImage(options);
      }
    };
    Texture2D.prototype.update = function update(options) {
      this.updateImage(options);
    };
    Texture2D.prototype.updateImage = function updateImage(options) {
      if (options.images && options.images[0]) {
        var image = options.images[0];
        image && image !== this._image && (this._image = image);
      }
    };
    Texture2D.prototype.destroy = function destroy() {
      this._image = null;
    };
    var canvas = {
      Device: Device,
      Texture2D: Texture2D
    };
    var Texture2D$2 = canvas.Texture2D;
    var Device$2 = canvas.Device;
    var gfx = {};
    var renderEngine = {
      Device: Device$2,
      Texture2D: Texture2D$2,
      canvas: canvas,
      RenderData: RenderData,
      RecyclePool: RecyclePool,
      Pool: Pool,
      math: math,
      gfx: gfx
    };
    module.exports = renderEngine;
  }), {} ],
  129: [ (function(require, module, exports) {
    var DONOTHING = 0;
    var LOCAL_TRANSFORM = 1;
    var WORLD_TRANSFORM = 2;
    var TRANSFORM = LOCAL_TRANSFORM | WORLD_TRANSFORM;
    var UPDATE_RENDER_DATA = 4;
    var OPACITY = 8;
    var COLOR = 16;
    var RENDER = 32;
    var CUSTOM_IA_RENDER = 64;
    var CHILDREN = 128;
    var POST_UPDATE_RENDER_DATA = 256;
    var POST_RENDER = 512;
    var FINAL = 1024;
    var _walker = null;
    var _cullingMask = 0;
    function RenderFlow() {
      this._func = init;
      this._next = null;
    }
    var _proto = RenderFlow.prototype;
    _proto._doNothing = function() {};
    _proto._localTransform = function(node) {
      node._updateLocalMatrix();
      node._renderFlag &= ~LOCAL_TRANSFORM;
      this._next._func(node);
    };
    _proto._worldTransform = function(node) {
      _walker.worldMatDirty++;
      var t = node._matrix;
      var position = node._position;
      t.m12 = position.x;
      t.m13 = position.y;
      node._mulMat(node._worldMatrix, node._parent._worldMatrix, t);
      node._renderFlag &= ~WORLD_TRANSFORM;
      this._next._func(node);
      _walker.worldMatDirty--;
    };
    _proto._color = function(node) {
      var comp = node._renderComponent;
      comp ? comp._updateColor() : node._renderFlag &= ~COLOR;
      this._next._func(node);
    };
    _proto._opacity = function(node) {
      _walker.parentOpacityDirty++;
      node._renderFlag &= ~OPACITY;
      this._next._func(node);
      _walker.parentOpacityDirty--;
    };
    _proto._updateRenderData = function(node) {
      var comp = node._renderComponent;
      comp._assembler.updateRenderData(comp);
      node._renderFlag &= ~UPDATE_RENDER_DATA;
      this._next._func(node);
    };
    _proto._render = function(node) {
      var comp = node._renderComponent;
      _walker._commitComp(comp, comp._assembler, node._cullingMask);
      this._next._func(node);
    };
    _proto._customIARender = function(node) {
      var comp = node._renderComponent;
      _walker._commitIA(comp, comp._assembler, node._cullingMask);
      this._next._func(node);
    };
    _proto._children = function(node) {
      var cullingMask = _cullingMask;
      var parentOpacity = _walker.parentOpacity;
      _walker.parentOpacity *= node._opacity / 255;
      var worldTransformFlag = _walker.worldMatDirty ? WORLD_TRANSFORM : 0;
      var worldOpacityFlag = _walker.parentOpacityDirty ? COLOR : 0;
      var children = node._children;
      for (var i = 0, l = children.length; i < l; i++) {
        var c = children[i];
        c._renderFlag |= worldTransformFlag | worldOpacityFlag;
        if (!c._activeInHierarchy || 0 === c._opacity) continue;
        _cullingMask = c._cullingMask = 0 === c.groupIndex ? cullingMask : 1 << c.groupIndex;
        c._color.a = c._opacity * _walker.parentOpacity;
        flows[c._renderFlag]._func(c);
        c._color.a = 255;
      }
      _walker.parentOpacity = parentOpacity;
      this._next._func(node);
      _cullingMask = cullingMask;
    };
    _proto._postUpdateRenderData = function(node) {
      var comp = node._renderComponent;
      comp._postAssembler && comp._postAssembler.updateRenderData(comp);
      node._renderFlag &= ~POST_UPDATE_RENDER_DATA;
      this._next._func(node);
    };
    _proto._postRender = function(node) {
      var comp = node._renderComponent;
      _walker._commitComp(comp, comp._postAssembler, node._cullingMask);
      this._next._func(node);
    };
    var EMPTY_FLOW = new RenderFlow();
    EMPTY_FLOW._func = EMPTY_FLOW._doNothing;
    EMPTY_FLOW._next = EMPTY_FLOW;
    var flows = {};
    function createFlow(flag, next) {
      var flow = new RenderFlow();
      flow._next = next || EMPTY_FLOW;
      switch (flag) {
       case DONOTHING:
        flow._func = flow._doNothing;
        break;

       case LOCAL_TRANSFORM:
        flow._func = flow._localTransform;
        break;

       case WORLD_TRANSFORM:
        flow._func = flow._worldTransform;
        break;

       case COLOR:
        flow._func = flow._color;
        break;

       case OPACITY:
        flow._func = flow._opacity;
        break;

       case UPDATE_RENDER_DATA:
        flow._func = flow._updateRenderData;
        break;

       case RENDER:
        flow._func = flow._render;
        break;

       case CUSTOM_IA_RENDER:
        flow._func = flow._customIARender;
        break;

       case CHILDREN:
        flow._func = flow._children;
        break;

       case POST_UPDATE_RENDER_DATA:
        flow._func = flow._postUpdateRenderData;
        break;

       case POST_RENDER:
        flow._func = flow._postRender;
      }
      return flow;
    }
    function getFlow(flag) {
      var flow = null;
      var tFlag = FINAL;
      while (tFlag > 0) {
        tFlag & flag && (flow = createFlow(tFlag, flow));
        tFlag >>= 1;
      }
      return flow;
    }
    function render(scene) {
      _cullingMask = 1 << scene.groupIndex;
      if (scene._renderFlag & WORLD_TRANSFORM) {
        _walker.worldMatDirty++;
        scene._calculWorldMatrix();
        scene._renderFlag &= ~WORLD_TRANSFORM;
        flows[scene._renderFlag]._func(scene);
        _walker.worldMatDirty--;
      } else flows[scene._renderFlag]._func(scene);
    }
    function init(node) {
      var flag = node._renderFlag;
      var r = flows[flag] = getFlow(flag);
      r._func(node);
    }
    RenderFlow.flows = flows;
    RenderFlow.createFlow = createFlow;
    RenderFlow.render = render;
    RenderFlow.init = function(walker) {
      _walker = walker;
      flows[0] = EMPTY_FLOW;
      for (var i = 1; i < FINAL; i++) flows[i] = new RenderFlow();
    };
    RenderFlow.FLAG_DONOTHING = DONOTHING;
    RenderFlow.FLAG_LOCAL_TRANSFORM = LOCAL_TRANSFORM;
    RenderFlow.FLAG_WORLD_TRANSFORM = WORLD_TRANSFORM;
    RenderFlow.FLAG_TRANSFORM = TRANSFORM;
    RenderFlow.FLAG_COLOR = COLOR;
    RenderFlow.FLAG_OPACITY = OPACITY;
    RenderFlow.FLAG_UPDATE_RENDER_DATA = UPDATE_RENDER_DATA;
    RenderFlow.FLAG_RENDER = RENDER;
    RenderFlow.FLAG_CUSTOM_IA_RENDER = CUSTOM_IA_RENDER;
    RenderFlow.FLAG_CHILDREN = CHILDREN;
    RenderFlow.FLAG_POST_UPDATE_RENDER_DATA = POST_UPDATE_RENDER_DATA;
    RenderFlow.FLAG_POST_RENDER = POST_RENDER;
    RenderFlow.FLAG_FINAL = FINAL;
    module.exports = cc.RenderFlow = RenderFlow;
  }), {} ],
  130: [ (function(require, module, exports) {
    var macro = require("../../../platform/CCMacro");
    var Label = require("../../../components/CCLabel");
    var Overflow = Label.Overflow;
    var textUtils = require("../../../utils/text-utils");
    var FontLetterDefinition = function() {
      this._u = 0;
      this._v = 0;
      this._width = 0;
      this._height = 0;
      this._offsetX = 0;
      this._offsetY = 0;
      this._textureID = 0;
      this._validDefinition = false;
      this._xAdvance = 0;
    };
    cc.FontAtlas = function(fntConfig) {
      this._letterDefinitions = {};
    };
    cc.FontAtlas.prototype = {
      constructor: cc.FontAtlas,
      addLetterDefinitions: function(letter, letterDefinition) {
        this._letterDefinitions[letter] = letterDefinition;
      },
      cloneLetterDefinition: function() {
        var copyLetterDefinitions = {};
        for (var key in this._letterDefinitions) {
          var value = new FontLetterDefinition();
          cc.js.mixin(value, this._letterDefinitions[key]);
          copyLetterDefinitions[key] = value;
        }
        return copyLetterDefinitions;
      },
      assignLetterDefinitions: function(letterDefinition) {
        for (var key in this._letterDefinitions) {
          var newValue = letterDefinition[key];
          var oldValue = this._letterDefinitions[key];
          cc.js.mixin(oldValue, newValue);
        }
      },
      scaleFontLetterDefinition: function(scaleFactor) {
        for (var fontDefinition in this._letterDefinitions) {
          var letterDefinitions = this._letterDefinitions[fontDefinition];
          letterDefinitions._width *= scaleFactor;
          letterDefinitions._height *= scaleFactor;
          letterDefinitions._offsetX *= scaleFactor;
          letterDefinitions._offsetY *= scaleFactor;
          letterDefinitions._xAdvance *= scaleFactor;
        }
      },
      getLetterDefinitionForChar: function(char) {
        var hasKey = this._letterDefinitions.hasOwnProperty(char.charCodeAt(0));
        var letterDefinition = void 0;
        letterDefinition = hasKey ? this._letterDefinitions[char.charCodeAt(0)] : null;
        return letterDefinition;
      }
    };
    var LetterInfo = function() {
      this._char = "";
      this._valid = true;
      this._positionX = 0;
      this._positionY = 0;
      this._lineIndex = 0;
    };
    var _tmpRect = cc.rect();
    var _comp = null;
    var _horizontalKernings = [];
    var _lettersInfo = [];
    var _linesWidth = [];
    var _linesOffsetX = [];
    var _labelDimensions = cc.size();
    var _fontAtlas = null;
    var _fntConfig = null;
    var _numberOfLines = 0;
    var _textDesiredHeight = 0;
    var _letterOffsetY = 0;
    var _tailoredTopY = 0;
    var _tailoredBottomY = 0;
    var _bmfontScale = 1;
    var _lineBreakWithoutSpaces = false;
    var _spriteFrame = null;
    var _lineSpacing = 0;
    var _string = "";
    var _fontSize = 0;
    var _originFontSize = 0;
    var _contentSize = cc.size();
    var _hAlign = 0;
    var _vAlign = 0;
    var _spacingX = 0;
    var _lineHeight = 0;
    var _overflow = 0;
    var _isWrapText = false;
    var _labelWidth = 0;
    var _labelHeight = 0;
    var _maxLineWidth = 0;
    module.exports = {
      updateRenderData: function(comp) {
        if (!comp._renderData.vertDirty) return;
        if (_comp === comp) return;
        _comp = comp;
        this._updateProperties();
        this._updateContent();
        _comp._actualFontSize = _fontSize;
        _comp.node.setContentSize(_contentSize);
        _comp._renderData.vertDirty = _comp._renderData.uvDirty = false;
        _comp = null;
        this._resetProperties();
      },
      _updateFontScale: function() {
        _bmfontScale = _fontSize / _originFontSize;
      },
      _updateProperties: function() {
        var fontAsset = _comp.font;
        _spriteFrame = fontAsset.spriteFrame;
        _fntConfig = fontAsset._fntConfig;
        _fontAtlas = _comp._fontAtlas;
        if (!_fontAtlas) {
          _fontAtlas = new cc.FontAtlas(_fntConfig);
          var fontDict = _fntConfig.fontDefDictionary;
          for (var fontDef in fontDict) {
            var letterDefinition = new FontLetterDefinition();
            var rect = fontDict[fontDef].rect;
            letterDefinition._offsetX = fontDict[fontDef].xOffset;
            letterDefinition._offsetY = fontDict[fontDef].yOffset;
            letterDefinition._width = rect.width;
            letterDefinition._height = rect.height;
            letterDefinition._u = rect.x;
            letterDefinition._v = rect.y;
            letterDefinition._textureID = 0;
            letterDefinition._validDefinition = true;
            letterDefinition._xAdvance = fontDict[fontDef].xAdvance;
            _fontAtlas.addLetterDefinitions(fontDef, letterDefinition);
          }
          _comp._fontAtlas = _fontAtlas;
        }
        _string = _comp.string.toString();
        _fontSize = _comp.fontSize;
        _originFontSize = _fntConfig.fontSize;
        _contentSize.width = _comp.node._contentSize.width;
        _contentSize.height = _comp.node._contentSize.height;
        _hAlign = _comp.horizontalAlign;
        _vAlign = _comp.verticalAlign;
        _spacingX = _comp.spacingX;
        _overflow = _comp.overflow;
        _lineHeight = _comp._lineHeight;
        _isWrapText = _overflow !== Overflow.NONE && (_overflow === Overflow.RESIZE_HEIGHT || _comp.enableWrapText);
        this._setupBMFontOverflowMetrics();
      },
      _resetProperties: function() {
        _fontAtlas = null;
        _fntConfig = null;
        _spriteFrame = null;
      },
      _updateContent: function() {
        this._updateFontScale();
        this._computeHorizontalKerningForText();
        this._alignText();
      },
      _computeHorizontalKerningForText: function() {
        var string = _string;
        var stringLen = string.length;
        var kerningDict = _fntConfig.kerningDict;
        var horizontalKernings = _horizontalKernings;
        var prev = -1;
        for (var i = 0; i < stringLen; ++i) {
          var key = string.charCodeAt(i);
          var kerningAmount = kerningDict[prev << 16 | 65535 & key] || 0;
          horizontalKernings[i] = i < stringLen - 1 ? kerningAmount : 0;
          prev = key;
        }
      },
      _multilineTextWrap: function(nextTokenFunc) {
        var textLen = _string.length;
        var lineIndex = 0;
        var nextTokenX = 0;
        var nextTokenY = 0;
        var longestLine = 0;
        var letterRight = 0;
        var highestY = 0;
        var lowestY = 0;
        var letterDef = null;
        var letterPosition = cc.v2(0, 0);
        this._updateFontScale();
        var letterDefinitions = _fontAtlas._letterDefinitions;
        for (var index = 0; index < textLen; ) {
          var character = _string.charAt(index);
          if ("\n" === character) {
            _linesWidth.push(letterRight);
            letterRight = 0;
            lineIndex++;
            nextTokenX = 0;
            nextTokenY -= _lineHeight * _bmfontScale + _lineSpacing;
            this._recordPlaceholderInfo(index, character);
            index++;
            continue;
          }
          var tokenLen = nextTokenFunc(_string, index, textLen);
          var tokenHighestY = highestY;
          var tokenLowestY = lowestY;
          var tokenRight = letterRight;
          var nextLetterX = nextTokenX;
          var newLine = false;
          for (var tmp = 0; tmp < tokenLen; ++tmp) {
            var letterIndex = index + tmp;
            character = _string.charAt(letterIndex);
            if ("\r" === character) {
              this._recordPlaceholderInfo(letterIndex, character);
              continue;
            }
            letterDef = _fontAtlas.getLetterDefinitionForChar(character);
            if (!letterDef) {
              this._recordPlaceholderInfo(letterIndex, character);
              console.log("Can't find letter definition in texture atlas " + _fntConfig.atlasName + " for letter:" + character);
              continue;
            }
            var letterX = nextLetterX + letterDef._offsetX * _bmfontScale;
            if (_isWrapText && _maxLineWidth > 0 && nextTokenX > 0 && letterX + letterDef._width * _bmfontScale > _maxLineWidth && !textUtils.isUnicodeSpace(character)) {
              _linesWidth.push(letterRight);
              letterRight = 0;
              lineIndex++;
              nextTokenX = 0;
              nextTokenY -= _lineHeight * _bmfontScale + _lineSpacing;
              newLine = true;
              break;
            }
            letterPosition.x = letterX;
            letterPosition.y = nextTokenY - letterDef._offsetY * _bmfontScale;
            this._recordLetterInfo(letterDefinitions, letterPosition, character, letterIndex, lineIndex);
            letterIndex + 1 < _horizontalKernings.length && letterIndex < textLen - 1 && (nextLetterX += _horizontalKernings[letterIndex + 1]);
            nextLetterX += letterDef._xAdvance * _bmfontScale + _spacingX;
            tokenRight = letterPosition.x + letterDef._width * _bmfontScale;
            tokenHighestY < letterPosition.y && (tokenHighestY = letterPosition.y);
            tokenLowestY > letterPosition.y - letterDef._height * _bmfontScale && (tokenLowestY = letterPosition.y - letterDef._height * _bmfontScale);
          }
          if (newLine) continue;
          nextTokenX = nextLetterX;
          letterRight = tokenRight;
          highestY < tokenHighestY && (highestY = tokenHighestY);
          lowestY > tokenLowestY && (lowestY = tokenLowestY);
          longestLine < letterRight && (longestLine = letterRight);
          index += tokenLen;
        }
        _linesWidth.push(letterRight);
        _numberOfLines = lineIndex + 1;
        _textDesiredHeight = _numberOfLines * _lineHeight * _bmfontScale;
        _numberOfLines > 1 && (_textDesiredHeight += (_numberOfLines - 1) * _lineSpacing);
        _contentSize.width = _labelWidth;
        _contentSize.height = _labelHeight;
        _labelWidth <= 0 && (_contentSize.width = parseFloat(longestLine.toFixed(2)));
        _labelHeight <= 0 && (_contentSize.height = parseFloat(_textDesiredHeight.toFixed(2)));
        _tailoredTopY = _contentSize.height;
        _tailoredBottomY = 0;
        highestY > 0 && (_tailoredTopY = _contentSize.height + highestY);
        lowestY < -_textDesiredHeight && (_tailoredBottomY = _textDesiredHeight + lowestY);
        return true;
      },
      _getFirstCharLen: function() {
        return 1;
      },
      _getFirstWordLen: function(text, startIndex, textLen) {
        var character = text.charAt(startIndex);
        if (textUtils.isUnicodeCJK(character) || "\n" === character || textUtils.isUnicodeSpace(character)) return 1;
        var len = 1;
        var letterDef = _fontAtlas.getLetterDefinitionForChar(character);
        if (!letterDef) return len;
        var nextLetterX = letterDef._xAdvance * _bmfontScale + _spacingX;
        var letterX = void 0;
        for (var index = startIndex + 1; index < textLen; ++index) {
          character = text.charAt(index);
          letterDef = _fontAtlas.getLetterDefinitionForChar(character);
          if (!letterDef) break;
          letterX = nextLetterX + letterDef._offsetX * _bmfontScale;
          if (letterX + letterDef._width * _bmfontScale > _maxLineWidth && !textUtils.isUnicodeSpace(character) && _maxLineWidth > 0) return len;
          nextLetterX += letterDef._xAdvance * _bmfontScale + _spacingX;
          if ("\n" === character || textUtils.isUnicodeSpace(character) || textUtils.isUnicodeCJK(character)) break;
          len++;
        }
        return len;
      },
      _multilineTextWrapByWord: function() {
        return this._multilineTextWrap(this._getFirstWordLen);
      },
      _multilineTextWrapByChar: function() {
        return this._multilineTextWrap(this._getFirstCharLen);
      },
      _recordPlaceholderInfo: function(letterIndex, char) {
        if (letterIndex >= _lettersInfo.length) {
          var tmpInfo = new LetterInfo();
          _lettersInfo.push(tmpInfo);
        }
        _lettersInfo[letterIndex]._char = char;
        _lettersInfo[letterIndex]._valid = false;
      },
      _recordLetterInfo: function(letterDefinitions, letterPosition, character, letterIndex, lineIndex) {
        if (letterIndex >= _lettersInfo.length) {
          var tmpInfo = new LetterInfo();
          _lettersInfo.push(tmpInfo);
        }
        character = character.charCodeAt(0);
        _lettersInfo[letterIndex]._lineIndex = lineIndex;
        _lettersInfo[letterIndex]._char = character;
        _lettersInfo[letterIndex]._valid = letterDefinitions[character]._validDefinition;
        _lettersInfo[letterIndex]._positionX = letterPosition.x;
        _lettersInfo[letterIndex]._positionY = letterPosition.y;
      },
      _alignText: function() {
        _textDesiredHeight = 0;
        _linesWidth.length = 0;
        _lineBreakWithoutSpaces ? this._multilineTextWrapByChar() : this._multilineTextWrapByWord();
        this._computeAlignmentOffset();
        _overflow === Overflow.SHRINK && _fontSize > 0 && this._isVerticalClamp() && this._shrinkLabelToContentSize(this._isVerticalClamp);
        this._updateQuads() || _overflow === Overflow.SHRINK && this._shrinkLabelToContentSize(this._isHorizontalClamp);
      },
      _scaleFontSizeDown: function(fontSize) {
        var shouldUpdateContent = true;
        if (!fontSize) {
          fontSize = .1;
          shouldUpdateContent = false;
        }
        _fontSize = fontSize;
        shouldUpdateContent && this._updateContent();
      },
      _shrinkLabelToContentSize: function(lambda) {
        var fontSize = _fontSize;
        var originalLineHeight = _lineHeight;
        var fontAtlas = _fontAtlas;
        var i = 0;
        var tempLetterDefinition = fontAtlas.cloneLetterDefinition();
        var flag = true;
        while (lambda()) {
          ++i;
          var newFontSize = fontSize - i;
          flag = false;
          if (newFontSize <= 0) break;
          var scale = newFontSize / fontSize;
          fontAtlas.assignLetterDefinitions(tempLetterDefinition);
          fontAtlas.scaleFontLetterDefinition(scale);
          _lineHeight = originalLineHeight * scale;
          _lineBreakWithoutSpaces ? this._multilineTextWrapByChar() : this._multilineTextWrapByWord();
          this._computeAlignmentOffset();
        }
        _lineHeight = originalLineHeight;
        fontAtlas.assignLetterDefinitions(tempLetterDefinition);
        flag || fontSize - i >= 0 && this._scaleFontSizeDown(fontSize - i);
      },
      _isVerticalClamp: function() {
        return _textDesiredHeight > _contentSize.height;
      },
      _isHorizontalClamp: function() {
        var letterDefinitions = _fontAtlas._letterDefinitions;
        var letterClamp = false;
        for (var ctr = 0, l = _string.length; ctr < l; ++ctr) {
          var letterInfo = _lettersInfo[ctr];
          if (letterInfo._valid) {
            var letterDef = letterDefinitions[letterInfo._char];
            var px = letterInfo._positionX + letterDef._width / 2 * _bmfontScale;
            var lineIndex = letterInfo._lineIndex;
            if (_labelWidth > 0) if (_isWrapText) {
              var wordWidth = _linesWidth[lineIndex];
              if (wordWidth > _contentSize.width && (px > _contentSize.width || px < 0)) {
                letterClamp = true;
                break;
              }
            } else if (px > _contentSize.width) {
              letterClamp = true;
              break;
            }
          }
        }
        return letterClamp;
      },
      _isHorizontalClamped: function(px, lineIndex) {
        var wordWidth = _linesWidth[lineIndex];
        var letterOverClamp = px > _contentSize.width || px < 0;
        return _isWrapText ? wordWidth > _contentSize.width && letterOverClamp : letterOverClamp;
      },
      _updateQuads: function() {
        var letterDefinitions = _fontAtlas._letterDefinitions;
        var texture = _spriteFrame._texture;
        var node = _comp.node;
        var renderData = _comp._renderData;
        renderData.dataLength = renderData.vertexCount = renderData.indiceCount = 0;
        var contentSize = _contentSize, appx = node._anchorPoint.x * contentSize.width, appy = node._anchorPoint.y * contentSize.height;
        var ret = true;
        for (var ctr = 0, l = _string.length; ctr < l; ++ctr) {
          var letterInfo = _lettersInfo[ctr];
          if (!letterInfo._valid) continue;
          var letterDef = letterDefinitions[letterInfo._char];
          _tmpRect.height = letterDef._height;
          _tmpRect.width = letterDef._width;
          _tmpRect.x = letterDef._u;
          _tmpRect.y = letterDef._v;
          var py = letterInfo._positionY + _letterOffsetY;
          if (_labelHeight > 0) {
            if (py > _tailoredTopY) {
              var clipTop = py - _tailoredTopY;
              _tmpRect.y += clipTop;
              _tmpRect.height -= clipTop;
              py -= clipTop;
            }
            py - letterDef._height * _bmfontScale < _tailoredBottomY && (_tmpRect.height = py < _tailoredBottomY ? 0 : py - _tailoredBottomY);
          }
          var lineIndex = letterInfo._lineIndex;
          var px = letterInfo._positionX + letterDef._width / 2 * _bmfontScale + _linesOffsetX[lineIndex];
          if (_labelWidth > 0 && this._isHorizontalClamped(px, lineIndex)) if (_overflow === Overflow.CLAMP) _tmpRect.width = 0; else if (_overflow === Overflow.SHRINK) {
            if (_contentSize.width > letterDef._width) {
              ret = false;
              break;
            }
            _tmpRect.width = 0;
          }
          if (_tmpRect.height > 0 && _tmpRect.width > 0) {
            var isRotated = _spriteFrame.isRotated();
            var originalSize = _spriteFrame._originalSize;
            var rect = _spriteFrame._rect;
            var offset = _spriteFrame._offset;
            var trimmedLeft = offset.x + (originalSize.width - rect.width) / 2;
            var trimmedTop = offset.y - (originalSize.height - rect.height) / 2;
            if (isRotated) {
              var originalX = _tmpRect.x;
              _tmpRect.x = rect.x + rect.height - _tmpRect.y - _tmpRect.height - trimmedTop;
              _tmpRect.y = originalX + rect.y - trimmedLeft;
              _tmpRect.y < 0 && (_tmpRect.height = _tmpRect.height + trimmedTop);
            } else {
              _tmpRect.x += rect.x - trimmedLeft;
              _tmpRect.y += rect.y + trimmedTop;
            }
            var letterPositionX = letterInfo._positionX + _linesOffsetX[letterInfo._lineIndex];
            this.appendQuad(renderData, texture, _tmpRect, isRotated, letterPositionX - appx, py - appy, _bmfontScale);
          }
        }
        return ret;
      },
      appendQuad: function(renderData, texture, rect, rotated, x, y, scale) {},
      _computeAlignmentOffset: function() {
        _linesOffsetX.length = 0;
        switch (_hAlign) {
         case macro.TextAlignment.LEFT:
          for (var i = 0; i < _numberOfLines; ++i) _linesOffsetX.push(0);
          break;

         case macro.TextAlignment.CENTER:
          for (var _i = 0, l = _linesWidth.length; _i < l; _i++) _linesOffsetX.push((_contentSize.width - _linesWidth[_i]) / 2);
          break;

         case macro.TextAlignment.RIGHT:
          for (var _i2 = 0, _l = _linesWidth.length; _i2 < _l; _i2++) _linesOffsetX.push(_contentSize.width - _linesWidth[_i2]);
        }
        switch (_vAlign) {
         case macro.VerticalTextAlignment.TOP:
          _letterOffsetY = _contentSize.height;
          break;

         case macro.VerticalTextAlignment.CENTER:
          _letterOffsetY = (_contentSize.height + _textDesiredHeight) / 2;
          break;

         case macro.VerticalTextAlignment.BOTTOM:
          _letterOffsetY = _textDesiredHeight;
        }
      },
      _setupBMFontOverflowMetrics: function() {
        var newWidth = _contentSize.width, newHeight = _contentSize.height;
        _overflow === Overflow.RESIZE_HEIGHT && (newHeight = 0);
        if (_overflow === Overflow.NONE) {
          newWidth = 0;
          newHeight = 0;
        }
        _labelWidth = newWidth;
        _labelHeight = newHeight;
        _labelDimensions.width = newWidth;
        _labelDimensions.height = newHeight;
        _maxLineWidth = newWidth;
      }
    };
  }), {
    "../../../components/CCLabel": 33,
    "../../../platform/CCMacro": 91,
    "../../../utils/text-utils": 145
  } ],
  131: [ (function(require, module, exports) {
    var macro = require("../../../platform/CCMacro");
    var textUtils = require("../../../utils/text-utils");
    var Component = require("../../../components/CCComponent");
    var Label = require("../../../components/CCLabel");
    var LabelOutline = require("../../../components/CCLabelOutline");
    var Overflow = Label.Overflow;
    var WHITE = cc.Color.WHITE;
    var OUTLINE_SUPPORTED = cc.js.isChildClassOf(LabelOutline, Component);
    var _context = null;
    var _canvas = null;
    var _texture = null;
    var _fontDesc = "";
    var _string = "";
    var _fontSize = 0;
    var _drawFontsize = 0;
    var _splitedStrings = [];
    var _canvasSize = cc.size();
    var _lineHeight = 0;
    var _hAlign = 0;
    var _vAlign = 0;
    var _color = null;
    var _fontFamily = "";
    var _overflow = Overflow.NONE;
    var _isWrapText = false;
    var _isOutlined = false;
    var _outlineColor = null;
    var _outlineWidth = 0;
    var _margin = 0;
    var _isBold = false;
    var _isItalic = false;
    var _isUnderline = false;
    var _sharedLabelData = void 0;
    var _canvasPool = {
      pool: [],
      get: function() {
        var data = this.pool.pop();
        if (!data) {
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          data = {
            canvas: canvas,
            context: context
          };
        }
        return data;
      },
      put: function(canvas) {
        if (this.pool.length >= 32) return;
        this.pool.push(canvas);
      }
    };
    module.exports = {
      _getAssemblerData: function() {
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) _sharedLabelData = _canvasPool.get(); else if (!_sharedLabelData) {
          var labelCanvas = document.createElement("canvas");
          _sharedLabelData = {
            canvas: labelCanvas,
            context: labelCanvas.getContext("2d")
          };
        }
        _sharedLabelData.canvas.width = _sharedLabelData.canvas.height = 1;
        return _sharedLabelData;
      },
      _resetAssemblerData: function(assemblerData) {
        cc.game.renderType === cc.game.RENDER_TYPE_CANVAS && assemblerData && _canvasPool.put(assemblerData);
      },
      updateRenderData: function(comp) {
        if (!comp._renderData.vertDirty) return;
        this._updateFontFamily(comp);
        this._updateProperties(comp);
        this._calculateLabelFont();
        this._calculateSplitedStrings();
        this._updateLabelDimensions();
        this._calculateTextBaseline();
        this._updateTexture(comp);
        comp._actualFontSize = _fontSize;
        comp.node.setContentSize(_canvasSize);
        this._updateVerts(comp);
        comp._renderData.vertDirty = comp._renderData.uvDirty = false;
        _context = null;
        _canvas = null;
        _texture = null;
      },
      _updateVerts: function() {},
      _updateFontFamily: function(comp) {
        comp.useSystemFont ? _fontFamily = comp.fontFamily : comp.font ? comp.font._nativeAsset ? _fontFamily = comp.font._nativeAsset : cc.loader.load(comp.font.nativeUrl, (function(err, fontFamily) {
          _fontFamily = fontFamily || "Arial";
          comp.font._nativeAsset = fontFamily;
          comp._updateRenderData(true);
        })) : _fontFamily = "Arial";
      },
      _updateProperties: function(comp) {
        var assemblerData = comp._assemblerData;
        _context = assemblerData.context;
        _canvas = assemblerData.canvas;
        _texture = comp._texture;
        _string = comp.string.toString();
        _fontSize = comp._fontSize;
        _drawFontsize = _fontSize;
        _overflow = comp.overflow;
        _canvasSize.width = comp.node.width;
        _canvasSize.height = comp.node.height;
        _lineHeight = comp._lineHeight;
        _hAlign = comp.horizontalAlign;
        _vAlign = comp.verticalAlign;
        _color = comp.node.color;
        _isBold = comp._isBold;
        _isItalic = comp._isItalic;
        _isUnderline = comp._isUnderline;
        _isWrapText = _overflow !== Overflow.NONE && (_overflow === Overflow.RESIZE_HEIGHT || comp.enableWrapText);
        var outline = OUTLINE_SUPPORTED && comp.getComponent(LabelOutline);
        if (outline && outline.enabled) {
          _isOutlined = true;
          _margin = _outlineWidth = outline.width;
          _outlineColor = cc.color(outline.color);
          _outlineColor.a = _outlineColor.a * comp.node.color.a / 255;
        } else {
          _isOutlined = false;
          _margin = 0;
        }
      },
      _calculateFillTextStartPosition: function() {
        var lineHeight = this._getLineHeight();
        var lineCount = _splitedStrings.length;
        var labelX = void 0;
        var firstLinelabelY = void 0;
        labelX = _hAlign === macro.TextAlignment.RIGHT ? _canvasSize.width - _margin : _hAlign === macro.TextAlignment.CENTER ? _canvasSize.width / 2 : 0 + _margin;
        firstLinelabelY = _vAlign === macro.VerticalTextAlignment.TOP ? 0 : _vAlign === macro.VerticalTextAlignment.CENTER ? _canvasSize.height / 2 - lineHeight * (lineCount - 1) / 2 : _canvasSize.height - lineHeight * (lineCount - 1);
        return cc.v2(labelX, firstLinelabelY);
      },
      _updateTexture: function() {
        _context.clearRect(0, 0, _canvas.width, _canvas.height);
        _context.font = _fontDesc;
        var startPosition = this._calculateFillTextStartPosition();
        var lineHeight = this._getLineHeight();
        _context.lineJoin = "round";
        _context.fillStyle = "rgba(" + _color.r + ", " + _color.g + ", " + _color.b + ", " + _color.a / 255 + ")";
        var underlineStartPosition = void 0;
        for (var i = 0; i < _splitedStrings.length; ++i) {
          if (_isOutlined) {
            var strokeColor = _outlineColor || WHITE;
            _context.strokeStyle = "rgba(" + strokeColor.r + ", " + strokeColor.g + ", " + strokeColor.b + ", " + strokeColor.a / 255 + ")";
            _context.lineWidth = 2 * _outlineWidth;
            _context.strokeText(_splitedStrings[i], startPosition.x, startPosition.y + i * lineHeight);
          }
          _context.fillText(_splitedStrings[i], startPosition.x, startPosition.y + i * lineHeight);
          if (_isUnderline) {
            underlineStartPosition = this._calculateUnderlineStartPosition();
            _context.save();
            _context.beginPath();
            _context.lineWidth = _fontSize / 8;
            _context.strokeStyle = "rgba(" + _color.r + ", " + _color.g + ", " + _color.b + ", " + _color.a / 255 + ")";
            _context.moveTo(underlineStartPosition.x, underlineStartPosition.y + i * lineHeight - 1);
            _context.lineTo(underlineStartPosition.x + _canvas.width, underlineStartPosition.y + i * lineHeight - 1);
            _context.stroke();
            _context.restore();
          }
        }
        _texture.handleLoadedTexture();
      },
      _calculateUnderlineStartPosition: function() {
        var lineHeight = this._getLineHeight();
        var lineCount = _splitedStrings.length;
        var labelX = void 0;
        var firstLinelabelY = void 0;
        labelX = 0 + _margin;
        firstLinelabelY = _vAlign === macro.VerticalTextAlignment.TOP ? _fontSize : _vAlign === macro.VerticalTextAlignment.CENTER ? _canvasSize.height / 2 - lineHeight * (lineCount - 1) / 2 + _fontSize / 2 : _canvasSize.height - lineHeight * (lineCount - 1);
        return cc.v2(labelX, firstLinelabelY);
      },
      _updateLabelDimensions: function() {
        var paragraphedStrings = _string.split("\n");
        if (_overflow === Overflow.RESIZE_HEIGHT) _canvasSize.height = _splitedStrings.length * this._getLineHeight(); else if (_overflow === Overflow.NONE) {
          _splitedStrings = paragraphedStrings;
          var canvasSizeX = 0;
          var canvasSizeY = 0;
          for (var i = 0; i < paragraphedStrings.length; ++i) {
            var paraLength = textUtils.safeMeasureText(_context, paragraphedStrings[i]);
            canvasSizeX = canvasSizeX > paraLength ? canvasSizeX : paraLength;
          }
          canvasSizeY = _splitedStrings.length * this._getLineHeight();
          _canvasSize.width = parseFloat(canvasSizeX.toFixed(2)) + 2 * _margin;
          _canvasSize.height = parseFloat(canvasSizeY.toFixed(2));
          _isItalic && (_canvasSize.width += _drawFontsize * Math.tan(.20943951));
        }
        _canvas.width = _canvasSize.width;
        _canvas.height = _canvasSize.height;
      },
      _calculateTextBaseline: function() {
        var node = this._node;
        var hAlign = void 0;
        var vAlign = void 0;
        hAlign = _hAlign === macro.TextAlignment.RIGHT ? "right" : _hAlign === macro.TextAlignment.CENTER ? "center" : "left";
        _context.textAlign = hAlign;
        vAlign = _vAlign === macro.VerticalTextAlignment.TOP ? "top" : _vAlign === macro.VerticalTextAlignment.CENTER ? "middle" : "bottom";
        _context.textBaseline = vAlign;
      },
      _calculateSplitedStrings: function() {
        var paragraphedStrings = _string.split("\n");
        if (_isWrapText) {
          _splitedStrings = [];
          var canvasWidthNoMargin = _canvasSize.width - 2 * _margin;
          for (var i = 0; i < paragraphedStrings.length; ++i) {
            var allWidth = textUtils.safeMeasureText(_context, paragraphedStrings[i]);
            var textFragment = textUtils.fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(_context));
            _splitedStrings = _splitedStrings.concat(textFragment);
          }
        } else _splitedStrings = paragraphedStrings;
      },
      _getFontDesc: function() {
        var fontDesc = _fontSize.toString() + "px ";
        fontDesc += _fontFamily;
        _isBold && (fontDesc = "bold " + fontDesc);
        return fontDesc;
      },
      _getLineHeight: function() {
        var nodeSpacingY = _lineHeight;
        nodeSpacingY = 0 === nodeSpacingY ? _fontSize : nodeSpacingY * _fontSize / _drawFontsize;
        return 0 | nodeSpacingY;
      },
      _calculateParagraphLength: function(paragraphedStrings, ctx) {
        var paragraphLength = [];
        for (var i = 0; i < paragraphedStrings.length; ++i) {
          var width = textUtils.safeMeasureText(ctx, paragraphedStrings[i]);
          paragraphLength.push(width);
        }
        return paragraphLength;
      },
      _measureText: function(ctx) {
        return function(string) {
          return textUtils.safeMeasureText(ctx, string);
        };
      },
      _calculateLabelFont: function() {
        _fontDesc = this._getFontDesc();
        _context.font = _fontDesc;
        if (_overflow === Overflow.SHRINK) {
          var paragraphedStrings = _string.split("\n");
          var paragraphLength = this._calculateParagraphLength(paragraphedStrings, _context);
          var i = 0;
          var totalHeight = 0;
          var maxLength = 0;
          if (_isWrapText) {
            var canvasWidthNoMargin = _canvasSize.width - 2 * _margin;
            var canvasHeightNoMargin = _canvasSize.height - 2 * _margin;
            if (canvasWidthNoMargin < 0 || canvasHeightNoMargin < 0) {
              _fontDesc = this._getFontDesc();
              _context.font = _fontDesc;
              return;
            }
            totalHeight = canvasHeightNoMargin + 1;
            maxLength = canvasWidthNoMargin + 1;
            var actualFontSize = _fontSize + 1;
            var textFragment = "";
            var tryDivideByTwo = true;
            var startShrinkFontSize = 0 | actualFontSize;
            while (totalHeight > canvasHeightNoMargin || maxLength > canvasWidthNoMargin) {
              if (tryDivideByTwo) actualFontSize = startShrinkFontSize / 2 | 0; else {
                actualFontSize = startShrinkFontSize - 1;
                startShrinkFontSize = actualFontSize;
              }
              if (actualFontSize <= 0) {
                cc.logID(4003);
                break;
              }
              _fontSize = actualFontSize;
              _fontDesc = this._getFontDesc();
              _context.font = _fontDesc;
              totalHeight = 0;
              for (i = 0; i < paragraphedStrings.length; ++i) {
                var j = 0;
                var allWidth = textUtils.safeMeasureText(_context, paragraphedStrings[i]);
                textFragment = textUtils.fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(_context));
                while (j < textFragment.length) {
                  var measureWidth = textUtils.safeMeasureText(_context, textFragment[j]);
                  maxLength = measureWidth;
                  totalHeight += this._getLineHeight();
                  ++j;
                }
              }
              if (tryDivideByTwo) if (totalHeight > canvasHeightNoMargin) startShrinkFontSize = 0 | actualFontSize; else {
                tryDivideByTwo = false;
                totalHeight = canvasHeightNoMargin + 1;
              }
            }
          } else {
            totalHeight = paragraphedStrings.length * this._getLineHeight();
            for (i = 0; i < paragraphedStrings.length; ++i) maxLength < paragraphLength[i] && (maxLength = paragraphLength[i]);
            var scaleX = (_canvasSize.width - 2 * _margin) / maxLength;
            var scaleY = _canvasSize.height / totalHeight;
            _fontSize = _drawFontsize * Math.min(1, scaleX, scaleY) | 0;
            _fontDesc = this._getFontDesc();
            _context.font = _fontDesc;
          }
        }
      }
    };
  }), {
    "../../../components/CCComponent": 31,
    "../../../components/CCLabel": 33,
    "../../../components/CCLabelOutline": void 0,
    "../../../platform/CCMacro": 91,
    "../../../utils/text-utils": 145
  } ],
  132: [ (function(require, module, exports) {
    require("../platform/CCSys");
    var EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
    var DIRNAME_RE = /((.*)(\/|\\|\\\\))?(.*?\..*$)?/;
    var NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
    cc.path = {
      join: function() {
        var l = arguments.length;
        var result = "";
        for (var i = 0; i < l; i++) result = (result + ("" === result ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
        return result;
      },
      extname: function(pathStr) {
        var temp = EXTNAME_RE.exec(pathStr);
        return temp ? temp[1] : "";
      },
      mainFileName: function(fileName) {
        if (fileName) {
          var idx = fileName.lastIndexOf(".");
          if (-1 !== idx) return fileName.substring(0, idx);
        }
        return fileName;
      },
      basename: function(pathStr, extname) {
        var index = pathStr.indexOf("?");
        index > 0 && (pathStr = pathStr.substring(0, index));
        var reg = /(\/|\\)([^\/\\]+)$/g;
        var result = reg.exec(pathStr.replace(/(\/|\\)$/, ""));
        if (!result) return null;
        var baseName = result[2];
        if (extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() === extname.toLowerCase()) return baseName.substring(0, baseName.length - extname.length);
        return baseName;
      },
      dirname: function(pathStr) {
        var temp = DIRNAME_RE.exec(pathStr);
        return temp ? temp[2] : "";
      },
      changeExtname: function(pathStr, extname) {
        extname = extname || "";
        var index = pathStr.indexOf("?");
        var tempStr = "";
        if (index > 0) {
          tempStr = pathStr.substring(index);
          pathStr = pathStr.substring(0, index);
        }
        index = pathStr.lastIndexOf(".");
        if (index < 0) return pathStr + extname + tempStr;
        return pathStr.substring(0, index) + extname + tempStr;
      },
      changeBasename: function(pathStr, basename, isSameExt) {
        if (0 === basename.indexOf(".")) return this.changeExtname(pathStr, basename);
        var index = pathStr.indexOf("?");
        var tempStr = "";
        var ext = isSameExt ? this.extname(pathStr) : "";
        if (index > 0) {
          tempStr = pathStr.substring(index);
          pathStr = pathStr.substring(0, index);
        }
        index = pathStr.lastIndexOf("/");
        index = index <= 0 ? 0 : index + 1;
        return pathStr.substring(0, index) + basename + ext + tempStr;
      },
      _normalize: function(url) {
        var oldUrl = url = String(url);
        do {
          oldUrl = url;
          url = url.replace(NORMALIZE_RE, "");
        } while (oldUrl.length !== url.length);
        return url;
      },
      sep: cc.sys.os === cc.sys.OS_WINDOWS ? "\\" : "/",
      stripSep: function(path) {
        return path.replace(/[\/\\]$/, "");
      }
    };
    module.exports = cc.path;
  }), {
    "../platform/CCSys": 95
  } ],
  133: [ (function(require, module, exports) {
    var AffineTransform = function(a, b, c, d, tx, ty) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    };
    AffineTransform.create = function(a, b, c, d, tx, ty) {
      return {
        a: a,
        b: b,
        c: c,
        d: d,
        tx: tx,
        ty: ty
      };
    };
    AffineTransform.identity = function() {
      return {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
      };
    };
    AffineTransform.clone = function(t) {
      return {
        a: t.a,
        b: t.b,
        c: t.c,
        d: t.d,
        tx: t.tx,
        ty: t.ty
      };
    };
    AffineTransform.concat = function(out, t1, t2) {
      var a = t1.a, b = t1.b, c = t1.c, d = t1.d, tx = t1.tx, ty = t1.ty;
      out.a = a * t2.a + b * t2.c;
      out.b = a * t2.b + b * t2.d;
      out.c = c * t2.a + d * t2.c;
      out.d = c * t2.b + d * t2.d;
      out.tx = tx * t2.a + ty * t2.c + t2.tx;
      out.ty = tx * t2.b + ty * t2.d + t2.ty;
      return out;
    };
    AffineTransform.invert = function(out, t) {
      var a = t.a, b = t.b, c = t.c, d = t.d;
      var determinant = 1 / (a * d - b * c);
      var tx = t.tx, ty = t.ty;
      out.a = determinant * d;
      out.b = -determinant * b;
      out.c = -determinant * c;
      out.d = determinant * a;
      out.tx = determinant * (c * ty - d * tx);
      out.ty = determinant * (b * tx - a * ty);
      return out;
    };
    AffineTransform.fromMat4 = function(out, mat) {
      out.a = mat.m00;
      out.b = mat.m01;
      out.c = mat.m04;
      out.d = mat.m05;
      out.tx = mat.m12;
      out.ty = mat.m13;
      return out;
    };
    AffineTransform.transformVec2 = function(out, point, transOrY, t) {
      var x, y;
      if (void 0 === t) {
        t = transOrY;
        x = point.x;
        y = point.y;
      } else {
        x = point;
        y = transOrY;
      }
      out.x = t.a * x + t.c * y + t.tx;
      out.y = t.b * x + t.d * y + t.ty;
      return out;
    };
    AffineTransform.transformSize = function(out, size, t) {
      out.width = t.a * size.width + t.c * size.height;
      out.height = t.b * size.width + t.d * size.height;
      return out;
    };
    AffineTransform.transformRect = function(out, rect, t) {
      var ol = rect.x;
      var ob = rect.y;
      var or = ol + rect.width;
      var ot = ob + rect.height;
      var lbx = t.a * ol + t.c * ob + t.tx;
      var lby = t.b * ol + t.d * ob + t.ty;
      var rbx = t.a * or + t.c * ob + t.tx;
      var rby = t.b * or + t.d * ob + t.ty;
      var ltx = t.a * ol + t.c * ot + t.tx;
      var lty = t.b * ol + t.d * ot + t.ty;
      var rtx = t.a * or + t.c * ot + t.tx;
      var rty = t.b * or + t.d * ot + t.ty;
      var minX = Math.min(lbx, rbx, ltx, rtx);
      var maxX = Math.max(lbx, rbx, ltx, rtx);
      var minY = Math.min(lby, rby, lty, rty);
      var maxY = Math.max(lby, rby, lty, rty);
      out.x = minX;
      out.y = minY;
      out.width = maxX - minX;
      out.height = maxY - minY;
      return out;
    };
    AffineTransform.transformObb = function(out_bl, out_tl, out_tr, out_br, rect, anAffineTransform) {
      var x = rect.x;
      var y = rect.y;
      var width = rect.width;
      var height = rect.height;
      var tx = anAffineTransform.a * x + anAffineTransform.c * y + anAffineTransform.tx;
      var ty = anAffineTransform.b * x + anAffineTransform.d * y + anAffineTransform.ty;
      var xa = anAffineTransform.a * width;
      var xb = anAffineTransform.b * width;
      var yc = anAffineTransform.c * height;
      var yd = anAffineTransform.d * height;
      out_tl.x = tx;
      out_tl.y = ty;
      out_tr.x = xa + tx;
      out_tr.y = xb + ty;
      out_bl.x = yc + tx;
      out_bl.y = yd + ty;
      out_br.x = xa + yc + tx;
      out_br.y = xb + yd + ty;
    };
    cc.AffineTransform = module.exports = AffineTransform;
  }), {} ],
  134: [ (function(require, module, exports) {
    var Flags = require("../platform/CCObject").Flags;
    var misc = require("./misc");
    var js = require("../platform/js");
    var IdGenerater = require("../platform/id-generater");
    var eventManager = require("../event-manager");
    var RenderFlow = require("../renderer/render-flow");
    var Destroying = Flags.Destroying;
    var DontDestroy = Flags.DontDestroy;
    var Deactivating = Flags.Deactivating;
    var CHILD_ADDED = "child-added";
    var CHILD_REMOVED = "child-removed";
    var idGenerater = new IdGenerater("Node");
    function getConstructor(typeOrClassName) {
      if (!typeOrClassName) {
        cc.errorID(3804);
        return null;
      }
      if ("string" === typeof typeOrClassName) return js.getClassByName(typeOrClassName);
      return typeOrClassName;
    }
    function findComponent(node, constructor) {
      if (constructor._sealed) for (var i = 0; i < node._components.length; ++i) {
        var comp = node._components[i];
        if (comp.constructor === constructor) return comp;
      } else for (var _i = 0; _i < node._components.length; ++_i) {
        var _comp = node._components[_i];
        if (_comp instanceof constructor) return _comp;
      }
      return null;
    }
    function findComponents(node, constructor, components) {
      if (constructor._sealed) for (var i = 0; i < node._components.length; ++i) {
        var comp = node._components[i];
        comp.constructor === constructor && components.push(comp);
      } else for (var _i2 = 0; _i2 < node._components.length; ++_i2) {
        var _comp2 = node._components[_i2];
        _comp2 instanceof constructor && components.push(_comp2);
      }
    }
    function findChildComponent(children, constructor) {
      for (var i = 0; i < children.length; ++i) {
        var node = children[i];
        var comp = findComponent(node, constructor);
        if (comp) return comp;
        if (node._children.length > 0) {
          comp = findChildComponent(node._children, constructor);
          if (comp) return comp;
        }
      }
      return null;
    }
    function findChildComponents(children, constructor, components) {
      for (var i = 0; i < children.length; ++i) {
        var node = children[i];
        findComponents(node, constructor, components);
        node._children.length > 0 && findChildComponents(node._children, constructor, components);
      }
    }
    var BaseNode = cc.Class({
      name: "cc._BaseNode",
      extends: cc.Object,
      properties: {
        _parent: null,
        _children: [],
        _active: true,
        _level: 0,
        _components: [],
        _prefab: null,
        _persistNode: {
          get: function() {
            return (this._objFlags & DontDestroy) > 0;
          },
          set: function(value) {
            value ? this._objFlags |= DontDestroy : this._objFlags &= ~DontDestroy;
          }
        },
        name: {
          get: function() {
            return this._name;
          },
          set: function(value) {
            false;
            this._name = value;
          }
        },
        uuid: {
          get: function() {
            return this._id;
          }
        },
        children: {
          get: function() {
            return this._children;
          }
        },
        childrenCount: {
          get: function() {
            return this._children.length;
          }
        },
        active: {
          get: function() {
            return this._active;
          },
          set: function(value) {
            value = !!value;
            if (this._active !== value) {
              this._active = value;
              var parent = this._parent;
              if (parent) {
                var couldActiveInScene = parent._activeInHierarchy;
                couldActiveInScene && cc.director._nodeActivator.activateNode(this, value);
              }
            }
          }
        },
        activeInHierarchy: {
          get: function() {
            return this._activeInHierarchy;
          }
        }
      },
      ctor: function(name) {
        this._name = void 0 !== name ? name : "New Node";
        this._activeInHierarchy = false;
        this._id = idGenerater.getNewId();
        cc.director._scheduler && cc.director._scheduler.enableForTarget(this);
        this.__eventTargets = [];
        this._renderFlag = RenderFlow.FLAG_TRANSFORM;
      },
      getParent: function() {
        return this._parent;
      },
      setParent: function(value) {
        if (this._parent === value) return;
        false;
        var oldParent = this._parent;
        (true, oldParent) && oldParent._objFlags & Deactivating && cc.errorID(3821);
        this._parent = value || null;
        this._onSetParent(value);
        if (value) {
          (true, value._objFlags & Deactivating) && cc.errorID(3821);
          this._level = value._level + 1;
          eventManager._setDirtyForNode(this);
          value._children.push(this);
          value.emit && value.emit(CHILD_ADDED, this);
          value._renderFlag |= RenderFlow.FLAG_CHILDREN;
        }
        if (oldParent) {
          if (!(oldParent._objFlags & Destroying)) {
            var removeAt = oldParent._children.indexOf(this);
            false;
            oldParent._children.splice(removeAt, 1);
            oldParent.emit && oldParent.emit(CHILD_REMOVED, this);
            this._onHierarchyChanged(oldParent);
            0 === oldParent._children.length && (oldParent._renderFlag &= ~RenderFlow.FLAG_CHILDREN);
          }
        } else value && this._onHierarchyChanged(null);
      },
      attr: function(attrs) {
        js.mixin(this, attrs);
      },
      getChildByUuid: function(uuid) {
        if (!uuid) {
          cc.log("Invalid uuid");
          return null;
        }
        var locChildren = this._children;
        for (var i = 0, len = locChildren.length; i < len; i++) if (locChildren[i]._id === uuid) return locChildren[i];
        return null;
      },
      getChildByName: function(name) {
        if (!name) {
          cc.log("Invalid name");
          return null;
        }
        var locChildren = this._children;
        for (var i = 0, len = locChildren.length; i < len; i++) if (locChildren[i]._name === name) return locChildren[i];
        return null;
      },
      addChild: function(child) {
        false;
        cc.assertID(child, 1606);
        cc.assertID(null === child._parent, 1605);
        child.setParent(this);
      },
      insertChild: function(child, siblingIndex) {
        child.parent = this;
        child.setSiblingIndex(siblingIndex);
      },
      getSiblingIndex: function() {
        return this._parent ? this._parent._children.indexOf(this) : 0;
      },
      setSiblingIndex: function(index) {
        if (!this._parent) return;
        if (this._parent._objFlags & Deactivating) {
          cc.errorID(3821);
          return;
        }
        var siblings = this._parent._children;
        index = -1 !== index ? index : siblings.length - 1;
        var oldIndex = siblings.indexOf(this);
        if (index !== oldIndex) {
          siblings.splice(oldIndex, 1);
          index < siblings.length ? siblings.splice(index, 0, this) : siblings.push(this);
          this._onSiblingIndexChanged && this._onSiblingIndexChanged(index);
        }
      },
      walk: function(prefunc, postfunc) {
        var BaseNode = cc._BaseNode;
        var index = 1;
        var children, child, curr, i, afterChildren;
        var stack = BaseNode._stacks[BaseNode._stackId];
        if (!stack) {
          stack = [];
          BaseNode._stacks.push(stack);
        }
        BaseNode._stackId++;
        stack.length = 0;
        stack[0] = this;
        var parent = null;
        afterChildren = false;
        while (index) {
          index--;
          curr = stack[index];
          if (!curr) continue;
          !afterChildren && prefunc ? prefunc(curr) : afterChildren && postfunc && postfunc(curr);
          stack[index] = null;
          if (!afterChildren) {
            if (curr._children.length > 0) {
              parent = curr;
              children = curr._children;
              i = 0;
              stack[index] = children[i];
              index++;
            } else {
              stack[index] = curr;
              index++;
              afterChildren = true;
            }
            continue;
          }
          afterChildren = false;
          if (children) {
            i++;
            if (children[i]) {
              stack[index] = children[i];
              index++;
            } else if (parent) {
              stack[index] = parent;
              index++;
              afterChildren = true;
              if (parent._parent) {
                children = parent._parent._children;
                i = children.indexOf(parent);
                parent = parent._parent;
              } else {
                parent = null;
                children = null;
              }
              if (i < 0) break;
            }
          }
        }
        stack.length = 0;
        BaseNode._stackId--;
      },
      cleanup: function() {},
      removeFromParent: function(cleanup) {
        if (this._parent) {
          void 0 === cleanup && (cleanup = true);
          this._parent.removeChild(this, cleanup);
        }
      },
      removeChild: function(child, cleanup) {
        if (this._children.indexOf(child) > -1) {
          (cleanup || void 0 === cleanup) && child.cleanup();
          child.parent = null;
        }
      },
      removeAllChildren: function(cleanup) {
        var children = this._children;
        void 0 === cleanup && (cleanup = true);
        for (var i = children.length - 1; i >= 0; i--) {
          var node = children[i];
          if (node) {
            cleanup && node.cleanup();
            node.parent = null;
          }
        }
        this._children.length = 0;
      },
      isChildOf: function(parent) {
        var child = this;
        do {
          if (child === parent) return true;
          child = child._parent;
        } while (child);
        return false;
      },
      getComponent: function(typeOrClassName) {
        var constructor = getConstructor(typeOrClassName);
        if (constructor) return findComponent(this, constructor);
        return null;
      },
      getComponents: function(typeOrClassName) {
        var constructor = getConstructor(typeOrClassName), components = [];
        constructor && findComponents(this, constructor, components);
        return components;
      },
      getComponentInChildren: function(typeOrClassName) {
        var constructor = getConstructor(typeOrClassName);
        if (constructor) return findChildComponent(this._children, constructor);
        return null;
      },
      getComponentsInChildren: function(typeOrClassName) {
        var constructor = getConstructor(typeOrClassName), components = [];
        if (constructor) {
          findComponents(this, constructor, components);
          findChildComponents(this._children, constructor, components);
        }
        return components;
      },
      _checkMultipleComp: false,
      addComponent: function(typeOrClassName) {
        false;
        var constructor;
        if ("string" === typeof typeOrClassName) {
          constructor = js.getClassByName(typeOrClassName);
          if (!constructor) {
            cc.errorID(3807, typeOrClassName);
            cc._RFpeek() && cc.errorID(3808, typeOrClassName);
            return null;
          }
        } else {
          if (!typeOrClassName) {
            cc.errorID(3804);
            return null;
          }
          constructor = typeOrClassName;
        }
        if ("function" !== typeof constructor) {
          cc.errorID(3809);
          return null;
        }
        if (!js.isChildClassOf(constructor, cc.Component)) {
          cc.errorID(3810);
          return null;
        }
        false;
        var ReqComp = constructor._requireComponent;
        if (ReqComp && !this.getComponent(ReqComp)) {
          var depended = this.addComponent(ReqComp);
          if (!depended) return null;
        }
        var component = new constructor();
        component.node = this;
        this._components.push(component);
        (false, false) && cc.engine && this._id in cc.engine.attachedObjsForEditor && (cc.engine.attachedObjsForEditor[component._id] = component);
        this._activeInHierarchy && cc.director._nodeActivator.activateComp(component);
        return component;
      },
      _addComponentAt: false,
      removeComponent: function(component) {
        if (!component) {
          cc.errorID(3813);
          return;
        }
        component instanceof cc.Component || (component = this.getComponent(component));
        component && component.destroy();
      },
      _getDependComponent: false,
      _removeComponent: function(component) {
        if (!component) {
          cc.errorID(3814);
          return;
        }
        if (!(this._objFlags & Destroying)) {
          var i = this._components.indexOf(component);
          if (-1 !== i) {
            this._components.splice(i, 1);
            (false, false) && cc.engine && delete cc.engine.attachedObjsForEditor[component._id];
          } else component.node !== this && cc.errorID(3815);
        }
      },
      destroy: function() {
        cc.Object.prototype.destroy.call(this) && (this.active = false);
      },
      destroyAllChildren: function() {
        var children = this._children;
        for (var i = 0; i < children.length; ++i) children[i].destroy();
      },
      _onSetParent: function(value) {},
      _onPostActivated: function() {},
      _onBatchRestored: function() {},
      _onBatchCreated: function() {},
      _onHierarchyChanged: function(oldParent) {
        var newParent = this._parent;
        if (this._persistNode && !(newParent instanceof cc.Scene)) {
          cc.game.removePersistRootNode(this);
          false;
        }
        var scene;
        var inCurrentSceneBefore;
        var inCurrentSceneNow;
        var newPrefabRoot;
        var myPrefabInfo;
        var PrefabUtils;
        false, false;
        var shouldActiveNow = this._active && !!(newParent && newParent._activeInHierarchy);
        this._activeInHierarchy !== shouldActiveNow && cc.director._nodeActivator.activateNode(this, shouldActiveNow);
      },
      _instantiate: function(cloned) {
        cloned || (cloned = cc.instantiate._clone(this, this));
        var thisPrefabInfo = this._prefab;
        var PrefabUtils;
        false;
        var syncing = thisPrefabInfo && this === thisPrefabInfo.root && thisPrefabInfo.sync;
        syncing || false;
        cloned._parent = null;
        cloned._onBatchRestored();
        return cloned;
      },
      _registerIfAttached: (false, false) && function(register) {
        var attachedObjsForEditor = cc.engine.attachedObjsForEditor;
        if (register) {
          attachedObjsForEditor[this._id] = this;
          for (var i = 0; i < this._components.length; i++) {
            var comp = this._components[i];
            attachedObjsForEditor[comp._id] = comp;
          }
          cc.engine.emit("node-attach-to-scene", this);
        } else {
          cc.engine.emit("node-detach-from-scene", this);
          delete attachedObjsForEditor[this._id];
          for (var _i3 = 0; _i3 < this._components.length; _i3++) {
            var _comp3 = this._components[_i3];
            delete attachedObjsForEditor[_comp3._id];
          }
        }
        var children = this._children;
        for (var _i4 = 0, len = children.length; _i4 < len; ++_i4) {
          var child = children[_i4];
          child._registerIfAttached(register);
        }
      },
      _onPreDestroy: function() {
        var i, len;
        this._objFlags |= Destroying;
        var parent = this._parent;
        var destroyByParent = parent && parent._objFlags & Destroying;
        !destroyByParent && (false, false) && this._registerIfAttached(false);
        var children = this._children;
        for (i = 0, len = children.length; i < len; ++i) children[i]._destroyImmediate();
        for (i = 0, len = this._components.length; i < len; ++i) {
          var component = this._components[i];
          component._destroyImmediate();
        }
        var eventTargets = this.__eventTargets;
        for (i = 0, len = eventTargets.length; i < len; ++i) {
          var target = eventTargets[i];
          target && target.targetOff(this);
        }
        eventTargets.length = 0;
        this._persistNode && cc.game.removePersistRootNode(this);
        if (!destroyByParent && parent) {
          var childIndex = parent._children.indexOf(this);
          parent._children.splice(childIndex, 1);
          parent.emit && parent.emit("child-removed", this);
        }
        return destroyByParent;
      },
      onRestore: false
    });
    BaseNode.idGenerater = idGenerater;
    BaseNode._stacks = [ [] ];
    BaseNode._stackId = 0;
    BaseNode.prototype._onPreDestroyBase = BaseNode.prototype._onPreDestroy;
    false;
    BaseNode.prototype._onHierarchyChangedBase = BaseNode.prototype._onHierarchyChanged;
    false;
    var SameNameGetSets = [ "parent", "name", "children", "childrenCount" ];
    misc.propertyDefine(BaseNode, SameNameGetSets, {});
    false;
    cc._BaseNode = module.exports = BaseNode;
  }), {
    "../event-manager": 48,
    "../platform/CCObject": 92,
    "../platform/id-generater": 102,
    "../platform/js": 106,
    "../renderer/render-flow": 129,
    "./misc": 139
  } ],
  135: [ (function(require, module, exports) {
    var Base64Values = require("./misc").BASE64_VALUES;
    var HexChars = "0123456789abcdef".split("");
    var _t = [ "", "", "", "" ];
    var UuidTemplate = _t.concat(_t, "-", _t, "-", _t, "-", _t, "-", _t, _t, _t);
    var Indices = UuidTemplate.map((function(x, i) {
      return "-" === x ? NaN : i;
    })).filter(isFinite);
    module.exports = function(base64) {
      if (22 !== base64.length) return base64;
      UuidTemplate[0] = base64[0];
      UuidTemplate[1] = base64[1];
      for (var i = 2, j = 2; i < 22; i += 2) {
        var lhs = Base64Values[base64.charCodeAt(i)];
        var rhs = Base64Values[base64.charCodeAt(i + 1)];
        UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
        UuidTemplate[Indices[j++]] = HexChars[(3 & lhs) << 2 | rhs >> 4];
        UuidTemplate[Indices[j++]] = HexChars[15 & rhs];
      }
      return UuidTemplate.join("");
    };
    false;
  }), {
    "./misc": 139
  } ],
  136: [ (function(require, module, exports) {
    cc.find = module.exports = function(path, referenceNode) {
      if (null == path) {
        cc.errorID(5600);
        return null;
      }
      if (referenceNode) false; else {
        var scene = cc.director.getScene();
        if (!scene) {
          false;
          return null;
        }
        false;
        referenceNode = scene;
      }
      var match = referenceNode;
      var startIndex = "/" !== path[0] ? 0 : 1;
      var nameList = path.split("/");
      for (var n = startIndex; n < nameList.length; n++) {
        var name = nameList[n];
        var children = match._children;
        match = null;
        for (var t = 0, len = children.length; t < len; ++t) {
          var subChild = children[t];
          if (subChild.name === name) {
            match = subChild;
            break;
          }
        }
        if (!match) return null;
      }
      return match;
    };
  }), {} ],
  137: [ (function(require, module, exports) {
    require("./CCPath");
    true;
    require("./profiler/CCProfiler");
    require("./find");
    require("./mutable-forward-iterator");
  }), {
    "./CCPath": 132,
    "./find": 136,
    "./mutable-forward-iterator": 140,
    "./profiler/CCProfiler": 142
  } ],
  138: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var renderEngine = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js");
    var math = renderEngine.math;
    var mat4Pool = new js.Pool(128);
    mat4Pool.get = function() {
      var matrix = this._get();
      matrix ? math.mat4.identity(matrix) : matrix = math.mat4.create();
      return matrix;
    };
    var quatPool = new js.Pool(64);
    quatPool.get = function() {
      var quat = this._get();
      if (quat) {
        quat.x = quat.y = quat.z = 0;
        quat.w = 1;
      } else quat = math.quat.create();
      return quat;
    };
    module.exports = {
      mat4: mat4Pool,
      quat: quatPool
    };
  }), {
    "../platform/js": 106,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  139: [ (function(require, module, exports) {
    var js = require("../platform/js");
    var misc = {};
    misc.propertyDefine = function(ctor, sameNameGetSets, diffNameGetSets) {
      function define(np, propName, getter, setter) {
        var pd = Object.getOwnPropertyDescriptor(np, propName);
        if (pd) {
          pd.get && (np[getter] = pd.get);
          pd.set && setter && (np[setter] = pd.set);
        } else {
          var getterFunc = np[getter];
          var clsName;
          false;
          js.getset(np, propName, getterFunc, np[setter]);
        }
      }
      var propName, np = ctor.prototype;
      for (var i = 0; i < sameNameGetSets.length; i++) {
        propName = sameNameGetSets[i];
        var suffix = propName[0].toUpperCase() + propName.slice(1);
        define(np, propName, "get" + suffix, "set" + suffix);
      }
      for (propName in diffNameGetSets) {
        var getset = diffNameGetSets[propName];
        define(np, propName, getset[0], getset[1]);
      }
    };
    misc.NextPOT = function(x) {
      x -= 1;
      x |= x >> 1;
      x |= x >> 2;
      x |= x >> 4;
      x |= x >> 8;
      x |= x >> 16;
      return x + 1;
    };
    false;
    misc.BUILTIN_CLASSID_RE = /^(?:cc|dragonBones|sp|ccsg)\..+/;
    var BASE64_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var BASE64_VALUES = new Array(123);
    for (var i = 0; i < 123; ++i) BASE64_VALUES[i] = 64;
    for (var _i = 0; _i < 64; ++_i) BASE64_VALUES[BASE64_KEYS.charCodeAt(_i)] = _i;
    misc.BASE64_VALUES = BASE64_VALUES;
    misc.pushToMap = function(map, key, value, pushFront) {
      var exists = map[key];
      if (exists) if (Array.isArray(exists)) if (pushFront) {
        exists.push(exists[0]);
        exists[0] = value;
      } else exists.push(value); else map[key] = pushFront ? [ value, exists ] : [ exists, value ]; else map[key] = value;
    };
    misc.clampf = function(value, min_inclusive, max_inclusive) {
      if (min_inclusive > max_inclusive) {
        var temp = min_inclusive;
        min_inclusive = max_inclusive;
        max_inclusive = temp;
      }
      return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
    };
    misc.clamp01 = function(value) {
      return value < 0 ? 0 : value < 1 ? value : 1;
    };
    misc.lerp = function(a, b, r) {
      return a + (b - a) * r;
    };
    misc.degreesToRadians = function(angle) {
      return angle * cc.macro.RAD;
    };
    misc.radiansToDegrees = function(angle) {
      return angle * cc.macro.DEG;
    };
    cc.misc = module.exports = misc;
  }), {
    "../platform/js": 106
  } ],
  140: [ (function(require, module, exports) {
    function MutableForwardIterator(array) {
      this.i = 0;
      this.array = array;
    }
    var proto = MutableForwardIterator.prototype;
    proto.remove = function(value) {
      var index = this.array.indexOf(value);
      index >= 0 && this.removeAt(index);
    };
    proto.removeAt = function(i) {
      this.array.splice(i, 1);
      i <= this.i && --this.i;
    };
    proto.fastRemove = function(value) {
      var index = this.array.indexOf(value);
      index >= 0 && this.fastRemoveAt(index);
    };
    proto.fastRemoveAt = function(i) {
      var array = this.array;
      array[i] = array[array.length - 1];
      --array.length;
      i <= this.i && --this.i;
    };
    proto.push = function(item) {
      this.array.push(item);
    };
    module.exports = MutableForwardIterator;
  }), {} ],
  141: [ (function(require, module, exports) {
    var math = require("../renderer").renderEngine.math;
    cc._PrefabInfo = cc.Class({
      name: "cc.PrefabInfo",
      properties: {
        root: null,
        asset: null,
        fileId: "",
        sync: false,
        _synced: {
          default: false,
          serializable: false
        }
      }
    });
    module.exports = {
      syncWithPrefab: function(node) {
        var _prefab = node._prefab;
        _prefab._synced = true;
        if (!_prefab.asset) {
          var NodeUtils;
          var PrefabUtils;
          false;
          cc.errorID(3701, node.name);
          node._prefab = null;
          return;
        }
        var _objFlags = node._objFlags;
        var _parent = node._parent;
        var _id = node._id;
        var _name = node._name;
        var _active = node._active;
        var x = node._position.x;
        var y = node._position.y;
        var _quat = node._quat;
        var _localZOrder = node._localZOrder;
        var _globalZOrder = node._globalZOrder;
        cc.game._isCloning = true;
        false;
        var prefabRoot = _prefab.asset.data;
        prefabRoot._prefab._synced = true;
        prefabRoot._iN$t = node;
        cc.instantiate._clone(prefabRoot, prefabRoot);
        cc.game._isCloning = false;
        node._objFlags = _objFlags;
        node._parent = _parent;
        node._id = _id;
        node._prefab = _prefab;
        node._name = _name;
        node._active = _active;
        node._position.x = x;
        node._position.y = y;
        math.quat.copy(node._quat, _quat);
        node._localZOrder = _localZOrder;
        node._globalZOrder = _globalZOrder;
      }
    };
  }), {
    "../renderer": 127
  } ],
  142: [ (function(require, module, exports) {
    var macro = require("../../platform/CCMacro");
    var PerfCounter = require("./perf-counter");
    var _showFPS = false;
    var _fontSize = 15;
    var _atlas = null;
    var _stats = null;
    var _rootNode = null;
    var _label = null;
    function generateAtlas() {
      if (_atlas) return;
      var textureWidth = 256, textureHeight = 256;
      var canvas = document.createElement("canvas");
      canvas.style.width = canvas.width = textureWidth;
      canvas.style.height = canvas.height = textureHeight;
      var ctx = canvas.getContext("2d");
      ctx.font = _fontSize + "px Arial";
      ctx.textBaseline = "top";
      ctx.textAlign = "left";
      ctx.fillStyle = "#fff";
      var space = 2;
      var x = space;
      var y = space;
      var lineHeight = _fontSize;
      _atlas = new cc.LabelAtlas();
      _atlas._fntConfig = {
        atlasName: "profiler-arial",
        commonHeight: lineHeight,
        fontSize: _fontSize,
        kerningDict: {},
        fontDefDictionary: {}
      };
      _atlas._name = "profiler-arial";
      _atlas.fontSize = _fontSize;
      var dict = _atlas._fntConfig.fontDefDictionary;
      for (var i = 32; i <= 126; i++) {
        var char = String.fromCharCode(i);
        var width = ctx.measureText(char).width;
        if (x + width >= textureWidth) {
          x = space;
          y += lineHeight + space;
        }
        ctx.fillText(char, x, y);
        dict[i] = {
          xAdvance: width,
          xOffset: 0,
          yOffset: 0,
          rect: {
            x: x,
            y: y,
            width: width,
            height: lineHeight
          }
        };
        x += width + space;
      }
      var texture = new cc.Texture2D();
      texture.initWithElement(canvas);
      var spriteFrame = new cc.SpriteFrame();
      spriteFrame.setTexture(texture);
      _atlas.spriteFrame = spriteFrame;
    }
    function generateStats() {
      if (_stats) return;
      _stats = {
        frame: {
          desc: "Frame time (ms)",
          min: 0,
          max: 50,
          average: 500
        },
        fps: {
          desc: "Framerate (FPS)",
          below: 30,
          average: 500
        },
        draws: {
          desc: "Draw call"
        },
        logic: {
          desc: "Game Logic (ms)",
          min: 0,
          max: 50,
          average: 500,
          color: "#080"
        },
        render: {
          desc: "Renderer (ms)",
          min: 0,
          max: 50,
          average: 500,
          color: "#f90"
        },
        mode: {
          desc: cc.game.renderType === cc.game.RENDER_TYPE_WEBGL ? "WebGL" : "Canvas",
          min: 1
        }
      };
      var now = performance.now();
      for (var id in _stats) _stats[id]._counter = new PerfCounter(id, _stats[id], now);
    }
    function generateNode() {
      if (_rootNode && _rootNode.isValid) return;
      _rootNode = new cc.Node("PROFILER-NODE");
      _rootNode.x = _rootNode.y = 10;
      _rootNode.groupIndex = cc.Node.BuiltinGroupIndex.DEBUG;
      cc.Camera._setupDebugCamera();
      _rootNode.zIndex = macro.MAX_ZINDEX;
      cc.game.addPersistRootNode(_rootNode);
      var left = new cc.Node("LEFT-PANEL");
      left.anchorX = left.anchorY = 0;
      left.parent = _rootNode;
      var leftLabel = left.addComponent(cc.Label);
      leftLabel.font = _atlas;
      leftLabel.fontSize = _fontSize;
      leftLabel.lineHeight = _fontSize;
      var right = new cc.Node("RIGHT-PANEL");
      right.anchorX = 1;
      right.anchorY = 0;
      right.x = 200;
      right.parent = _rootNode;
      var rightLabel = right.addComponent(cc.Label);
      rightLabel.horizontalAlign = cc.Label.HorizontalAlign.RIGHT;
      rightLabel.font = _atlas;
      rightLabel.fontSize = _fontSize;
      rightLabel.lineHeight = _fontSize;
      _label = {
        left: leftLabel,
        right: rightLabel
      };
    }
    function beforeUpdate() {
      generateNode();
      var now = cc.director._lastUpdate;
      _stats["frame"]._counter.start(now);
      _stats["logic"]._counter.start(now);
    }
    function afterUpdate() {
      var now = performance.now();
      cc.director.isPaused() ? _stats["frame"]._counter.start(now) : _stats["logic"]._counter.end(now);
      _stats["render"]._counter.start(now);
    }
    function updateLabel(stat) {
      var length = 20;
      var desc = stat.desc;
      var value = stat._counter.human() + "";
      stat.label.string = stat.desc + "  " + stat._counter.human();
    }
    function afterDraw() {
      var now = performance.now();
      _stats["render"]._counter.end(now);
      _stats["draws"]._counter.value = cc.renderer.drawCalls;
      _stats["frame"]._counter.end(now);
      _stats["fps"]._counter.frame(now);
      var left = "";
      var right = "";
      for (var id in _stats) {
        var stat = _stats[id];
        stat._counter.sample(now);
        left += stat.desc + "\n";
        right += stat._counter.human() + "\n";
      }
      _label.left.string = left;
      _label.right.string = right;
    }
    cc.profiler = module.exports = {
      isShowingStats: function() {
        return _showFPS;
      },
      hideStats: function() {
        if (_showFPS) {
          _rootNode && (_rootNode.active = false);
          cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, beforeUpdate);
          cc.director.off(cc.Director.EVENT_AFTER_UPDATE, afterUpdate);
          cc.director.off(cc.Director.EVENT_AFTER_DRAW, afterDraw);
          _showFPS = false;
        }
      },
      showStats: function() {
        if (!_showFPS) {
          generateAtlas();
          generateStats();
          _rootNode && (_rootNode.active = true);
          cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, beforeUpdate);
          cc.director.on(cc.Director.EVENT_AFTER_UPDATE, afterUpdate);
          cc.director.on(cc.Director.EVENT_AFTER_DRAW, afterDraw);
          _showFPS = true;
        }
      }
    };
  }), {
    "../../platform/CCMacro": 91,
    "./perf-counter": 144
  } ],
  143: [ (function(require, module, exports) {
    var Counter = cc.Class({
      name: "cc.Counter",
      ctor: function(id, opts, now) {
        this._id = id;
        this._opts = opts || {};
        this._value = 0;
        this._total = 0;
        this._averageValue = 0;
        this._accumValue = 0;
        this._accumSamples = 0;
        this._accumStart = now;
      },
      properties: {
        value: {
          get: function() {
            return this._value;
          },
          set: function(v) {
            this._value = v;
          }
        }
      },
      _average: function(v, now) {
        if (this._opts.average) {
          this._accumValue += v;
          ++this._accumSamples;
          var t = now;
          if (t - this._accumStart >= this._opts.average) {
            this._averageValue = this._accumValue / this._accumSamples;
            this._accumValue = 0;
            this._accumStart = t;
            this._accumSamples = 0;
          }
        }
      },
      sample: function(now) {
        this._average(this._value, now);
      },
      human: function() {
        var v = this._opts.average ? this._averageValue : this._value;
        return Math.round(100 * v) / 100;
      },
      alarm: function() {
        return this._opts.below && this._value < this._opts.below || this._opts.over && this._value > this._opts.over;
      }
    });
    module.exports = Counter;
  }), {} ],
  144: [ (function(require, module, exports) {
    var Counter = require("./counter");
    var PerfCounter = cc.Class({
      name: "cc.PerfCounter",
      extends: Counter,
      ctor: function(id, opts, now) {
        this._time = now;
      },
      start: function(now) {
        this._time = now;
      },
      end: function(now) {
        this._value = now - this._time;
        this._average(this._value);
      },
      tick: function() {
        this.end();
        this.start();
      },
      frame: function(now) {
        var t = now;
        var e = t - this._time;
        this._total++;
        var avg = this._opts.average || 1e3;
        if (e > avg) {
          this._value = 1e3 * this._total / e;
          this._total = 0;
          this._time = t;
          this._average(this._value);
        }
      }
    });
    module.exports = PerfCounter;
  }), {
    "./counter": 143
  } ],
  145: [ (function(require, module, exports) {
    var textUtils = {
      label_wordRex: /([a-zA-Z0-9\xc4\xd6\xdc\xe4\xf6\xfc\xdf\xe9\xe8\xe7\xe0\xf9\xea\xe2\xee\xf4\xfb\u0430-\u044f\u0410-\u042f\u0401\u0451]+|\S)/,
      label_symbolRex: /^[!,.:;'}\]%\?>\u3001\u2018\u201c\u300b\uff1f\u3002\uff0c\uff01]/,
      label_lastWordRex: /([a-zA-Z0-9\xc4\xd6\xdc\xe4\xf6\xfc\xdf\xe9\xe8\xe7\xe0\xf9\xea\xe2\xee\xf4\xfb\u0430\xed\xec\xcd\xcc\xef\xc1\xc0\xe1\xe0\xc9\xc8\xd2\xd3\xf2\xf3\u0150\u0151\xd9\xda\u0170\xfa\u0171\xf1\xd1\xe6\xc6\u0153\u0152\xc3\xc2\xe3\xd4\xf5\u011b\u0161\u010d\u0159\u017e\xfd\xe1\xed\xe9\xf3\xfa\u016f\u0165\u010f\u0148\u011a\u0160\u010c\u0158\u017d\xc1\xcd\xc9\xd3\xda\u0164\u017c\u017a\u015b\xf3\u0144\u0142\u0119\u0107\u0105\u017b\u0179\u015a\xd3\u0143\u0141\u0118\u0106\u0104-\u044f\u0410-\u042f\u0401\u0451]+|\S)$/,
      label_lastEnglish: /[a-zA-Z0-9\xc4\xd6\xdc\xe4\xf6\xfc\xdf\xe9\xe8\xe7\xe0\xf9\xea\xe2\xee\xf4\xfb\u0430\xed\xec\xcd\xcc\xef\xc1\xc0\xe1\xe0\xc9\xc8\xd2\xd3\xf2\xf3\u0150\u0151\xd9\xda\u0170\xfa\u0171\xf1\xd1\xe6\xc6\u0153\u0152\xc3\xc2\xe3\xd4\xf5\u011b\u0161\u010d\u0159\u017e\xfd\xe1\xed\xe9\xf3\xfa\u016f\u0165\u010f\u0148\u011a\u0160\u010c\u0158\u017d\xc1\xcd\xc9\xd3\xda\u0164\u017c\u017a\u015b\xf3\u0144\u0142\u0119\u0107\u0105\u017b\u0179\u015a\xd3\u0143\u0141\u0118\u0106\u0104-\u044f\u0410-\u042f\u0401\u0451]+$/,
      label_firstEnglish: /^[a-zA-Z0-9\xc4\xd6\xdc\xe4\xf6\xfc\xdf\xe9\xe8\xe7\xe0\xf9\xea\xe2\xee\xf4\xfb\u0430\xed\xec\xcd\xcc\xef\xc1\xc0\xe1\xe0\xc9\xc8\xd2\xd3\xf2\xf3\u0150\u0151\xd9\xda\u0170\xfa\u0171\xf1\xd1\xe6\xc6\u0153\u0152\xc3\xc2\xe3\xd4\xf5\u011b\u0161\u010d\u0159\u017e\xfd\xe1\xed\xe9\xf3\xfa\u016f\u0165\u010f\u0148\u011a\u0160\u010c\u0158\u017d\xc1\xcd\xc9\xd3\xda\u0164\u017c\u017a\u015b\xf3\u0144\u0142\u0119\u0107\u0105\u017b\u0179\u015a\xd3\u0143\u0141\u0118\u0106\u0104-\u044f\u0410-\u042f\u0401\u0451]/,
      label_wrapinspection: true,
      isUnicodeCJK: function(ch) {
        var __CHINESE_REG = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;
        var __JAPANESE_REG = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
        var __KOREAN_REG = /^[\u1100-\u11FF]|[\u3130-\u318F]|[\uA960-\uA97F]|[\uAC00-\uD7AF]|[\uD7B0-\uD7FF]+$/;
        return __CHINESE_REG.test(ch) || __JAPANESE_REG.test(ch) || __KOREAN_REG.test(ch);
      },
      isUnicodeSpace: function(ch) {
        ch = ch.charCodeAt(0);
        return ch >= 9 && ch <= 13 || 32 === ch || 133 === ch || 160 === ch || 5760 === ch || ch >= 8192 && ch <= 8202 || 8232 === ch || 8233 === ch || 8239 === ch || 8287 === ch || 12288 === ch;
      },
      safeMeasureText: function(ctx, string) {
        var metric = ctx.measureText(string);
        return metric && metric.width || 0;
      },
      fragmentText: function(stringToken, allWidth, maxWidth, measureText) {
        var wrappedWords = [];
        if (0 === stringToken.length || maxWidth < 0) {
          wrappedWords.push("");
          return wrappedWords;
        }
        var text = stringToken;
        while (allWidth > maxWidth && text.length > 1) {
          var fuzzyLen = text.length * (maxWidth / allWidth) | 0;
          var tmpText = text.substr(fuzzyLen);
          var width = allWidth - measureText(tmpText);
          var sLine = tmpText;
          var pushNum = 0;
          var checkWhile = 0;
          var checkCount = 10;
          while (width > maxWidth && checkWhile++ < checkCount) {
            fuzzyLen *= maxWidth / width;
            fuzzyLen |= 0;
            tmpText = text.substr(fuzzyLen);
            width = allWidth - measureText(tmpText);
          }
          checkWhile = 0;
          while (width <= maxWidth && checkWhile++ < checkCount) {
            if (tmpText) {
              var exec = this.label_wordRex.exec(tmpText);
              pushNum = exec ? exec[0].length : 1;
              sLine = tmpText;
            }
            fuzzyLen += pushNum;
            tmpText = text.substr(fuzzyLen);
            width = allWidth - measureText(tmpText);
          }
          fuzzyLen -= pushNum;
          if (0 === fuzzyLen) {
            fuzzyLen = 1;
            sLine = sLine.substr(1);
          }
          var sText = text.substr(0, fuzzyLen), result;
          if (this.label_wrapinspection && this.label_symbolRex.test(sLine || tmpText)) {
            result = this.label_lastWordRex.exec(sText);
            fuzzyLen -= result ? result[0].length : 0;
            0 === fuzzyLen && (fuzzyLen = 1);
            sLine = text.substr(fuzzyLen);
            sText = text.substr(0, fuzzyLen);
          }
          if (this.label_firstEnglish.test(sLine)) {
            result = this.label_lastEnglish.exec(sText);
            if (result && sText !== result[0]) {
              fuzzyLen -= result[0].length;
              sLine = text.substr(fuzzyLen);
              sText = text.substr(0, fuzzyLen);
            }
          }
          if (0 === wrappedWords.length) wrappedWords.push(sText); else {
            sText = sText.trim();
            sText.length > 0 && wrappedWords.push(sText);
          }
          text = sLine || tmpText;
          allWidth = measureText(text);
        }
        if (0 === wrappedWords.length) wrappedWords.push(text); else {
          text = text.trim();
          text.length > 0 && wrappedWords.push(text);
        }
        return wrappedWords;
      }
    };
    module.exports = textUtils;
  }), {} ],
  146: [ (function(require, module, exports) {
    var Texture2D = require("../assets/CCTexture2D");
    var textureUtil = {
      loadImage: function(url, cb, target) {
        cc.assertID(url, 3103);
        var tex = cc.loader.getRes(url);
        if (tex) {
          if (tex.loaded) {
            cb && cb.call(target, tex);
            return tex;
          }
          tex.once("load", (function() {
            cb && cb.call(target, tex);
          }), target);
          return tex;
        }
        tex = new Texture2D();
        tex.url = url;
        cc.loader.load({
          url: url,
          texture: tex
        }, (function(err, texture) {
          if (err) return cb && cb.call(target, err || new Error("Unknown error"));
          texture.handleLoadedTexture();
          cb && cb.call(target, null, texture);
        }));
        return tex;
      },
      cacheImage: function(url, image) {
        if (url && image) {
          var tex = new Texture2D();
          tex.initWithElement(image);
          var item = {
            id: url,
            url: url,
            error: null,
            content: tex,
            complete: false
          };
          cc.loader.flowOut(item);
          return tex;
        }
      },
      postLoadTexture: function(texture, callback) {
        if (texture.loaded) {
          callback && callback();
          return;
        }
        if (!texture.url) {
          callback && callback();
          return;
        }
        cc.loader.load({
          url: texture.url,
          skips: [ "Loader" ]
        }, (function(err, image) {
          if (image) {
            if (true, image instanceof cc.Texture2D) return cc.error("internal error: loader handle pipe must be skipped");
            texture.loaded || (texture._nativeAsset = image);
          }
          callback && callback(err);
        }));
      }
    };
    cc.textureUtil = module.exports = textureUtil;
  }), {
    "../assets/CCTexture2D": 25
  } ],
  147: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    var Color = (function() {
      function Color(r, g, b, a) {
        if ("object" === typeof r) {
          g = r.g;
          b = r.b;
          a = r.a;
          r = r.r;
        }
        r = r || 0;
        g = g || 0;
        b = b || 0;
        a = "number" === typeof a ? a : 255;
        this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + r;
      }
      js.extend(Color, ValueType);
      require("../platform/CCClass").fastDefine("cc.Color", Color, {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      });
      var DefaultColors = {
        WHITE: [ 255, 255, 255, 255 ],
        BLACK: [ 0, 0, 0, 255 ],
        TRANSPARENT: [ 0, 0, 0, 0 ],
        GRAY: [ 127.5, 127.5, 127.5 ],
        RED: [ 255, 0, 0 ],
        GREEN: [ 0, 255, 0 ],
        BLUE: [ 0, 0, 255 ],
        YELLOW: [ 255, 235, 4 ],
        ORANGE: [ 255, 127, 0 ],
        CYAN: [ 0, 255, 255 ],
        MAGENTA: [ 255, 0, 255 ]
      };
      for (var colorName in DefaultColors) js.get(Color, colorName, (function(rgba) {
        return function() {
          return new Color(rgba[0], rgba[1], rgba[2], rgba[3]);
        };
      })(DefaultColors[colorName]));
      var proto = Color.prototype;
      proto.clone = function() {
        var ret = new Color();
        ret._val = this._val;
        return ret;
      };
      proto.equals = function(other) {
        return other && this._val === other._val;
      };
      proto.lerp = function(to, ratio, out) {
        out = out || new Color();
        var r = this.r;
        var g = this.g;
        var b = this.b;
        var a = this.a;
        out.r = r + (to.r - r) * ratio;
        out.g = g + (to.g - g) * ratio;
        out.b = b + (to.b - b) * ratio;
        out.a = a + (to.a - a) * ratio;
        return out;
      };
      proto.toString = function() {
        return "rgba(" + this.r.toFixed() + ", " + this.g.toFixed() + ", " + this.b.toFixed() + ", " + this.a.toFixed() + ")";
      };
      proto.getR = function() {
        return 255 & this._val;
      };
      proto.setR = function(red) {
        red = ~~cc.misc.clampf(red, 0, 255);
        this._val = (4294967040 & this._val | red) >>> 0;
        return this;
      };
      proto.getG = function() {
        return (65280 & this._val) >> 8;
      };
      proto.setG = function(green) {
        green = ~~cc.misc.clampf(green, 0, 255);
        this._val = (4294902015 & this._val | green << 8) >>> 0;
        return this;
      };
      proto.getB = function() {
        return (16711680 & this._val) >> 16;
      };
      proto.setB = function(blue) {
        blue = ~~cc.misc.clampf(blue, 0, 255);
        this._val = (4278255615 & this._val | blue << 16) >>> 0;
        return this;
      };
      proto.getA = function() {
        return (4278190080 & this._val) >>> 24;
      };
      proto.setA = function(alpha) {
        alpha = ~~cc.misc.clampf(alpha, 0, 255);
        this._val = (16777215 & this._val | alpha << 24 >>> 0) >>> 0;
        return this;
      };
      js.getset(proto, "r", proto.getR, proto.setR, true);
      js.getset(proto, "g", proto.getG, proto.setG, true);
      js.getset(proto, "b", proto.getB, proto.setB, true);
      js.getset(proto, "a", proto.getA, proto.setA, true);
      proto.toCSS = function(opt) {
        return "rgba" === opt ? "rgba(" + (0 | this.r) + "," + (0 | this.g) + "," + (0 | this.b) + "," + (this.a / 255).toFixed(2) + ")" : "rgb" === opt ? "rgb(" + (0 | this.r) + "," + (0 | this.g) + "," + (0 | this.b) + ")" : "#" + this.toHEX(opt);
      };
      proto.fromHEX = function(hexString) {
        hexString = 0 === hexString.indexOf("#") ? hexString.substring(1) : hexString;
        var r = parseInt(hexString.substr(0, 2), 16) || 0;
        var g = parseInt(hexString.substr(2, 2), 16) || 0;
        var b = parseInt(hexString.substr(4, 2), 16) || 0;
        var a = parseInt(hexString.substr(6, 2), 16) || 255;
        this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + r;
        return this;
      };
      proto.toHEX = function(fmt) {
        var hex = [ (0 | this.r).toString(16), (0 | this.g).toString(16), (0 | this.b).toString(16) ];
        var i = -1;
        if ("#rgb" === fmt) for (i = 0; i < hex.length; ++i) hex[i].length > 1 && (hex[i] = hex[i][0]); else if ("#rrggbb" === fmt) for (i = 0; i < hex.length; ++i) 1 === hex[i].length && (hex[i] = "0" + hex[i]); else if ("#rrggbbaa" === fmt) {
          hex.push((0 | this.a).toString(16));
          for (i = 0; i < hex.length; ++i) 1 === hex[i].length && (hex[i] = "0" + hex[i]);
        }
        return hex.join("");
      };
      proto.toRGBValue = function() {
        return 16777215 & this._val;
      };
      proto.fromHSV = function(h, s, v) {
        var r, g, b;
        if (0 === s) r = g = b = v; else if (0 === v) r = g = b = 0; else {
          1 === h && (h = 0);
          h *= 6;
          s = s;
          v = v;
          var i = Math.floor(h);
          var f = h - i;
          var p = v * (1 - s);
          var q = v * (1 - s * f);
          var t = v * (1 - s * (1 - f));
          switch (i) {
           case 0:
            r = v;
            g = t;
            b = p;
            break;

           case 1:
            r = q;
            g = v;
            b = p;
            break;

           case 2:
            r = p;
            g = v;
            b = t;
            break;

           case 3:
            r = p;
            g = q;
            b = v;
            break;

           case 4:
            r = t;
            g = p;
            b = v;
            break;

           case 5:
            r = v;
            g = p;
            b = q;
          }
        }
        r *= 255;
        g *= 255;
        b *= 255;
        this._val = (this.a << 24 >>> 0) + (b << 16) + (g << 8) + r;
        return this;
      };
      proto.toHSV = function() {
        var r = this.r / 255;
        var g = this.g / 255;
        var b = this.b / 255;
        var hsv = {
          h: 0,
          s: 0,
          v: 0
        };
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var delta = 0;
        hsv.v = max;
        hsv.s = max ? (max - min) / max : 0;
        if (hsv.s) {
          delta = max - min;
          hsv.h = r === max ? (g - b) / delta : g === max ? 2 + (b - r) / delta : 4 + (r - g) / delta;
          hsv.h /= 6;
          hsv.h < 0 && (hsv.h += 1);
        } else hsv.h = 0;
        return hsv;
      };
      proto.set = function(color) {
        if (color._val) this._val = color._val; else {
          this.r = color.r;
          this.g = color.g;
          this.b = color.b;
          this.a = color.a;
        }
      };
      return Color;
    })();
    cc.Color = Color;
    cc.color = function color(r, g, b, a) {
      if ("string" === typeof r) {
        var result = new cc.Color();
        return result.fromHEX(r);
      }
      if ("object" === typeof r) return new cc.Color(r.r, r.g, r.b, r.a);
      return new cc.Color(r, g, b, a);
    };
    module.exports = cc.Color;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "./value-type": 153
  } ],
  148: [ (function(require, module, exports) {
    require("./value-type");
    require("./vec2");
    require("./vec3");
    require("./quat");
    require("./mat4");
    require("./size");
    require("./rect");
    require("./color");
    cc.vmath = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
  }), {
    "./color": 147,
    "./mat4": 149,
    "./quat": 150,
    "./rect": 151,
    "./size": 152,
    "./value-type": 153,
    "./vec2": 154,
    "./vec3": 155,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  149: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    var CCClass = require("../platform/CCClass");
    var math = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
    var mat4 = math.mat4;
    function Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      var t = this;
      t.m00 = m00;
      t.m01 = m01;
      t.m02 = m02;
      t.m03 = m03;
      t.m04 = m10;
      t.m05 = m11;
      t.m06 = m12;
      t.m07 = m13;
      t.m08 = m20;
      t.m09 = m21;
      t.m10 = m22;
      t.m11 = m23;
      t.m12 = m30;
      t.m13 = m31;
      t.m14 = m32;
      t.m15 = m33;
    }
    js.extend(Mat4, ValueType);
    CCClass.fastDefine("cc.Mat4", Mat4, {
      m00: 1,
      m01: 0,
      m02: 0,
      m03: 0,
      m04: 0,
      m05: 1,
      m06: 0,
      m07: 0,
      m08: 0,
      m09: 0,
      m10: 1,
      m11: 0,
      m12: 0,
      m13: 0,
      m14: 0,
      m15: 1
    });
    js.mixin(Mat4.prototype, {
      clone: function() {
        var t = this;
        return new Mat4(t.m00, t.m01, t.m02, t.m03, t.m04, t.m05, t.m06, t.m07, t.m08, t.m09, t.m10, t.m11, t.m12, t.m13, t.m14, t.m15);
      },
      set: function(s) {
        var t = this;
        t.m00 = s.m00;
        t.m01 = s.m01;
        t.m02 = s.m02;
        t.m03 = s.m03;
        t.m04 = s.m04;
        t.m05 = s.m05;
        t.m06 = s.m06;
        t.m07 = s.m07;
        t.m08 = s.m08;
        t.m09 = s.m09;
        t.m10 = s.m10;
        t.m11 = s.m11;
        t.m12 = s.m12;
        t.m13 = s.m13;
        t.m14 = s.m14;
        t.m15 = s.m15;
        return this;
      },
      equals: function(other) {
        return mat4.exactEquals(this, other);
      },
      fuzzyEquals: function(other) {
        return mat4.equals(this, other);
      },
      toString: function() {
        var t = this;
        return "[\n" + t.m00 + ", " + t.m01 + ", " + t.m02 + ", " + t.m03 + ",\n" + t.m04 + ", " + t.m05 + ", " + t.m06 + ", " + t.m07 + ",\n" + t.m08 + ", " + t.m09 + ", " + t.m10 + ", " + t.m11 + ",\n" + t.m12 + ", " + t.m13 + ", " + t.m14 + ", " + t.m15 + "\n]";
      },
      identity: function() {
        return mat4.identity(this);
      },
      transpose: function(out) {
        out = out || new cc.Mat4();
        return mat4.transpose(out, this);
      },
      invert: function(out) {
        out = out || new cc.Mat4();
        return mat4.invert(out, this);
      },
      adjoint: function(out) {
        out = out || new cc.Mat4();
        return mat4.adjoint(out, this);
      },
      determinant: function() {
        return mat4.determinant(this);
      },
      add: function(other, out) {
        out = out || new cc.Mat4();
        return mat4.add(out, this, other);
      },
      sub: function(other, out) {
        out = out || new cc.Mat4();
        return mat4.subtract(out, this, other);
      },
      mul: function(other, out) {
        out = out || new cc.Mat4();
        return mat4.multiply(out, this, other);
      },
      mulScalar: function(number, out) {
        out = out || new cc.Mat4();
        return mat4.mulScalar(out, this, number);
      },
      translate: function(v, out) {
        out = out || new cc.Mat4();
        return mat4.translate(out, this, v);
      },
      scale: function(v, out) {
        out = out || new cc.Mat4();
        return mat4.scale(out, this, v);
      },
      rotate: function(rad, axis, out) {
        out = out || new cc.Mat4();
        return mat4.rotate(out, this, rad, axis);
      },
      getTranslation: function(out) {
        out = out || new cc.Vec3();
        return mat4.getTranslation(out, this);
      },
      getScale: function(out) {
        out = out || new cc.Vec3();
        return mat4.getScaling(out, this);
      },
      getRotation: function(out) {
        out = out || new cc.Quat();
        return mat4.getRotation(out, this);
      },
      fromRTS: function(q, v, s) {
        return mat4.fromRTS(this, q, v, s);
      },
      fromQuat: function(quat) {
        return mat4.fromQuat(this, quat);
      }
    });
    cc.mat4 = function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      return new Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    };
    module.exports = cc.Mat4 = Mat4;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "./value-type": 153,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  150: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    var CCClass = require("../platform/CCClass");
    function Quat(x, y, z, w) {
      if (x && "object" === typeof x) {
        z = x.z;
        y = x.y;
        x = x.x;
        w = x.w;
      }
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w || 1;
    }
    js.extend(Quat, ValueType);
    CCClass.fastDefine("cc.Quat", Quat, {
      x: 0,
      y: 0,
      z: 0,
      w: 1
    });
    var proto = Quat.prototype;
    proto.clone = function() {
      return new Quat(this.x, this.y, this.z, this.w);
    };
    proto.set = function(newValue) {
      this.x = newValue.x;
      this.y = newValue.y;
      this.z = newValue.z;
      this.w = newValue.w;
      return this;
    };
    proto.equals = function(other) {
      return other && this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
    };
    proto.toEuler = function(out) {
      cc.vmath.quat.toEuler(out, this);
      return out;
    };
    proto.fromEuler = function(euler) {
      cc.vmath.quat.fromEuler(this, euler.x, euler.y, euler.z);
      return this;
    };
    proto.lerp = function(to, ratio, out) {
      out = out || new cc.Quat();
      cc.vmath.quat.slerp(out, this, to, ratio);
      return out;
    };
    cc.quat = function quat(x, y, z, w) {
      return new Quat(x, y, z, w);
    };
    module.exports = cc.Quat = Quat;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "./value-type": 153
  } ],
  151: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    function Rect(x, y, w, h) {
      if (x && "object" === typeof x) {
        y = x.y;
        w = x.width;
        h = x.height;
        x = x.x;
      }
      this.x = x || 0;
      this.y = y || 0;
      this.width = w || 0;
      this.height = h || 0;
    }
    js.extend(Rect, ValueType);
    require("../platform/CCClass").fastDefine("cc.Rect", Rect, {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
    Rect.fromMinMax = function(v1, v2) {
      var min_x = Math.min(v1.x, v2.x);
      var min_y = Math.min(v1.y, v2.y);
      var max_x = Math.max(v1.x, v2.x);
      var max_y = Math.max(v1.y, v2.y);
      return new Rect(min_x, min_y, max_x - min_x, max_y - min_y);
    };
    var proto = Rect.prototype;
    proto.clone = function() {
      return new Rect(this.x, this.y, this.width, this.height);
    };
    proto.equals = function(other) {
      return other && this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
    };
    proto.lerp = function(to, ratio, out) {
      out = out || new Rect();
      var x = this.x;
      var y = this.y;
      var width = this.width;
      var height = this.height;
      out.x = x + (to.x - x) * ratio;
      out.y = y + (to.y - y) * ratio;
      out.width = width + (to.width - width) * ratio;
      out.height = height + (to.height - height) * ratio;
      return out;
    };
    proto.set = function(source) {
      this.x = source.x;
      this.y = source.y;
      this.width = source.width;
      this.height = source.height;
    };
    proto.intersects = function(rect) {
      var maxax = this.x + this.width, maxay = this.y + this.height, maxbx = rect.x + rect.width, maxby = rect.y + rect.height;
      return !(maxax < rect.x || maxbx < this.x || maxay < rect.y || maxby < this.y);
    };
    proto.intersection = function(out, rectB) {
      var axMin = this.x, ayMin = this.y, axMax = this.x + this.width, ayMax = this.y + this.height;
      var bxMin = rectB.x, byMin = rectB.y, bxMax = rectB.x + rectB.width, byMax = rectB.y + rectB.height;
      out.x = Math.max(axMin, bxMin);
      out.y = Math.max(ayMin, byMin);
      out.width = Math.min(axMax, bxMax) - out.x;
      out.height = Math.min(ayMax, byMax) - out.y;
      return out;
    };
    proto.contains = function(point) {
      return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
    };
    proto.containsRect = function(rect) {
      return this.x <= rect.x && this.x + this.width >= rect.x + rect.width && this.y <= rect.y && this.y + this.height >= rect.y + rect.height;
    };
    proto.union = function(out, rectB) {
      var ax = this.x, ay = this.y, aw = this.width, ah = this.height;
      var bx = rectB.x, by = rectB.y, bw = rectB.width, bh = rectB.height;
      out.x = Math.min(ax, bx);
      out.y = Math.min(ay, by);
      out.width = Math.max(ax + aw, bx + bw) - out.x;
      out.height = Math.max(ay + ah, by + bh) - out.y;
      return out;
    };
    proto.transformMat4 = function(out, mat) {
      var ol = this.x;
      var ob = this.y;
      var or = ol + this.width;
      var ot = ob + this.height;
      var lbx = mat.m00 * ol + mat.m04 * ob + mat.m12;
      var lby = mat.m01 * ol + mat.m05 * ob + mat.m13;
      var rbx = mat.m00 * or + mat.m04 * ob + mat.m12;
      var rby = mat.m01 * or + mat.m05 * ob + mat.m13;
      var ltx = mat.m00 * ol + mat.m04 * ot + mat.m12;
      var lty = mat.m01 * ol + mat.m05 * ot + mat.m13;
      var rtx = mat.m00 * or + mat.m04 * ot + mat.m12;
      var rty = mat.m01 * or + mat.m05 * ot + mat.m13;
      var minX = Math.min(lbx, rbx, ltx, rtx);
      var maxX = Math.max(lbx, rbx, ltx, rtx);
      var minY = Math.min(lby, rby, lty, rty);
      var maxY = Math.max(lby, rby, lty, rty);
      out.x = minX;
      out.y = minY;
      out.width = maxX - minX;
      out.height = maxY - minY;
      return out;
    };
    proto.toString = function() {
      return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
    };
    js.getset(proto, "xMin", (function() {
      return this.x;
    }), (function(value) {
      this.width += this.x - value;
      this.x = value;
    }));
    js.getset(proto, "yMin", (function() {
      return this.y;
    }), (function(value) {
      this.height += this.y - value;
      this.y = value;
    }));
    js.getset(proto, "xMax", (function() {
      return this.x + this.width;
    }), (function(value) {
      this.width = value - this.x;
    }));
    js.getset(proto, "yMax", (function() {
      return this.y + this.height;
    }), (function(value) {
      this.height = value - this.y;
    }));
    js.getset(proto, "center", (function() {
      return new cc.Vec2(this.x + .5 * this.width, this.y + .5 * this.height);
    }), (function(value) {
      this.x = value.x - .5 * this.width;
      this.y = value.y - .5 * this.height;
    }));
    js.getset(proto, "origin", (function() {
      return new cc.Vec2(this.x, this.y);
    }), (function(value) {
      this.x = value.x;
      this.y = value.y;
    }));
    js.getset(proto, "size", (function() {
      return new cc.Size(this.width, this.height);
    }), (function(value) {
      this.width = value.width;
      this.height = value.height;
    }));
    cc.Rect = Rect;
    cc.rect = function rect(x, y, w, h) {
      return new Rect(x, y, w, h);
    };
    module.exports = cc.Rect;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "./value-type": 153
  } ],
  152: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    function Size(width, height) {
      if (width && "object" === typeof width) {
        height = width.height;
        width = width.width;
      }
      this.width = width || 0;
      this.height = height || 0;
    }
    js.extend(Size, ValueType);
    require("../platform/CCClass").fastDefine("cc.Size", Size, {
      width: 0,
      height: 0
    });
    js.get(Size, "ZERO", (function() {
      return new Size(0, 0);
    }));
    var proto = Size.prototype;
    proto.clone = function() {
      return new Size(this.width, this.height);
    };
    proto.equals = function(other) {
      return other && this.width === other.width && this.height === other.height;
    };
    proto.lerp = function(to, ratio, out) {
      out = out || new Size();
      var width = this.width;
      var height = this.height;
      out.width = width + (to.width - width) * ratio;
      out.height = height + (to.height - height) * ratio;
      return out;
    };
    proto.set = function(source) {
      this.width = source.width;
      this.height = source.height;
    };
    proto.toString = function() {
      return "(" + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
    };
    cc.size = function(w, h) {
      return new Size(w, h);
    };
    cc.Size = module.exports = Size;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "./value-type": 153
  } ],
  153: [ (function(require, module, exports) {
    var js = require("../platform/js");
    function ValueType() {}
    js.setClassName("cc.ValueType", ValueType);
    var proto = ValueType.prototype;
    false;
    proto.toString = function() {
      return "" + {};
    };
    cc.ValueType = module.exports = ValueType;
  }), {
    "../platform/js": 106
  } ],
  154: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    var CCClass = require("../platform/CCClass");
    var math = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
    var misc = require("../utils/misc");
    function Vec2(x, y) {
      if (x && "object" === typeof x) {
        y = x.y;
        x = x.x;
      }
      this.x = x || 0;
      this.y = y || 0;
    }
    js.extend(Vec2, ValueType);
    CCClass.fastDefine("cc.Vec2", Vec2, {
      x: 0,
      y: 0
    });
    var proto = Vec2.prototype;
    proto.clone = function() {
      return new Vec2(this.x, this.y);
    };
    proto.set = function(newValue) {
      this.x = newValue.x;
      this.y = newValue.y;
      return this;
    };
    proto.equals = function(other) {
      return other && this.x === other.x && this.y === other.y;
    };
    proto.fuzzyEquals = function(other, variance) {
      if (this.x - variance <= other.x && other.x <= this.x + variance && this.y - variance <= other.y && other.y <= this.y + variance) return true;
      return false;
    };
    proto.toString = function() {
      return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ")";
    };
    proto.lerp = function(to, ratio, out) {
      out = out || new Vec2();
      var x = this.x;
      var y = this.y;
      out.x = x + (to.x - x) * ratio;
      out.y = y + (to.y - y) * ratio;
      return out;
    };
    proto.clampf = function(min_inclusive, max_inclusive) {
      this.x = misc.clampf(this.x, min_inclusive.x, max_inclusive.x);
      this.y = misc.clampf(this.y, min_inclusive.y, max_inclusive.y);
      return this;
    };
    proto.addSelf = function(vector) {
      this.x += vector.x;
      this.y += vector.y;
      return this;
    };
    proto.add = function(vector, out) {
      out = out || new Vec2();
      out.x = this.x + vector.x;
      out.y = this.y + vector.y;
      return out;
    };
    proto.subSelf = function(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      return this;
    };
    proto.sub = function(vector, out) {
      out = out || new Vec2();
      out.x = this.x - vector.x;
      out.y = this.y - vector.y;
      return out;
    };
    proto.mulSelf = function(num) {
      this.x *= num;
      this.y *= num;
      return this;
    };
    proto.mul = function(num, out) {
      out = out || new Vec2();
      out.x = this.x * num;
      out.y = this.y * num;
      return out;
    };
    proto.scaleSelf = function(vector) {
      this.x *= vector.x;
      this.y *= vector.y;
      return this;
    };
    proto.scale = function(vector, out) {
      out = out || new Vec2();
      out.x = this.x * vector.x;
      out.y = this.y * vector.y;
      return out;
    };
    proto.divSelf = function(num) {
      this.x /= num;
      this.y /= num;
      return this;
    };
    proto.div = function(num, out) {
      out = out || new Vec2();
      out.x = this.x / num;
      out.y = this.y / num;
      return out;
    };
    proto.negSelf = function() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    };
    proto.neg = function(out) {
      out = out || new Vec2();
      out.x = -this.x;
      out.y = -this.y;
      return out;
    };
    proto.dot = function(vector) {
      return this.x * vector.x + this.y * vector.y;
    };
    proto.cross = function(vector) {
      return this.x * vector.y - this.y * vector.x;
    };
    proto.mag = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    proto.magSqr = function() {
      return this.x * this.x + this.y * this.y;
    };
    proto.normalizeSelf = function() {
      var magSqr = this.x * this.x + this.y * this.y;
      if (1 === magSqr) return this;
      if (0 === magSqr) return this;
      var invsqrt = 1 / Math.sqrt(magSqr);
      this.x *= invsqrt;
      this.y *= invsqrt;
      return this;
    };
    proto.normalize = function(out) {
      out = out || new Vec2();
      out.x = this.x;
      out.y = this.y;
      out.normalizeSelf();
      return out;
    };
    proto.angle = function(vector) {
      var magSqr1 = this.magSqr();
      var magSqr2 = vector.magSqr();
      if (0 === magSqr1 || 0 === magSqr2) {
        console.warn("Can't get angle between zero vector");
        return 0;
      }
      var dot = this.dot(vector);
      var theta = dot / Math.sqrt(magSqr1 * magSqr2);
      theta = misc.clampf(theta, -1, 1);
      return Math.acos(theta);
    };
    proto.signAngle = function(vector) {
      var angle = this.angle(vector);
      return this.cross(vector) < 0 ? -angle : angle;
    };
    proto.rotate = function(radians, out) {
      out = out || new Vec2();
      out.x = this.x;
      out.y = this.y;
      return out.rotateSelf(radians);
    };
    proto.rotateSelf = function(radians) {
      var sin = Math.sin(radians);
      var cos = Math.cos(radians);
      var x = this.x;
      this.x = cos * x - sin * this.y;
      this.y = sin * x + cos * this.y;
      return this;
    };
    proto.project = function(vector) {
      return vector.mul(this.dot(vector) / vector.dot(vector));
    };
    proto.transformMat4 = function(m, out) {
      out = out || new Vec2();
      math.vec2.transformMat4(out, this, m);
    };
    js.get(Vec2, "ONE", (function() {
      return new Vec2(1, 1);
    }));
    js.get(Vec2, "ZERO", (function() {
      return new Vec2(0, 0);
    }));
    js.get(Vec2, "UP", (function() {
      return new Vec2(0, 1);
    }));
    js.get(Vec2, "RIGHT", (function() {
      return new Vec2(1, 0);
    }));
    cc.Vec2 = Vec2;
    cc.v2 = function v2(x, y) {
      return new Vec2(x, y);
    };
    cc.p = cc.v2;
    module.exports = cc.Vec2;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "../utils/misc": 139,
    "./value-type": 153,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  155: [ (function(require, module, exports) {
    var ValueType = require("./value-type");
    var js = require("../platform/js");
    var CCClass = require("../platform/CCClass");
    var math = require("/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js").math;
    var misc = require("../utils/misc");
    function Vec3(x, y, z) {
      if (x && "object" === typeof x) {
        z = x.z;
        y = x.y;
        x = x.x;
      }
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
    js.extend(Vec3, ValueType);
    CCClass.fastDefine("cc.Vec3", Vec3, {
      x: 0,
      y: 0,
      z: 0
    });
    var proto = Vec3.prototype;
    proto.clone = function() {
      return new Vec3(this.x, this.y, this.z);
    };
    proto.set = function(newValue) {
      this.x = newValue.x;
      this.y = newValue.y;
      this.z = newValue.z;
      return this;
    };
    proto.equals = function(other) {
      return other && this.x === other.x && this.y === other.y && this.z === other.z;
    };
    proto.fuzzyEquals = function(other, variance) {
      if (this.x - variance <= other.x && other.x <= this.x + variance && this.y - variance <= other.y && other.y <= this.y + variance && this.z - variance <= other.z && other.z <= this.z + variance) return true;
      return false;
    };
    proto.toString = function() {
      return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ")";
    };
    proto.lerp = function(to, ratio, out) {
      out = out || new Vec3();
      math.vec3.lerp(out, this, to, ratio);
      return out;
    };
    proto.clampf = function(min_inclusive, max_inclusive) {
      this.x = misc.clampf(this.x, min_inclusive.x, max_inclusive.x);
      this.y = misc.clampf(this.y, min_inclusive.y, max_inclusive.y);
      this.z = misc.clampf(this.z, min_inclusive.z, max_inclusive.z);
      return this;
    };
    proto.addSelf = function(vector) {
      this.x += vector.x;
      this.y += vector.y;
      this.z += vector.z;
      return this;
    };
    proto.add = function(vector, out) {
      out = out || new Vec3();
      out.x = this.x + vector.x;
      out.y = this.y + vector.y;
      out.z = this.z + vector.z;
      return out;
    };
    proto.subSelf = function(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      this.z -= vector.z;
      return this;
    };
    proto.sub = function(vector, out) {
      out = out || new Vec3();
      out.x = this.x - vector.x;
      out.y = this.y - vector.y;
      out.z = this.z - vector.z;
      return out;
    };
    proto.mulSelf = function(num) {
      this.x *= num;
      this.y *= num;
      this.z *= num;
      return this;
    };
    proto.mul = function(num, out) {
      out = out || new Vec3();
      out.x = this.x * num;
      out.y = this.y * num;
      out.z = this.z * num;
      return out;
    };
    proto.scaleSelf = function(vector) {
      this.x *= vector.x;
      this.y *= vector.y;
      this.z *= vector.z;
      return this;
    };
    proto.scale = function(vector, out) {
      out = out || new Vec3();
      out.x = this.x * vector.x;
      out.y = this.y * vector.y;
      out.z = this.z * vector.z;
      return out;
    };
    proto.divSelf = function(num) {
      this.x /= num;
      this.y /= num;
      this.z /= num;
      return this;
    };
    proto.div = function(num, out) {
      out = out || new Vec3();
      out.x = this.x / num;
      out.y = this.y / num;
      out.z = this.z / num;
      return out;
    };
    proto.negSelf = function() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    };
    proto.neg = function(out) {
      out = out || new Vec3();
      out.x = -this.x;
      out.y = -this.y;
      out.z = -this.z;
      return out;
    };
    proto.dot = function(vector) {
      return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    };
    proto.cross = function(vector, out) {
      out = out || new Vec3();
      math.vec3.cross(out, this, vector);
      return out;
    };
    proto.mag = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    proto.magSqr = function() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    proto.normalizeSelf = function() {
      math.vec3.normalize(this, this);
      return this;
    };
    proto.normalize = function(out) {
      out = out || new Vec3();
      math.vec3.normalize(out, this);
      return out;
    };
    proto.transformMat4 = function(m, out) {
      out = out || new Vec3();
      math.vec3.transformMat4(out, this, m);
    };
    cc.v3 = function v3(x, y, z) {
      return new Vec3(x, y, z);
    };
    module.exports = cc.Vec3 = Vec3;
  }), {
    "../platform/CCClass": 86,
    "../platform/js": 106,
    "../utils/misc": 139,
    "./value-type": 153,
    "/Applications/CocosCreator.app/Contents/Resources/engine/cocos2d/core/renderer/render-engine.canvas.js": 128
  } ],
  156: [ (function(require, module, exports) {
    var js = cc.js;
    true;
    var ERR;
    (function() {
      function deprecateEnum(obj, oldPath, newPath, hasTypePrefixBefore) {
        true;
        return;
        var enumDef;
        var entries;
        var delimiter;
        var i;
        var entry;
        var oldPropName;
        var oldTypeName;
      }
      function markAsRemoved(ownerCtor, removedProps, ownerName) {
        if (!ownerCtor) return;
        ownerName = ownerName || js.getClassName(ownerCtor);
        removedProps.forEach((function(prop) {
          function error() {
            cc.errorID(1406, ownerName, prop);
          }
          js.getset(ownerCtor.prototype, prop, error, error);
        }));
      }
      function markAsDeprecated(ownerCtor, deprecatedProps, ownerName) {
        if (!ownerCtor) return;
        ownerName = ownerName || js.getClassName(ownerCtor);
        var descriptors = Object.getOwnPropertyDescriptors(ownerCtor.prototype);
        deprecatedProps.forEach((function(prop) {
          var deprecatedProp = prop[0];
          var newProp = prop[1];
          var descriptor = descriptors[deprecatedProp];
          js.getset(ownerCtor.prototype, deprecatedProp, (function() {
            cc.warnID(1400, ownerName + "." + deprecatedProp, ownerName + "." + newProp);
            return descriptor.get.call(this);
          }), (function(v) {
            cc.warnID(1400, ownerName + "." + deprecatedProp, ownerName + "." + newProp);
            descriptor.set.call(this, v);
          }));
        }));
      }
      function markAsRemovedInObject(ownerObj, removedProps, ownerName) {
        if (!ownerObj) return;
        removedProps.forEach((function(prop) {
          function error() {
            cc.errorID(1406, ownerName, prop);
          }
          js.getset(ownerObj, prop, error);
        }));
      }
      function provideClearError(owner, obj, ownerName) {
        if (!owner) return;
        var className = ownerName || cc.js.getClassName(owner);
        var Info = "Sorry, " + className + ".%s is removed, please use %s instead.";
        var _loop = function() {
          function define(prop, getset) {
            function accessor(newProp) {
              cc.error(Info, prop, newProp);
            }
            Array.isArray(getset) || (getset = getset.split(",").map((function(x) {
              return x.trim();
            })));
            try {
              js.getset(owner, prop, accessor.bind(null, getset[0]), getset[1] && accessor.bind(null, getset[1]));
            } catch (e) {}
          }
          getset = obj[prop];
          if ("*" === prop[0]) {
            etProp = prop.slice(1);
            define("g" + etProp, getset);
            define("s" + etProp, getset);
          } else prop.split(",").map((function(x) {
            return x.trim();
          })).forEach((function(x) {
            define(x, getset);
          }));
        };
        for (var prop in obj) {
          var getset;
          var etProp;
          _loop();
        }
      }
      function markFunctionWarning(ownerCtor, obj, ownerName) {
        if (!ownerCtor) return;
        ownerName = ownerName || js.getClassName(ownerCtor);
        for (var prop in obj) (function() {
          var propName = prop;
          var originFunc = ownerCtor[propName];
          if (!originFunc) return;
          function warn() {
            cc.warn("Sorry, %s.%s is deprecated. Please use %s instead", ownerName, propName, obj[propName]);
            return originFunc.apply(this, arguments);
          }
          ownerCtor[propName] = warn;
        })();
      }
      js.get(cc, "info", (function() {
        cc.warnID(1400, "cc.info", "cc.log");
        return cc.log;
      }));
      js.get(cc, "spriteFrameCache", (function() {
        cc.errorID(1404);
      }));
      js.get(cc.SpriteFrame.prototype, "_textureLoaded", (function() {
        cc.errorID(1400, "spriteFrame._textureLoaded", "spriteFrame.textureLoaded()");
        return this.textureLoaded();
      }));
      markAsRemoved(cc.SpriteFrame, [ "addLoadedEventListener" ]);
      js.get(cc, "textureCache", (function() {
        cc.errorID(1406, "cc", "textureCache");
      }));
      var Texture2D = cc.Texture2D;
      js.obsolete(Texture2D.prototype, "texture.releaseTexture", "texture.destroy");
      js.get(Texture2D.prototype, "getName", (function() {
        cc.warnID(1400, "texture.getName()", "texture._glID");
        return function() {
          return this._glID || null;
        };
      }));
      js.get(Texture2D.prototype, "isLoaded", (function() {
        cc.errorID(1400, "texture.isLoaded function", "texture.loaded property");
        return function() {
          return this.loaded;
        };
      }));
      js.get(Texture2D.prototype, "setAntiAliasTexParameters", (function() {
        cc.warnID(1400, "texture.setAntiAliasTexParameters()", "texture.setFilters(cc.Texture2D.Filter.LINEAR, cc.Texture2D.Filter.LINEAR)");
        return function() {
          this.setFilters(Texture2D.Filter.LINEAR, Texture2D.Filter.LINEAR);
        };
      }));
      js.get(Texture2D.prototype, "setAliasTexParameters", (function() {
        cc.warnID(1400, "texture.setAntiAliasTexParameters()", "texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST)");
        return function() {
          this.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
        };
      }));
      markAsRemovedInObject(cc.macro, [ "ENABLE_GL_STATE_CACHE", "FIX_ARTIFACTS_BY_STRECHING_TEXEL" ], "cc.macro");
      provideClearError(cc.macro, {
        PI: "Math.PI",
        PI2: "Math.PI*2",
        FLT_MAX: "Number.MAX_VALUE",
        FLT_MIN: "Number.MIN_VALUE",
        UINT_MAX: "Number.MAX_SAFE_INTEGER"
      }, "cc.macro");
      markAsRemovedInObject(cc.game, [ "CONFIG_KEY" ], "cc.game");
      markAsRemovedInObject(cc.sys, [ "dumpRoot", "cleanScript" ], "cc.sys");
      provideClearError(cc.Director, {
        EVENT_PROJECTION_CHANGED: "",
        EVENT_BEFORE_VISIT: "EVENT_AFTER_UPDATE",
        EVENT_AFTER_VISIT: "EVENT_BEFORE_DRAW"
      }, "cc.Director");
      markFunctionWarning(cc.Director.prototype, {
        convertToGL: "cc.view.convertToLocationInView",
        convertToUI: "",
        getWinSize: "cc.winSize",
        getWinSizeInPixels: "cc.winSize",
        getVisibleSize: "cc.view.getVisibleSize",
        getVisibleOrigin: "cc.view.getVisibleOrigin",
        purgeCachedData: "cc.loader.releaseAll",
        setDepthTest: "cc.Camera.main.depth",
        setClearColor: "cc.Camera.main.backgroundColor",
        getRunningScene: "cc.director.getScene",
        getAnimationInterval: "cc.game.getFrameRate",
        setAnimationInterval: "cc.game.setFrameRate",
        isDisplayStats: "cc.debug.isDisplayStats",
        setDisplayStats: "cc.debug.setDisplayStats"
      }, "cc.Director");
      markAsRemoved(cc.Director, [ "pushScene", "popScene", "popToRootScene", "popToSceneStackLevel", "setProjection", "getProjection" ], "cc.Director");
      provideClearError(cc.Scheduler, {
        scheduleCallbackForTarget: "schedule",
        scheduleUpdateForTarget: "scheduleUpdate",
        unscheduleCallbackForTarget: "unschedule",
        unscheduleUpdateForTarget: "unscheduleUpdate",
        unscheduleAllCallbacksForTarget: "unscheduleAllForTarget",
        unscheduleAllCallbacks: "unscheduleAll",
        unscheduleAllCallbacksWithMinPriority: "unscheduleAllWithMinPriority"
      }, "cc.Scheduler");
      provideClearError(cc.view, {
        adjustViewPort: "adjustViewportMeta",
        setViewPortInPoints: "setViewportInPoints",
        getViewPortRect: "getViewportRect"
      }, "cc.view");
      markAsRemovedInObject(cc.view, [ "isViewReady", "setTargetDensityDPI", "getTargetDensityDPI", "setFrameZoomFactor", "canSetContentScaleFactor", "setContentTranslateLeftTop", "getContentTranslateLeftTop", "setViewName", "getViewName" ], "cc.view");
      markAsRemoved(cc.Pipeline, [ "flowInDeps", "getItems" ], "cc.loader");
      markAsRemoved(cc.PhysicsManager, [ "attachDebugDrawToCamera", "detachDebugDrawFromCamera" ]);
      markAsRemoved(cc.CollisionManager, [ "attachDebugDrawToCamera", "detachDebugDrawFromCamera" ]);
      provideClearError(cc._BaseNode.prototype, {
        tag: "name",
        getTag: "name",
        setTag: "name",
        getChildByTag: "getChildByName",
        removeChildByTag: "getChildByName(name).destroy()"
      });
      markAsRemoved(cc.Node, [ "_cascadeColorEnabled", "cascadeColor", "isCascadeColorEnabled", "setCascadeColorEnabled", "_cascadeOpacityEnabled", "cascadeOpacity", "isCascadeOpacityEnabled", "setCascadeOpacityEnabled", "opacityModifyRGB", "isOpacityModifyRGB", "setOpacityModifyRGB", "ignoreAnchor", "isIgnoreAnchorPointForPosition", "ignoreAnchorPointForPosition", "isRunning", "_sgNode" ]);
      markAsDeprecated(cc.Node, [ [ "rotationX", "eulerAngles" ], [ "rotationY", "eulerAngles" ], [ "rotation", "angle" ] ]);
      markFunctionWarning(cc.Node.prototype, {
        getNodeToParentTransform: "getLocalMatrix",
        getNodeToParentTransformAR: "getLocalMatrix",
        getNodeToWorldTransform: "getWorldMatrix",
        getNodeToWorldTransformAR: "getWorldMatrix",
        getParentToNodeTransform: "getLocalMatrix",
        getWorldToNodeTransform: "getWorldMatrix",
        convertTouchToNodeSpace: "convertToNodeSpace",
        convertTouchToNodeSpaceAR: "convertToNodeSpaceAR"
      });
      provideClearError(cc.Node.prototype, {
        getRotationX: "rotationX",
        setRotationX: "rotationX",
        getRotationY: "rotationY",
        setRotationY: "rotationY",
        getPositionX: "x",
        setPositionX: "x",
        getPositionY: "y",
        setPositionY: "y",
        getSkewX: "skewX",
        setSkewX: "skewX",
        getSkewY: "skewY",
        setSkewY: "skewY",
        getScaleX: "scaleX",
        setScaleX: "scaleX",
        getScaleY: "scaleY",
        setScaleY: "scaleY",
        getOpacity: "opacity",
        setOpacity: "opacity",
        getColor: "color",
        setColor: "color",
        getLocalZOrder: "zIndex",
        setLocalZOrder: "zIndex"
      });
      markAsRemoved(cc.Component, [ "isRunning" ]);
      provideClearError(cc.Sprite.prototype, {
        setInsetLeft: "cc.SpriteFrame insetLeft",
        setInsetRight: "cc.SpriteFrame insetRight",
        setInsetTop: "cc.SpriteFrame insetTop",
        setInsetBottom: "cc.SpriteFrame insetBottom"
      });
      markFunctionWarning(cc.Camera.prototype, {
        getNodeToCameraTransform: "getWorldToCameraMatrix"
      });
      markAsRemoved(cc.Camera, [ "addTarget", "removeTarget", "getTargets" ]);
      ERR = '"%s" is not defined in the Scene, it is only defined in normal nodes.';
      false, Object.defineProperties(cc.Scene.prototype, {
        active: {
          get: function() {
            cc.error(ERR, "active");
            return true;
          },
          set: function() {
            cc.error(ERR, "active");
          }
        },
        activeInHierarchy: {
          get: function() {
            cc.error(ERR, "activeInHierarchy");
            return true;
          }
        },
        getComponent: {
          get: function() {
            cc.error(ERR, "getComponent");
            return function() {
              return null;
            };
          }
        },
        addComponent: {
          get: function() {
            cc.error(ERR, "addComponent");
            return function() {
              return null;
            };
          }
        }
      });
      provideClearError(cc, {
        affineTransformMake: "cc.AffineTransform.create",
        affineTransformMakeIdentity: "cc.AffineTransform.identity",
        affineTransformClone: "cc.AffineTransform.clone",
        affineTransformConcat: "cc.AffineTransform.concat",
        affineTransformConcatIn: "cc.AffineTransform.concat",
        affineTransformInvert: "cc.AffineTransform.invert",
        affineTransformInvertIn: "cc.AffineTransform.invert",
        affineTransformInvertOut: "cc.AffineTransform.invert",
        affineTransformEqualToTransform: "cc.AffineTransform.equal",
        pointApplyAffineTransform: "cc.AffineTransform.transformVec2",
        sizeApplyAffineTransform: "cc.AffineTransform.transformSize",
        rectApplyAffineTransform: "cc.AffineTransform.transformRect",
        obbApplyAffineTransform: "cc.AffineTransform.transformObb",
        pointEqualToPoint: "cc.Vec2 equals",
        sizeEqualToSize: "cc.Size equals",
        rectEqualToRect: "rectA.equals(rectB)",
        rectContainsRect: "rectA.containsRect(rectB)",
        rectContainsPoint: "rect.contains(vec2)",
        rectOverlapsRect: "rectA.intersects(rectB)",
        rectIntersectsRect: "rectA.intersects(rectB)",
        rectIntersection: "rectA.intersection(intersection, rectB)",
        rectUnion: "rectA.union(union, rectB)",
        rectGetMaxX: "rect.xMax",
        rectGetMidX: "rect.center.x",
        rectGetMinX: "rect.xMin",
        rectGetMaxY: "rect.yMax",
        rectGetMidY: "rect.center.y",
        rectGetMinY: "rect.yMin",
        colorEqual: "colorA.equals(colorB)",
        hexToColor: "color.fromHEX(hexColor)",
        colorToHex: "color.toHEX()",
        TextAlignment: "cc.macro.TextAlignment",
        VerticalTextAlignment: "cc.macro.VerticalTextAlignment",
        pNeg: "p.neg()",
        pAdd: "p1.add(p2)",
        pSub: "p1.sub(p2)",
        pMult: "p.mul(factor)",
        pMidpoint: "p1.add(p2).mul(0.5)",
        pDot: "p1.dot(p2)",
        pCross: "p1.cross(p2)",
        pPerp: "p.rotate(-90 * Math.PI / 180)",
        pRPerp: "p.rotate(90 * Math.PI / 180)",
        pProject: "p1.project(p2)",
        pLengthSQ: "p.magSqr()",
        pDistanceSQ: "p1.sub(p2).magSqr()",
        pLength: "p.mag()",
        pDistance: "p1.sub(p2).mag()",
        pNormalize: "p.normalize()",
        pForAngle: "cc.v2(Math.cos(a), Math.sin(a))",
        pToAngle: "Math.atan2(v.y, v.x)",
        pZeroIn: "p.x = p.y = 0",
        pIn: "p1.set(p2)",
        pMultIn: "p.mulSelf(factor)",
        pSubIn: "p1.subSelf(p2)",
        pAddIn: "p1.addSelf(p2)",
        pNormalizeIn: "p.normalizeSelf()",
        pSameAs: "p1.equals(p2)",
        pAngle: "v1.angle(v2)",
        pAngleSigned: "v1.signAngle(v2)",
        pRotateByAngle: "p.rotate(radians)",
        pCompMult: "v1.dot(v2)",
        pFuzzyEqual: "v1.fuzzyEquals(v2, tolerance)",
        pLerp: "p.lerp(endPoint, ratio)",
        pClamp: "p.clampf(min_inclusive, max_inclusive)",
        rand: "Math.random() * 0xffffff",
        randomMinus1To1: "(Math.random() - 0.5) * 2",
        container: "cc.game.container",
        _canvas: "cc.game.canvas",
        _renderType: "cc.game.renderType",
        _getError: "cc.debug.getError",
        _initDebugSetting: "cc.debug._resetDebugSetting",
        DebugMode: "cc.debug.DebugMode",
        BlendFunc: "cc.macro.BlendFactor"
      }, "cc");
      markAsRemovedInObject(cc, [ "blendFuncDisable", "pFromSize", "pCompOp", "pIntersectPoint", "pSegmentIntersect", "pLineIntersect", "obbApplyMatrix", "getImageFormatByData", "initEngine" ], "cc");
      markFunctionWarning(cc, {
        p: "cc.v2"
      }, "cc");
      provideClearError(cc.Rect, {
        contain: "rectA.contains(rectB)",
        transformMat4: "rect.transformMat4(out, mat4)"
      });
      provideClearError(cc.Color, {
        rgb2hsv: "color.toHSV()",
        hsv2rgb: "color.fromHSV(h, s, v)"
      });
      js.get(cc, "lerp", (function() {
        cc.warnID(1400, "cc.lerp", "cc.misc.lerp");
        return cc.misc.lerp;
      }));
      js.get(cc, "random0To1", (function() {
        cc.warnID(1400, "cc.random0To1", "Math.random");
        return Math.random;
      }));
      js.get(cc, "degreesToRadians", (function() {
        cc.warnID(1400, "cc.degreesToRadians", "cc.misc.degreesToRadians");
        return cc.misc.degreesToRadians;
      }));
      js.get(cc, "radiansToDegrees", (function() {
        cc.warnID(1400, "cc.radiansToDegrees", "cc.misc.radiansToDegrees");
        return cc.misc.radiansToDegrees;
      }));
      js.get(cc, "clampf", (function() {
        cc.warnID(1400, "cc.clampf", "cc.misc.clampf");
        return cc.misc.clampf;
      }));
      js.get(cc, "clamp01", (function() {
        cc.warnID(1400, "cc.clamp01", "cc.misc.clamp01");
        return cc.misc.clamp01;
      }));
      js.get(cc, "ImageFormat", (function() {
        cc.warnID(1400, "cc.ImageFormat", "cc.macro.ImageFormat");
        return cc.macro.ImageFormat;
      }));
      js.get(cc, "KEY", (function() {
        cc.warnID(1400, "cc.KEY", "cc.macro.KEY");
        return cc.macro.KEY;
      }));
      js.get(cc, "pool", (function() {
        cc.errorID(1407);
        return js.Pool;
      }));
      js.get(cc, "isChildClassOf", (function() {
        cc.errorID(1400, "cc.isChildClassOf", "cc.js.isChildClassOf");
        return cc.js.isChildClassOf;
      }));
      "undefined" !== typeof dragonBones && js.obsolete(dragonBones.CCFactory, "dragonBones.CCFactory.getFactory", "getInstance");
    })();
  }), {} ],
  157: [ (function(require, module, exports) {
    require("./core/CCGame");
    require("./actions");
  }), {
    "./actions": void 0,
    "./core/CCGame": 5
  } ],
  158: [ (function(require, module, exports) {
    var Asset = require("../core/assets/CCAsset");
    var CCSpriteFrame = require("../core/assets/CCSpriteFrame");
    var ParticleAsset = cc.Class({
      name: "cc.ParticleAsset",
      extends: Asset,
      properties: {
        spriteFrame: {
          default: null,
          type: CCSpriteFrame
        }
      }
    });
    cc.ParticleAsset = module.exports = ParticleAsset;
  }), {
    "../core/assets/CCAsset": 10,
    "../core/assets/CCSpriteFrame": 22
  } ],
  159: [ (function(require, module, exports) {
    var TiledMapAsset = cc.Class({
      name: "cc.TiledMapAsset",
      extends: cc.Asset,
      properties: {
        tmxXmlStr: "",
        textures: {
          default: [],
          type: [ cc.Texture2D ]
        },
        textureNames: [ cc.String ],
        tsxFiles: [ cc.TextAsset ],
        tsxFileNames: [ cc.String ]
      },
      statics: {
        preventDeferredLoadDependents: true
      },
      createNode: false
    });
    cc.TiledMapAsset = TiledMapAsset;
    module.exports = TiledMapAsset;
  }), {} ],
  160: [ (function(require, module, exports) {
    require("./cocos2d/core");
    require("./cocos2d/animation");
    false;
    require("./cocos2d/particle");
    require("./cocos2d/tilemap");
    require("./cocos2d/videoplayer/CCVideoPlayer");
    require("./cocos2d/webview/CCWebView");
    require("./cocos2d/core/components/CCStudioComponent");
    require("./extensions/ccpool/CCNodePool");
    require("./cocos2d/actions");
    require("./extensions/spine");
    require("./extensions/dragonbones");
    true;
    require("./cocos2d/deprecated");
  }), {
    "./cocos2d/actions": void 0,
    "./cocos2d/animation": void 0,
    "./cocos2d/core": 58,
    "./cocos2d/core/components/CCStudioComponent": void 0,
    "./cocos2d/deprecated": 156,
    "./cocos2d/particle": void 0,
    "./cocos2d/particle/CCParticleAsset": 158,
    "./cocos2d/tilemap": void 0,
    "./cocos2d/tilemap/CCTiledMapAsset": 159,
    "./cocos2d/videoplayer/CCVideoPlayer": void 0,
    "./cocos2d/webview/CCWebView": void 0,
    "./extensions/ccpool/CCNodePool": 161,
    "./extensions/dragonbones": void 0,
    "./extensions/spine": void 0
  } ],
  161: [ (function(require, module, exports) {
    cc.NodePool = function(poolHandlerComp) {
      this.poolHandlerComp = poolHandlerComp;
      this._pool = [];
    };
    cc.NodePool.prototype = {
      constructor: cc.NodePool,
      size: function() {
        return this._pool.length;
      },
      clear: function() {
        var count = this._pool.length;
        for (var i = 0; i < count; ++i) this._pool[i].destroy();
        this._pool.length = 0;
      },
      put: function(obj) {
        if (obj && -1 === this._pool.indexOf(obj)) {
          obj.removeFromParent(false);
          var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
          handler && handler.unuse && handler.unuse();
          this._pool.push(obj);
        }
      },
      get: function() {
        var last = this._pool.length - 1;
        if (last < 0) return null;
        var obj = this._pool[last];
        this._pool.length = last;
        var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
        handler && handler.reuse && handler.reuse.apply(handler, arguments);
        return obj;
      }
    };
    module.exports = cc.NodePool;
  }), {} ],
  162: [ (function(require, module, exports) {
    var _global = "undefined" === typeof window ? global : window;
    _global.cc = _global.cc || {};
    _global._cc = _global._cc || {};
    require("./predefine");
    require("./polyfill/string");
    require("./polyfill/misc");
    require("./polyfill/array");
    require("./polyfill/object");
    true;
    require("./polyfill/typescript");
    require("./cocos2d/core/predefine");
    true;
    require("./cocos2d");
    require("./extends");
    false;
    module.exports = _global.cc;
  }), {
    "./cocos2d": 157,
    "./cocos2d/core/predefine": 111,
    "./extends": 160,
    "./package": void 0,
    "./polyfill/array": 163,
    "./polyfill/misc": 164,
    "./polyfill/object": 165,
    "./polyfill/string": 166,
    "./polyfill/typescript": 167,
    "./predefine": 168
  } ],
  163: [ (function(require, module, exports) {
    Array.isArray || (Array.isArray = function(arg) {
      return "[object Array]" === Object.prototype.toString.call(arg);
    });
  }), {} ],
  164: [ (function(require, module, exports) {
    Math.sign || (Math.sign = function(x) {
      x = +x;
      if (0 === x || isNaN(x)) return x;
      return x > 0 ? 1 : -1;
    });
    Number.isInteger || (Number.isInteger = function(value) {
      return "number" === typeof value && isFinite(value) && Math.floor(value) === value;
    });
    if (false, !console.time) {
      var Timer = window.performance || Date;
      var _timerTable = Object.create(null);
      console.time = function(label) {
        _timerTable[label] = Timer.now();
      };
      console.timeEnd = function(label) {
        var startTime = _timerTable[label];
        var duration = Timer.now() - startTime;
        console.log(label + ": " + duration + "ms");
      };
    }
  }), {} ],
  165: [ (function(require, module, exports) {
    Object.assign || (Object.assign = function(target, source) {
      cc.js.mixin(target, source);
    });
    Object.getOwnPropertyDescriptors || (Object.getOwnPropertyDescriptors = function(obj) {
      var descriptors = {};
      var ownKeys = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
      for (var i = 0; i < ownKeys.length; ++i) {
        var key = ownKeys[i];
        descriptors[key] = Object.getOwnPropertyDescriptor(obj, key);
      }
      return descriptors;
    });
  }), {} ],
  166: [ (function(require, module, exports) {
    String.prototype.startsWith || (String.prototype.startsWith = function(searchString, position) {
      position = position || 0;
      return this.lastIndexOf(searchString, position) === position;
    });
    String.prototype.endsWith || (String.prototype.endsWith = function(searchString, position) {
      ("undefined" === typeof position || position > this.length) && (position = this.length);
      position -= searchString.length;
      var lastIndex = this.indexOf(searchString, position);
      return -1 !== lastIndex && lastIndex === position;
    });
  }), {} ],
  167: [ (function(require, module, exports) {
    var extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    };
    window.__extends = function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    window.__assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
      }
      return t;
    };
    window.__rest = function(s, e) {
      var t = {};
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
      if (null != s && "function" === typeof Object.getOwnPropertySymbols) for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && (t[p[i]] = s[p[i]]);
      return t;
    };
    window.__decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    window.__param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    window.__metadata = function(metadataKey, metadataValue) {
      if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(metadataKey, metadataValue);
    };
    window.__awaiter = function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    window.__generator = function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = y[2 & op[0] ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 0, t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    window.__exportStar = function(m, exports) {
      for (var p in m) exports.hasOwnProperty(p) || (exports[p] = m[p]);
    };
    window.__values = function(o) {
      var m = "function" === typeof Symbol && o[Symbol.iterator], i = 0;
      if (m) return m.call(o);
      return {
        next: function() {
          o && i >= o.length && (o = void 0);
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    };
    window.__read = function(o, n) {
      var m = "function" === typeof Symbol && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((void 0 === n || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          r && !r.done && (m = i["return"]) && m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    window.__spread = function() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    window.__await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    window.__asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        g[n] && (i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([ n, v, a, b ]) > 1 || resume(n, v);
          });
        });
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        (f(v), q.shift(), q.length) && resume(q[0][0], q[0][1]);
      }
    };
    window.__asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", (function(e) {
        throw e;
      })), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        o[n] && (i[n] = function(v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: "return" === n
          } : f ? f(v) : v;
        });
      }
    };
    window.__asyncValues = function(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator];
      return m ? m.call(o) : "function" === typeof __values ? __values(o) : o[Symbol.iterator]();
    };
  }), {} ],
  168: [ (function(require, module, exports) {
    var _global = "undefined" === typeof window ? global : window;
    function defineMacro(name, defaultValue) {
      "undefined" === typeof _global[name] && (_global[name] = defaultValue);
    }
    function defined(name) {
      return "object" === typeof _global[name];
    }
    defineMacro("CC_BUILD", false);
    true;
    _global.CC_BUILD = true;
    _global.CC_TEST = false;
    _global.CC_EDITOR = false;
    _global.CC_PREVIEW = false;
    _global.CC_DEV = false;
    _global.CC_DEBUG = true;
    _global.CC_JSB = false;
    _global.CC_WECHATGAME_SUB = true;
    _global.CC_WECHATGAME = true;
    _global.CC_QQPLAY = false;
    _global.CC_RUNTIME = false;
    _global.CC_SUPPORT_JIT = false;
    false;
    var engineVersion = "2.1.0";
    _global["CocosEngine"] = cc.ENGINE_VERSION = engineVersion;
  }), {} ]
}, {}, [ 162 ]);