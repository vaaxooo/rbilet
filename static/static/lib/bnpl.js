(function () {
  function getUrlQueryParam(name) {
    try {
      var nameNormalized = name.replace(/[[\]]/g, '\\$&');
      var url = window.location.href.replace(/&amp;/g, '&');
      var regex = new RegExp(`[?&]${nameNormalized}(=([^&#]*)|&|#|$)`);
      var results = regex.exec(url);
      return results && results[2] ? decodeURIComponent(results[2].replace(/\+/g, ' ')) : '';
    } catch (e) {
      return '';
    }
  }

  function isFlagTrue(flag) {
    return flag === 'true' || flag === '1' || flag === 'yes';
  }

  function setFavicon(source) {
    try {
      var favicon = document.getElementById('favicon');

      if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'icon');
        favicon.setAttribute('id', 'favicon');
      }

      favicon.setAttribute('href', source);
      document.head.appendChild(favicon);
    } catch (e) {}
  }

  function removeEl(child) {
    var parentNode = child && child.parentNode;

    if (parentNode) {
      parentNode.removeChild(child);
    }
  }

  function createLoaderImg(source, parentNode, hideParentOnError) {
    if (!parentNode) {
      return;
    }

    var img = document.createElement('img');

    img.onload = function () {
      try {
        parentNode.appendChild(img);
      } catch (e) {
        //
      }
    };

    img.onerror = function () {
      if (hideParentOnError) {
        window.BNPLProcess.setDefaultFavicon();

        removeEl(parentNode);
      }
    };

    img.src = source;
  }

  window.BNPLProcess = {
    setDefaultFavicon: function () {
      var meta = document.querySelector('meta[name="faviconSource"]');
      setFavicon((meta && meta.content) || '%PUBLIC_URL%/favicon.ico');
    },
    setBNPLFavicon: function () {
      setFavicon(window.location.origin + '/payment/modules/bnpl/favicon.ico');
    },
    startLoader: function() {
      var isStart = isFlagTrue(getUrlQueryParam('bnpl_skip_page'));
      var isProcess = isFlagTrue(getUrlQueryParam('fromBnpl'));
      var isBnplAccount = isFlagTrue(getUrlQueryParam('fromBnplAccount'));

      var loaderEl = document.getElementById('page-loading');
      var loaderGradientEl = document.getElementById('page-loading-gradient');

      if (!isStart && !isProcess && !isBnplAccount) {
        window.BNPLProcess.setDefaultFavicon();

        removeEl(loaderEl);
      } else {
        window.BNPLProcess.setBNPLFavicon();

        if (isProcess) {
          createLoaderImg(
            window.location.origin + '/payment/modules/bnpl/static/assets/img/back.png',
            loaderGradientEl,
            false,
          );
        }

        createLoaderImg(
          window.location.origin + '/payment/modules/bnpl/static/assets/img/spinner.gif',
          loaderEl,
          true,
        );
      }
    },
  };
})();
