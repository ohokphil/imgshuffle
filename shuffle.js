//The Fisher Yates Shuffle Script
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Constructor for Portfolio Modules
function portMod(id, color, size, thumb, image, info, category) {
this.id = id;
this.color = color;
this.size = size;
this.thumb = thumb; 
this.image = image; 
this.info = info;
this.category = category;
}


//Create the Portfolio Array. A container for the Modules.
var portfolio = [];

//Build the Array of Module Objects & Their Properties
    portfolio[0] = new portMod(0, 'd41c17', 'fancybox', 'free_th\.png', '.\/images\/free\.png', '\"Free\" India Ink & Flashe, 2009', 'illustration');
    portfolio[1] = new portMod(1, '632c3f', 'fancybox', 'marchiali_th\.jpg', '.\/images\/marchiali\.jpg', 'Marchiali: The Man in the Iron Mask', 'illustration');
    portfolio[2] = new portMod(2, '0F97A4', 'fancybox', 'togh\.gif', '.\/images\/TOGHOWTR\.jpg', 'Good Hands\: Acrylic Paint 2010', 'illustration');
    portfolio[3] = new portMod(3, 'FFE700', 'fancybox', 'sfs_th\.jpg', '.\/images\/sun-flower-seed\.gif', 'Sunflower Seed: Album Artwork 2010', 'illustration');
    portfolio[4] = new portMod(4, '', 'fancybox', 'sw_th\.jpg', '.\/images\/skinwalker\.jpg', 'Album Artwork for Skinwalker', 'illustration');
    portfolio[5] = new portMod(5, 'CC8689', 'fancybox', 'camera\.jpg', '.\/images\/camera\.jpg', '\"Camera\" Acrylic Paint, 2013', 'illustration');
    portfolio[6] = new portMod(6, 'DC791B', 'fancybox', 'hdc_th\.jpg', '.\/images\/hotdog\.jpg', 'Advertising for Hotdog Caper 2007', 'illustration');
    portfolio[7] = new portMod(7, 'A5495C', 'fancybox', 'centauride_th\.jpg', '.\/images\/centauride\.jpg', 'Centauride on the Ceiling, Mixed Media 2008', 'illustration');
    portfolio[8] = new portMod(8, '9AB0AD', 'fancybox', 'free_th\.jpg', '.\/images\/sometimesforget\.jpg', '\"Sometimes Forget\" Digital Paint 2009', 'illustration');
    portfolio[9] = new portMod(9, '', 'fancybox', 'neb_th\.jpg', '.\/images\/nebuchadnezzar\.jpg', '\"King of Babylon\" India Ink, 2009', 'illustration');
    portfolio[10] = new portMod(10, '0071AE', 'fancybox', 'krishna1_th\.jpg', '.\/images\/krishna1\.jpg', '\"Vishnu\" Acrylic on Canvas, 2009', 'illustration');
    portfolio[11] = new portMod(11, 'd72136', 'fancybox', 'strawberry_shawty_th\.jpg', '.\/images\/strawberry_shawty\.jpg', '\"Strawberry Shawty\" for Sweet Spot Vapors', 'illustration');
    portfolio[12] = new portMod(12, 'EE1B22', 'fancybox', 'uslogistics_th\.jpg', '.\/images\/uslogistics_web\.jpg', 'Logo for US Logistics', 'illustration');
    portfolio[13] = new portMod(13, '45963A', 'fancybox', 'habitat_th\.jpg', '.\/images\/habitat\.png', 'Logo for Habitat Architects', 'typography');
    portfolio[14] = new portMod(14, '', 'fancybox', 'gg_logo\.png', '.\/images\/gg_logo\.png', 'Graphic Garden Creative Group', 'illustration');
    portfolio[15] = new portMod(15, '0196AA', 'fancybox', 'pez_th\.jpg', '.\/images\/pez\.jpg', 'Logo for Pez Fishery', 'illustration');
    portfolio[16] = new portMod(16, '', 'fancybox', 'brokersgallery_1_th\.jpg', '.\/images\/brokersgallery_1\.jpg', 'Logotype for The Broker\'s Gallery', 'typography');
    portfolio[17] = new portMod(17, '', 'fancybox', 'LAcountyfair_1_th\.jpg', '.\/images\/LAcountyfair_1\.jpg', 'Logo for LA County Fair', 'typography');
    portfolio[18] = new portMod(18, 'EF4623', 'fancybox', 'threadbare_1_th\.jpg', '.\/images\/threadbare_1\.jpg', 'Logotype for Threadbare Apparel', 'typography');
    portfolio[19] = new portMod(19, '0272A7', 'fancybox', 'funnfit_th\.jpg', '.\/images\/funnfit\.jpg', 'Fun & Fitness Poster', 'photography');
    portfolio[20] = new portMod(20, 'fcd808', 'fancybox', 'hma1_th\.png', '.\/images\/hma1\.png', 'Advertising for The Flats, 2011', 'typography');
    portfolio[21] = new portMod(21, 'e1af00', 'fancybox', 'barkbreaks_th\.jpg', '.\/images\/barkbreaks\.jpg', 'Barkbreaks San Diego Flyer', 'illustration');
    portfolio[22] = new portMod(22, 'a3d8c9', 'fancybox', 'hma2_th\.png', '.\/images\/hma2\.png', 'Advertising for Mirabella, 2011', 'typography');
    portfolio[23] = new portMod(23, '00658c', 'fancybox', 'humphreys_1_th\.gif', '.\/images\/humphreys_1\.gif', 'Humphreys by the Bay Advertising', 'typography');
    portfolio[24] = new portMod(24, 'f9ec81', 'fancybox', 'bellavida_1_th\.jpg', '.\/images\/bellavida_1\.jpg', 'Bella Vida for<br />Mayfair Communities', 'typography');
    portfolio[25] = new portMod(25, '7a5425', 'fancybox', 'hma3_th\.png', '.\/images\/hma3\.png', 'Advertising for Laguna Altura, 2011', 'typography');
    portfolio[26] = new portMod(26, '950d10', 'fancybox', 'sdsu_1_th\.jpg', '.\/images\/sdsu_1\.jpg', 'The Business of Wine for SDSU', 'typography');
    portfolio[27] = new portMod(27, 'e43936', 'fancybox', 'hma4_th\.png', '.\/images\/hma4\.png', 'Advertising for Irvine Pacific, 2011', 'typography');
    portfolio[28] = new portMod(28, '5f893c', '728_90', 'torreypinesbank_1_th\.jpg', '.\/images\/torreypinesbank_1\.swf', 'Ad for Torrey Pines Bank with Flash', 'motion');
    portfolio[29] = new portMod(29, '5d3878', '728_90', 'eyesonemail_1_th\.jpg', '.\/images\/eyesonemail_1\.swf', '\"Give Your Business a Lift\" Flash for EyesOnEmail', 'motion');
    portfolio[30] = new portMod(30, 'adc77f', 'fancybox', 'hma5_th\.png', '.\/images\/hma5\.png', 'Advertising for Stonegate, 2011', 'typography');
    portfolio[31] = new portMod(31, 'D0488A', 'fancybox', 'BEAT\.jpg', '.\/images\/BEAT.jpg', 'T-Shirt Design for B\.E\.A\.T\.', 'illustration');
    portfolio[32] = new portMod(32, '04a0af', 'fancybox', 'wiap_th\.gif', '.\/images\/whatisaplace\.jpg', '\"What is a Place?\" Illustrated Book', 'illustration');
    portfolio[33] = new portMod(33, '', 'fancybox', 'deckselect_th\.png', '.\/images\/deckselect\.png', 'Ecommerce Site Design\: Deck Select', 'typography');
    portfolio[34] = new portMod(34, '', 'fancybox', 'ella_th\.jpg', '.\/images\/ella1\.jpg', 'Illustration & Layout \"Ella\" Comic Book', 'illustration');
    portfolio[35] = new portMod(35, '262223', 'fancybox', 'sothebys_1_th\.jpg', '.\/images\/sothebys_1\.jpg', 'Print Layout \"The Future of Toronto\"', 'typography');
    portfolio[36] = new portMod(36, '75a341', 'fancybox', 'edge_solutions_th\.png', '.\/images\/edge_solutions\.png', 'Logo for Edge Solutions', 'typography');
    portfolio[37] = new portMod(37, '00b0ee', 'fancybox', 'mindctrl_th\.png', '.\/images\/mindctrl\.png', 'Logo for MINDCTRL', 'typography');
    portfolio[38] = new portMod(38, 'C17515', 'fancybox', 'pancake_vape_th\.jpg', '.\/images\/pancake_vape\.jpg', '\"Pancake Breakfast\" for Sweet Spot Vapors', 'illustration');
    portfolio[39] = new portMod(39, '', 'fancybox', 'sony1_th\.gif', '.\/images\/sony1\.gif', 'Sony Cybershot', 'motion');
    portfolio[40] = new portMod(40, 'f78b28', '160_600', 'nt2_th\.jpg', '.\/images\/nt2\.swf', 'Northern Territory Flash Ad', 'motion');
    portfolio[41] = new portMod(41, 'ebce61', 'fancybox', 'bvi3_th\.jpg', '.\/images\/bvi3\.jpg', 'BVI Tourism Web Ad Campaign', 'typography');
    portfolio[42] = new portMod(42, 'b6cec4', 'fancybox', 'za1_th\.jpg', '.\/images\/za1\.jpg', 'ZA LOGO', 'typography');
    portfolio[43] = new portMod(43, 'fb7000', 'fancybox', 'goodshop1_th\.png', '.\/images\/goodshop1\.png', 'Social Media Template for Goodshop', 'typography');
    portfolio[44] = new portMod(44, '62c0d1', 'fancybox', 'drawbridge_1_th\.jpg', '.\/images\/drawbridge_1\.jpg', 'Logo Design for Drawbridge', 'typography');
    portfolio[45] = new portMod(45, 'c52053', 'fancybox', 'costamesa1_th\.jpg', '.\/images\/costamesa1\.jpg', 'Digital Illustration for City of Costa Mesa', 'illustration');
    portfolio[46] = new portMod(46, '2F3E1C', 'fancybox', 'wizard_th\.jpg', '.\/images\/wizard\.jpg', 'Wizard Illustration', 'illustration');
    portfolio[47] = new portMod(47, '9A821F', 'fancybox', '170220_th\.jpg', '.\/images\/170220\.jpg', 'Figure Illustration: 02/20/17', 'illustration');
    portfolio[48] = new portMod(48, 'FB3B5B', 'fancybox', 'drive_th\.gif', '.\/images\/drive\.gif', '2018 Golfer\'s Classic Poster Animation', 'motion');
    portfolio[49] = new portMod(49, 'CCCCCC', 'fancybox', '170322_th\.jpg', '.\/images\/170322\.jpg', '170322 Tee Design', 'illustration');
    portfolio[50] = new portMod(50, 'ee2424', 'fancybox', 'mmfp_th\.jpg', '.\/images\/mmfp\.jpg', 'Make Music Festival Pasadena Logo Redesign', 'illustration');
    portfolio[51] = new portMod(51, '40576b', 'iframe', 'be_safe_out_there_kid_th\.png', 'https\:\/\/player\.vimeo\.com\/video\/230903945', '\'Be Safe Out There Kid\' Stop Motion Animation', 'motion');  

