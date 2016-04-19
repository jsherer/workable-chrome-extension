new (function() {

    function generateName(seed){
        var a = ['Admiral','Air','Alpha','Ambush','Android','Aqua','Arch','Armadillo','Astro','Atomic','Azure','Battle','Bee','Beta','Bionic','Blue','Brain','Bronze','Brother','Caped','Captain','Captain','Chameleon','Cobalt','Colossal','Comet','Commander','Commodore','Composite','Compu','Copper','Cosmic','Crimson','Cyber','Danger','Dare','Dark','Dawn','Death','Delta','Detective','Digi','Doc','Doctor','Dragon','Dream','Duke','Dynamo','Earth','Elasti','Electra','Element','Emerald','Fighting','Fire','Flaming','Fly','Flying','Forgotten','Freedom','Frog','Future','Gamma','Gaseous','General','Ghost','Giant','Gold','Golden','Green','Grey','Hawk','Hour','Human','Hyper','Ice','Insect','Invisible','Iron','Jade','Jet','Karate','Laser','Lieutenant','Light','Lightning','Lion','Living','Machine','Mad','Magna','Magnetic','Major','Mammoth','Manga','Martian','Masked','Mega','Metal','Meteor','Micro','Mighty','Millennium','Mind','Miracle','Moon','Night','Nuclear','Obsidian','Omega','Onyx','Orange','Phantom','Platinum','Platypus','Power','Psychic','Purple','Q','Quick','Quin','Racoon','Radioactive','Rainbow','Red','Ring','Robo','Robot','Rocket','Ruby','Samurai','Sand','Sarge','Scarab','Scarlet','Sea','Seagoing','Secret','Sergeant','Shadow','Shatter','Shining','Shrinking','Silent','Silver','Sky','Snow','Space','Speed','Spider','Squirrel','Star','Steel','Stone','Sub','Suicide','Sun','Super','Super','Supreme','Techni','Terra','Thunder','Tiger','Time','Tomorrow','Turbo','Ultra','Valiant','Vector','War','Warrior','Water','White','Wild','Wind','Wing','Winged','Winter','Wolf','Wombat','Wonder','X','Y','Yellow','Z'];
        var b = ['A','Aardvark','America','Android','Apostle','Armadillo','Arrow','Atom','Avenger','Bat','Bee','Beetle','Bird','Blade','Blaze','Blur','Bolt','Brain','Bullet','Bulk','Canary','Carrot','Cavalier','Centurion','Chameleon','Champion','Claw','Comet','Condor','Corona','Crystal','Crusader','Cyborg','Dazzler','Defender','Detective','Dragon','Droid','Duke','Dusk','Eagle','Engineer','Enigma','Eye','Falcon','Fang','Flame','Flare','Flash','Flea','Fly','Fury','Fighter','Fire','Ghost','Glider','Glory','Goliath','Guardian','Guardsman','Giant','Hammer','Harrier','Hawk','Hornet','Hulk','Hurricane','Inferno','Jet','Justice','Knight','Lantern','Liberator','Light','Lightning','Lion','Longshore','Machine','Mariner','Marvel','Mask','Maximus','Midget','Mime','Miracle','Mouse','Nimbus','Ninja','Nova','One','Paladin','Panther','Person','Phantom','Photon','Platypus','Prime','Prodigy','Protector','Q','Quasar','Racer','Racoon','Rage','Ranger','Ray','Ricochet','Rider','Robot','Rocket','Sailor','Samurai','Savage','Scarab','Scout','Shadow','Shield','Shogun','Shrike','Singer','Skier','Soarer','Spear','Specter','Speedster','Spider','Squid','Squirrel','Stalker','Star','Storm','Surfer','Sword','Sidekick','Torpedo','Tiger','Titan','Torch','Tornado','Torpedo','Valkyrie','Victory','Viking','Virtuoso','Vision','Walker','Warrior','Wasp','Wave','Wing','Wizard','Wolf','Wonder','Worm','X','Y','Yak','Z','Zero'];
        
        var hash;
        if(typeof md51 === 'function'){
            hash = md51('zapier-' + seed.replace(/\s|\W|\d/g, ''));
        } else {
            hash = [Math.round(Math.random() * a.length), Math.round(Math.random() * b.length)];
        }
        
        var x = Math.abs(hash[0]);
        var y = Math.abs(hash[1]);
        
        return a[x % a.length] + ' ' + b[y % b.length];
    }

	function updateNames() {
        $(".candidate-header h3 span").filter(':not([data-x])').each(function(){
            $(this).attr('data-x', 'yes');

            var name = $(this).text();
            var superHero = generateName(name);

            $(this).addClass('original-name');

            var span = $("<span/>", {'class':'superhero-name'});
            span.attr('data-x', 'yes');
            span.text(superHero);
            span.appendTo($(this).parent());
        });

        $(".candidate-info h1.name").filter(':not([data-x])').each(function(){
            $(this).attr('data-x', 'yes');
            
            var name = $(this).text();
            var superHero = generateName(name);

            $(this).empty();

            var original = $("<span/>", {'class':'original-name'});
            original.text(name);
            original.prependTo($(this));

            var span = $("<span/>", {'class':'superhero-name'});
            span.text(superHero);
            span.prependTo($(this));
        });
	}

	function init() {
	    $('body').addClass('breezy-blind-toggled');
        
        setInterval(updateNames, 1000);
    }

	init();

})();
