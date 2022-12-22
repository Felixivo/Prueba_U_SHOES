(function () {
    var velocidad;
    var frecuencia = 15;
    var vinculos = document.querySelectorAll('[data-anima]');
    var href;
    for (var i = 0; i < vinculos.length; i++) {
        href = (vinculos[i].attributes.href === undefined) ? null : vinculos[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
            vinculos[i].onclick = function () {
                var elemento;
                var href = this.attributes.href.nodeValue.toString();
                velocidad = parseInt(this.getAttribute("data-anima"));
                if (elemento = document.getElementById(href.substr(1))) {
                    var iteraciones = velocidad / frecuencia
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var distancia = (getScrollTopElement(elemento) - getScrollTopDocumentAtBegin) / iteraciones;

                    for (var i = 1; i <= iteraciones; i++) {
                        (function () {
                            var distancia_top = distancia * i;
                            setTimeout(function () {
                                window.scrollTo(0, distancia_top + getScrollTopDocumentAtBegin);
                            }, frecuencia * i);
                        })();
                    }
                }
                return false;
            };
        }
    }
    var getScrollTopElement = function (e) {
        var top = 0;
        while (e.offsetParent != undefined && e.offsetParent != null) {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        return top;
    };
    var getScrollTopDocument = function () {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();