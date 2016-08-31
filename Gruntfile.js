module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    const pokeDatabase = [
        "./db/moves/moves.js",
        "./db/moves/move_message.js",
        "./db/moves/type.js",
        "./db/pokes/pokemons.js",
        "./db/generations.js",
        "./db/generations.options.js",
        "./db/abilities/abilities.js",
        "./db/abilities/ability_messages.js",
        "./db/items/items.js",
        "./db/items/berries.js",
        "./db/items/item_messages.js",
        "./db/items/berry_messages.js",
        "./db/status/stats.js",
        "./db/status/status.js",
        "./db/types/types.js",
        "./db/types/category.js",
        "./db/categories/categories.js",
        "./db/gens/versions.js"
    ];

    const jsBackend = [
        "./app/assets/javascript/config.js",
        "./app/assets/javascript/libs/riot.js",
        "./app/assets/javascript/libs/md5.js",
        "./app/assets/javascript/postorage.js",
        "./app/assets/javascript/network.js",
        "./app/assets/javascript/serverconnect.js",
        "./app/assets/javascript/players.js",
        "./app/assets/javascript/channels.js",
        "./app/assets/javascript/pms.js",
        "./app/assets/javascript/battles/battledata.js",
        "./app/assets/javascript/battles/battles.js",
        "./app/assets/javascript/battles/commandhandling.js",
        "./app/assets/javascript/pokeinfo.js",
        "./app/assets/javascript/poke.js",
        "./app/assets/javascript/backend.js"
    ];

    const jsReplay = [
        "./bower_components/jquery/dist/jquery.js",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js",
        "./bower_components/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js",
        "./app/assets/javascript/libs/vex.combined.min.js",
        "./app/assets/javascript/config.js",
        "./app/assets/javascript/utils.js",
        "./app/assets/javascript/basetab.js",
        "./app/assets/javascript/chat.js",
        "./app/assets/javascript/battles/battletab.js",
        "./app/assets/javascript/libs/riot.js",
        "./app/assets/javascript/postorage.js",
        "./app/assets/javascript/network.js",
        "./app/assets/javascript/serverconnect.js",
        "./app/assets/javascript/battles/battledata.js",
        "./app/assets/javascript/battles/battles.js",
        "./app/assets/javascript/battles/commandhandling.js",
        "./app/assets/javascript/pokeinfo.js",
        "./app/assets/javascript/poke.js",
        "./db/pokes/stats.js",
        "./db/pokes/type1.js",
        "./db/pokes/type2.js",
        "./app/assets/javascript/replay.js"
    ];

    const jsFrontend = [
        "./bower_components/bootstrap/dist/js/bootstrap.min.js",
        "./bower_components/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js",
        "./bower_components/bootstrap-contextmenu/bootstrap-contextmenu.js",
        "./bower_components/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js",
        "./bower_components/typeahead.js/dist/typeahead.jquery.min.js",
        "./app/assets/javascript/libs/vex.combined.min.js",
        "./app/assets/javascript/notif.js",
        "./app/assets/javascript/utils.js",
        "./app/assets/javascript/basetab.js",
        "./app/assets/javascript/chat.js",
        "./app/assets/javascript/channeltab.js",
        "./app/assets/javascript/pmtab.js",
        "./app/assets/javascript/battles/battletab.js",
        "./app/assets/javascript/playerlistui.js",
        "./app/assets/javascript/channellistui.js",
        "./app/assets/javascript/battles/battlelistui.js",
        "./app/assets/javascript/pmlistui.js",
        "./app/assets/javascript/frontend.js"
    ];

    const jsTeambuilder = [
        "./bower_components/handlebars/handlebars.min.js",
        "./bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js",
        "./bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js",
        "./db/pokes/all_moves.js",
        "./db/pokes/stats.js",
        "./db/pokes/type1.js",
        "./db/pokes/type2.js",
        "./db/pokes/ability1.js",
        "./db/pokes/ability2.js",
        "./db/pokes/ability3.js",
        "./db/pokes/item_for_forme.js",
        "./db/pokes/released.js",
        "./db/items/item_useful.js",
        "./db/items/released_items.js",
        "./db/items/released_berries.js",
        "./db/items/items_description.js",
        "./db/items/berries_description.js",
        "./db/moves/effect.js",
        "./db/moves/effect_chance.js",
        "./db/moves/power.js",
        "./db/moves/accuracy.js",
        "./db/moves/damage_class.js",
        "./db/moves/pp.js",
        "./db/pokes/gender.js",
        "./db/abilities/ability_desc.js",
        "./db/natures/nature.js",
        "./app/assets/javascript/teambuilder.js"
    ];

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "./public/assets/stylesheets/frontend.css": "./app/assets/stylesheets/frontend.less",
                    "./public/assets/stylesheets/replay.css": "./app/assets/stylesheets/replay.less",
                    "./public/assets/stylesheets/backend.css": "./app/assets/stylesheets/backend.less",
                    "./public/assets/stylesheets/teambuilder.css": "./app/assets/stylesheets/teambuilder.less",
                    "./public/assets/stylesheets/simplebattlewindow.css": "./app/assets/stylesheets/simplebattlewindow.less"
                }
            }
        },
        concat: {
            options: {
                separator: ";"
            },
            jsFrontend: {
                src: jsFrontend,
                dest: "./public/assets/javascript/frontend.js"
            },
            jsBackend: {
                src: jsBackend.concat(pokeDatabase),
                dest: "./public/assets/javascript/backend.js"
            },
            jsReplay: {
                src: jsReplay.concat(pokeDatabase),
                dest: "./public/assets/javascript/replay.js"
            },
            jsTeambuilder: {
                src: jsTeambuilder,
                dest: "./public/assets/javascript/teambuilder.js"
            },
            jsSimpleBattleWindow: {
                src: [
                    "./bower_components/howler.js/howler.min.js",
                    "./app/assets/javascript/battles/simplebattlewindow.js"
                ],
                dest: "./public/assets/javascript/simplebattlewindow.js"
            },
            simpleCopyColors: {
                src: "./bower_components/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css",
                dest: "./app/assets/stylesheets/bootstrap-colorpicker.less"
            }
        },
        copy: {
            files: {
                files: [
                    {
                        expand: true,
                        src: ["bower_components/bootstrap/dist/fonts/*"],
                        dest: "./public/assets/fonts/",
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ["bower_components/font-awesome/fonts/*"],
                        dest: "./public/assets/fonts/",
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ["bower_components/jquery/dist/jquery.min.js"],
                        dest: "./public/assets/javascript/",
                        filter: "isFile",
                        flatten: true
                    },
                    {
                        expand: true,
                        cwd: "animated-battle-window/html/build/dist/html/",
                        src: ["**"],
                        dest: "./public/battle/html/"
                    },
                    {
                        expand: true,
                        cwd: "animated-battle-window/assets/",
                        src: ["**", "!**.zip"],
                        dest: "./public/battle/"
                    },
                    {
                        expand: true,
                        cwd: "animated-battle-window/html/build/dist/assets/",
                        src: ["**"],
                        dest: "./public/battle/"
                    },
                    {
                        expand: true,
                        cwd: "bower_components/mjolnic-bootstrap-colorpicker/dist/img/",
                        src: ["**"],
                        dest: "./public/assets/img/"
                    },
                    {
                        expand: true,
                        cwd: "app/assets/sounds",
                        src: ["**"],
                        dest: "./public/assets/sounds/"
                    }
                ]
            }
        },
        uglify: {
            frontend: {
                files: {
                    "./public/assets/javascript/frontend.js": "./public/assets/javascript/frontend.js"
                }
            },
            backend: {
                files: {
                    "./public/assets/javascript/backend.js": "./public/assets/javascript/backend.js"
                }
            }
        },
        eslint: {
            scripts: [
                "*.js"
            ],
            app: [
                "app/assets/javascript/**/*.js",
                "!app/assets/javascript/libs/**/*.js",
                // Don't add more exceptions below; slowly reduce if possible.
                "!app/assets/javascript/backend.js",
                "!app/assets/javascript/basetab.js",
                "!app/assets/javascript/channellistui.js",
                "!app/assets/javascript/channels.js",
                "!app/assets/javascript/channeltab.js",
                "!app/assets/javascript/chat.js",
                "!app/assets/javascript/config.js",
                "!app/assets/javascript/frontend.js",
                "!app/assets/javascript/network.js",
                "!app/assets/javascript/notif.js",
                "!app/assets/javascript/playerlistui.js",
                "!app/assets/javascript/players.js",
                "!app/assets/javascript/pmlistui.js",
                "!app/assets/javascript/pms.js",
                "!app/assets/javascript/pmtab.js",
                "!app/assets/javascript/poke.js",
                "!app/assets/javascript/pokeinfo.js",
                "!app/assets/javascript/postorage.js",
                "!app/assets/javascript/replay.js",
                "!app/assets/javascript/serverconnect.js",
                "!app/assets/javascript/teambuilder.js",
                "!app/assets/javascript/utils.js",
                "!app/assets/javascript/battles/battledata.js",
                "!app/assets/javascript/battles/battlelistui.js",
                "!app/assets/javascript/battles/battles.js",
                "!app/assets/javascript/battles/battletab.js",
                "!app/assets/javascript/battles/commandhandling.js",
                "!app/assets/javascript/battles/simplebattlewindow.js"
            ]
        },
        watch: {
            jsFrontend: {
                files: jsFrontend,
                tasks: ["concat:jsFrontend"/* , 'uglify:frontend' */],
                options: {
                    livereload: true
                }
            },
            jsBackend: {
                files: jsBackend,
                tasks: ["concat:jsBackend", "uglify:backend"],
                options: {
                    livereload: true
                }
            },
            simpleCopy: {
                files: ["./views/index.kiwi"],
                tasks: ["concat:simpleCopy"],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ["./app/assets/stylesheets/*.less"],
                tasks: ["less"],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask("default", ["watch"]);
};
