import { GameObjects } from "phaser"
import { getPortraitSrc } from "../../utils"
import GameScene from "../scenes/game-scene"
import indexList from "../../../dist/client/assets/pokemons/indexList.json"
import { t } from "i18next"
import { Stat } from "../../../../types/enum/Game"
import AnimatedTiles from "phaser-animated-tiles-phaser3.5/dist/AnimatedTiles.min.js"

export default class LoadingManager {
  scene: Phaser.Scene
  loadingBar: GameObjects.Container
  statusMessage: string

  constructor(scene: Phaser.Scene) {
    this.scene = scene
    this.statusMessage = t("loading")

    this.scene.load.on("fileprogress", (file, percentComplete) => {
      if (percentComplete < 1) {
        this.statusMessage = t("loading_asset") + " " + file.key
      }
    })

    this.scene.load.on("complete", () => {
      this.statusMessage = t("loading_complete")
    })

    this.preload()
  }

  preload() {
    const scene = this.scene
    scene.load.scenePlugin(
      "animatedTiles",
      AnimatedTiles,
      "animatedTiles",
      "animatedTiles"
    )
    indexList.forEach((id) => {
      scene.load.image(`portrait-${id}`, getPortraitSrc(id))
      scene.load.multiatlas(
        id,
        `/assets/pokemons/${id}.json`,
        "/assets/pokemons"
      )
    })

    if (scene instanceof GameScene && scene.tilemap) {
      scene.load.audio("music_" + scene.dungeonMusic, [
        `https://raw.githubusercontent.com/keldaanCommunity/pokemonAutoChessMusic/main/music/${scene.dungeonMusic}.mp3`
      ])
      scene.tilemap.tilesets.forEach((t) => {
        scene.load.image(
          t.name,
          "/assets/tilesets/" + scene.dungeon + "/" + t.image
        )
      })

      scene.load.tilemapTiledJSON("map", scene.tilemap)
    }
    scene.load.image("rain", "/assets/ui/rain.png")
    scene.load.image("sand", "/assets/ui/sand.png")
    scene.load.image("wind", "/assets/ui/wind.png")
    scene.load.image("sun", "/assets/ui/sun.png")
    scene.load.image("clouds", "/assets/ui/clouds.png")
    scene.load.multiatlas(
      "snowflakes",
      "/assets/ui/snowflakes.json",
      "/assets/ui/"
    )

    scene.load.image("money", "/assets/ui/money.svg")
    scene.load.image("arrowDown", "/assets/ui/arrowDown.png")

    scene.load.multiatlas("item", "/assets/item/item.json", "/assets/item/")

    loadStatusMultiAtlas(this.scene)
    loadAttacksMultiAtlas(this.scene)
    loadEnvironmentMultiAtlas(this.scene)

    const statBoost = [
      Stat.AP,
      Stat.ATK_SPEED,
      Stat.DEF,
      Stat.HP,
      Stat.SHIELD,
      Stat.SPE_DEF,
      Stat.ATK
    ]
    statBoost.forEach((stat) =>
      scene.load.multiatlas(
        `BOOST_${stat}`,
        `/assets/attacks/BOOST_${stat}.json`,
        "/assets/attacks"
      )
    )
  }
}

export function loadStatusMultiAtlas(scene: Phaser.Scene) {
  scene.load.multiatlas(
    "status",
    "/assets/status/status.json",
    "/assets/status/"
  )
  scene.load.multiatlas("wound", "/assets/status/wound.json", "/assets/status")
  scene.load.multiatlas(
    "resurection",
    "/assets/status/resurection.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "RESURECT",
    "/assets/status/RESURECT.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "paralysis",
    "/assets/status/PARALYSIS.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "rune_protect",
    "/assets/status/RUNE_PROTECT.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "armorReduction",
    "/assets/status/ARMOR_REDUCTION.json",
    "/assets/status"
  )
  scene.load.multiatlas("charm", "/assets/status/CHARM.json", "/assets/status")
  scene.load.multiatlas(
    "flinch",
    "/assets/status/FLINCH.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "ELECTRIC_SURGE",
    "/assets/status/ELECTRIC_SURGE.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "VOID_BOOST",
    "/assets/status/VOID_BOOST.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "PSYCHIC_SURGE",
    "/assets/status/PSYCHIC_SURGE.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "GRASSY_SURGE",
    "/assets/status/GRASSY_SURGE.json",
    "/assets/status"
  )
  scene.load.multiatlas(
    "MISTY_SURGE",
    "/assets/status/MISTY_SURGE.json",
    "/assets/status"
  )
}

