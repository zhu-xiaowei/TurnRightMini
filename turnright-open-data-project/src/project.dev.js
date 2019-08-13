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
  GameOverRank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d97bdIn/jtJmpn7qz0kKhI5", "GameOverRank");
    "use strict";
    cc.Class({
      extends: cc.Component,
      name: "GameOverRank",
      properties: {
        backSprite: cc.Node,
        rankLabel: cc.Label,
        avatarImgSprite: cc.Sprite,
        nickLabel: cc.Label,
        topScoreLabel: cc.Label
      },
      start: function start() {},
      init: function init(rank, data, isPlayer) {
        var avatarUrl = data.avatarUrl;
        var nick = data.nickname;
        var grade = 0 != data.KVDataList.length ? data.KVDataList[0].value : 0;
        rank % 2 == 0 && (this.backSprite.color = new cc.Color(55, 55, 55, 255));
        isPlayer && (this.rankLabel.node.color = new cc.Color(0, 255, 0, 255));
        this.rankLabel.string = (rank + 1).toString();
        this.createImage(avatarUrl);
        this.nickLabel.string = nick;
        this.topScoreLabel.string = grade.toString();
      },
      createImage: function createImage(avatarUrl) {
        var _this = this;
        var image;
        false;
        cc.loader.load({
          url: avatarUrl,
          type: "jpg"
        }, function(err, texture) {
          _this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  GameRankingList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0ea2Faum1JDKkSr0Ka631L", "GameRankingList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rankingScrollView: cc.ScrollView,
        scrollViewContent: cc.Node,
        prefabRankItem: cc.Prefab,
        prefabGameOverRank: cc.Prefab,
        gameOverRankLayout: cc.Node,
        loadingLabel: cc.Node
      },
      start: function start() {
        var _this = this;
        this.removeChild();
        this.CC_WECHATGAME = true;
        this.CC_WECHATGAME ? window.wx.onMessage(function(data) {
          cc.log("\u63a5\u6536\u4e3b\u57df\u53d1\u6765\u6d88\u606f\uff1a", data);
          0 == data.messageType ? _this.removeChild() : 1 == data.messageType ? _this.fetchFriendData(data.MAIN_MENU_NUM) : 3 == data.messageType ? _this.submitScore(data.MAIN_MENU_NUM, data.score) : 4 == data.messageType ? _this.gameOverRank(data.MAIN_MENU_NUM) : 5 == data.messageType && _this.fetchGroupFriendData(data.MAIN_MENU_NUM, data.shareTicket);
        }) : this.fetchFriendData(1e3);
      },
      submitScore: function submitScore(MAIN_MENU_NUM, score) {
        this.CC_WECHATGAME ? window.wx.getUserCloudStorage({
          keyList: [ MAIN_MENU_NUM ],
          success: function success(getres) {
            console.log("getUserCloudStorage", "success", getres);
            if (0 != getres.KVDataList.length && getres.KVDataList[0].value > score) return;
            window.wx.setUserCloudStorage({
              KVDataList: [ {
                key: MAIN_MENU_NUM,
                value: "" + score
              } ],
              success: function success(res) {
                console.log("setUserCloudStorage", "success", res);
              },
              fail: function fail(res) {
                console.log("setUserCloudStorage", "fail");
              },
              complete: function complete(res) {
                console.log("setUserCloudStorage", "ok");
              }
            });
          },
          fail: function fail(res) {
            console.log("getUserCloudStorage", "fail");
          },
          complete: function complete(res) {
            console.log("getUserCloudStorage", "ok");
          }
        }) : cc.log("\u63d0\u4ea4\u5f97\u5206:" + MAIN_MENU_NUM + " : " + score);
      },
      removeChild: function removeChild() {
        null != this.node.getChildByName("1000") && this.node.removeChild(this.node.getChildByName("1000"));
        this.rankingScrollView.node.active = false;
        this.scrollViewContent.removeAllChildren();
        this.gameOverRankLayout.active = false;
        this.gameOverRankLayout.removeAllChildren();
        this.loadingLabel.getComponent(cc.Label).string = "\u73a9\u547d\u52a0\u8f7d\u4e2d...";
        this.loadingLabel.active = true;
      },
      fetchFriendData: function fetchFriendData(MAIN_MENU_NUM) {
        var _this2 = this;
        this.removeChild();
        this.rankingScrollView.node.active = true;
        this.CC_WECHATGAME && wx.getUserInfo({
          openIdList: [ "selfOpenId" ],
          success: function success(userRes) {
            _this2.loadingLabel.active = false;
            console.log("success", userRes.data);
            var userData = userRes.data[0];
            wx.getFriendCloudStorage({
              keyList: [ MAIN_MENU_NUM ],
              success: function success(res) {
                console.log("wx.getFriendCloudStorage success", res);
                var data = res.data;
                data.sort(function(a, b) {
                  if (0 == a.KVDataList.length && 0 == b.KVDataList.length) return 0;
                  if (0 == a.KVDataList.length) return 1;
                  if (0 == b.KVDataList.length) return -1;
                  return b.KVDataList[0].value - a.KVDataList[0].value;
                });
                for (var i = 0; i < data.length; i++) {
                  var playerInfo = data[i];
                  var item = cc.instantiate(_this2.prefabRankItem);
                  item.getComponent("RankItem").init(i, playerInfo);
                  _this2.scrollViewContent.addChild(item);
                  if (data[i].avatarUrl == userData.avatarUrl) {
                    var userItem = cc.instantiate(_this2.prefabRankItem);
                    userItem.getComponent("RankItem").init(i, playerInfo);
                    userItem.y = -354;
                    _this2.node.addChild(userItem, 1, "1000");
                  }
                }
                if (data.length <= 8) {
                  var layout = _this2.scrollViewContent.getComponent(cc.Layout);
                  layout.resizeMode = cc.Layout.ResizeMode.NONE;
                }
              },
              fail: function fail(res) {
                console.log("wx.getFriendCloudStorage fail", res);
                _this2.loadingLabel.getComponent(cc.Label).string = "\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002";
              }
            });
          },
          fail: function fail(res) {
            _this2.loadingLabel.getComponent(cc.Label).string = "\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002";
          }
        });
      },
      fetchGroupFriendData: function fetchGroupFriendData(MAIN_MENU_NUM, shareTicket) {
        var _this3 = this;
        this.removeChild();
        this.rankingScrollView.node.active = true;
        this.CC_WECHATGAME && wx.getUserInfo({
          openIdList: [ "selfOpenId" ],
          success: function success(userRes) {
            console.log("success", userRes.data);
            var userData = userRes.data[0];
            wx.getGroupCloudStorage({
              shareTicket: shareTicket,
              keyList: [ MAIN_MENU_NUM ],
              success: function success(res) {
                console.log("wx.getGroupCloudStorage success", res);
                _this3.loadingLabel.active = false;
                var data = res.data;
                data.sort(function(a, b) {
                  if (0 == a.KVDataList.length && 0 == b.KVDataList.length) return 0;
                  if (0 == a.KVDataList.length) return 1;
                  if (0 == b.KVDataList.length) return -1;
                  return b.KVDataList[0].value - a.KVDataList[0].value;
                });
                for (var i = 0; i < data.length; i++) {
                  var playerInfo = data[i];
                  var item = cc.instantiate(_this3.prefabRankItem);
                  item.getComponent("RankItem").init(i, playerInfo);
                  _this3.scrollViewContent.addChild(item);
                  if (data[i].avatarUrl == userData.avatarUrl) {
                    var userItem = cc.instantiate(_this3.prefabRankItem);
                    userItem.getComponent("RankItem").init(i, playerInfo);
                    userItem.y = -354;
                    _this3.node.addChild(userItem, 1, "1000");
                  }
                }
                if (data.length <= 8) {
                  var layout = _this3.scrollViewContent.getComponent(cc.Layout);
                  layout.resizeMode = cc.Layout.ResizeMode.NONE;
                }
              },
              fail: function fail(res) {
                console.log("wx.getFriendCloudStorage fail", res);
                _this3.loadingLabel.getComponent(cc.Label).string = "\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002";
              }
            });
          },
          fail: function fail(res) {
            _this3.loadingLabel.getComponent(cc.Label).string = "\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002";
          }
        });
      },
      gameOverRank: function gameOverRank(MAIN_MENU_NUM) {
        var _this4 = this;
        this.removeChild();
        this.gameOverRankLayout.active = true;
        this.CC_WECHATGAME && wx.getUserInfo({
          openIdList: [ "selfOpenId" ],
          success: function success(userRes) {
            cc.log("success", userRes.data);
            var userData = userRes.data[0];
            wx.getFriendCloudStorage({
              keyList: [ MAIN_MENU_NUM ],
              success: function success(res) {
                cc.log("wx.getFriendCloudStorage success", res);
                _this4.loadingLabel.active = false;
                var data = res.data;
                data.sort(function(a, b) {
                  if (0 == a.KVDataList.length && 0 == b.KVDataList.length) return 0;
                  if (0 == a.KVDataList.length) return 1;
                  if (0 == b.KVDataList.length) return -1;
                  return b.KVDataList[0].value - a.KVDataList[0].value;
                });
                for (var i = 0; i < data.length; i++) if (data[i].avatarUrl == userData.avatarUrl) {
                  if (i - 1 >= 0) {
                    if (i + 1 >= data.length && i - 2 >= 0) {
                      var _userItem2 = cc.instantiate(_this4.prefabGameOverRank);
                      _userItem2.getComponent("GameOverRank").init(i - 2, data[i - 2]);
                      _this4.gameOverRankLayout.addChild(_userItem2);
                    }
                    var _userItem = cc.instantiate(_this4.prefabGameOverRank);
                    _userItem.getComponent("GameOverRank").init(i - 1, data[i - 1]);
                    _this4.gameOverRankLayout.addChild(_userItem);
                  } else if (i + 2 >= data.length) {
                    var node = new cc.Node();
                    node.width = 200;
                    _this4.gameOverRankLayout.addChild(node);
                  }
                  var userItem = cc.instantiate(_this4.prefabGameOverRank);
                  userItem.getComponent("GameOverRank").init(i, data[i], true);
                  _this4.gameOverRankLayout.addChild(userItem);
                  if (i + 1 < data.length) {
                    var _userItem3 = cc.instantiate(_this4.prefabGameOverRank);
                    _userItem3.getComponent("GameOverRank").init(i + 1, data[i + 1]);
                    _this4.gameOverRankLayout.addChild(_userItem3);
                    if (i - 1 < 0 && i + 2 < data.length) {
                      var _userItem4 = cc.instantiate(_this4.prefabGameOverRank);
                      _userItem4.getComponent("GameOverRank").init(i + 2, data[i + 2]);
                      _this4.gameOverRankLayout.addChild(_userItem4);
                    }
                  }
                }
              },
              fail: function fail(res) {
                console.log("wx.getFriendCloudStorage fail", res);
                _this4.loadingLabel.getComponent(cc.Label).string = "\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002";
              }
            });
          },
          fail: function fail(res) {
            _this4.loadingLabel.getComponent(cc.Label).string = "\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u6d4b\u7f51\u7edc\uff0c\u8c22\u8c22\u3002";
          }
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  RankItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd553fmL+BGfJ9idSJ4ApIP", "RankItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      name: "RankItem",
      properties: {
        backSprite: cc.Node,
        rankLabel: cc.Label,
        avatarImgSprite: cc.Sprite,
        nickLabel: cc.Label,
        topScoreLabel: cc.Label
      },
      start: function start() {},
      init: function init(rank, data) {
        var avatarUrl = data.avatarUrl;
        var nick = data.nickname;
        var grade = 0 != data.KVDataList.length ? data.KVDataList[0].value : 0;
        rank % 2 == 0 && (this.backSprite.color = new cc.Color(55, 55, 55, 255));
        if (0 == rank) {
          this.rankLabel.node.color = new cc.Color(255, 0, 0, 255);
          this.rankLabel.node.setScale(2);
        } else if (1 == rank) {
          this.rankLabel.node.color = new cc.Color(255, 255, 0, 255);
          this.rankLabel.node.setScale(1.6);
        } else if (2 == rank) {
          this.rankLabel.node.color = new cc.Color(100, 255, 0, 255);
          this.rankLabel.node.setScale(1.3);
        }
        this.rankLabel.string = (rank + 1).toString();
        this.createImage(avatarUrl);
        this.nickLabel.string = nick;
        this.topScoreLabel.string = grade.toString();
      },
      createImage: function createImage(avatarUrl) {
        var _this = this;
        var image;
        false;
        cc.loader.load({
          url: avatarUrl,
          type: "jpg"
        }, function(err, texture) {
          _this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameOverRank", "GameRankingList", "RankItem" ]);