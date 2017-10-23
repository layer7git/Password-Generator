var password = {
    // Add another object to the rules array here to add rules.
    // They are executed from top to bottom, with callbacks in between if defined.
    rules: [

		{
            charactersFull: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            charactersEasy: 'ABCDEFGHIJKLMNPQRSTUVWXYZ',
			id: 'upper'
		},
		
		{
            charactersFull: '0123456789',
            charactersEasy: '123456789',
			id: 'numeric'
		},
	
        {
            charactersFull: 'abcdefghijklmnopqrstuvwxyz',
            charactersEasy: 'abcdefghijklmnpqrstuvwxyz',
            id: 'lower'
        },

        //Take 4 special characters, use the callback to shuffle the resulting 16 character string
        {
            charactersFull: '!@#$%^&*()_+|~-={}[]:";<>?,./',
			charactersEasy: '@#$%^&*_+~-=<>?/',
            id: 'special',
            callback: function (s) {
                var a = s.split(""),
                    n = a.length;

                for (var i = n - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = a[i];
                    a[i] = a[j];
                    a[j] = tmp;
                }
                return a.join("");
            }
        }
    ],
    generate: function (options) {
        var g = '';
		
        $.each(password.rules, function (k, v) {
			var m=1;
			switch(v.id){
				case 'upper':
					if(v.id in options)
						m=options[v.id];
					else
						m=0;
					break;
				case 'lower':
					if(v.id in options)
						m=options[v.id];
					else
						m=0;
					break;
				case 'numeric':
					if(v.id in options)
						m=options[v.id];
					else
						m=0;
					break;
				case 'special':
					if(v.id in options)
						m=options[v.id];
					else
						m=0;
					break;
				default:
					m=1;
			}
            if(options['easy']=='true'){
                for (var i = 1; i <= m; i++) {
                    g = g + v.charactersEasy[Math.floor(Math.random() * (v.charactersEasy.length))];
                }
                if (v.callback) {
                    g = v.callback(g);
                }
            }else{
                for (var i = 1; i <= m; i++) {
                    g = g + v.charactersFull[Math.floor(Math.random() * (v.charactersFull.length))];
                }
                if (v.callback) {
                    g = v.callback(g);
                }
            }
        });
        return g;
    }
}
