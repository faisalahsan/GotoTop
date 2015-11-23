# GotoTop
Demo 
http://embed.plnkr.co/I9AiqzTihhVE2dAtvH8B/preview
## How to use 
1. Include plugin folder in your project.
2. Add plugin.js in project
3. Intialize the plugin
   ```
   		$(document).ready(function () {				
			$().goToUp();
		});
	```

## How to add parameters
	$().goToUp({
		up_arrow_btn_background:'rgba(216, 15, 15, 0.701961)',
		search_row_background:'rgba(216, 15, 78, 0.701961)',
		up_arrow_btn_padding:'5px 5px 5px 5px',
		search_row_padding:'5px 5px 5px 5px',
		bottom:'50px',
		right:'50px',
	});

## Available parameters
|  Parameter    			| Value Format	 				   | Description  |
| ------------------------- |:--------------------------------:| ------------------------------------:|
| up_arrow_btn_background   | rgba(140, 80, 147, 0.7), #2d2d2d | background color for goto top button |
| search_row_background     | rgba(140, 80, 147, 0.7), #2d2d2d | background color for seachbox panel  | 
| up_arrow_btn_padding 		| 5px 5px 5px 5px      			   | padding for goto top button          |
| search_row_padding      	| 5px 5px 5px 5px 				   | padding for goto seachbox panel      |
| bottom      				| 50px      					   | bottm position for plugin panel      |
| right 					| 50px      					   | right position for plugin panel      |

## search box
type something in searchbox
## Future
Custom goToUp

Feel free to add more functionality, to take part in open source community
