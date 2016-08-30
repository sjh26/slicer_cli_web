/**
 * Copyright 2015 Kitware Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = function (grunt) {
    grunt.config.merge({
        slicerCLI: {
            root: '<%= pluginDir %>/slicer_cli_web',
            extjs: '<%= slicerCLI.root %>/web_client/js/ext',
            extcss: '<%= slicerCLI.root %>/web_client/stylesheets/ext',
            extextra: '<%= slicerCLI.root %>/web_client/extra',
            npm: '<%= slicerCLI.root %>/node_modules',
            static: '<%= staticDir %>/built/plugins/slicer_cli_web'
        },
        copy: {
            'slicerCLI-bootstrap-slider': {
                files: [{
                    '<%= slicerCLI.extjs %>/bootstrap-slider.js': '<%= slicerCLI.npm %>/bootstrap-slider/dist/bootstrap-slider.js',
                    '<%= slicerCLI.extcss %>/bootstrap-slider.css': '<%= slicerCLI.npm %>/bootstrap-slider/dist/css/bootstrap-slider.css'
                }]
            },
            'slicerCLI-bootstrap-colorpicker': {
                files: [{
                    '<%= slicerCLI.extjs %>/bootstrap-colorpicker.js': '<%= slicerCLI.npm %>/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js',
                    '<%= slicerCLI.extcss %>/bootstrap-colorpicker.css': '<%= slicerCLI.npm %>/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css'
                }, {
                    expand: true,
                    cwd: '<%= slicerCLI.npm %>/bootstrap-colorpicker/dist/img',
                    src: ['bootstrap-colorpicker/*.png'],
                    dest: '<%= slicerCLI.extextra %>'
                }]
            },
            tinycolor: {
                files: [{
                    '<%= slicerCLI.extjs %>/tinycolor.js': '<%= slicerCLI.npm %>/tinycolor2/tinycolor.js'
                }]
            }
        },
        stylus: {
            'plugin-slicer_cli_web': {
                options: {
                    'include css': true
                }
            }
        },
        init: {
            'copy:slicerCLI-bootstrap-slider': {
                dependencies: [
                    'shell:plugin-slicer_cli_web'
                ]
            },
            'copy:slicerCLI-bootstrap-colorpicker': {
                dependencies: [
                    'shell:plugin-slicer_cli_web'
                ]
            },
            'copy:tinycolor': {
                dependencies: [
                    'shell:plugin-slicer_cli_web'
                ]
            }
        }
    });
};
