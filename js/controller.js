    app.controller('commonCtrl',function ($scope,$http) {
        var home = document.getElementById("Home");
        home.style.display = "none";
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
        $scope.last = $scope.lastlist_data;
        var home = document.getElementById("Home");
        home.style.display = "block";
        $scope.doRefresh = function() {
            $http.get('js/newdata.json')
                .success(function(newItems) {
                    $scope.last = newItems.newcontact_data;
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
        // $scope.onItemDelete = function(item) {
        //     $scope.lastlist.splice($scope.lastlist.indexOf(item), 1);
        // };
    });
    app.controller('contactCtrl',function ($scope,$http) {
        $scope.doRefresh = function() {
            $http.get('js/newdata.json')
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

    });
    app.controller('meCtrl',function ($scope) {

    });
    app.controller('settingCtrl',function ($scope) {

    });
    app.controller('messageCtrl',function ($scope) {

    });