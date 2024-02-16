import { LatiteUnit, assert, getn } from "./unit.js";

const LATITE_TEST_MESSAGE = "______LatiteTestMessageChat";
let receivedTestMessage = false;
const LATITE_TEST_MESSAGE_COMMAND = "______LatiteTestMessageCmd";
let receivedTestMessage2 = false;

const LATITE_FILE_TEST = "latite\nunit\ntest";

const fs = require("filesystem")
const clip = require("clipboard")

LatiteUnit.test({
    testLocalPlayer() {
        getn(game.getLocalPlayer());
    },
    testWorld() {
        getn(game.getWorld());
    },
    testWorldName() {
        assert(getn(game.getWorld()).getName().length > 2, "Note: This is assuming the world name is greater than two.");
    },
    testPlayerName() {
        assert(getn(game.getLocalPlayer()).getName().length > 2, "Note: This is assuming the player name is greater than two.");
    },
    sendMessage_part1() {
        game.sendChatMessage(LATITE_TEST_MESSAGE);

        setTimeout(() => {
            LatiteUnit.test({sendMessage_part2() {
                assert(receivedTestMessage);
            }})
        }, 1000);
    },

    sendCommand_part1() {
        game.executeCommand("/say " + LATITE_TEST_MESSAGE_COMMAND);

        setTimeout(() => {
            LatiteUnit.test({sendCommand_part2() {
                assert(receivedTestMessage2);
            }})
        }, 1000);
    },

    getInputBinding() {
        assert(game.getInputBinding("attack") < 0, "assuming attack is a mouse bind");
    },

    soundTest() {
        game.playSoundUI("random.orb", 1, 0.5);
    },

    entityList() {
        assert(getn(game.getWorld()).getEntities().length > 0);
    },

    entityCount() {
        assert(getn(game.getWorld()).getEntityCount() > 0)
    },

    playerList() {
        assert(getn(game.getWorld()).getPlayers().includes(getn(game.getLocalPlayer()).getName()));
    },

    localWorld() {
        let islocal = getn(game.getWorld()).isLocalWorld();
        if (game.getServer() != null) {
            assert(!islocal);
        } else {
            assert(islocal);
        }
    },

    heldItem() {
        assert(getn(game.getLocalPlayer()).getHoldingItem().toString().includes("name="));
    },

    entityValidity() {
        for (let ent of getn(game.getWorld()).getEntities()) {
            assert(ent.isValid());
        }
    },

    molangTest() {
        let attackTime = getn(game.getLocalPlayer()).getMolangVariable("variable.attack_time").number;
        assert(attackTime >= 0.0 && attackTime <= 1.0);
    },

    writeReadFile() {
        fs.write("testWriteReadFile", util.stringToBuffer(LATITE_FILE_TEST));
        assert(util.bufferToString(fs.read("testWriteReadFile")) == LATITE_FILE_TEST, "file contents unexpected");
    },

    appendFile() {
        fs.write("testAppendFile", new Uint8Array(0));

        fs.append("testAppendFile", util.stringToBuffer(LATITE_FILE_TEST));
        assert(util.bufferToString(fs.read("testAppendFile")) == LATITE_FILE_TEST, "file contents unexpected");
    },

    writeReadFileAsync_part1() {
        fs.writeAsync("testWriteReadFile", util.stringToBuffer(LATITE_FILE_TEST), (err) => {
            LatiteUnit.test({
                writeReadFileAsync_part2() {
                    assert(err == 0, "failed to write file");

                    fs.readAsync("testWriteReadFile", (err, content) => {
                        LatiteUnit.test({
                            writeReadFileAsync_part3() {
                                assert(err == 0, "failed to read file");

                                assert(util.bufferToString(content) == LATITE_FILE_TEST, "file contents unexpected")
                            }
                        })
                    })
                    
                }
            })
            
        });
    },

    clipboard() {
        clip.set("LatiteClipboardTest");
        assert(clip.get() == "LatiteClipboardTest");
    }
})

client.on("receive-chat", (ev) => {
    if (ev.message.includes(LATITE_TEST_MESSAGE)) {
        receivedTestMessage = true;
        ev.cancel = true;
    }

    if (ev.message.includes(LATITE_TEST_MESSAGE_COMMAND)) {
        receivedTestMessage2 = true;
        ev.cancel = true;
    }
})