const STATIC_CACHE_VERSION = 'static_1'
const DYNAMIC_CACHE_VERSION = 'dynamic_1'

const STATIC_ASSESTS = [
    '/',
    '/app/splash.html',
    '/manifest.json'
    // '/App.js',
    // '/styles/header.module.scss',
    // '/styles/body.module.scss', 
    // '/styles/footer.module.scss'
];


function cleanup() {
    caches.keys()
        .then((keys) => {
            return Promise.all(keys.map((key) => {
                if (key !== STATIC_CACHE_VERSION && key != DYNAMIC_CACHE_VERSION) {
                    console.log('[SW] Remove Old Cache ', key);
                    return caches.delete(key);
                }
            }));
        })
}
function preCache() {
    caches.open(STATIC_CACHE_VERSION)
    .then((cache) => {
        console.log('cache ready');
        return cache.addAll(STATIC_ASSESTS);
    })
    .catch(e => {
        console.log('cache error');
    })
}

self.addEventListener('install',(event) => {
    console.log(' [SW] Service Worker Installing ...',event);
     self.skipWaiting();
     event.waitUntil(preCache());
    
        // caches.open('static').then(cache => {
        //     cache.add("/");
        //     cache.add("/index.html");
        //     cache.add("/help.html");
        // })
        
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker Activating ...',event);
    event.waitUntil(cleanup());
    return self.clients.claim();
});

self.addEventListener('fetch',  (event) => {
    console.log('[SW] fetching SW ...', event);
    const request = event.request;
    event.respondWith(
        caches.match(request)
            .then((response) => {
                return response || fetch(request)
                    .then((res) => {
                        caches.open(DYNAMIC_CACHE_VERSION)
                            .then((cache) => {
                    ///         cache.put(request, res);
                            });
                        return res.clone();
                    })
                    .catch((err) => {
                        console.log('[SW] cache fetch error');
                        return caches.open(STATIC_CACHE_VERSION)
                            .then(function (cache) {
                                if (request.headers.get('accept').includes('text/html')) {
                                    return cache.match('/notfound.html');
                                }
                                if(request.url.match(/\.(jpe?g|png|gif|svg)$/))
                                {
                                    return cache.match('/images/placeholder.jpg');
                                }
                            });
                    });
            })
            .catch(console.error)
    );
});