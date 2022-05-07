<template>
  <div class="container-fluid" id="cardpage">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
         <h1 class="mt-5 mb-5">Ürünler</h1>
        <div class="row">
          <div class="col-lg-9" id="left">
           <div class="row">
              <div v-for="product in productList" :key="product.id" class="card col-lg-2-5 col-lg-4 col-6 mb-4">
              <img class="card-img n-rounded" :src="product.img" />
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-subtitle mb-2 text-muted">
                  {{ product.category }}
                </p>
                <div class="buy">
                  <button v-if="product.inStock" @click="
                    addToCart(product.id, product.name, product.lastPrice)
                  " class="w-100 btn btn-danger mt-3">
                    Sepete Ekle
                  </button>
                  <button v-if="product.inStock == false" class="w-100 btn btn-dark mt-3">
                    Stokta Yok
                  </button>
                </div>
                <div class="price-area d-flex justify-content-between align-items-center mt-2">
                  <div class="star-area d-flex align-items-center">
                    <img src="@/assets/star.png" alt="" />
                    {{ product.star }}
                  </div>
                  <div v-if="product.inStock" class="productprice d-flex align-items-center">
                    <span class="currentprice">{{ product.lastPrice }} TL</span>
                    <span class="discountprice">{{ product.firstPrice }} TL</span>
                  </div>
                </div>
              </div>
            </div>
           </div>
          </div>
          <div class="col-lg-3" id="right">
            <div class="card col-lg-12 col-sm-12">
              <h5 class="card-title">Sepet</h5>
              <div v-if="cartItems.length > 0" class="card-body">
                <div v-for="item in cartItems" :key="item.id" class="productcard">
                  <div class="title">{{ item.name }}</div>
                  <div class="price">{{ item.price }} TL</div>
                </div>

                <div class="pricecard">
                  <div class="subtotal">
                    <span class="title">Ara Toplam:</span>
                    <span class="price">{{ cartTotal }} TL</span>
                  </div>
                  <div class="vat">
                    <span class="title">+%18 KDV:</span>
                    <span class="price">{{ calculateVat.toFixed(2) }} TL</span>
                  </div>
                  <div class="totalprice">
                    <span class="title">Genel Toplam:</span>
                    <span class="price">{{ generalPrice }} TL</span>
                  </div>
                </div>

                <router-link :title="title" to="/completed">
                  <div class="buycard">
                    <button class="w-100 btn btn-danger mt-3">Ödeme Yap</button>
                  </div>
                </router-link>
              </div>
              <div v-else class="cart-empty">Sepetinizde ürün yok</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDatas from "./data.json";

export default {
  name: "ProductItems",
  data() {
    return {
      productList: ProductDatas,
      cartItems: [],
    };
  },
  methods: {
    addToCart(id, name, price) {
      if (this.cartItems.map((item) => item.id).indexOf(id) === -1) {
        this.cartItems.push({
          id,
          name,
          price,
        });
      }
    },
  },

  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },
    calculateVat() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price * 0.18;
      }, 0);
    },
    generalPrice() {
      return this.cartTotal + this.calculateVat;
    },
  },
};
</script>
