window.onload = function(){
    const t0 = performance.now();
    class UI{
        addText(sectionId, title, text){
            const element = document.createElement('div');
            element.classList.add('section1-text');
            element.innerHTML = `<h2> ${title} </h2>`;
            element.innerHTML += `<p> ${text} </p>`;
            sectionId.appendChild(element);
        }

        addImage(variable, file){
            const element = document.createElement('div');
            element.classList.add('image-container');
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

        sectionBg(section){
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
                    section.classList.remove('inactive');
                    section.classList.add('active');
                    section.style.transition = "all 1.5s";
                }else{
                    section.classList.remove('active');
                    section.classList.add('inactive');
                    section.style.transition = "all 1.5s";
                }

                if(positionBottom<screenSize){
                    section.classList.remove('active');
                    section.classList.add('inactive');
                    section.style.transition = "all 1.5s";
                }

                if(section == sct1){
                    if(positionTop == 100){
                        section.classList.add('active');
                        section.style.transition = "all 1.5s";
                    }
                }
            });
        }

        addSection(sectionId, articleId){
            const container = document.querySelector(".container");
            const element = document.createElement("section");
            element.setAttribute('id', `${sectionId}`);
            element.classList.add('inactive');
            element.dataset.columns = 2;
            const article = document.createElement('article');
            article.setAttribute('id', `${articleId}`);
            element.appendChild(article);
            container.insertAdjacentElement("afterbegin", element);
        }

    }

    // texts
    const title1 = "Prueba";
    const text1 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    
    const title2 = "Prueba";
    const text2 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,  y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    
    const title3 = "Prueba";
    const text3 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";

    const title4 = "Prueba";
    const text4 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    
    // Instanciando la clase
    const ui = new UI();
    
    //Nav and Sections
    const navegacion = [['section1', '#section1', 'article1'], ['section2', '#section2', 'article2'], ['section3', '#section3', 'article3'], ['section4', '#section4', 'article4']];
    for (const index in navegacion){
        ui.nav(navegacion[index][0], navegacion[index][1]);
        ui.addSection(navegacion[index][0], navegacion[index][2]);
    }
    
    // Textos
    const sct1 = document.getElementById('section1');
    const sct2 = document.getElementById('section2');
    const sct3 = document.getElementById('section3');
    const sct4 = document.getElementById('section4');
    const textos = [[sct1, title1, text1], [sct2, title2, text2], [sct3, title3, text3], [sct4, title4, text4]];
    for(const index in textos){
        ui.addText(textos[index][0], textos[index][1], textos[index][2]);
    }
    
    // Imagenes
    const article1 = document.getElementById('article1');
    const file1 = "../img/img1.jpg";
    const article2 = document.getElementById('article2');
    const file2 = "../img/img2.jpg";
    const article3 = document.getElementById('article3');
    const file3 = "../img/img3.jpg";
    const article4 = document.getElementById('article4');
    const file4 = "../img/img4.jpg";

    const imagenes = [[article1, file1], [article2, file2], [article3, file3], [article4, file4]];
    for (const index in imagenes){
        ui.addImage(imagenes[index][0], imagenes[index][1]);
    }
    
    //Footer
    ui.footerCopyright(footer);
    
    // Background
    const sectionBackground = [[sct1], [sct2], [sct3], [sct4]];
    for (const index in sectionBackground){
        ui.sectionBg(sectionBackground[index][0]);
    }
    const t1 = performance.now();
    
    console.log('this code take: ', `${t1-t0} milisegundos`);
}



