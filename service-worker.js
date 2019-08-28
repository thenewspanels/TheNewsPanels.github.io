                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"//about/privacy/index.html","revision":"b890b8fd6ec88040671c4b7c042d0aba"},{"url":"//about/contact/index.html","revision":"da87bd602c775ab876dd96a1b03291ff"},{"url":"//about/index.html","revision":"36e498e0b6273ef4eece96177af1c199"},{"url":"//404.html","revision":"670915093c091406d09f355416eefb94"},{"url":"//1/index.html","revision":"e5b2e17d32a984fec803463be1825d0f"},{"url":"//index.html","revision":"24919f244903a3a89acdb0fa0313cf3e"},{"url":"//comics/us-ice-deportation/index.html","revision":"42e928b758d58d387695abb9e875cbfe"},{"url":"//sw-register.js","revision":"0ccc258880a29ccc08bc1f30cb4fbf59"},{"url":"//service-worker.js","revision":"ea2b11d10b6fd0f5e790a7c0f0e54191"},{"url":"//css/styles.css","revision":"848db7ddabff52fb29f807ff65722a5d"},{"url":"//images/favicon.svg","revision":"49aa0c325261e5a3c74feeff3ec65115"},{"url":"//images/test/comic.svg","revision":"1bb59841b585d699393c73598058ffae"},{"url":"//images/test/title.svg","revision":"6779bc9a588bfeef53254d35c842ce46"}];
            workbox.core.setCacheNameDetails({
    prefix: 'the-news-panels',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /images/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
