# Geserify

A (super) simple jQuery carousel plugin

It's so simple that it will not get in your way of how to style your carousel

## Usage

Include required script and style

`<link rel="stylesheet" href="style.css">`


`<script src="jquery.geserify.js"></script>`

Then create the carousel, here's the (simple) rule:

Place the carousel inside element with `class` attribute `carousel-wrap`

Then, the element with `class` of `carousel` contains the slide `item`s

Put your content inside the `item`s


```
<div class="my-carousel">
    <div class="carousel-wrap">
        <div class="carousel">
            <div class="item">First content</div>
            <div class="item">Second content</div>
            <div class="item">Third content</div>
        </div>
    </div>

    <div class="nav">
        <button class="next">Next</button>
        <button class="prev">Prev</button>
    </div>
</div>
```

**TIPS:** You can customize it however you want as long as it comply the structure above.

Alright, now call the plugin on the container element

Here our selector is `.my-carousel`

You can have multiple element with class `.my-carousel` and have them `geserified` (I also have no idea what that means :| )


```
<script>
$('.my-carousel').geserify({ autoPlay: false, interval: 1000 });
</script>
```

Or you can see the included example files.

## Options

Here's all the available options with their respective default value: 

```
{
  // if true, autoplay the carousel
  autoPlay: true,

  // specify the width of the carousel item (in pixels)
  itemWidth: 600,

  // specify the height of the carousel item (in pixels)
  itemHeight: 400,

  // specify the interval for autoPlay (in mileseconds)
  interval: 2000
}
```

You can override those options when calling `.geserify(options)`

## TODO
- Make this to be less super simple
