
		var cartCount = parseInt(0); 
		var totalMonies = 0; 

		$(document).ready(function() {  
			updateCartTotals(cartCount); 
		});
		function updateCartTotals(cartCount) { 
			if(cartCount == 0) { 
				$('.open-product').html('Giỏ hàng của bạn đang trống.'); 
			} else { 
				
				 if(cartCount == 1) { 
					 $('.open-product-count').html('Tổng tiền: ' + cartCount + ' sản phẩm'); 
				 } else { 
					 $('.open-product-count').html('Tổng tiền: ' + cartCount + ' sản phẩm'); 
				 }

					$('.open-product-cost').html(" / <span class=money>0₫</span>");  
				 } 
				}
				function addItem(form_id) {
					$.ajax({
						type: 'POST',
						url: '/cart/add.js',
						dataType: 'json',
						data: $('#'+form_id).serialize(),
						success: addToCartOk,
						error: addToCartFail
					});
				}
				function addToCartOk(product) {
					window.location.href = '/cart';

					$('#CartAddNotification').addClass('added').fadeIn(500).delay(3000).fadeOut(300, function() { 
						$(this).removeClass('added'); 
					}); 
				}
				function addToCartFail(obj, status) {
					alert('Sản phẩm bạn đang cố gắng thêm đã hết hàng.');
				}