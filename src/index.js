        var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
		function register()
		{
			x.style.left='-400px';
			y.style.left='50px';
			z.style.left='110px';
		}
		function login()
		{
			x.style.left='50px';
			y.style.left='450px';
			z.style.left='0px';
		}
        var modal = document.getElementById('login-form');
        window.onclick = function(event) 
        {
            if (event.target == modal) 
            {
                modal.style.display = "none";
            }
        }
		
		const menuItems = document.querySelectorAll('#MenuItems li');

		menuItems.forEach((item, index) => {
			item.addEventListener('mouseenter', () => {
				item.querySelector('a').style.width = '100%';
			});
		
			item.addEventListener('mouseleave', () => {
				item.querySelector('a').style.width = '0';
			});
		});
		

