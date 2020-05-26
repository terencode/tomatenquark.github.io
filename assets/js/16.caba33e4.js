(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{391:function(e,t,o){"use strict";o.r(t);var a=o(43),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"applying-patches-from-upstream"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#applying-patches-from-upstream"}},[e._v("#")]),e._v(" Applying patches from upstream")]),e._v(" "),o("p",[o("code",[e._v("Tomatenquark")]),e._v(" does not incorporate any custom code (yet). This is by design. The project is looking to deliver a stable, constantly updated version of the game before making any adaptions to its code. This is mainly done by providing "),o("code",[e._v("CI/CD")]),e._v(".")]),e._v(" "),o("p",[e._v("In order to keep this system running it is important to be able to roll in changes from "),o("code",[e._v("upstream")]),e._v(" (sauerbraten SVN).")]),e._v(" "),o("p",[e._v("Here is how this can be done:")]),e._v(" "),o("ul",[o("li",[e._v("use a "),o("code",[e._v("git svn")]),e._v(" clone of SVN and regularly update it using "),o("code",[e._v("git svn rebase")])]),e._v(" "),o("li",[e._v("use "),o("code",[e._v("git format-patch -NUMBER -o ../patches")]),e._v(" to store the latest "),o("code",[e._v("NUMBER")]),e._v(" of commits as patches")]),e._v(" "),o("li",[e._v("add all patches to "),o("code",[e._v("sauerbraten_code")]),e._v(" using "),o("code",[e._v("git am < ../patches/0000.patch")])]),e._v(" "),o("li",[e._v("check patches if they apply either to "),o("code",[e._v("code")]),e._v(" or "),o("code",[e._v("media")]),e._v(" and apply them to one of the repositories")])]),e._v(" "),o("p",[e._v("Using this approach ensures that "),o("code",[e._v("sauerbraten_code")]),e._v(" will have the exact same number of commits as SVN, allowing for bookkeeping. As long as the directory structure of "),o("code",[e._v("code")]),e._v(" or "),o("code",[e._v("media")]),e._v(" is not changed, this will continue to work sanely. In case code is modified in some of these repositories (directory structure), we would need a new routine for applying patches from upstream.")])])}),[],!1,null,null,null);t.default=s.exports}}]);