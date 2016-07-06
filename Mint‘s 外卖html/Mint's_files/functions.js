var Language = (Language || {});

Language.zh = {
	home : {
		heading: 'Fine Dinning Lunch Box Delivery ',
		selectedText: '选择送餐地区'
	},
	city : {
		heading: '请选择送餐地区(现仅供上海内环)',
		linkText: '我不在以上地区怎么办？'
	},
	notfound : {
		heading: 'oops!something is wrong.',
		text: '这个页面不存在，请点击按钮回到首页。',
		linkText: '回到首页'
	},
	page : {
		faq: {
			heading: '关于Mint\'s配送服务',
			content: '我们将陆续开放上海其他区域的配送服务，请静待佳音。同时，我们提供内环以内的企业送餐服务，欲了解详情，请直接联系我们微信客服，谢谢！',
			buttonText: '返回'
		},
		help: {
			heading: '投诉建议',
			content: '我们很抱歉给您带来了不便，任何问题请直接联系微信客服  <br> <br> 或拨打电话 <br> <a href="tel:+86138-1800－1924”>+8613818001924</a>',
			buttonText: '返回'
		},
		time: {
			heading: '我们开放线上预订的时间',
			content: '<h2>周日至周四 </h2>6am-9pm <br>隔天中午准时送达<br>我们坚持<br>每日凌晨农场新鲜采摘<br>当日主厨亲制<br>.......<br>我们拒绝<br>售卖隔夜菜品',
			buttonText: '确认'
		}
	},
	list : {
		text: '今日定－明日送，周一至周五中午准点送达',
		linkText: '了解详情',
		buyText: '订 购',
		soldOutText: '售完'
	},
	dish : {
		buyText: '订 购',
		soldOutText: '售完'
	},
	cook : {
		buttonText: '确认'
	},
	status_1 : '等待支付',
	status_2 : '等待收货',
	status_2_end : '已收货',
	status_3 : '订单已完成',
	status_4 : '未付款<br>系统自动取消',
	status_5 : '订单退款中',
	status_6 : '订单已退款',
	status_7 : '支付成功',
	status_1_text : '逾期未支付订单将自动取消',
	status_2_text : '预计送达：',
	status_3_text : '送达时间：',
	status_4_text : '30分钟内未完成支付，订单自动取消',
	status_5_text : '您的订单正在退款',
	status_6_text : '您的订单退款已完成',
	status_7_text : '您的支付已成功，请等待配送',
	help_link : '帮助',
	order_cdp_heading : '订单详情',
	delivery_text : '配送费',
	delivery_text_2 : '含配送费',
	delivery_yen : '元',
	delivery_time : '送达日期：',

	enter_text: '填写收件信息',
	enter_delivery_time : '配送时间',
	enter_promo_code: '输入企业码',
	enter_discount_price: '优惠',
	enter_invoice_title: '输入优惠码',
	enter_no_invoice_title: '没有优惠码',
	enter_pay_text: '微信支付：',
	enter_pay_note: '*下单后30分钟内支付，不然订单会自动取消哦',
	enter_add_address: '新增收货地址',
	enter_num: '合计：',

	button_ok_text: '好的',
	button_yes_text: '确认',
	button_close_text: '确认',
	button_pay_text: '去购买',
	button_to_pay: '去结算',
	button_wx_pay: '微信付款：',
	button_save: '保存',
	button_add_new: '创建',

	form_contact: '联系人',
	form_name: '收件人姓名',
	form_sex_1: '先生',
	form_sex_2: '女士',
	form_tel_label: '联系电话',
	form_tel: '您的手机号码',
	form_address_label: '收货地址',
	form_address: '您的收货地址',
	form_discount_code: '输入企业码',
	form_invoice_title: '输入优惠码',

	order_heading: '联系详情',
	order_coneact: '联系人：',
	order_tel: '联系电话：',
	order_address: '收货地址：',
	order_id: '订单号：',
	order_time: '送达时间：',
	order_create_time: '下单时间：',

	validation_address: '请选择送货地址',
	validation_pay_error: '支付失败',
	validation_cart: '购物车内没有任何商品。',
	validation_name: '请填写姓名',
	validation_sex: '请选择您的性别',
	validation_tel: '请填写您的电话号码',
	validation_address : '请填写您的收货地址',
	validation_api_error: '您的订单已提交，返回首页继续订购。',
	validation_invoice: '请输入优惠码',
	validation_address_home: '您还没有选择配送地区 <br><a href="/">前去选择</a>',

	text_calorie: '卡路里',
	text_carbohydrate: '碳水化合物',
	text_fat: '脂肪',
	text_protein: '蛋白质',
	text_ingredients: '食材组成',
	text_nutrient: '营养成分',

	notfoundPost: 'Coming soon',
	no_invoice: '没有优惠码',
	pay: '支付',
	no_orders: '您还没有任何订单',
	need_login: '请先登录。',
	to_buy: '马上去选购！',
	not_in_wx: '<img src="/images/qrcode.jpg"><p>请在微信环境下使用！<br>关注微信号：Mints<p>',
	lock_up: '<h2>抱歉，厨房在休息中。</h2>我们开放线上预订的时间为:<br>周日至周四<br>6am-9pm<br>预定，次日<br>主厨订制午餐新鲜送达<br>浏览菜单'
};

