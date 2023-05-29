<template>
    <div class="wrapper">
        <Layout-Header />
        <div class="container full-size-not-float">
            <div class="wide-inner two-sidebar">
                <div class="section">
                    <div id="content-box">
                        <div class="section">
                            <Widget />
                            <Nuxt />
                        </div>
                    </div>
                    <RightWidget />
                </div>
            </div>
        </div>
        <Layout-Footer />
    </div>
</template>