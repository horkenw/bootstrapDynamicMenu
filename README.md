# BootStrap dynamic building tree menu

###Three Step make a menu for your prototype,

*	first off: giv your root `<ul>` a ID **nav_menu_set**.
*	Next Step: import **menuMaker.js** after your `<ul>` tag.
*	Last one: open up **menudata.json** to setting your menu layer and save it.


##Attention

JSON format

    {
      "name": "MenuList",
      "start": [
        {
        .....
        }
      ]
    }
Setup your menu inside **"start"** tag.

If menu have sub layer, did not give any hyperlink to URL, leave it empty. 
Exp:

    ........
    {
    "name": "Layer_1",
      "url": "", //empty
      "menu": [
        {
          "name": "Layer_1_1",
          "url": "", //empty
          "menu": [
            {
              "name": "Layer_1_1_1",
              "url": "#",
              "menu": [
                
              ]
            },
    .........
    
If is last layer, you can set url to **#** or any link you want.
Exp:

    ........
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
              "url": "#", //SET # IF IS LAST LAYER
              "menu": [
                
              ]
            },
            {
              "name": "Layer_1_1_2",
              "url": "#", //SET # IF IS LAST LAYER
              "menu": [
                
              ]
            }
          ]
    .........

[Prototype tree menu][1]

[1]: https://github.com/horkenw/bootstrapDynamicMenu "Prototype tree menu"
