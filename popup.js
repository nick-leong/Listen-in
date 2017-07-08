document.addEventListener('DOMContentLoaded', 
	function()
	{

		chrome.tabs.query({}, function(tabs){

			var vidtab = tabs[0];

			for(var i = 0; i < tabs.length; i++){
				if(tabs[i].audible){
					vidtab = tabs[i]
				}
			}

			document.getElementById('vidName').innerText = vidtab.title;

		});


	}
);