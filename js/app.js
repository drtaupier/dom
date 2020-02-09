window.onload = function(){
    class UI{
        addText(variable, style, title, text){
            const element = document.createElement('div');
            element.classList.add(style);
            element.innerHTML = `<h2> ${title} </h2>`;
            element.innerHTML += `<p> ${text} </p>`;
            variable.appendChild(element);
        }

        addImage(variable, style, file){
            const element = document.createElement('div');
            element.classList.add(style);
            element.innerHTML = `<img src=" ${file} ">`
            variable.appendChild(element);
        }

        footerCopyright(){
            const footer = document.getElementById('footer');
            const today = new Date();
            const year = today.getFullYear();
            footer.innerHTML = `<h3> Copyright &copy ${year} </h3>`;
        }

        nav(sectionNav, direction){
            const lista = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', `${direction}`);
            const textNode = document.createTextNode(`${sectionNav}`);
            a.appendChild(textNode);
            document.getElementById('navigation').appendChild(lista);
            lista.appendChild(a);
        }

        sectionBg(section, color1, color2){
            window.addEventListener('scroll', function(){
                //Aqui consigo la parte superior e inferior del div. y la medida que tiene con relacion al viewport.
                let positionTop = section.getBoundingClientRect().top;
                let positionBottom = section.getBoundingClientRect().bottom;
                //console.log('positionTop = ',  positionTop);
                //console.log('positionBottom = ',  positionBottom);
                //aquí nos permite obtener el valor del tamaño de la pantalla (viewport) y lo dividimos entre 3.5 el cual es el tamaño de pantalla donde se genere la animación.
                let screenSize = window.innerHeight/3.5;
                //console.log('screenSize: ',screenSize);

                //Si la parte de arriba del elemento se encuentra en un tamaño menor a la tercera parte de la pantalla se genera la animación.
                if(positionTop < screenSize){
                    section.style.background = color1;
                    section.style.transition = "all 1.5s";
                }else{
                    section.style.background = color2;
                    section.style.transition = "all 1.5s";
                }

                if(positionBottom < screenSize){
                    section.style.background = color2;
                    section.style.transition = "all 1.5s";
                }

                if(section == sct1){
                    if(positionTop == 100){
                        section.style.background = color2;
                        section.style.transition = "all 1.5s";
                    }
                }
            });
        }

        addSection(sectionId, articleId){
            const container = document.querySelector(".container");
            const footer = document.getElementById('footer');
            const element = document.createElement("section");
            element.setAttribute('id', `${sectionId}`);
            const article = document.createElement('article');
            article.setAttribute('id', `${articleId}`);
            element.appendChild(article);
            container.insertAdjacentElement("afterbegin", element);
        }


    }

    // texts
    const title1 = "Prueba";
    const text1 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    
    const title2 = "Prueba";
    const text2 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    
    const title3 = "Prueba";
    const text3 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    
    // Instanciando la clase
    const ui = new UI();
    
    //Nav and Sections
    const navegacion = [['section1', '#section1', 'article1'], ['section2', '#section2', 'article2'], ['section3', '#section3', 'article3']];
    for (const index in navegacion){
        ui.nav(navegacion[index][0], navegacion[index][1]);
        ui.addSection(navegacion[index][0], navegacion[index][2]);
    }
    
    // Textos
    const sct1 = document.getElementById('section1');
    const sct2 = document.getElementById('section2');
    const sct3 = document.getElementById('section3');
    const textos = [[sct1, 'section1-text', title1, text1], [sct2, 'section1-text', title2, text2], [sct3, 'section1-text', title3, text3]];
    for(const index in textos){
        ui.addText(textos[index][0], textos[index][1], textos[index][2], textos[index][3]);
    }
    
    // Imagenes
    const article1 = document.getElementById('article1');
    const file1 = "../img/prueba.jpg";
    const article2 = document.getElementById('article2');
    const file2 = "../img/img1.jpg";
    const article3 = document.getElementById('article3');
    const file3 = "../img/img2.jpg";

    const imagenes = [[article1, 'image-container', file1], [article2, 'image-container', file2], [article3, 'image-container', file3]];
    for (const index in imagenes){
        ui.addImage(imagenes[index][0], imagenes[index][1], imagenes[index][2]);
    }
    
    //Footer
    ui.footerCopyright(footer);
    
    // Background
    const sectionBackground = [[sct1, '#FFC16E', '#FF635F'], [sct2, '#BF9376', '#805755'], [sct3, '#C77656', '#CC504B']];
    for (const index in sectionBackground){
        ui.sectionBg(sectionBackground[index][0], sectionBackground[index][1], sectionBackground[index][2]);
    }    
}