function showPort() {
shuffle(portfolio);
console.log(portfolio);
for (x in portfolio) {

  document.write("<div class=\"pic\" style=\"background-color:#" + portfolio[x].color + "\"><a class=\"" + portfolio[x].size + "\" rel=\"gallery\" href=\"" + portfolio[x].image + "\"><div class=\"info\">" + portfolio[x].info + "<\/div><img src=\".\/images\/thumbs\/" + portfolio[x].thumb + "\" title=\"" + portfolio[x].info + "\"\/><\/a><\/div>");

    }
}

function showType() {
shuffle(typography);
console.log(typography);
for (x in typography) {

  document.write("<div class=\"pic\" style=\"background-color:#" + typography[x].color + "\"><a class=\"" + typography[x].size + "\" rel=\"gallery\" href=\"" + typography[x].image + "\"><div class=\"info\">" + typography[x].info + "<\/div><img src=\".\/images\/thumbs\/" + typography[x].thumb + "\" title=\"" + typography[x].info + "\"\/><\/a><\/div>");

    }
}

function showIll() {
shuffle(illustration);
console.log(illustration);
for (x in illustration) {

  document.write("<div class=\"pic\" style=\"background-color:#" + illustration[x].color + "\"><a class=\"" + illustration[x].size + "\" rel=\"gallery\" href=\"" + illustration[x].image + "\"><div class=\"info\">" + illustration[x].info + "<\/div><img src=\".\/images\/thumbs\/" + illustration[x].thumb + "\" title=\"" + illustration[x].info + "\"\/><\/a><\/div>");

    }
}

