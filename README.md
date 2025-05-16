# Shopify Lookbook Theme

This repository contains a Shopify theme with a focus on showcasing a "Lookbook" feature. The theme includes custom sections, templates, and configurations to enhance the shopping experience.

## Project Structure

The project is organized as follows:

### Key Files

- **Lookbook Section**: [sections/lookbook.liquid](sections/lookbook.liquid)
  - Displays a Lookbook using metaobjects.
  - Renders the `lookbook-display` snippet with the selected Lookbook data.

- **Main Product Section**: [sections/main-product.liquid](sections/main-product.liquid)
  - Integrates Lookbook metaobjects to display related products.

## Features

- **Lookbook Integration**: 
  - The Lookbook section allows merchants to select and display Lookbooks using Shopify metaobjects.
  - Example usage in `lookbook.liquid`:
    ```liquid
    {% assign lb = metaobjects.lookbook[section.settings.lookbook] %}
    <section class="lookbook">
      {% render 'lookbook-display', lb: lb %}
    </section>
    ```

- **Dynamic Product Associations**:
  - The `main-product.liquid` section dynamically associates products with Lookbooks.