Language.en = {
	home : {
		heading: 'Fine Dinning Lunch Box Delivery',
		selectedText: 'Delivery Zones'
	},
	city : {
		heading: 'Delivery zones (within inner ring)',
		linkText: 'What if I\'m outside of these zones?'
	},
	notfound : {
		heading: 'Oops,something is wrong.',
		text: 'The page doesn\'t exist,click here back to home page.',
		linkText: 'Back to home page'
	},
	page : {
		faq: {
			heading: 'About our delivery service',
			content: 'While we are not there yet, we are working very hard to also deliver to your area soon. Or are you ordering for a whole group? Then please contact our wechat customer service.',
			buttonText: 'Back'
		},
		help: {
			heading: 'Complaint',
			content: 'We sincerely apologize for any inconvenience that you experienced in using our service. Let us make it right and contact us by wechat <br> <br> or call <br> <a href="tel:+86136-0166-8257">+8613601668257</a>',
			buttonText: 'Back'
		},
		time: {
			heading: 'About our opening time',
			content: '<h2>We are taking orders</h2>from Sunday to Thursday<br>6am - 9pm<br>for next work day delivery.<br>We\'re using only fresh produce<br>sourced right from the farm and<br>prepared with love and care<br>by our chefs.',
			buttonText: 'Back'
		}
	},
	list : {
		text: ' We are taking orders from Sunday to Thursday for next work day delivery.',
		linkText: 'Click to know more.',
		buyText: 'Order',
		soldOutText: 'Sold out'
	},
	dish : {
		buyText: 'Order',
		soldOutText: 'Sold out'
	},
	cook : {
		buttonText: 'Ok'
	},
	status_1 : 'Waiting for payment',
	status_2 : 'Delivery expected',
	status_2_end : 'Delivered',
	status_3 : 'Order completed',
	status_4 : 'No payment<br>the system has automatically cancelled your order',
	status_5 : 'Your money is in the returning process',
	status_6 : 'Your money has been returned to your account ',
	status_7 : 'Payment completed',
	status_1_text : 'No payment the system has automatically cancelled your order',
	status_2_text : 'Expected delivery time：',
	status_3_text : 'Actual arrival time：',
	status_4_text : 'No payment within 30 minutes the system has automatically cancelled your order',
	status_5_text : 'Money is being refunded',
	status_6_text : 'Money has been refunded',
	status_7_text : 'Payment completed, please wait for delivery',
	help_link : 'Help',
	order_cdp_heading : 'Order details',
	delivery_text : 'Delivery fee',
	delivery_text_2 : 'Including delivery fee ',
	delivery_yen : '',
	delivery_time : 'Delivery date：',

	enter_text: 'Add your address',
	enter_delivery_time : 'Required delivery time',
	enter_promo_code: 'Input corporate code',
	enter_discount_price: 'Discount',
	enter_invoice_title: 'voucher code',
	enter_no_invoice_title: 'No voucher code',
	enter_pay_text: 'Wechat payment：',
	enter_pay_note: '* Please complete your payment within 30 minutes after placing the order, otherwise your order will be cancelled automatically.',
	enter_add_address: 'Add a new address',
	enter_num: 'Total：',

	button_ok_text: 'Ok',
	button_yes_text: 'Confirm',
	button_close_text: 'Ok',
	button_pay_text: 'Order',
	button_to_pay: 'Check out',
	button_wx_pay: 'Wechat payment：',
	button_save: 'Save',
	button_add_new: 'Add',

	form_contact: 'Contact details',
	form_name: 'Your name',
	form_sex_1: 'Mr',
	form_sex_2: 'Mrs',
	form_tel_label: 'Phone',
	form_tel: 'Your mobile number',
	form_address_label: 'Delivery address',
	form_address: 'Street, Building, Apt. or Office',
	form_discount_code: 'Input corporate code',
	form_invoice_title: 'Your voucher code',

	order_heading: 'Contact details',
	order_coneact: 'Your name：',
	order_tel: 'Your mobile number：',
	order_address: 'Delivery address：',
	order_id: 'Order number：',
	order_time: 'Delivery time：',
	order_create_time: 'Order time：',

	validation_address: 'Please choose your address',
	validation_pay_error: 'Payment failed',
	validation_cart: 'No item in your cart',
	validation_name: 'Please enter your name',
	validation_sex: 'Please enter your gender',
	validation_tel: 'Please enter your moblie',
	validation_address : 'Please enter your address',
	validation_api_error: 'Your order has been submitted，click “Ok” back to home page. ',
	validation_invoice: 'Input voucher code',
	validation_address_home: 'You haven\'t chosen your delivery zone.<br><a href="/">Choose now</a>',

	text_calorie: 'Calories',
	text_carbohydrate: 'Carbs',
	text_fat: 'Fat',
	text_protein: 'Protein',
	text_ingredients: 'INGREDIENTS',
	text_nutrient: 'NUTRITION',

	notfoundPost: 'Coming soon',
	no_invoice: 'I don\'t need invoice.',
	pay: 'Check out',
	no_orders: 'You don\'t have any order.',
	need_login: 'Please log in.',
	to_buy: 'Order now.',
	not_in_wx: '<img src="/images/qrcode.jpg"><p>Please go to our site through wechat <br>follow us：Mints<p>',
	lock_up: '<h2>Sorry,kitchen\'s closed.</h2>We\'re taking orders <br>from Sunday to Thursday<br>6am - 9pm<br>for next work day delivery.'
};

