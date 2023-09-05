/**

 node-red-contrib-peak-value-calculator/peak-values.js - Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/


module.exports = function(RED) {
    function PeakValueNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        let peakValue = -Infinity;
        let acceptingValues = false;

        node.on("input", function(msg) {
            try {
                if (msg.topic === "start" && msg.payload === true) {
                    acceptingValues = true;
                    node.status({fill: "green", shape: "dot", text: "Started"});
                } else if (msg.topic === "stop" && msg.payload === true) {
                    acceptingValues = false;
                    node.status({fill: "red", shape: "dot", text: "Stopped"});
                } else if (msg.topic === "peak" && msg.payload === true) {
                    msg.payload = {"peak": peakValue};
                    node.send(msg);
                    node.status({fill: "yellow", shape: "dot", text: "Peak calculated"});
                } else if (msg.topic === "clear" && msg.payload === true) {
                    peakValue = -Infinity;
                    acceptingValues = false;
                    node.status({fill: "blue", shape: "dot", text: "Cleared"});
                } else if (acceptingValues) {
                    if (typeof msg.payload !== "number") {
                        throw new Error("Expected a number for payload");
                    }
                    if (msg.payload > peakValue) {
                        peakValue = msg.payload;
                    }
                    node.status({fill: "green", shape: "dot", text: "Accepting values"});
                } else {
                    throw new Error("Unrecognized command or topic");
                }
            } catch (err) {
                node.error(err.message, msg);
                node.status({fill: "red", shape: "ring", text: "Error"});
            }
        });
    }

    RED.nodes.registerType("peak-value", PeakValueNode);
}