export function loadAttacksMultiAtlas(scene: Phaser.Scene) {
  scene.load.multiatlas(
    "attacks",
    "/assets/attacks/attacks.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "specials",
    "/assets/attacks/specials.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ROAR_OF_TIME",
    "/assets/attacks/ROAR_OF_TIME.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ROCK_TOMB",
    "/assets/attacks/ROCK_TOMB.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ROCK_SMASH",
    "/assets/attacks/ROCK_SMASH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "VOLT_SWITCH",
    "/assets/attacks/VOLT_SWITCH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "STEAM_ERUPTION",
    "/assets/attacks/STEAM_ERUPTION.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "APPLE_ACID",
    "/assets/attacks/APPLE_ACID.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "WHIRLWIND",
    "/assets/attacks/WHIRLWIND.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "EMPTY_LIGHT",
    "/assets/attacks/EMPTY_LIGHT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "AIR_SLASH",
    "/assets/attacks/AIR_SLASH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "VINE_WHIP",
    "/assets/attacks/VINE_WHIP.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "BARB_BARRAGE",
    "/assets/attacks/BARB_BARRAGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SLASH",
    "/assets/attacks/SLASH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "INFERNAL_PARADE",
    "/assets/attacks/INFERNAL_PARADE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "WHEEL_OF_FIRE",
    "/assets/attacks/WHEEL_OF_FIRE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FLAME_HIT",
    "/assets/attacks/FLAME_HIT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "EGGSPLOSION",
    "/assets/attacks/EGGSPLOSION.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "POPULATION_BOMB",
    "/assets/attacks/POPULATION_BOMB.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SCREECH",
    "/assets/attacks/SCREECH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SAND_TOMB",
    "/assets/attacks/SAND_TOMB.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "NIGHT_SHADE",
    "/assets/attacks/NIGHT_SHADE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "NATURAL_GIFT",
    "/assets/attacks/NATURAL_GIFT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PRISMATIC_LASER",
    "/assets/attacks/PRISMATIC_LASER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MAGICAL_LEAF",
    "/assets/attacks/MAGICAL_LEAF.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MAGICAL_LEAF_CHARGE",
    "/assets/attacks/MAGICAL_LEAF_CHARGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "BRAVE_BIRD",
    "/assets/attacks/BRAVE_BIRD.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "AQUA_RING",
    "/assets/attacks/AQUA_RING.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "LIGHT_CELL",
    "/assets/attacks/LIGHT_CELL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "HIT_NEUTRAL",
    "/assets/attacks/HIT_NEUTRAL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FISSURE",
    "/assets/attacks/FISSURE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ASSURANCE",
    "/assets/attacks/ASSURANCE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "CLOSE_COMBAT",
    "/assets/attacks/CLOSE_COMBAT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "TEETER_DANCE",
    "/assets/attacks/TEETER_DANCE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SUPER_FANG",
    "/assets/attacks/SUPER_FANG.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PARABOLIC_CHARGE",
    "/assets/attacks/PARABOLIC_CHARGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PLAY_ROUGH",
    "/assets/attacks/PLAY_ROUGH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "WATER_PULSE",
    "/assets/attacks/WATER_PULSE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ATTRACT",
    "/assets/attacks/ATTRACT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PSYCHIC",
    "/assets/attacks/PSYCHIC.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ANCHOR_SHOT",
    "/assets/attacks/ANCHOR_SHOT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "LEAF_BLADE",
    "/assets/attacks/LEAF_BLADE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PRESENT",
    "/assets/attacks/PRESENT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "WHIRLPOOL",
    "/assets/attacks/WHIRLPOOL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PYRO_BALL",
    "/assets/attacks/PYRO_BALL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "WATERFALL",
    "/assets/attacks/WATERFALL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "HELPING_HAND",
    "/assets/attacks/HELPING_HAND.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MUD_BUBBLE",
    "/assets/attacks/MUD_BUBBLE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ERUPTION",
    "/assets/attacks/ERUPTION.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SLASHING_CLAW",
    "/assets/attacks/SLASHING_CLAW.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MAGMA_STORM",
    "/assets/attacks/MAGMA_STORM.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SOLAR_BEAM",
    "/assets/attacks/SOLAR_BEAM.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "THRASH",
    "/assets/attacks/THRASH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ROLLOUT",
    "/assets/attacks/ROLLOUT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ABSORB",
    "/assets/attacks/ABSORB.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ACROBATICS",
    "/assets/attacks/ACROBATICS.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "GIGATON_HAMMER",
    "/assets/attacks/GIGATON_HAMMER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ICY_WIND",
    "/assets/attacks/ICY_WIND.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "COUNTER",
    "/assets/attacks/COUNTER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "HEAL_ORDER",
    "/assets/attacks/HEAL_ORDER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ATTACK_ORDER",
    "/assets/attacks/ATTACK_ORDER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SHELL_TRAP",
    "/assets/attacks/SHELL_TRAP.json",
    "/assets/attacks"
  )
  scene.load.multiatlas("HEX", "/assets/attacks/HEX.json", "/assets/attacks")
  scene.load.multiatlas(
    "SPECTRAL_THIEF",
    "/assets/attacks/SPECTRAL_THIEF.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ASTRAL_BARRAGE",
    "/assets/attacks/ASTRAL_BARRAGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PLASMA_FIST",
    "/assets/attacks/PLASMA_FIST.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SACRED_SWORD",
    "/assets/attacks/SACRED_SWORD.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "JUDGEMENT",
    "/assets/attacks/JUDGEMENT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SHADOW_SNEAK",
    "/assets/attacks/SHADOW_SNEAK.json",
    "/assets/attacks"
  )
  scene.load.multiatlas("DIVE", "/assets/attacks/DIVE.json", "/assets/attacks")
  scene.load.multiatlas(
    "SMOKE_SCREEN",
    "/assets/attacks/SMOKE_SCREEN.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "LIQUIDATION",
    "/assets/attacks/LIQUIDATION.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PAYDAY",
    "/assets/attacks/PAYDAY.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "HYPER_VOICE",
    "/assets/attacks/HYPER_VOICE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SHADOW_CLONE",
    "/assets/attacks/SHADOW_CLONE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "PETAL_DANCE",
    "/assets/attacks/PETAL_DANCE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas("ECHO", "/assets/attacks/ECHO.json", "/assets/attacks")
  scene.load.multiatlas(
    "INCENSE_DAMAGE",
    "/assets/attacks/INCENSE_DAMAGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "BRIGHT_POWDER",
    "/assets/attacks/BRIGHT_POWDER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "STATIC",
    "/assets/attacks/STATIC.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "EXPLOSION",
    "/assets/attacks/EXPLOSION.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SHADOW_BALL",
    "/assets/attacks/SHADOW_BALL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SEED_FLARE",
    "/assets/attacks/SEED_FLARE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ORIGIN_PULSE",
    "/assets/attacks/ORIGIN_PULSE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "EARTHQUAKE",
    "/assets/attacks/EARTHQUAKE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "AQUA_JET",
    "/assets/attacks/AQUA_JET.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MIND_BLOWN",
    "/assets/attacks/MIND_BLOWN.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MIND_BLOWN_SELF",
    "/assets/attacks/MIND_BLOWN_SELF.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SOFT_BOILED",
    "/assets/attacks/SOFT_BOILED.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "COSMIC_POWER",
    "/assets/attacks/COSMIC_POWER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "BONEMERANG",
    "/assets/attacks/BONEMERANG.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "GROWL",
    "/assets/attacks/GROWL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "RELIC_SONG",
    "/assets/attacks/RELIC_SONG.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "DISARMING_VOICE",
    "/assets/attacks/DISARMING_VOICE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "HIGH_JUMP_KICK",
    "/assets/attacks/HIGH_JUMP_KICK.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "TRI_ATTACK",
    "/assets/attacks/TRI_ATTACK.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "CLANGOROUS_SOUL",
    "/assets/attacks/CLANGOROUS_SOUL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "CONFUSING_MIND",
    "/assets/attacks/CONFUSING_MIND.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SONG_OF_DESIRE",
    "/assets/attacks/SONG_OF_DESIRE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FIELD_DEATH",
    "/assets/attacks/FIELD_DEATH.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FAIRY_CRIT",
    "/assets/attacks/FAIRY_CRIT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "BLUE_FLARE",
    "/assets/attacks/BLUE_FLARE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FUSION_BOLT",
    "/assets/attacks/FUSION_BOLT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "CHATTER",
    "/assets/attacks/CHATTER.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FUTURE_SIGHT",
    "/assets/attacks/FUTURE_SIGHT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SPIKE_ARMOR",
    "/assets/attacks/SPIKE_ARMOR.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MAGIC_BOUNCE",
    "/assets/attacks/MAGIC_BOUNCE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FAKE_TEARS",
    "/assets/attacks/FAKE_TEARS.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SPARKLING_ARIA",
    "/assets/attacks/SPARKLING_ARIA.json",
    "/assets/attacks"
  )
  scene.load.multiatlas("SMOG", "/assets/attacks/SMOG.json", "/assets/attacks")
  scene.load.multiatlas(
    "AURORA_BEAM",
    "/assets/attacks/AURORA_BEAM.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SKY_ATTACK",
    "/assets/attacks/SKY_ATTACK.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ILLUSION",
    "/assets/attacks/ILLUSION.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "pmd-replace",
    "/assets/attacks/pmd-replace.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "ICE_RANGE",
    "/assets/attacks/ICE_RANGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SPIRIT_SHACKLE",
    "/assets/attacks/SPIRIT_SHACKLE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "WATER_SHURIKEN",
    "/assets/attacks/WATER_SHURIKEN.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "FIGHTING",
    "/assets/attacks/FIGHTING.json",
    "/assets/attacks"
  )
  scene.load.image("STRING_SHOT", "/assets/attacks/STRING_SHOT.png")
  scene.load.multiatlas(
    "WONDER_GUARD",
    "/assets/attacks/WONDER_GUARD.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "X_SCISSOR",
    "/assets/attacks/X_SCISSOR.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "GEOMANCY",
    "/assets/attacks/GEOMANCY.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "DEATH_WING",
    "/assets/attacks/DEATH_WING.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MIST_BALL",
    "/assets/attacks/MIST_BALL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "LUSTER_PURGE",
    "/assets/attacks/LUSTER_PURGE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "LINK_CABLE",
    "/assets/attacks/LINK_CABLE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "GRASS_HEAL",
    "/assets/attacks/GRASS_HEAL.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "AERIAL_ACE",
    "/assets/attacks/AERIAL_ACE.json",
    "/assets/attacks"
  )
  scene.load.multiatlas("GAS", "/assets/attacks/GAS.json", "/assets/attacks")
  scene.load.multiatlas(
    "STEALTH_ROCKS",
    "/assets/attacks/STEALTH_ROCKS.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "SNIPE_SHOT",
    "/assets/attacks/SNIPE_SHOT.json",
    "/assets/attacks"
  )
  scene.load.multiatlas(
    "MAGIC_POWDER",
    "/assets/attacks/MAGIC_POWDER.json",
    "/assets/attacks"
  )
}

export function loadEnvironmentMultiAtlas(scene: Phaser.Scene) {
  scene.load.multiatlas(
    "portal",
    "/assets/environment/portal.json",
    "/assets/environment/"
  )
  scene.load.multiatlas(
    "chest",
    "/assets/environment/chest.json",
    "/assets/environment/"
  )
  scene.load.multiatlas(
    "shine",
    "/assets/environment/shine.json",
    "/assets/environment/"
  )
  scene.load.multiatlas("types", "/assets/types/sheet.json", "/assets/types/")

  scene.load.multiatlas(
    "berry_trees",
    "/assets/environment/berry_trees.json",
    "/assets/environment/"
  )
}
