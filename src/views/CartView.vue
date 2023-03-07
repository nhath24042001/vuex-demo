<template>
  <div class="cart">
    <h1>Giỏ Hàng</h1>

    <div v-for="product in products" :key="product.id" class="cart-container">
      <div class="cart-item">
        <div class="cart-flex">
          <img :src="product.img" alt="" />
          <div class="description">
            <h4>Sản phẩm: {{ product.name }}</h4>
            <h4>Giá: {{ product.price }} 000 000 vnd</h4>
            <h4>Số lương: {{ product.quantity }}</h4>
          </div>
        </div>
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
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cart-item {
  margin-bottom: 20px;
  width: 700px;
  padding: 10px;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.cart-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.cart-flex {
  display: flex;
}

.description{
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 40px;
}
</style>
