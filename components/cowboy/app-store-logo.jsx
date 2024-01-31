import * as React from "react"

const AppStoreLogo = (props) => (
  <svg
    width={180}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M179 46.006c0 2.771-2.291 5.016-5.126 5.016H6.132C3.3 51.022 1 48.777 1 46.006v-40C1 3.237 3.3.985 6.132.985h167.741c2.836 0 5.126 2.253 5.126 5.023l.001 40Z"
        fill="#fff"
        fillOpacity={0.08}
      />
    </g>
    <path
      d="M40.17 25.723c-.04-4.19 3.518-6.228 3.68-6.323-2.014-2.864-5.136-3.255-6.234-3.287-2.623-.269-5.166 1.53-6.503 1.53-1.362 0-3.42-1.504-5.637-1.46-2.853.044-5.523 1.654-6.986 4.155-3.022 5.1-.768 12.595 2.126 16.717 1.448 2.019 3.14 4.273 5.355 4.194 2.166-.087 2.976-1.347 5.59-1.347 2.591 0 3.351 1.347 5.61 1.296 2.325-.036 3.79-2.028 5.187-4.065 1.673-2.314 2.345-4.593 2.372-4.71-.055-.018-4.516-1.678-4.56-6.7ZM35.903 13.402c1.165-1.421 1.962-3.354 1.741-5.316-1.686.073-3.796 1.137-5.01 2.527-1.075 1.225-2.035 3.232-1.787 5.12 1.895.137 3.84-.933 5.056-2.331ZM65.4 13.01c0 1.53-.47 2.682-1.411 3.456-.87.713-2.108 1.07-3.71 1.07a17.64 17.64 0 0 1-2.045-.1v-8.36a15.46 15.46 0 0 1 2.407-.178c1.527 0 2.677.324 3.453.972.87.731 1.306 1.778 1.306 3.14Zm-1.474.038c0-.992-.269-1.752-.808-2.283-.538-.529-1.325-.794-2.361-.794-.44 0-.815.029-1.125.088v6.356c.172.026.486.038.944.038 1.069 0 1.894-.29 2.476-.87.581-.58.874-1.425.874-2.535ZM73.21 14.35c0 .942-.275 1.714-.827 2.32-.579.622-1.346.933-2.303.933-.923 0-1.657-.298-2.205-.896-.547-.596-.82-1.35-.82-2.257 0-.948.281-1.727.846-2.332.566-.604 1.326-.907 2.283-.907.923 0 1.664.298 2.225.894.534.58.802 1.329.802 2.244Zm-1.449.043c0-.565-.125-1.05-.374-1.454-.294-.49-.711-.734-1.254-.734-.561 0-.988.245-1.281.734-.25.404-.375.897-.375 1.479 0 .566.126 1.05.375 1.455.303.489.724.733 1.268.733.533 0 .952-.248 1.253-.746.259-.412.388-.901.388-1.467ZM83.685 11.336l-1.967 6.128h-1.28l-.814-2.661a19.508 19.508 0 0 1-.506-1.98h-.025c-.121.673-.29 1.333-.505 1.98l-.866 2.661h-1.294l-1.85-6.128h1.436l.71 2.913c.173.69.314 1.346.427 1.967h.026c.104-.512.276-1.165.518-1.954l.893-2.925h1.138l.855 2.863c.206.698.374 1.37.504 2.017h.039c.094-.63.237-1.302.426-2.017l.763-2.863h1.372v-.001ZM90.931 17.46h-1.397v-3.51c0-1.082-.422-1.622-1.267-1.622-.414 0-.75.148-1.01.446a1.558 1.558 0 0 0-.387 1.05v3.635h-1.398v-4.376c0-.538-.017-1.122-.05-1.754h1.228l.065.958h.039a1.99 1.99 0 0 1 .724-.74 2.407 2.407 0 0 1 1.267-.344c.586 0 1.074.185 1.462.555.483.454.724 1.131.724 2.03v3.672ZM94.787 17.463H93.39v-8.94h1.396v8.94ZM103.008 14.35c0 .942-.276 1.714-.828 2.32-.579.622-1.347.933-2.303.933-.924 0-1.659-.298-2.205-.896-.547-.596-.82-1.35-.82-2.257 0-.948.28-1.727.846-2.332.566-.604 1.326-.907 2.282-.907.924 0 1.664.298 2.226.894.534.58.802 1.329.802 2.244Zm-1.451.043c0-.565-.125-1.05-.375-1.454-.292-.49-.71-.734-1.252-.734-.562 0-.99.245-1.281.734-.25.404-.375.897-.375 1.479 0 .566.126 1.05.375 1.455.303.489.724.733 1.268.733.533 0 .951-.248 1.252-.746.26-.412.388-.901.388-1.467ZM109.769 17.464h-1.254l-.104-.706h-.039c-.429.563-1.041.845-1.836.845-.593 0-1.073-.186-1.435-.555-.328-.335-.492-.753-.492-1.248 0-.749.32-1.32.964-1.715.643-.395 1.547-.589 2.711-.58v-.114c0-.807-.435-1.21-1.305-1.21-.62 0-1.167.152-1.639.453l-.284-.894c.584-.352 1.305-.53 2.156-.53 1.643 0 2.467.846 2.467 2.536v2.257c0 .612.03 1.1.09 1.46Zm-1.45-2.106v-.945c-1.542-.026-2.312.386-2.312 1.235 0 .32.088.559.268.719.18.16.409.239.682.239.307 0 .594-.095.855-.284a1.157 1.157 0 0 0 .507-.964ZM117.711 17.463h-1.24l-.065-.984h-.039c-.396.75-1.071 1.124-2.019 1.124-.757 0-1.388-.29-1.888-.87-.5-.58-.749-1.333-.749-2.257 0-.992.271-1.795.815-2.409.526-.572 1.172-.858 1.94-.858.844 0 1.434.277 1.77.832h.027V8.523h1.399v7.29c0 .596.016 1.146.049 1.65Zm-1.448-2.584v-1.022c0-.176-.013-.32-.039-.429a1.542 1.542 0 0 0-.505-.825 1.394 1.394 0 0 0-.935-.334c-.521 0-.929.201-1.229.605-.297.405-.448.92-.448 1.551 0 .606.143 1.098.429 1.476.303.403.711.604 1.222.604.458 0 .825-.167 1.104-.504.269-.31.401-.685.401-1.122ZM129.664 14.35c0 .942-.276 1.714-.828 2.32-.579.622-1.344.933-2.303.933-.921 0-1.656-.298-2.205-.896-.547-.596-.82-1.35-.82-2.257 0-.948.281-1.727.846-2.332.566-.604 1.326-.907 2.284-.907.922 0 1.664.298 2.224.894.534.58.802 1.329.802 2.244Zm-1.448.043c0-.565-.126-1.05-.375-1.454-.295-.49-.711-.734-1.255-.734-.56 0-.986.245-1.281.734-.251.404-.375.897-.375 1.479 0 .566.126 1.05.375 1.455.303.489.724.733 1.268.733.533 0 .953-.248 1.255-.746.257-.412.388-.901.388-1.467ZM137.18 17.46h-1.396v-3.51c0-1.082-.421-1.622-1.268-1.622-.415 0-.749.148-1.008.446a1.55 1.55 0 0 0-.388 1.05v3.635h-1.399v-4.376c0-.538-.016-1.122-.049-1.754h1.227l.065.958h.039c.164-.297.406-.543.724-.74a2.41 2.41 0 0 1 1.268-.344c.585 0 1.073.185 1.461.555.484.454.724 1.131.724 2.03v3.672ZM146.578 12.36h-1.539v2.976c0 .757.274 1.135.815 1.135.251 0 .459-.02.623-.064l.036 1.034c-.276.101-.639.152-1.086.152-.552 0-.981-.164-1.292-.491-.312-.328-.466-.88-.466-1.653v-3.09h-.919v-1.02h.919v-1.123l1.369-.403v1.524h1.539v1.022h.001ZM153.982 17.463h-1.399V13.98c0-1.098-.421-1.648-1.265-1.648-.648 0-1.091.319-1.333.956a1.648 1.648 0 0 0-.066.49v3.685h-1.396V8.523h1.396v3.694h.027c.44-.672 1.071-1.008 1.888-1.008.579 0 1.057.185 1.437.555.474.462.711 1.148.711 2.056v3.643ZM161.611 14.106c0 .244-.018.45-.052.617h-4.19c.018.606.218 1.068.606 1.388.355.286.812.429 1.372.429.62 0 1.186-.097 1.695-.29l.219.946c-.596.252-1.298.378-2.11.378-.973 0-1.74-.28-2.294-.838-.558-.56-.834-1.31-.834-2.25 0-.925.258-1.694.776-2.308.542-.655 1.274-.983 2.198-.983.904 0 1.59.328 2.054.983.375.52.56 1.164.56 1.928Zm-1.333-.352c.011-.405-.081-.753-.271-1.047-.242-.378-.612-.568-1.112-.568-.456 0-.828.185-1.112.555a2.03 2.03 0 0 0-.414 1.06h2.909ZM71.527 40.957h-3.028l-1.659-5.082h-5.765l-1.58 5.082h-2.948l5.712-17.3h3.528l5.74 17.3Zm-5.187-7.214-1.5-4.518c-.159-.461-.456-1.548-.895-3.259h-.053a123.23 123.23 0 0 1-.843 3.26l-1.473 4.517h4.764ZM86.22 34.567c0 2.121-.588 3.798-1.764 5.03-1.054 1.095-2.362 1.643-3.923 1.643-1.685 0-2.896-.59-3.633-1.771h-.054v6.572h-2.842V32.589c0-1.333-.036-2.702-.106-4.106h2.5l.16 1.977h.052c.948-1.49 2.387-2.233 4.318-2.233 1.51 0 2.77.58 3.777 1.744 1.01 1.165 1.515 2.696 1.515 4.596Zm-2.896.101c0-1.214-.28-2.215-.843-3.003-.615-.822-1.44-1.232-2.475-1.232-.7 0-1.338.229-1.908.68a3.142 3.142 0 0 0-1.118 1.785 3.544 3.544 0 0 0-.132.844v2.08c0 .908.285 1.674.856 2.299.57.625 1.312.937 2.224.937 1.07 0 1.904-.403 2.5-1.206.597-.805.896-1.866.896-3.184ZM100.929 34.567c0 2.121-.588 3.798-1.765 5.03-1.052 1.095-2.36 1.643-3.921 1.643-1.686 0-2.896-.59-3.632-1.771h-.054v6.572h-2.842V32.589c0-1.333-.036-2.702-.106-4.106h2.5l.159 1.977h.053c.947-1.49 2.386-2.233 4.318-2.233 1.508 0 2.768.58 3.778 1.744 1.007 1.165 1.512 2.696 1.512 4.596Zm-2.896.101c0-1.214-.281-2.215-.844-3.003-.614-.822-1.437-1.232-2.473-1.232-.703 0-1.339.229-1.91.68a3.14 3.14 0 0 0-1.117 1.785c-.086.343-.132.623-.132.844v2.08c0 .908.286 1.674.854 2.299.57.624 1.312.937 2.226.937 1.071 0 1.904-.403 2.5-1.206.598-.805.896-1.866.896-3.184ZM117.383 36.109c0 1.471-.524 2.669-1.576 3.593-1.156 1.01-2.765 1.514-4.833 1.514-1.91 0-3.44-.358-4.599-1.077l.659-2.31c1.248.735 2.617 1.105 4.109 1.105 1.071 0 1.904-.237 2.503-.708.596-.47.893-1.102.893-1.89 0-.702-.245-1.293-.737-1.773-.49-.48-1.307-.926-2.448-1.338-3.107-1.13-4.659-2.784-4.659-4.96 0-1.423.544-2.589 1.633-3.496 1.086-.909 2.534-1.363 4.344-1.363 1.615 0 2.956.274 4.027.822l-.711 2.26c-1-.531-2.13-.796-3.396-.796-1 0-1.781.24-2.341.719-.473.427-.711.949-.711 1.566 0 .684.271 1.25.815 1.694.473.41 1.333.855 2.581 1.335 1.527.6 2.648 1.3 3.37 2.103.718.801 1.077 1.804 1.077 3ZM126.784 30.563h-3.133v6.057c0 1.54.552 2.31 1.659 2.31.508 0 .929-.043 1.262-.129l.079 2.105c-.56.204-1.297.307-2.211.307-1.122 0-2-.334-2.633-1.001-.631-.668-.948-1.789-.948-3.363V30.56h-1.867v-2.08h1.867v-2.284l2.792-.822v3.106h3.133v2.082ZM140.923 34.624c0 1.917-.563 3.492-1.686 4.723-1.177 1.267-2.74 1.9-4.688 1.9-1.877 0-3.372-.608-4.486-1.822-1.115-1.214-1.672-2.747-1.672-4.594 0-1.934.573-3.517 1.724-4.748 1.148-1.232 2.697-1.849 4.645-1.849 1.877 0 3.388.607 4.528 1.823 1.091 1.18 1.635 2.701 1.635 4.567Zm-2.95.09c0-1.15-.252-2.138-.762-2.96-.596-.996-1.448-1.493-2.552-1.493-1.143 0-2.011.498-2.607 1.492-.511.825-.763 1.827-.763 3.013 0 1.15.252 2.137.763 2.958.615.996 1.473 1.493 2.581 1.493 1.086 0 1.938-.507 2.552-1.519.524-.838.788-1.835.788-2.984ZM150.158 30.92a5.054 5.054 0 0 0-.896-.077c-1 0-1.773.368-2.317 1.105-.474.65-.711 1.472-.711 2.464v6.546h-2.842l.027-8.547c0-1.438-.036-2.747-.107-3.927h2.477l.104 2.387h.078c.3-.82.774-1.48 1.422-1.976a3.494 3.494 0 0 1 2.054-.668c.263 0 .5.018.711.05v2.643ZM162.878 34.13c0 .496-.033.915-.104 1.257h-8.528c.034 1.232.446 2.175 1.238 2.825.718.58 1.648.872 2.789.872 1.263 0 2.415-.196 3.451-.59l.445 1.924c-1.211.515-2.64.77-4.289.77-1.984 0-3.542-.569-4.675-1.706-1.131-1.138-1.697-2.665-1.697-4.581 0-1.881.526-3.448 1.581-4.697 1.104-1.334 2.596-2 4.473-2 1.844 0 3.24.666 4.188 2 .751 1.06 1.128 2.37 1.128 3.926Zm-2.71-.72c.018-.82-.167-1.53-.552-2.13-.492-.77-1.248-1.155-2.266-1.155-.929 0-1.685.375-2.262 1.13-.474.599-.755 1.317-.842 2.155h5.922Z"
      fill="#fff"
    />
    <defs>
      <filter
        id="a"
        x={-9}
        y={-9.016}
        width={198}
        height={70.039}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_127_649"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_127_649"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default AppStoreLogo