function showMot() {
shuffle(motion);
console.log(motion);
for (x in motion) {

  document.write("<div class=\"pic\" style=\"background-color:#" + motion[x].color + "\"><a class=\"" + motion[x].size + "\" rel=\"gallery\" href=\"" + motion[x].image + "\"><div class=\"info\">" + motion[x].info + "<\/div><img src=\".\/images\/thumbs\/" + motion[x].thumb + "\" title=\"" + motion[x].info + "\"\/><\/a><\/div>");

    }
}

function showPho() {
shuffle(photography);
console.log(photography);
for (x in photography) {

  document.write("<div class=\"pic\" style=\"background-color:#" + photography[x].color + "\"><a class=\"" + photography[x].size + "\" rel=\"gallery\" href=\"" + photography[x].image + "\"><div class=\"info\">" + photography[x].info + "<\/div><img src=\".\/images\/thumbs\/" + photography[x].thumb + "\" title=\"" + photography[x].info + "\"\/><\/a><\/div>");

    }
}

    var typography = [];
    var illustration = [];
    var motion = [];
    var photography = [];
    var other = []; 

    var currentCat = 0;   



function buildCats() {
    for (x in portfolio) {

        if (portfolio[x].category == 'typography') {   
        typography.push(portfolio[x]);
        }

        else  if (portfolio[x].category == 'illustration') {
            illustration.push(portfolio[x]);
            
        }

        else  if (portfolio[x].category == 'motion') {
            motion.push(portfolio[x]);
            
        }

        else  if (portfolio[x].category == 'photography') {
            photography.push(portfolio[x]);   
        }

        else if (portfolio[x].category != 'typography' || 'illustration' || 'motion' || 'photography')   {
            other.push(portfolio[x]);
        }

        else {
            return portfolio;
            alert ('something was not categorized')
        }
        
    }

}





