// CSS修改
var menuOptions = {
    menuRoot: 'nav navbar-nav',
    toggleClass: 'dropdown-toggle',
    firstMenuRoot: 'dropdown menu-large',
    secondMenuRoot: 'dropdown-menu megamenu row',
    twoLevelItem: 'col-md-4',
    threeLevelMenu: 'col-md-4 col-sm-12 col-xs-12 pd_btm',
    threeLevelHeader: 'dropdown-header',
    threeLevelItem: 'col-md-6 col-sm-6 col-xs-6',
    fourLevelMenu: '',
    fourLevelHeader: '',
    fourLevelItem: '',
}



// menu格式組件
var data = JSON.parse(`{
		"name": "後台列表 V2.0",
		"start": [{
				"name": "menu1",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu2",
				"url": "",
				"menu": [
					{"name": "submenu1","url": "../content/content_list.html","menu": []},
					{"name": "submenu2","url": "../content/faq_list.html","menu": []},        
					{"name": "submenu3","url": "../content/download_list.html","menu": []},         
					{"name": "submenu4","url": "../content/link_list.html","menu": []},         
					{"name": "submenu5","url": "../content/menu.html","menu": []}
				],
	      		"total_level": 2					
    		},{
				"name": "menu3",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu4",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu5",
				"url": "",
				"menu": [
					{
						"name": "title1", "url": "../heritage/heritage_list.html", 
						"menu": [
							{"name": "thirdTierMenu1","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu2","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu3","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu4","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu5","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu6","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu7","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu8","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu9","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu10","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu11","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu12","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu13","url": "https://www.google.com","menu": []}
						]
					},
					{
						"name": "title2", "url": "../heritage/culturalAsset_list.html", 
						"menu": [
							{"name": "thirdTierMenu1","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu2","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu3","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu4","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu5","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu6","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu7","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu8","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu10","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu11","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu12","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu13","url": "https://www.google.com","menu": []}
						]
					},
					{
						"name": "title3", "url": "../heritage/hExchange_list.html", 
						"menu": [
							{"name": "thirdTierMenu1","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu2","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu3","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu4","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu5","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu6","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu7","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu8","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu9","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu10","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu11","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu12","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu13","url": "https://www.google.com","menu": []}
						]
					}
				],
	      		"total_level": 3
			},{
				"name": "menu6",
				"url": "",
				"menu": [
					{"name": "submenu1","url": "../analysis/site_analysis.html","menu": []},
					{"name": "submenu2","url": "#","menu": []}
				],
	      		"total_level": 2
			},{
				"name": "menu7",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu8",
				"url": "",
				"menu": [
					{"name": "submenu1","url": "../content/content_list.html","menu": []},
					{"name": "submenu2","url": "../content/faq_list.html","menu": []},        
					{"name": "submenu3","url": "../content/download_list.html","menu": []},         
					{"name": "submenu4","url": "../content/link_list.html","menu": []},         
					{"name": "submenu3","url": "../content/menu.html","menu": []}
				],
	      		"total_level": 2					
    		},{
				"name": "menu9",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu10",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu11",
				"url": "",
				"menu": [
					{
						"name": "title1", "url": "../heritage/heritage_list.html", 
						"menu": [
							{"name": "thirdTierMenu1","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu2","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu3","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu4","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu5","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu6","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu7","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu8","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu9","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu10","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu11","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu12","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu13","url": "https://www.google.com","menu": []}
						]
					},
					{
						"name": "title2", "url": "../heritage/culturalAsset_list.html", 
						"menu": [
							{"name": "thirdTierMenu1","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu2","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu3","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu4","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu5","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu6","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu7","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu8","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu10","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu11","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu12","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu13","url": "https://www.google.com","menu": []}
						]
					},
					{
						"name": "title3", "url": "../heritage/hExchange_list.html", 
						"menu": [
							{"name": "thirdTierMenu1","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu2","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu3","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu4","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu5","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu6","url": "https://www.google.com","menu": []},							
							{"name": "thirdTierMenu7","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu8","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu9","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu10","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu11","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu12","url": "https://www.google.com","menu": []},
							{"name": "thirdTierMenu13","url": "https://www.google.com","menu": []}
						]
					}
				],
	      		"total_level": 3
			},{
				"name": "menu12",
				"url": "",
				"menu": [
					{"name": "submenu1","url": "../analysis/site_analysis.html","menu": []},
					{"name": "submenu2","url": "#","menu": []}
				],
	      		"total_level": 2
			},{
				"name": "menu13",
				"url": "",
				"menu": [],
	      		"total_level": 1
			},{
				"name": "menu14",
				"url": "",
				"menu": [],
	      		"total_level": 2					
    		}]
		}`);


// 啟動列
window.onload= menuMaker(data);