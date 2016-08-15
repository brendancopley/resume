app.controller('MainController', ['$scope', function($scope) { 
	$scope.personName = 'Brendan Copley';
	$scope.personInitials = 'http://www.brendancopley.com/wp-content/uploads/2016/08/logo2.jpg';
	$scope.checkMark = 'http://www.brendancopley.com/wp-content/uploads/2016/08/check.jpg';
	$scope.superSkill = 'http://www.brendancopley.com/wp-content/uploads/2016/08/superskill.jpg';
	$scope.profileTitle = 'http://www.brendancopley.com/wp-content/uploads/2016/08/profile3.jpg';
	$scope.profileExp = 'http://www.brendancopley.com/wp-content/uploads/2016/08/experience1.jpg';
	$scope.profileEdu = 'http://www.brendancopley.com/wp-content/uploads/2016/08/education1.jpg';
	$scope.skills = [
	{
		talent: 'User Interface',
	},
	{
		talent: 'Material Design',
	},
	{
		talent: 'Info Architecture',
	},
	{
		talent: 'Javascript',
	},
	{
		talent: 'Front End Design',
	},
	];
	$scope.levels = [
	{
		competent: 'CSS',
		degree: 96
	},
	{
		competent: 'ReactJs',
		degree: 81
	},
	{
		competent: 'NodeJs',
		degree: 84
	},
	{
		competent: 'AngularJs',
		degree: 90
	},
	];
}]);
