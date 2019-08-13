window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  bestScoreLayout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54035R+/Q5I7oKLhC78QdOc", "bestScoreLayout");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bestScoreTv: {
          default: null,
          type: cc.Label
        }
      },
      showBestScoreLayout: function showBestScoreLayout(score) {
        this.node.active = true;
        this.bestScoreTv.string = score;
        var anim = this.getComponent(cc.Animation);
        anim.play();
      },
      hideBestScoreLayout: function hideBestScoreLayout() {
        var anim = this.getComponent(cc.Animation);
        anim.play("hideBestScore");
      },
      showStopImgAnim: function showStopImgAnim() {
        this.node.active = false;
        this.game.stopImg.getComponent("stopImg").showStopImg();
      }
    });
    cc._RF.pop();
  }, {} ],
  car: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04210KbvcZIpoeaRnYhfxaO", "car");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      init: function init() {
        this.startSpeed = 0;
        this.speed = 600;
        this.raduis = this.game.innerRect.width / 2 + (this.game.outRect.width - this.game.innerRect.width) / 4;
        this.angleRoundSpeed = 180 * this.speed / (Math.PI * this.raduis);
        this.rate = .675008944;
        this.angleShiftSpeed = this.angleRoundSpeed / this.rate;
        this.startAngleShiftSpeed = this.angleShiftSpeed / 3;
        this.shiftAngle = 0;
        this.node.setPosition(this.getStartPosition());
        this.node.angle = 0;
        this.isTouch = false;
      },
      getStartPosition: function getStartPosition() {
        var x = this.game.innerRect.x - this.game.innerRect.width / 2 - (this.game.outRect.width - this.game.innerRect.width) / 4;
        var y = this.game.innerRect.y - this.game.innerRect.height / 2 + this.node.height / 2;
        return cc.v2(x, y);
      },
      onTouchDown: function onTouchDown() {
        this.node.angle == this.shiftAngle && (this.shiftAngle = this.node.angle);
        this.isTouch = true;
        this.startAngleShiftSpeed = this.angleShiftSpeed / 3;
      },
      onTouchUp: function onTouchUp() {
        this.isTouch = false;
      },
      update: function update(dt) {
        if (1 !== this.game.gameStatus) {
          this.startSpeed = 0;
          return;
        }
        this.startSpeed < this.speed && (this.startSpeed += this.speed / 60);
        if (this.isTouch) {
          this.startAngleShiftSpeed <= this.angleShiftSpeed && (this.startAngleShiftSpeed += this.angleShiftSpeed / 12);
          this.node.angle -= this.startAngleShiftSpeed * dt;
          this.shiftAngle -= this.angleRoundSpeed * dt;
          this.node.x += this.startSpeed * dt * Math.sin(-this.shiftAngle / 180 * Math.PI);
          this.node.y += this.startSpeed * dt * Math.cos(-this.shiftAngle / 180 * Math.PI);
        } else if (this.shiftAngle > this.node.angle + 8) {
          this.shiftAngle -= this.angleRoundSpeed * dt;
          this.node.x += this.startSpeed * dt * Math.sin(-this.shiftAngle / 180 * Math.PI);
          this.node.y += this.startSpeed * dt * Math.cos(-this.shiftAngle / 180 * Math.PI);
        } else {
          this.node.x += this.startSpeed * dt * Math.sin(-this.node.angle / 180 * Math.PI);
          this.node.y += this.startSpeed * dt * Math.cos(-this.node.angle / 180 * Math.PI);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  circleAnim: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43c77dkBhxDDrzLj2WDiNYH", "circleAnim");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      showCirlceAnim: function showCirlceAnim() {
        var anim = this.getComponent(cc.Animation);
        anim.play();
      }
    });
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a131Eu41NJ1awjO1TBrtU8", "game");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mCanvas: {
          default: null,
          type: cc.Node
        },
        outRect: {
          default: null,
          type: cc.Node
        },
        scoreLine: {
          default: null,
          type: cc.Node
        },
        perfectTv: {
          default: null,
          type: cc.Label
        },
        baseScoreTv: {
          default: null,
          type: cc.Label
        },
        totalScoreTv: {
          default: null,
          type: cc.Label
        },
        innerRect: {
          default: null,
          type: cc.Node
        },
        car: {
          default: null,
          type: cc.Node
        },
        starTextPrefab: {
          default: null,
          type: cc.Prefab
        },
        scoreCircle: {
          default: null,
          type: cc.Node
        },
        progressCircle: {
          default: null,
          type: cc.Node
        },
        bestScoreLayout: {
          default: null,
          type: cc.Node
        },
        rankImg: {
          default: null,
          type: cc.Node
        },
        stopImg: {
          default: null,
          type: cc.Node
        },
        startLayout: {
          default: null,
          type: cc.Node
        },
        startImg: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.firstInit = true;
        this.isTouchLower = false;
        cc.view.enableAntiAlias(true);
        cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
        cc.view.enableRetina(true);
        this.bestScore = 0;
        this.initGame();
      },
      initGame: function initGame() {
        this.gameStatus = 0;
        this.baseScore = 1;
        this.totalScore = 0;
        this.progress = 0;
        this.touchNumber = 0;
        this.perfectNumber = 0;
        this.startLayout.active = false;
        this.car.getComponent("car").game = this;
        this.car.getComponent("car").init();
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventUp, this);
        this.innerRect.getComponent("innerListener").game = this;
        this.outRect.getComponent("outerListener").game = this;
        this.scoreLine.getComponent("scoreLine").game = this;
        this.progressCircle.getComponent("progressCircle").game = this;
        this.stopImg.getComponent("stopImg").game = this;
        this.startImg.getComponent("startImg").game = this;
        this.bestScoreLayout.getComponent("bestScoreLayout").game = this;
        this.scoreLine.getComponent("scoreLine").initScoreLine();
        if (this.firstInit) {
          this.startText = cc.instantiate(this.starTextPrefab);
          this.node.addChild(this.startText);
          this.scheduleOnce(function() {
            this.setStartTextPosition();
          }, .2);
        }
        this.bestScore > 0 ? this.showBestScore(this.bestScore) : this.showBestScore(this.getLocalBestScore());
        this.startText.getComponent("startText").show();
        this.rankImg.getComponent("rankImg").listening();
      },
      setStartTextPosition: function setStartTextPosition() {
        var y = this.outRect.y - this.outRect.height / 1.8;
        this.startText.setPosition(cc.v2(0, y));
      },
      eventDown: function eventDown(event) {
        var touchTop = this.mCanvas.height / 2 + this.outRect.y;
        if (event.getLocationY() < touchTop) {
          this.touchNumber++;
          this.isTouchLower = true;
          if (this.firstInit) {
            this.outRect.getComponent("outerListener").init();
            this.firstInit = false;
          } else this.car.getComponent("car").onTouchDown();
        } else this.isTouchLower = false;
      },
      eventUp: function eventUp(event) {
        if (1 !== this.gameStatus && true === this.isTouchLower) {
          this.gameStatus = 1;
          this.initStartGame();
        }
        this.car.getComponent("car").onTouchUp();
      },
      initStartGame: function initStartGame() {
        this.baseScoreTv.string = 1;
        this.totalScoreTv.string = 0;
        this.startText.getComponent("startText").hide();
        this.updateCircleProgress();
        this.rankImg.getComponent("rankImg").hideRankImg();
        this.bestScoreLayout.getComponent("bestScoreLayout").hideBestScoreLayout();
      },
      onGainScore: function onGainScore() {
        1 == this.touchNumber && this.totalScore > 0 ? this.perfectNumber++ : this.perfectNumber = 0;
        if (this.perfectNumber > 0) {
          this.perfectTv.string = "perfect \xd7" + this.perfectNumber;
          this.perfectTv.getComponent("perfectTv").showPerfectTvAnim(this.scoreLine.x);
        }
        this.totalScore += this.baseScore * (this.perfectNumber + 1);
        this.totalScoreTv.string = this.totalScore;
        if (this.progress < this.baseScore && this.totalScore > 1) {
          this.progress++;
          this.updateCircleProgress();
          if (this.progress == this.baseScore) {
            this.progress = 0;
            this.baseScore++;
            this.baseScoreTv.string = this.baseScore;
          }
        }
        this.touchNumber = 0;
      },
      showBaseScoreAddedAnim: function showBaseScoreAddedAnim() {
        this.scoreCircle.getComponent("circleAnim").showCirlceAnim();
      },
      updateCircleProgress: function updateCircleProgress() {
        this.progressCircle.getComponent("progressCircle").updateProgress(this.progress, this.baseScore);
      },
      stopGame: function stopGame() {
        this.gameStatus = 2;
        this.startLayout.getComponent("startLayout").listening();
        this.startImg.getComponent("startImg").listening();
      },
      startGame: function startGame() {
        this.gameStatus = 1;
        this.startLayout.active = false;
      },
      onGameOver: function onGameOver() {
        this.removeListener();
        this.gameStatus = -1;
        this.stopImg.getComponent("stopImg").hideStopImg();
        if (this.bestScore < this.totalScore) {
          this.bestScore = this.totalScore;
          this.storeBestScore(this.bestScore);
          this.submitScore(this.bestScore);
        }
        window.wx.vibrateLong();
        this.scheduleOnce(function() {
          this.initGame();
        }, 1);
      },
      onDestroy: function onDestroy() {
        this.removeListener();
      },
      removeListener: function removeListener() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.eventDown, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.eventUp, this);
      },
      showBestScore: function showBestScore(score) {
        this.bestScoreLayout.getComponent("bestScoreLayout").showBestScoreLayout(score);
      },
      storeBestScore: function storeBestScore(score) {
        try {
          console.log("storeBestScore :" + score);
          wx.setStorageSync("bestScore", score + "");
        } catch (e) {
          console.log("setStorageSync fail" + e);
        }
      },
      getLocalBestScore: function getLocalBestScore() {
        try {
          var value = window.wx.getStorageSync("bestScore");
          if (value) return value > this.totalScore ? value : this.totalScore;
          console.log("value is null ");
        } catch (e) {
          console.log("get local best score failed" + e);
        }
        return 0;
      },
      submitScore: function submitScore(score) {
        window.wx.postMessage({
          messageType: 3,
          MAIN_MENU_NUM: "x1",
          score: score
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  innerListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3e01fcQPFDPLf7CyabIuF6", "innerListener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
      },
      onCollisionEnter: function onCollisionEnter(other) {
        this.game.onGameOver();
      }
    });
    cc._RF.pop();
  }, {} ],
  outerListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f51a1fkXQdDHba7AqEJptZv", "outerListener");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      init: function init() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        this.topY = this.node.height / 2 - this.node.width / 2;
        this.bottomY = -this.node.height / 2 + this.node.width / 2;
        this.r2 = this.node.width * this.node.width / 4;
        this.radiusX = this.node.parent.width / 2;
        this.radiusY1 = this.node.parent.height / 2 + this.node.y + this.topY;
        this.radiusY2 = this.node.parent.height / 2 + this.node.y - this.topY;
      },
      onCollisionStay: function onCollisionStay(other, self) {
        if (1 !== this.game.gameStatus) return;
        var world = other.world;
        1 === self.tag && other.node.y > this.topY - other.node.height / 2 ? this.isCollision(world.points, 1) && this.game.onGameOver() : 3 === self.tag && other.node.y < this.bottomY + other.node.height / 2 && this.isCollision(world.points, 2) && this.game.onGameOver();
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        0 !== self.tag && 2 !== self.tag || this.onCarCollision();
      },
      onCarCollision: function onCarCollision() {
        this.game.onGameOver();
      },
      isCollision: function isCollision(array, tag) {
        var length = array.length / 2;
        if (1 === tag) for (var i = 0; i < length; i++) {
          var dx = array[i].x - this.radiusX, dy = array[i].y - this.radiusY1;
          if (array[i].y > this.radiusY1 && dx * dx + dy * dy > this.r2) return true;
        } else for (var i = 0; i < length; i++) {
          var dx = array[i].x - this.radiusX, dy = array[i].y - this.radiusY2;
          if (array[i].y < this.radiusY2 && dx * dx + dy * dy > this.r2) return true;
        }
        return false;
      }
    });
    cc._RF.pop();
  }, {} ],
  perfectTv: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31c60f+Y7NNILkH8+3osPww", "perfectTv");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      showPerfectTvAnim: function showPerfectTvAnim(positionX) {
        this.node.setPosition(cc.v2(positionX, 0));
        var anim = this.getComponent(cc.Animation);
        anim.play();
      }
    });
    cc._RF.pop();
  }, {} ],
  progressCircle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e788aOe31BA8aFiKq5d0xCI", "progressCircle");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true
      },
      properties: {
        speed: 2,
        circleBar: {
          type: cc.ProgressBar,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.circleBar.progress = 0;
        this.progressTo = 0;
        this.TotalNumber = 1;
      },
      update: function update(dt) {
        if (0 === this.progressTo) {
          this.circleBar.progress = 0;
          return;
        }
        var progress = this.circleBar.progress;
        progress < this.progressTo && (progress += dt * this.speed / this.TotalNumber);
        if (progress >= 1) {
          progress = 0;
          this.progressTo = 0;
          this.TotalNumber++;
          this.game.showBaseScoreAddedAnim();
        }
        this.circleBar.progress = progress;
      },
      updateProgress: function updateProgress(progress, basescore) {
        this.progressTo = progress / basescore;
        this.TotalNumber = basescore;
      }
    });
    cc._RF.pop();
  }, {} ],
  rankImg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1106KjuZFEO7c1oRROqx0t", "rankImg");
    "use strict";
    cc.Class({
      extends: cc.Component,
      listening: function listening() {
        if (this.node.opacity < 255) {
          var anim = this.getComponent(cc.Animation);
          anim.play();
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventUp, this);
      },
      hideRankImg: function hideRankImg() {
        var anim = this.getComponent(cc.Animation);
        anim.play("hideRankImg");
      },
      eventDown: function eventDown(event) {
        event.stopPropagation();
      },
      eventUp: function eventUp(event) {
        event.stopPropagation();
        cc.director.loadScene("RankingView");
      }
    });
    cc._RF.pop();
  }, {} ],
  rankingView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed81eRMoXVHSY0+WVmALWHp", "rankingView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        groupFriendButton: {
          default: null,
          type: cc.Node
        },
        friendButton: {
          default: null,
          type: cc.Node
        },
        gameOverButton: {
          default: null,
          type: cc.Node
        },
        rankingScrollView: {
          default: null,
          type: cc.Sprite
        }
      },
      onLoad: function onLoad() {
        true;
        window.wx.showShareMenu({
          withShareTicket: true
        });
        window.wx.postMessage({
          messageType: 1,
          MAIN_MENU_NUM: "x1"
        });
      },
      start: function start() {},
      friendButtonFunc: function friendButtonFunc(event) {
        true;
        window.wx.postMessage({
          messageType: 1,
          MAIN_MENU_NUM: "x1"
        });
      },
      groupFriendButtonFunc: function groupFriendButtonFunc(event) {
        true;
        window.wx.shareAppMessage({
          success: function success(res) {
            void 0 != res.shareTickets && res.shareTickets.length > 0 && window.wx.postMessage({
              messageType: 5,
              MAIN_MENU_NUM: "x1",
              shareTicket: res.shareTickets[0]
            });
          }
        });
      },
      gameOverButtonFunc: function gameOverButtonFunc(event) {
        true;
        window.wx.postMessage({
          messageType: 4,
          MAIN_MENU_NUM: "x1"
        });
      },
      submitScoreButtonFunc: function submitScoreButtonFunc() {
        var score = 123;
        true;
        window.wx.postMessage({
          messageType: 3,
          MAIN_MENU_NUM: "x1",
          score: score
        });
      },
      backToMainGame: function backToMainGame() {
        cc.director.loadScene("main");
      }
    });
    cc._RF.pop();
  }, {} ],
  roundRect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e82b6TbJb9L2JgdJ0BPwJkf", "roundRect");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true
      },
      properties: {
        _orientation: 0,
        _fullColor: cc.color(),
        orientation: {
          type: cc.Integer,
          get: function get() {
            return this._orientation;
          },
          set: function set(val) {
            this._orientation = val;
          },
          tooltip: "\u65b9\u5411"
        },
        fullColor: {
          type: cc.Color,
          get: function get() {
            return this._fullColor;
          },
          set: function set(val) {
            this._fullColor = val;
          },
          tooltip: "\u586b\u5145\u989c\u8272"
        }
      },
      onLoad: function onLoad() {
        this.originW = this.node.width;
        this.originH = this.node.height;
        this.drawRoundRect();
      },
      update: function update(dt) {
        this.node.height == this.originH && this.node.width == this.originW || this.drawRoundRect();
      },
      drawRoundRect: function drawRoundRect() {
        var g = this.getComponent(cc.Graphics);
        g.clear();
        g.lineCap = cc.Graphics.LineCap.BUTT;
        g.lineJoin = cc.Graphics.LineJoin.BUTT;
        g.lineWidth = 0;
        g.fillColor = this._fullColor;
        var width = this.node.width;
        var height = this.node.height;
        0 == this._orientation ? g.roundRect(-width / 2, -height / 2, width, height, width / 2) : g.roundRect(-width / 2, -height / 2, width, height, height / 2);
        g.stroke();
        g.fill();
      }
    });
    cc._RF.pop();
  }, {} ],
  scoreLine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6aae3FPMThBYI/oIAS7qnxL", "scoreLine");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        this.showPosition = 1;
      },
      onCollisionEnter: function onCollisionEnter(other) {
        this.game.onGainScore();
        this.showGainScoreAnim();
      },
      showGainScoreAnim: function showGainScoreAnim() {
        var anim = this.getComponent(cc.Animation);
        anim.play();
      },
      showLineStartAnim: function showLineStartAnim() {
        this.node.setPosition(cc.v2(-this.node.x, 0));
        this.node.width = 0;
        this.node.height = 8;
        var anim = this.getComponent(cc.Animation);
        anim.play("showScoreLine");
      },
      initScoreLine: function initScoreLine() {
        this.node.x > 0 && this.showLineStartAnim();
      }
    });
    cc._RF.pop();
  }, {} ],
  startImg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d747vsQyhPqJWkRfVK0Gxi", "startImg");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      listening: function listening() {
        this.node.active = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventUp, this);
      },
      start: function start() {},
      eventDown: function eventDown(event) {
        event.stopPropagation();
      },
      eventUp: function eventUp(event) {
        event.stopPropagation();
        this.game.startGame();
      }
    });
    cc._RF.pop();
  }, {} ],
  startLayout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06bdcHbAcJD3pwtRjNu+loV", "startLayout");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      listening: function listening() {
        this.node.active = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventUp, this);
      },
      eventDown: function eventDown(event) {
        event.stopPropagation();
      },
      eventUp: function eventUp(event) {
        event.stopPropagation();
      }
    });
    cc._RF.pop();
  }, {} ],
  startText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69a56IIcyBFqqwAMgwYyQvN", "startText");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      show: function show() {
        var anim = this.getComponent(cc.Animation);
        this.node.active = true;
        anim.play("startFlicker");
      },
      hide: function hide() {
        var anim = this.getComponent(cc.Animation);
        this.node.active = false;
        anim.stop("startFlicker");
      }
    });
    cc._RF.pop();
  }, {} ],
  stopImg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dce7cAW6epAGIs289w0ahnE", "stopImg");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      showStopImg: function showStopImg() {
        this.node.active = true;
        var anim = this.getComponent(cc.Animation);
        anim.play();
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventUp, this);
      },
      hideStopImg: function hideStopImg() {
        var anim = this.getComponent(cc.Animation);
        anim.play("hideStopImg");
      },
      onFinishHideStopImg: function onFinishHideStopImg() {
        this.node.active = false;
      },
      eventDown: function eventDown(event) {
        event.stopPropagation();
      },
      eventUp: function eventUp(event) {
        event.stopPropagation();
        this.game.stopGame();
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "bestScoreLayout", "car", "circleAnim", "game", "innerListener", "outerListener", "perfectTv", "progressCircle", "rankImg", "rankingView", "roundRect", "scoreLine", "startImg", "startLayout", "startText", "stopImg" ]);