function menuMaker(nodes){
	'use strict';

	var menuItems = nodes.start.reverse(); ;

	var secondLayer = function(items, rootNode){
		var item=items.menu, liLayer = document.createElement('li');

		var link = document.createElement('a');
		link.href = items.url? items.url : '#';
		link.text = items.name;
		liLayer.appendChild(link);
		rootNode.appendChild(liLayer);
	}

	var firstLayer = function(node, rootNode){
		var liFirst = document.createElement('li');
		var link = document.createElement('a');

		if(!node.url){
			link.className = 'dropdown-toggle';
			link.href = '#';
			link.text = node.name;
			link.setAttribute('data-toggle', 'dropdown');
			liFirst.appendChild(link);
			liFirst.appendChild(document.createElement('ul'));
			if(rootNode.id){
				var b = document.createElement('b')
				b.className = 'caret';
				link.appendChild(b);
				liFirst.className = 'dropdown ';
				liFirst.children[1].setAttribute('role', 'menu');
			}else liFirst.className = 'dropdown dropdown-submenu';
			
			liFirst.children[1].className = 'dropdown-menu';
			node.menu.forEach(function(v){
				firstLayer(v, liFirst.children[1]);
			});
			rootNode.appendChild(liFirst);
		}
		else{
			secondLayer(node, rootNode);
		}
	}

	for(var i=menuItems.length; i--;){
		var roots = document.getElementById('nav_menu_set');
		firstLayer(menuItems[i], roots);
	}
	
}

function takeMenu(){
	var data = jQuery.parseJSON(`{
  "name": "MenuList",
  "start": [
    {
      "name": "Layer_1",
      "url": "",
      "menu": [
        {
          "name": "Layer_1_1",
          "url": "",
          "menu": [
            {
              "name": "Layer_1_1_1",
              "url": "#",
              "menu": [
                
              ]
            },
            {
              "name": "Layer_1_1_2",
              "url": "#",
              "menu": [
                
              ]
            }
          ]
        },
        {
          "name": "Layer_1_2",
          "url": "#",
          "menu": [
            
          ]
        },
        {
          "name": "Layer_1_3",
          "url": "#",
          "menu": [
            
          ]
        }
      ]
    },
    {
      "name": "Layer_2",
      "url": "",
      "menu": [
        {
          "name": "Layer_2_1",
          "url": "#",
          "menu": [
            
          ]
        }
      ]
    },
    {
      "name": "Layer_3",
      "url": "",
      "menu": [
        {
          "name": "Layer_3_1",
          "url": "#",
          "menu": [
            
          ]
        }
      ]
    },
    {
      "name": "Layer_4",
      "url": "",
      "menu": [
        {
          "name": "Layer_4_1",
          "url": "#",
          "menu": [
            
          ]
        }
      ]
    },
    {
      "name": "Layer_5",
      "url": "",
      "menu": [
        {
          "name": "Layer_5_1",
          "url": "",
          "menu": [
            {
              "name": "Layer_5_1_1",
              "url": "#",
              "menu": [
                
              ]
            },
            {
              "name": "Layer_5_1_2",
              "url": "#",
              "menu": [
                
              ]
            },
            {
              "name": "Layer_5_1_3",
              "url": "#",
              "menu": [
                
              ]
            }
          ]
        },
        {
          "name": "Layer_5_2",
          "url": "",
          "menu": [
            {
              "name": "Layer_5_2_1",
              "url": "#",
              "menu": [
                
              ]
            },
            {
              "name": "Layer_5_2_2",
              "url": "#",
              "menu": [
                
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Layer_6",
      "url": "",
      "menu": [
        {
          "name": "Layer_6_1",
          "url": "#",
          "menu": [
            
          ]
        }
      ]
    },
    {
      "name": "Layer_7",
      "url": "",
      "menu": [
        {
          "name": "Layer_7_1",
          "url": "#",
          "menu": [
            
          ]
        }
      ]
    },
    {
      "name": "Layer_8",
      "url": "#",
      "menu": [
        
      ]
    },
    {
      "name": "Layer_9",
      "url": "#",
      "menu": [
        
      ]
    },
    {
      "name": "Layer_10",
      "url": "#",
      "menu": [
        
      ]
    },
    {
      "name": "Layer_11",
      "url": "#",
      "menu": [
        
      ]
    },
    {
      "name": "Layer_12",
      "url": "#",
      "menu": [
        
      ]
    }
  ]
}`);

	
		menuMaker(data);
}

(function(){
	takeMenu();

  $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
})();