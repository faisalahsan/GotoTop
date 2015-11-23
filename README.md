# GotoTop
==========
## How to use 
-------------
1. Include plugin folder in your project.
2. Add plugin.js in project
3. Intialize the plugin
   ```
   		$(document).ready(function () {				
			$().goToUp();
		});
	```

## How to add parameters
------------------------
	$().goToUp({
		up_arrow_btn_background:'rgba(216, 15, 15, 0.701961)',
		search_row_background:'rgba(216, 15, 78, 0.701961)',
		up_arrow_btn_padding:'5px 5px 5px 5px',
		search_row_padding:'5px 5px 5px 5px',
		bottom:'50px',
		right:'50px',
	});

## Available parameters
-----------------------
|  Parameter    			| Value Format	 				   | Description  |
| ------------------------- |:--------------------------------:| ------------------------------------:|
| up_arrow_btn_background   | rgba(140, 80, 147, 0.7), #2d2d2d | background color for goto top button |
| search_row_background     | rgba(140, 80, 147, 0.7), #2d2d2d | background color for seachbox panel  | 
| up_arrow_btn_padding 		| 5px 5px 5px 5px      			   | padding for goto top button          |
| search_row_padding      	| 5px 5px 5px 5px 				   | padding for goto seachbox panel      |
| bottom      				| 50px      					   | bottm position for plugin panel      |
| right 					| 50px      					   | right position for plugin panel      |

## How to use goto-top search box
``` 
	$('#goto-top-search-field').on( 'keypress', function(){
			// your logic i.e. use ajax call to fetch data
		});
	$('#goto-top-search-btn').on('click',function(){
			// your logic i.e. use ajax call to fetch data
			var seachKeyWord = $('#goto-top-search-field').val();
		});
```
## Future
Custom goToUp