(function ($) {
	'use strict';

	var token_id,
		current_order_id,
		isAndroid,
		is_post_order = false,
		is_loaded = false,
		is_lockup = true,
		cache = {},
		catInfo = {
			items: [],
			total_price: 0,
			total_length: 0,
			loading: false
		},
		orderInfo = {
			driveramount : 0,
			discount_code: false,
			discount_price: 0,
			expect_deliver_date: false,
			expect_deliver_duration : false,
			print_invoice: false,
			invoice_title: false,
			invoice_titles: [
				{
					title : '',
					current : true
				}
			],
			recipient_id: false,
			address: [],
			currentAddress: false,
			loaded: false,
			items: [],
			dates: []
		},
		areasInfo = {},
		currentProduct,
		// global,

		// Ajax
		lang = 'en',
		lan,
		host = 'http://www.mints.cc:8206/api',
		// img_host = 'http://www.mints.cc:8202',
		city_id = 21,
		region_id,
		
		// Dom
		$body,
		body;

		// Variables
		//isMoblie;
	var selectedAddress = localStorage.getItem('selectedAddress');
	var currentLanguage = localStorage.getItem('currentLanguage');

	// 从本地获得已设置的语言
	if (currentLanguage !== null) {
		lang = currentLanguage;
	} else {
		// 判断是否已得到客户数据
		if (typeof _USER !== 'undefined') {
			// alert(_USER.language);
			// 判断是否为中文
			if (_USER.language === 'zh_CN') {
				lang = 'zh';
			}
		}
	}

	var hasPopup_2 = localStorage.getItem('hasPopup_2');
	var hasPopup = localStorage.getItem('hasPopup');
	var today = '';

	// 从本地获得已设置的地区
	if (localStorage.getItem('region_id') !== null) {
		region_id = localStorage.getItem('region_id');
	}

	if (set_lang !== false) {
		lang = set_lang;
		localStorage.setItem( 'currentLanguage', lang);
	} else {
		// 从本地获得已设置的语言
		if (currentLanguage !== null) {
			lang = currentLanguage;
		} else {
			// 判断是否已得到客户数据
			if (typeof _USER !== 'undefined') {
				// 判断是否为中文
				if (_USER.language !== 'zh_CN') {
					lang = 'en';
				}
			}
		}
	}
	
	


	// 读取语言包
	if (lang === 'zh') {
		lan = Language.zh;
		orderInfo.invoice_titles[0].title = '没有优惠码';
	} else {
		lan = Language.en;
		orderInfo.invoice_titles[0].title = 'I don\'t need invoice';
	}

	// Events
	var events = $({});

	$.subscribe = function() {
		events.on.apply(events, arguments);
	};

	$.unsubscribe = function() {
		events.off.apply(events, arguments);
	};

	$.publish = function() {
		events.trigger.apply(events, arguments);
	};

	// Functions
	function isMoblie(opts) {
		var userData = navigator.userAgent,
		opts = opts ? new RegExp(opts, 'i') : /iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle/i;
		return opts.test(userData);
	}

	// All GET ajax
	function get(url, cb, disabledCache) {
		if (!disabledCache) {
			if (cache[url]) return cb(cache[url]);
		}
		
		$.ajax({
			method: 'GET',
			url: url,
			success: function(data) {
				if (data.length === 0) {
					data = [{'error': true, 'errorText': lan.notfoundPost}];
				}
				cache[url] = data;
				cb(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR, textStatus, errorThrown);
			},
			dataType: 'json'
		});
	}

	// All POST ajax
	function post(url, data, cb) {
		$body.addClass('ajax-post');

		$.ajax({
			method: 'POST',
			url: url,
			data: data,
			success: function(data) {
				$body.removeClass('ajax-post');
				cb(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$body.removeClass('ajax-post');
				console.log(jqXHR, textStatus, errorThrown);
			},
			dataType: 'json'
		});
	}

	// All PUT ajax
	function put(url, cb) {
		$body.addClass('ajax-post');

		$.ajax({
			method: 'PUT',
			url: url,
			success: function(data) {
				$body.removeClass('ajax-post');
				if (data.length === 0) {
					data = [{'error': true, 'errorText': lan.notfoundPost}];
				}
				cb(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$body.removeClass('ajax-post');
				console.log(jqXHR, textStatus, errorThrown);
			},
			dataType: 'json'
		});
	}

	function del(url, cb) {
		$body.addClass('ajax-post');

		$.ajax({
			method: 'DELETE',
			url: url,
			success: function(data) {
				$body.removeClass('ajax-post');
				if (data.length === 0) {
					data = [{'error': true, 'errorText': lan.notfoundPost}];
				}
				cb(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				$body.removeClass('ajax-post');
				console.log(jqXHR, textStatus, errorThrown);
			},
			dataType: 'json'
		});
	}

	Vue.component('home', {
		template: '#home',
		methods: {
			update: function(id) {
				region_id = id;
				localStorage.setItem('region_id', region_id);
			},
			setLanguage: function(language_name) {
				localStorage.setItem( 'currentLanguage', language_name);
				window.location.href = '/';
			}
		},
		ready: function () {
			var self = this;
			var data = {};
			data.show = false;

			body.className = 'city';
			self.$set('response', data);
			data.text = lan.city;

			if (lang === 'zh') {
				data.is_en = true;
			} else {
				data.is_cn = true;
			}

			get(host + '/common/sales_areas?language=' + lang, function (response) {
				data.show = true;
				data.data = response[0];
				self.areas = response[0];
				self.$set('response', data);
			});
		}
	});

	// List page
	var list_data = {};
	var currentHasPopup = false;

	Vue.component('list', {
		template: '#list',
		methods: {
			navi: function (e) {
				var $e = $(e.target);
				var id = $e.data('id');

				if (!$e.hasClass('active')) {
					list_data.show_list = false;
					get(host + '/common/dishes?category_id='+ id +'&page=1&rows=999&language=' + lang, function (response) {
						list_data.show_list = true;
						list_data.list = response;
						if (is_lockup) {
							for (var i = 0; i < list_data.list.length; i++) {
								list_data.list[i].remainder_count = 0;
							}
						}

						$e.parents('ul').find('.active').removeClass('active');
						$e.addClass('active');
					});
				}
			},
			update: function(e) {
				var $e = $(e.target);
				var n = $e.data('name').replace('&', '');

				currentProduct = {
					"dish_id": $e.data('id').toString(),
					"dish_name": n,
					"dish_count": 1,
					"dish_price": $e.data('price'),
					"photo_url": $e.data('img')
				};

			}
		},
		ready: function () {
			var self = this;
			body.className = 'list';
			self.$set('region_id', region_id);

			list_data = {};
			list_data.show = true;
			list_data.text = lan.list;
			list_data.show_navi = false;
			list_data.show_list = false;
			list_data.navi = [{}];
			list_data.list = [{}];


			self.$set('response', list_data);
			get(host + '/common/categories?language=' + lang, function (response) {
				// console.log(response)

				// if (response.length > 1) {
				 	list_data.show_navi = true;
				// }
				
				list_data.navi = response;
				list_data.navi[0].current = true;


				get(host + '/common/dishes?category_id='+ list_data.navi[0].category_id +'&page=1&rows=999&language=' + lang, function (response) {
					list_data.show_list = true;
					list_data.list = response;

					if (is_lockup) {
						if (hasPopup_2 !== today && !currentHasPopup) {
							self.validation = true;
							self.validationText = lan.lock_up;
							localStorage.setItem('hasPopup_2', today);
							currentHasPopup = true;
						}

						for (var i = 0; i < list_data.list.length; i++) {
							list_data.list[i].remainder_count = 0;
						}
					} else {
						if (hasPopup !== today && !currentHasPopup) {
							self.validation = true;
							self.validationText = lan.page.time.content;
							localStorage.setItem('hasPopup', today);
							currentHasPopup = true;
						}
					}
				});
			});
		}
	});


	// 404 page
	Vue.component('notfound', {
		template: '#notfound',
		ready: function () {
			var self = this;
			body.className = 'page-404';
			var data = {
				text: lan.notfound,
				show: true
			}
			self.$set('response', data);
		}
	});

	// Pages
	Vue.component('page', {
		template: '#page',
		ready: function () {
			var self = this;
			var data = {};
			data.show = false;

			body.className = 'page page-' + self.params.key;
			self.$set('response', data);

			data = eval('lan.page.' + self.params.key);
			data.show = true;
			self.$set('response', data);
		}
	});

	// Cook page
	Vue.component('cook', {
		template: '#cook',
		ready: function () {
			var self = this;
			var data = {};
			
			data.show = false;
			body.className = 'cook cook-' + self.params.key;

			get(host + '/common/cook_detail?cook_id='+ self.params.key +'&language=' + lang, function (response) {
				data.text = lan.cook;
				data.show = true;
				data.cook = response;
				self.$set('response', data);
			});
		}
	});

	// Dish page
	Vue.component('dish', {
		template: '#dish',
		methods: {
			close: function (index) {
				this.validation = false;
			}
		},
		ready: function () {
			var self = this;
			var data = {};
			
			data.show = false;
			body.className = 'dish dish-' + self.params.key;


			get(host + '/common/dish_detail?dish_id='+ self.params.key +'&language=' + lang, function (response) {
				data.text = lan.dish;
				data.show = true;
				data.dish = response;

				if (is_lockup) {
					//self.validation = true;
					//self.validationText = lan.lock_up;
					data.dish.remainder_count = 0;
				} 
				/*else {
					if (hasPopup !== today) {
						self.validation = true;
						self.validationText = lan.page.time.content;
						localStorage.setItem('hasPopup', today);
					}
				}*/

				self.$set('response', data);

				// console.log(response)

				currentProduct = {
					"dish_id": response.dish_id,
					"dish_name": response.dish_name,
					"dish_count":1,
					"dish_price": response.dish_price,
					"photo_url": response.photos[0]
				};



			});
		}
	}).transition('fade', {
		enter: function (el) {
			$('#slider').slick({arrows: false});
		}
	});

	var cartdata = {};

	// Cart page
	Vue.component('cart', {
		template: '#cart',
		methods: {
			goToList: function () {
				// page('/list');
				history.go(-1);
			},
			add: function (id) {
				var self = this;
				for (var i = 0; i < self.cart.items.length; i++) {
					self.cart.items[i].buy_date = getDate('Y-M-d h:m:s');
					if (self.cart.items[i].dish_id === id) {
						self.cart.items[i].dish_count = (self.cart.items[i].dish_count + 1);
					}
				}

				var items = JSON.stringify(self.cart.items);
				put(host + '/user/saveorupdate_shopping_cart?token_id='+ token_id +'&items=' + items + '?language=' + lang, function(){});
			},
			remove: function(id) {
				var self = this;
				var is_delete = false;
				var delete_id = '';

				for (var i = 0; i < self.cart.items.length; i++) {
					self.cart.items[i].buy_date = getDate('Y-M-d h:m:s');
					if (self.cart.items[i].dish_id === id) {
						self.cart.items[i].dish_count = (self.cart.items[i].dish_count - 1);
						if (self.cart.items[i].dish_count === 0) {
							is_delete = true;
							delete_id = self.cart.items[i].dish_id;
						}
					}
				}

				if (is_delete) {
					get(
						host + '/user/delete_shopping_cart?token_id='+ token_id +'&dish_id=' + delete_id + '?language=' + lang,
						function() {
							for (var i = 0; i < self.cart.items.length; i++) {
								if (self.cart.items[i].dish_id === delete_id) {
									// alert(self.cart.items[i].dish_count)
									self.cart.items.$remove(self.cart.items[i]);
									// self.cart.items.splice(i,1);

									if (self.cart.items.length === 0) {
										self.notfoundText = lan.validation_cart;
										self.notfound = true;
									}
								}
							}
						}
					);
				} else {
					var items = JSON.stringify(self.cart.items);
					put(host + '/user/saveorupdate_shopping_cart?token_id='+ token_id +'&items=' + items + '?language=' + lang, function(){});
				}
			}
		},
		computed: {
			total: function () {
				var self = this;
				var length = 0;
				for (var i = 0; i < self.cart.items.length; i++) {
					length = (length + catInfo.items[i].dish_count);
				}
				self.cart.total_length = length;
				return self.cart.total_length;
			},
			price: function () {
				var self = this;
				var length = 0;
				for (var i = 0; i < self.cart.items.length; i++) {
					length = (length + (catInfo.items[i].dish_price * catInfo.items[i].dish_count));
				}
				self.cart.total_price = length.toFixed(2);
				return Number(self.cart.total_price) + Number(self.order.driveramount);
			}
		},
		ready: function () {
			var self = this;
			body.className = 'cart';
			cartdata.show = false;
			self.notfound = false;

			if (!is_weixin) {
					self.notfoundText = lan.need_login;
					self.notfound = true;
					self.$set('response', cartdata);
			}

			if (typeof self.cart.items[0] === 'undefined') {
				$.subscribe('get.cart', function (ev, ele) {
					if (self.cart.items.length === 0) {
						self.notfoundText = lan.validation_cart;
						self.notfound = true;
					} else {
						cartdata.show = true;
					}

					self.$set('response', cartdata);
				});
			} else {
				if (self.cart.items.length === 0) {
					self.notfoundText = lan.validation_cart;
					self.notfound = true;
				} else {
					cartdata.show = true;
				}
				self.$set('response', cartdata);
			}

			self.$set('response', cartdata);

		}
	});

	// Settle Accounts page
	Vue.component('settle-accounts', {
		template: '#settle-accounts',
		methods: {
			backCart: function (index) {
				cartdata.notfound = false;
				page('/list');
			},
			pay_order: function () {
				var self = this;

				// 只允许一次提交
				if (!is_post_order) {
					if (typeof this.region_id === 'undefined') {
						this.validation = true; 
						this.validationText = lan.validation_address_home;
					} 

					else if (this.order.showActive) {
						this.validation = true; 
						this.validationText = lan.validation_address;
					}

					else {
						// 提交订单
						is_post_order = true;

						var print_invoice = 0;
						var invoice_title = '';
						var discount_code = this.order.discount_code;
						var expect_deliver_date = this.order.expect_deliver_date;
						var expect_deliver_duration = this.order.expect_deliver_duration;
						var recipient_id = this.order.recipient_id;
						var items = JSON.stringify(this.cart.items);

						if (this.order.invoice_title) {
							print_invoice = 1;
							invoice_title = this.order.invoice_title;
						}

						var orderData = {
							token_id : token_id,
							language : lang,
							discount_code : discount_code,
							expect_deliver_date : expect_deliver_date,
							expect_deliver_duration : expect_deliver_duration,
							print_invoice : print_invoice,
							invoice_title : invoice_title,
							recipient_id : recipient_id,
							items : items
						};

						post (
							host + '/order/add_order',
							orderData,
							function(response) {
								if (response.code === 10000) {
									var data = {
										order_id: response.results.id,
										token_id: token_id,
										language: lang,
										channel: 'wx_pub'
									};

									current_order_id = response.results.id;
									post (
										host + '/order/pay_order',
										data,
										function(response) {
											if (response.code === 10000) {
												var charge = response.results;

												pingpp.createPayment(charge, function(result, err) {
													if (result=="success") {
														// alert(current_order_id)
														post (
															host + '/order/hook_order',
															{
																order_id: current_order_id,
																language: lang,
																token_id: token_id
															},
															function(data) {
																window.location.href = '/orders';
																// page('/orders');
															}
														);
													} else {
														console.log(lan.validation_pay_error);
														window.location.href = '/orders';
														console.log(result+"/"+err.msg+"/"+err.extra);
													}
												});
											} else {
												console.log(lan.validation_pay_error);
											}
										}
									);

								} else {
									self.validation = true;
									self.validationText = response.msg;
								}
							}
						);
					}
				}
			},
			close: function (index) {
				this.validation = false;
			}
		},
		computed: {
			price: function () {
				var self = this;
				var p = Number(self.cart.total_price) + Number(self.order.driveramount) - Number(self.order.discount_price);
				return p.toFixed(2);
			}
		},
		ready: function () {
			var self = this;
			body.className = 'settle-accounts';
			self.cart.total_price = Number(self.cart.total_price);


			if (typeof self.cart.items[0] !== 'undefined') {
				cartdata.show = true;
				cartdata.notfound = false;

				// 使用最新
				if (selectedAddress !== null) {
					selectedAddress = Number(selectedAddress);
					self.order.currentAddress = self.order.address[selectedAddress];
					self.order.currentAddress.current = true;
					self.order.recipient_id = self.order.currentAddress.id;
				}

				if (typeof self.order.currentAddress.name === 'undefined') {
					self.order.showActive = true;
				}
			} else {
				cartdata.validationText = '';
				cartdata.show = false;
				cartdata.notfound = true;
				cartdata.text = lan.validation_api_error;
			}


			self.$set('response', cartdata);
		}
	});

	// Address page
	Vue.component('address', {
		template: '#address',
		methods: {
			select: function (index) {
				for (var i = 0; i < this.order.address.length; i++) {
					this.order.address[i].current = false;
				}

				localStorage.setItem('selectedAddress', index);
				selectedAddress = index;

				this.order.currentAddress = this.order.address[index];
				this.order.currentAddress.current = true;
				this.order.recipient_id = this.order.currentAddress.id;
				// this.order.currentAddress
				this.order.showActive = false;
				page('/settle-accounts');
			}
		},
		ready: function () {
			var self = this;
			body.className = 'address';
			self.order.loaded = true;
		}
	});

	// Edit Address page
	Vue.component('edit-address', {
		template: '#edit-address',
		methods: {
			upeate: function (index) {
				var name = $('#name').val();
				var sex = $('input[name="sex"]:checked').val();
				var telephone = $('input[name="telephone"]').val();
				var address = $('input[name="address"]').val();

				if (name == '') {
					this.response.validation = true;
					this.response.validationText = lan.validation_name;
					return false;
				}


				if (typeof sex === 'undefined') {
					this.response.validation = true;
					this.response.validationText = lan.validation_sex;
					return false;
				}

				if (telephone == '') {
					this.response.validation = true;
					this.response.validationText = lan.validation_tel;
					return false;
				}

				if (address == '') {
					this.response.validation = true;
					this.response.validationText = lan.validation_address;
					return false;
				}

				if (index === 'new') {
					var url = host + '/user/saveorupdate_address?name='+encodeURIComponent(name)+'&\
																sex='+sex+'&\
																telephone='+telephone+'&\
																address='+encodeURIComponent(address)+'&\
																region_id='+ region_id +'&token_id=' + token_id;
				} else {
					var url = host + '/user/saveorupdate_address?id='+this.order.address[index].id+'&\
																name='+encodeURIComponent(name)+'&\
																sex='+sex+'&\
																telephone='+telephone+'&\
																address='+encodeURIComponent(address)+'&\
																region_id='+ region_id +'&token_id=' + token_id;
				}

				var self = this;
				put(
					url,
					function (response) {
						if (response.code === 10000) {
							if (index === 'new') {
								var newAddress = {
									id : response.results,
									name : name,
									telephone : telephone,
									sex : sex,
									address : address,
									index : self.order.address.length
								}
								self.order.address.push(newAddress);
								
							} else {
								self.order.address[index].name = name;
								self.order.address[index].telephone = telephone;
								self.order.address[index].sex = sex;
								self.order.address[index].address = address;
							}
							
							page('/address');
						}
					}
				);
			},
			backCart: function (index) {
				page('/address');
			},
			close: function (index) {
				this.response.validation = false;
			}
		},
		ready: function () {
			var self = this;
			body.className = 'edit-address';
			var data = {
				show: true,
				validation : false,
				validationText: '',
				edit: false
			}

			if (!self.order.loaded) {
				data.notfound = true;
				data.text = lan.validation_api_error;
			} else {
				if (typeof self.params.key !== 'undefined') {
					data.edit = true;
					data.address = self.order.address[self.params.key];
				}
			}

			self.$set('response', data);
		}
	});

	// Delivery Time
	Vue.component('delivery-time', {
		template: '#delivery-time',
		methods: {
			select: function (date, time, index) {
				this.order.expect_deliver_date = date;
				this.order.expect_deliver_duration = time;
				
				for (var p = 0; p < this.order.dates.timer.length; p++) {
					if (p === index) {
						this.order.dates.timer[p].current = true;
					} else {
						this.order.dates.timer[p].current = false;
					}
				}
			},
			upeate: function () {
				page('/settle-accounts');
			},
		},
		ready: function () {
			var self = this;
			body.className = 'delivery-time';
		}
	});

	// Promo
	Vue.component('promo-code', {
		template: '#promo-code',
		methods: {
			upeate: function () {
				var self = this;
				var code = $('input[name="code"]').val();
				
				get(host + '/order/get_discountamount?language=' + lang + '&discount_code='+ code +'&token_id=' + token_id, function (response) {
					self.order.discount_price = Number(response.results);
					self.order.discount_code = code;
					page('/settle-accounts');
				});
			},
		},
		ready: function () {
			var self = this;
			body.className = 'promo-code';
		}
	});

	// Invoice
	Vue.component('invoice', {
		template: '#invoice',
		methods: {
			select: function (item) {
				for (var p = 0; p < this.order.invoice_titles.length; p++) {
					this.order.invoice_titles[p].current = false;
				}

				this.order.invoice_title = item.title;
				item.current = true;
				localStorage.setItem( 'invoice_titles', JSON.stringify(this.order.invoice_titles) );
				page('/settle-accounts');
			},
			upeate: function () {
				var title = $('input[name="invoice"]').val();
				if (title == '') {
					this.response.validation = true;
					this.response.validationText = lan.validation_invoice;
					return false;
				} else {
					var d = {
						title: title,
						current: false
					};
					this.order.invoice_titles.push(d);
					localStorage.setItem( 'invoice_titles', JSON.stringify(this.order.invoice_titles) );
					$('input[name="invoice"]').val('');
				}
			},
			close: function (index) {
				this.response.validation = false;
			}
		},
		ready: function () {
			var self = this;
			body.className = 'invoice';
			var data = {
				validation : false,
				validationText: ''
			}

			var invoice_titles = localStorage.getItem('invoice_titles');
			if (invoice_titles !== null) {
				this.order.invoice_titles = JSON.parse(invoice_titles);
			}

			self.$set('response', data);
		}
	});

	// Order List
	var currentOrder;
	Vue.component('orders', {
		template: '#orders',
		methods: {
			goToCdp: function (item) {
				currentOrder = item;
				page('/order/' + item.id);
			}
		},
		ready: function () {
			var self = this;
			body.className = 'order-list';
			var data = {
				show : false
			}

			if (is_loaded) {
				get(host + '/order/get_orders?page=1&rows=100&token_id='+ token_id + '&language=' + lang, function (response) {
					self.$set('response', data);
					self.orders = response.results;
					data.show = true;
					self.$set('response', data);
				});
			} else {
				$.subscribe('loaded', function (ev, ele) {
					get(host + '/order/get_orders?page=1&rows=100&token_id='+ token_id + '&language=' + lang, function (response) {
						self.$set('response', data);

						// response.results[0].status_code = 6;
						self.orders = response.results;
						data.show = true;
						self.$set('response', data);
					});
				});
			}
		}
	});

	// Order CDP
	Vue.component('order', {
		template: '#order',
		methods: {
			back: function () {
				window.location.href = '/orders';
			}
		},
		ready: function () {
			var self = this;
			body.className = 'order-cdp';
			var data = {
				show : false,
				currentOrder: currentOrder
			}

			if (typeof data.currentOrder === 'undefined') {
				// page('/orders');
				window.location.href = '/orders';
			} else {
				data.show = true;
				self.$set('response', data);
			}
		}
	});

	// Modal
	Vue.component('modal', {
		template: '#modal',
		props: {
			show: {
				type: Boolean,
				required: true,
				twoWay: true
			},
			body: {
				type: String,
				twoWay: true
			}
		}
	});


	$(document).ready(function() {
		$body = $('body');
		body = $body.get(0);
		// isMoblie = isMoblie();

		isAndroid = isMoblie('Android');

		if (isAndroid) {
			$('html').addClass('is-android');
		}
		
		// 测试用例
		/*	
		is_weixin = true;
		var _USER = {};
		_USER.openid = '1234';
		_USER.nickname = 'csss';
		_USER.sex = '1';
		_USER.avatar = '1234';
		*/
		
		
		// 从服务器获得可配送时间
		get(host + '/common/order_time?language=' + lang, function (response) {
			orderInfo.dates = response.results;
			for (var i = 0; i < orderInfo.dates.timer.length; i++) {
				orderInfo.dates.timer[i].current = false;
			}
			orderInfo.dates.timer[0].current = true;
			orderInfo.expect_deliver_date = orderInfo.dates.date;
			orderInfo.expect_deliver_duration = orderInfo.dates.timer[0].time;
		});

		// 从服务器获得是否开市状态
		get(host + '/common/sale_time?language=' + lang, function (response) {
			// console.log(response)
			today = response.results.date;
			if (response.results.timer[0].current) {
				is_lockup = false;
			} else {
				$('html').addClass('nopay');
				is_lockup = true;
			}
		});

		// 确定有可用的微信openid
		if (is_weixin && typeof _USER !== 'undefined') {
			var wx_open_id = _USER.openid;
			var wx_nickname = _USER.nickname;
			var wx_sex = _USER.sex;
			var wx_avatar = _USER.avatar;
			// _USER.language = 'zh_CN';
			// 首先尝试登录
			get(
				host + '/auth/login?weixin_openid='+wx_open_id,
				function (response) {
					if (response.code === 20000) {
						// 失败，尝试注册
						get(
							host + '/auth/register?nickname='+wx_nickname+'&gender='+wx_sex+'&avatar='+wx_avatar+'&weixin_openid='+wx_open_id,
							function (response) {
								if (response.code === 10000) {
									token_id = response.results.token_id;
									localStorage.setItem( 'token_id', token_id);
									is_loaded = true;
									$.publish('loaded', token_id);
								}
							}
						);
					} else {
						// 成功，更新本地数据
						token_id = response.results.token_id;
						$.publish('loaded', token_id);
						is_loaded = true;
					}
				}
			);

			$.subscribe('loaded', function (ev, ele) {
				get(host + '/user/shopping_cart?language=' + lang + '&token_id=' + token_id, function (response) {
					// console.log(response)

					catInfo.items = response.results.items;
					catInfo.total_price = response.results.total_price.toFixed(2);
					// alert(typeof catInfo.total_price)
					var length = 0;
					for (var i = 0; i < catInfo.items.length; i++) {
						length = (length + catInfo.items[i].dish_count);
					}
					catInfo.total_length = length;
					$.publish('get.cart', token_id);

					// 从本地获得当前用户的发票信息
					var invoice_titles = localStorage.getItem('invoice_titles');
					if (invoice_titles !== null) {
						orderInfo.invoice_titles = JSON.parse(invoice_titles);
						for (var i = 0; i < orderInfo.invoice_titles.length; i++) {
							if (orderInfo.invoice_titles[i].current) {
								orderInfo.invoice_title = orderInfo.invoice_titles[i].title;
							}
						}
					}

					// 从服务器获得地址
					get(host + '/user/addresses?language=' + lang + '&token_id=' + token_id, function (response) {
						$.each(response.results, function (k, v) {
							v.index = k;
						});
						
						orderInfo.address = response.results;
					});

					// 从服务器获得快递费
					get(host + '/order/get_driveramount?language=' + lang + '&token_id=' + token_id, function (response) {
						orderInfo.driveramount = response.results;
					});
				});
			});
		}

		// post
		new Vue({
			el: "#wrap",
			content : "#app",
			methods: {
				navigate: function(component) {
					var self = this;

					return function(ctx) {
						if (self.current) {
							self.current.$destroy(true);
						}

						var model = new(Vue.component(component))({
							methods: {
								closeModal: function() {
									this.validation = false;
								},

								// 确定购物车包含商品，如果没有禁止进入购物车页面
								goToCart: function (event) {
									if (this.cart.items.length !== 0) {
										page('/list');
									}
								},

								hasLogin: function (event) {
									if (!is_loaded) {
										this.validation = true;
										this.validationText = lan.not_in_wx;
										return false;
									}

									if (is_lockup) {
										this.validation = true;
										this.validationText = lan.lock_up;
										return false;
									}
								},

								// 将商品加入购物车
								addToCart: function (id) {
									if (!is_loaded) {
										this.validation = true;
										this.validationText = lan.not_in_wx;
										return false;
									}

									if (is_lockup) {
										this.validation = true;
										this.validationText = lan.lock_up;
										return false;
									}


									var self = this;

									// 必须登录
									if (token_id) {
										if (self.cart.items.length !== 0) {
											var is_change = false;

											// 判断购物车内产品是否已存在
											for (var i = 0; i < self.cart.items.length; i++) {
												self.cart.items[i].buy_date = getDate('Y-M-d h:m:s');

												// 如果是，仅修改数量
												if (self.cart.items[i].dish_id === currentProduct.dish_id) {
													self.cart.items[i].dish_count = (self.cart.items[i].dish_count + 1);
													is_change = true;
												}
											}

											// 不存在，增加一个
											if (!is_change) {
												currentProduct.buy_date = getDate('Y-M-d h:m:s');
												self.cart.items.push(currentProduct);
											}

										} else {
											// 如果购物为空
											currentProduct.buy_date = getDate('Y-M-d h:m:s');
											self.cart.items.push(currentProduct);
										}

										// Json to str
										var items = JSON.stringify(self.cart.items);

										put(
											host + '/user/saveorupdate_shopping_cart?token_id='+ token_id +'&items=' + items + '?language=' + lang,
											function (response) {
												if (response.code === 10000) {
													self.cart.total_price = (Number(self.cart.total_price) + Number(currentProduct.dish_price));
													self.cart.total_price = self.cart.total_price.toFixed(2);
													var length = 0;
													for (var i = 0; i < self.cart.items.length; i++) {
														length = (length + catInfo.items[i].dish_count);
													}
													self.cart.total_length = length;

													
													setTimeout(function() {
														$('.cart-info .icon').addClass('bounceIn');

														setTimeout(function() {
															$('.cart-info .icon').removeClass('bounceIn');
														}, 1000);
													}, 500);


												}
											}
										);
									}
								},
								back: function (event) {
									window.history.back();
								},
								pay: function (id) {

									if (!is_post_order) {
										is_post_order = true;

										var data = {
											order_id: id,
											token_id: token_id,
											language: lang,
											channel: 'wx_pub'
										};
										current_order_id = id;

										post (
											host + '/order/pay_order',
											data,
											function(response) {
												if (response.code === 10000) {
													var charge = response.results;
													pingpp.createPayment(charge, function(result, err) {
														if (result=="success") {
															post (
																host + '/order/hook_order',
																{
																	order_id: current_order_id,
																	language: lang,
																	token_id: token_id
																},
																function(data) {
																	window.location.reload();
																}
															);

														} else {
															console.log(lan.validation_pay_error);
															window.location.href = '/orders';
															// page('/orders');
															console.log(result+"/"+err.msg+"/"+err.extra);
															is_post_order = false;
														}
													});
												} else {
													alert(lan.validation_pay_error);
													is_post_order = false;
												}
											}
										);
									}
								}
							},
							data: {
								response : {
									show: false
								},
								region_id: region_id,
								language: lan,
								notfound: false,
								notfoundText: '',
								validation: false,
								validationText: '',
								cart : catInfo,
								order : orderInfo,
								orders: [],
								areas : areasInfo,
								params: ctx.params
							}
						});

						model.$mount().$appendTo(self.$options.content);
						self.current = model;
					};
				}
			},
			ready: function () {
				var self = this;
				/*
				if (typeof this.region_id === 'undefined') {
					page('/');
				}
				*/

				page('/' , 					this.navigate('home'));
				page('/page/:key', 			this.navigate('page'));
				page('/dish/:key', 			this.navigate('dish'));
				page('/cook/:key', 			this.navigate('cook'));
				page('/list' , 				this.navigate('list'));
				page('/cart' , 				this.navigate('cart'));
				page('/settle-accounts' , 	this.navigate('settle-accounts'));
				page('/address' , 			this.navigate('address'));
				page('/address/edit/:key' , this.navigate('edit-address'));
				page('/address/add' , 		this.navigate('edit-address'));
				page('/delivery-time' , 	this.navigate('delivery-time'));
				page('/promo-code' , 		this.navigate('promo-code'));
				page('/invoice' , 			this.navigate('invoice'));
				page('/orders' , 			this.navigate('orders'));
				page('/order/:key' , 		this.navigate('order'));

				page('*' , 					this.navigate('notfound'));
				page();
			}
		});

		Vue.config.debug = true;

		$body.on('click', '.button, .button-samll', function(argument) {
			var $e = $(this);
			var is_active = false;
			if (!is_active) {
				$e.addClass('is-active');
				is_active = true;

				setTimeout(function () {
					$e.removeClass('is-active');
				}, 100);

				setTimeout(function () {
					is_active = false;
				}, 1000);
			}
		})
	});

}(jQuery));
