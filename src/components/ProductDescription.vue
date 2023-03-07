<template lang="">
  <div
    class="desc-container"
    :class="{ show: active }"
    @click="$emit('close-product')"
  />

  <div class="drawer" :class="{ show: active }">
    <div class="drawer-close" @click="$emit('close-product')">x</div>

    <div v-if="product" class="product-detail">
      <img :src="product.img" alt="product_img" />
      <h3>{{ product.name }}</h3>
      <h3>Giá: {{ product.price }}.000.000 vnd</h3>
      <p>Mô tả: {{ description }}</p>
      <h3>Hãng: {{ product.category }}</h3>

      <div class="cart-total" v-if="product_total">
        <h3>Số lượng: </h3>
        <h1>{{product_total}}</h1>
      </div>

      <div class="button-container">
        <button class="remove" @click="removeToCart()">Xóa</button>
        <button class="add" @click="addToCart()">Thêm vào giỏ hàng</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", 'active'],
  methods: {
    addToCart(){
      this.$store.commit('addToCart', this.product)
    },
    removeToCart(){
      this.$store.commit('removeToCart', this.product)
    }
  },
  computed: {
    product_total(){
        return this.$store.getters.productQuantity(this.product)
    }
  }
};
</script>
<style lang="scss">
    .desc-container{
        width: 25%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(214, 214, 214, 0.55);
        z-index: 100;
        display: none;
        transition: all .5s ease-in;

        &.show{
            display: block;
        }
    }
    .drawer{
        width: 25vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: -105vw;
        padding: 15px;
        transition: left .5s;
        z-index: 101;
        overflow-y: scroll;

        &.show{
            left: 0;
        }
    }

    .drawer-close{
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 5px;
        right: 10px;
        border: 2px solid gray;
        color: gray;
        width: 15px;
        float: right;
        cursor: pointer;

        &:hover{
            background-color: lightcyan;
        }
    }

    .product-detail{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p.description{
            padding: 20px;
            line-height: 1.5rem;
        }

        .button-container{
            button{
                width: 150px;
                border: none;
                padding: 10px;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
            }
        }

        img{
          width: 200px;
          height: 200px;
        }
    }
</style>
