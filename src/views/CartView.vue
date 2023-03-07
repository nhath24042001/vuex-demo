<template>
  <div class="cart">
    <h1>Giỏ Hàng</h1>

    <div v-for="product in products" :key="product.id" class="cart-container">
      <div class="cart-item">
        <img :src="product.img" alt="">
        <h4>Sản phẩm: {{ product.name }}</h4>
        <h4>Giá: {{ product.price }} 000 000 vnd</h4>
        <h4>Số lương: {{ product.quantity }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
    item_cost(){
      return this.product.price * this.product.quantity;
    }
  },
};
</script>

<style scoped>
  .cart-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .cart-item{
    border: 1px solid #333;
    margin-bottom: 20px;
    width: 300px;
    padding: 8px;
  }

  .cart-item img{
    widows: 100px;
    height: 100px;
  }
</style>