
const photographerFactory = data => {

    const { name, id, city, country, tagline, price, portrait} = data;

    const profilePicture = `assets/media/photographers/${portrait}`;
    //eslint-disable-next-line quotes
    const heartIcon = `assets/icons/heart.svg`;
    const profileName = `${name}`;

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenation_using_

    function getUserCardDOM() {
        
        const article = document.createElement( "article" );
        article.setAttribute("class", "photographerSection__article");

        const anchor = document.createElement( "a" );
        anchor.setAttribute("href", `./photographer.html?id=${id}`);
        anchor.setAttribute("class", "photographerSection__article__anchor");

        const img = document.createElement( "img" );
        img.setAttribute("src", profilePicture);
        img.setAttribute("alt", "");
        img.setAttribute("aria-hidden", true);
        img.setAttribute("class", "photographerImg");

        const photographerName = document.createElement( "h2" );
        photographerName.textContent = name;
        photographerName.setAttribute("class", "photographerName photographerName--homepage");
        photographerName.setAttribute("translate", "no");
        img.setAttribute("aria-hidden", true);

        const textContainer = document.createElement( "div" );
        textContainer.setAttribute("class", "textContainer--homepage");

        const photographerLocation = document.createElement( "p" );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", "photographerLocation photographerLocation--homepage");
        photographerLocation.setAttribute("lang", "en");
        photographerLocation.setAttribute("translate", "yes");
    
        const photographerTagline = document.createElement( "p" );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", "photographerTagline photographerTagline--homepage");
        photographerTagline.setAttribute("lang", "fr");

        const photographerPrice = document.createElement( "p" );
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.setAttribute("class", "photographerPrice photographerPrice--homepage");

        article.append(anchor, textContainer);

        //anchor.append(imgContainer, photographerName);
        anchor.append(img, photographerName);
        
        //imgContainer.append(img);

        textContainer.append(photographerLocation, photographerTagline, photographerPrice);

        return (article);
    }

    function getPageDOM() {

        const article = document.createElement( "article" );
        article.setAttribute("class", "photographBanner__article");

        const photographerName = document.createElement( "h1" );
        photographerName.textContent = name;
        photographerName.setAttribute("class", "photographerName photographerName--profile");
        photographerName.setAttribute("id", "photographerName");
        photographerName.setAttribute("translate", "no");

        const textContainer = document.createElement( "div" );
        textContainer.setAttribute("class", "textContainer--profile");

        const photographerLocation = document.createElement( "p" );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", "photographerLocation photographerLocation--profile");

        const photographerTagline = document.createElement( "p" );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", "photographerTagline photographerTagline--profile");
        photographerTagline.setAttribute("lang", "fr");
        
        const contactButton = document.createElement( "button" );
        contactButton.setAttribute("class", "button button--form button--form--contact");
        contactButton.setAttribute("id", "displayModal");
        contactButton.textContent = "Contactez-moi";
        
        const img = document.createElement( "img" );
        img.setAttribute("src", profilePicture);
        img.setAttribute("alt", "");
        img.setAttribute("aria-hidden", true);
        img.setAttribute("width", img.width);
        img.setAttribute("height", img.height);
        img.setAttribute("class", "photographerImg photographerImg--profile");

        const photographerFooter = document.createElement( "div" );
        photographerFooter.setAttribute("class", "photographerFooter");

        const photographerFooterLikesContainer = document.createElement( "div" );
        photographerFooterLikesContainer.setAttribute("class", "photographerFooter__likesContainer");

        const photographerFooterLikes = document.createElement( "div" );
        photographerFooterLikes.setAttribute("class", "photographerFooter__likes");
        
        const photographerFooterIcon = document.createElement("img");
        photographerFooterIcon.setAttribute("src", heartIcon);
        photographerFooterIcon.setAttribute("alt", "");
        photographerFooterIcon.setAttribute("class", "photographerFooter__icon");
        photographerFooterIcon.setAttribute("width", "17.5");
        photographerFooterIcon.setAttribute("height", "18.35");
        photographerFooterIcon.setAttribute("aria-hidden", true);

        const photographerFooterPriceLabel = document.createElement ("p");
        photographerFooterPriceLabel.setAttribute("id", "priceLabel");
        photographerFooterPriceLabel.setAttribute("class", "hidden");
        photographerFooterPriceLabel.textContent = "prix";

        const photographerFooterPrice = document.createElement( "p" );
        photographerFooterPrice.textContent = `${price}€ / jour`;
        photographerFooterPrice.setAttribute("class", "photographerPrice--profile photographerFooter__price");
        
        article.append(textContainer, contactButton, img, photographerFooter);

        textContainer.append(photographerName, photographerLocation, photographerTagline);

        photographerFooter.append(photographerFooterLikesContainer, photographerFooterPriceLabel, photographerFooterPrice);
        photographerFooterLikesContainer.append(photographerFooterLikes, photographerFooterIcon);

        return (article);
    }

    function getModalDOM() {
        let contactName = document.getElementById("uniqueHeading");
        contactName.textContent = profileName;

        return(contactName);
    }

    return { 
        data, getUserCardDOM, getPageDOM, getModalDOM
    };
    
};

export default photographerFactory;
