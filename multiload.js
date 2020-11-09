// Pass in the links that need to be downloaded
//Ex. multiFileDownloader('LINK_1','LINK_2');
    function multiFileDownloader() {
        var body = document.getElementsByTagName('body')[0];
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
            let link = document.createElement('a');
            let href = arguments[i];
            let id = `link${i}`;
            let style = 'visibility:none;';
            link.setAttribute('href', href);
            link.setAttribute('id', id);
            link.setAttribute('style', style);
            link.setAttribute('download','download');
            body.appendChild(link);
            document.getElementById(id).click();
        }
    }
