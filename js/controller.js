    app.controller('commonCtrl',function ($scope,$http) {
        $http.get("js/data.json").success(function (response) {
            $scope.basiclist_data = response.basic_data;
            $scope.lastlist_data = response.lastlist_data;
            $scope.contact_data = response.contact_data;
            // $scope.findnew_data = response.findnew_data;
            // $scope.messagefocus_data = response.messagefocus_data;
            // $scope.find_data = response.find_data;
            // $scope.focusactive_data = response.focusactive_data;
        })
    });
    app.controller('lastCtrl',function ($scope,$http) {
        // $scope.basiclist_data = $scope.basiclist_data;
        $scope.last = $scope.lastlist_data;
        $scope.doRefresh = function() {
            $http.get('js/newdata.json')
                .success(function(newItems) {
                    $scope.last = newItems.newlist_data;
                })
                .finally(function() {
                    // 停止广播ion-refresher
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
        // console.log($scope.last)
        // console.log( $scope.lastlist);
        // $scope.data = {
        //     showDelete: false
        // };
        // $scope.edit = function(item) {
        //     alert('Edit Item: ' + item.id);
        // };
        // $scope.share = function(item) {
        //     alert('Share Item: ' + item.id);
        // };

        // $scope.moveItem = function(item, fromIndex, toIndex) {
        //     $scope.items.splice(fromIndex, 1);
        //     $scope.items.splice(toIndex, 0, item);
        // };
        $scope.onItemDelete = function(item) {
            $scope.last.splice($scope.last.indexOf(item), 1);
        };
    });
    app.controller('contactCtrl',function ($scope,$http) {
        // $scope.basiclist_data = $scope.basiclist_data;
        $scope.doRefresh = function() {
            $http.get('php/contact.php')
                .success(function(newItems) {
                    $scope.contact_data = newItems.newcontact_data;
                })
                .finally(function() {
                    // 停止广播ion-refresher
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
        // $scope.contactlist = $scope.contact_data;
    });
    app.controller('findCtrl',function ($scope) {
        // $scope.basiclist_data = $scope.basiclist_data;
    });
    app.controller('meCtrl',function ($scope) {
        // $scope.basiclist_data = $scope.basiclist_data;
    });
    app.controller('settingCtrl',function ($scope,$ionicActionSheet,$timeout) {
        $scope.show =function () {
            var hideSheet = $ionicActionSheet.show({
                // buttons:[
                //     {text:'123'},
                //     {text:'345'},
                //     {text:'456'}
                // ],
                destructiveText:'退出登录',
                cancelText:'取消',
                titleText:'退出不会删除任何数据',
                destructiveButtonClicked:function () {
                    window.location.href="http://www.runoob.com/ionic/ionic-scroll.html";
                },
                // buttonClicked:function (index) {
                //     alert(index)
                // },
                cancel:function () {
                    alert("你已经取消了该次操作!")
                }
            });
            $timeout(function () {
                hideSheet()
            },2000)
        }


    });
    app.controller('messageCtrl',function ($scope) {

    });
    app.controller('contactdataCtrl',function ($scope,$stateParams) {
        $scope.mycontactlist =$scope.contact_data;
        for(var i=0;i<$scope.contact_data.length;i++)
        {
            for(var j = 0;j<$scope.contact_data[i].list.length;j++)
            if ($scope.contact_data[i].list[j].id == $stateParams.id){
                $scope.user = $scope.contact_data[i].list[j];
                // console.log($scope.user);
                break;
            }
        }
    });