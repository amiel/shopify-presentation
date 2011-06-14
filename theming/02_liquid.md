!SLIDE subsection
# Theming #

!SLIDE code small
# Liquid Examples #

    @@@ html
    <div id="cart">
      <a href="/cart">
        {{ cart.item_count }}
        {{ cart.item_count | pluralize: "Item", "Items" }}
      </a>
    </div>



<!-- http://cheat.markdunkley.com/ -->