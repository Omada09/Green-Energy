// Coding Guidelines
    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "img/greenFam.jpg",
           "img/greenCity.jpg",
           "img/greenSyst.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    var artcle = document.getElementById('main-content')
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule).
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 

    Start your handleSelection function here. */ 
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop through the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop contains the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the back-ticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 


// Declaring all functions

// Load your images on page-load
function preloader() {
    const imagesList = [
       "img/greenFam.jpg",
       "img/greenCity.jpg",
       "img/greenSyst.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};


$(document).ready(function(){

    // Get all buttons in a NODE LIST of buttons (array like structure)
    var myButtons = document.querySelectorAll(".buttons");

    // Getting resources
    const contents = {
        page1: {
            headingContent: 'What is Renewable Energy',
            bodyText: 'Renewable energy is energy derived from natural processes that are replenished at a rate that is equal to or faster than the rate at which they are consumed. There are various forms of renewable energy, deriving directly or indirectly from the sun, or from heat generated deep within the earth. They include energy generated from solar, wind, geothermal, hydropower and ocean resources, solid biomass, biogas and liquid biofuels. Biomass, however, is a renewable resource only if its rate of consumption does not exceed its rate of regeneration.<br><br>A wide range of energy-producing technologies and equipment have been developed over time to take advantage of these natural resources. As a result, usable energy can be produced in the form of electricity, industrial heat, thermal energy for space and water conditioning, and transportation fuels.<br><br>With its large landmass and diversified geography, Canada has an abundance of renewable resources that can be used to produce energy. Canada is a world leader in the production and use of energy from renewable resources. Renewable energy resources currently provide 18.9 per cent of Canada’s total primary energy supply.<br><br>Hydroelectricity is by far the most important form of renewable energy produced in Canada. Wind and bioenergy also make an important contribution to Canada’s energy mix. Wind and solar photovoltaic power are experiencing the highest growth rates.<br><br><br><br>--<strong>Government Of Canada</strong><br>Natural Resources Canada',
            imgUrl: 'img/greenFam.jpg',
            imgAlt: 'Content 1 alternative text'
        },
        page2: {
            headingContent: 'Forms of Renewable Energy',
            bodyText: '<strong>Hydroelectricity</strong><br>The natural flow of water in rivers offers kinetic power that can be transformed into usable energy. Early usages included mechanical power for transformation activities, such as milling and sawing, and for irrigation. As well, rivers have been used for transportation purposes, such as moving logs from forests to industrial centers.<br><br><strong>BioEnergy</strong><br>Bioenergy comprises different forms of usable energy obtained from materials referred to as biomass. A biomass is a biological material in solid, liquid or gaseous form that has stored sunlight in the form of chemical energy. Excluded from this definition is organic material that has been transformed over long periods of time by geological processes into substances such as coal or petroleum.<br><br><strong>Wind Power</strong><br>The kinetic energy in wind can be converted into useful forms of energy such as mechanical energy or electricity. Wind energy has been harnessed for centuries to propel sailing vessels and turn grist mills and water pumps. Today, wind is used increasingly to generate electricity. Turbines with large propellers are erected on ‘wind farms’ located in strategic areas that have good wind regimes and that are in proximity to existing electrical grids. Wind energy is captured only when the wind speed is sufficient to move the turbine blades, but not in high winds when the turbine might be damaged if operated.<br><br><strong>Solar Energy </strong><br>Solar energy is energy from the sun in the form of radiated heat and light. The sun’s radiant energy can be used to provide lighting and heat for buildings and to produce electricity. Historically, solar energy has been harnessed through passive solar technologies. Typically, these involve the strategic location of buildings and various elements of these buildings, such as windows, overhangs and thermal masses. Such practices take advantage of the sun for lighting and space heating to significantly reduce the use of electrical or mechanical equipment. Solar energy can be harnessed only during the day and only if the sunlight is not blocked by clouds, buildings or other obstacles.<br><br><strong>Geothermal Energy</strong><br>Geothermal energy can be captured from the heat stored beneath the earth’s surface or from the absorbed heat in the atmosphere and oceans. In the first instance, geothermal energy can be captured from naturally occurring underground steam and be used to produce electricity. In the second instance, heating and cooling can be achieved by taking advantage of the temperature differential between outside air and the ground or groundwater.<br><br><strong>Ocean Energy</strong><br>The ocean is a vast source of energy that can be harnessed to produce different forms of usable energy. For instance, technologies have been developed to convert the energy of ocean waves and tides into electricity or other useful forms of power. However, a number of technical, economic and environmental barriers remain and, as a result, ocean energy is currently not a widely exploited energy source.',
            imgUrl: 'img/greenCity.jpg',
            imgAlt: 'Content 2 alternative text'
        },
        page3: {
            headingContent: 'Energy in Canada',
            bodyText: 'Meeting our energy requirements presents challenges and opportunities for Canada\'s\' regions and resource industries. Canada has many resources that are energy sources, including oil, natural gas, fossil and alternative fuels, uranium, and renewables. Harnessing and distributing the energy provided by these resources efficiently and safely requires collaboration and expertise. Natural Resources Canada (NRCan) works with provinces and territories, other government departments, and Canadian and international groups to explore how to meet our energy needs and adapt to changes in distribution methods while considering the environmental impact of doing so',
            imgUrl: 'img/greenSyst.jpg',
            imgAlt: 'Content 3 alternative text'
        }
    };

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    var articleContainer = document.querySelectorAll(".acts");

    /*  The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). */
    myButtons[0].id = "active-button";

    Object.size = function(obj) {
      var size = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };


    // Loading first content from the resource object
    function loadContent(index){
        document.getElementById('dynamic-heading').innerHTML = contents["page" + index]["headingContent"];
        document.getElementById('dynamic-image').src = contents["page" + index]["imgUrl"];
        document.getElementById('dynamic-paragraph').innerHTML = contents["page" + index]["bodyText"];
    }

    loadContent(1);

    // for(i = 0; i < myButtons.length; i++){
    //     myButtons[i].removeAttribute("active-button");
    //     myButtons[i].addEventListener('click', function(i) {
    //         if(myButtons[i].hasAttribute("id")){
    //             // myButtons[i].removeAttribute("id");
    //         }
    //         else {
    //             myButtons[i].id = "active-button";
    //         }
    //     }.bind(null, i));
    // }

    $(".buttons").on("click", function(){
        var index = $(".buttons").index(this);
        $(".buttons").removeAttr("id");
        $(".buttons").eq(index).attr("id", "active-button");

        loadContent(index + 1);
    });

});