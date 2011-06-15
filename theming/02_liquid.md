!SLIDE subsection
# Writing your own theme #

!SLIDE code small
# Liquid Examples: Cart #

    @@@ html
    <div id="cart">
      <a href="/cart">
        {{ cart.item_count }}
        {{ cart.item_count | pluralize: "Item", "Items" }}
      </a>
    </div>

!SLIDE code small
# Liquid Examples: Product #

    @@@ html
    <h1>{{ product.title | escape }}</h1>
    <div id="image">
      <img
        src="{{ product.images[0] | product_img_url: "large" }}"
        alt="{{ product.title | escape }}" />
    </div>
    <div id="details">
      {{ product.description }}
    </div>

!SLIDE
# Liquid Commands #

<iframe src="http://cheat.markdunkley.com/" style="width: 100%; height: 100%;"></iframe>