function showDef1() {
  const definition = "This creature can't be blocked except by creatures with flying or reach. So, only other creatures with flying or with reach can block this during combat. It is effectively unblockable to those whithout flying or reach, and can block creatures with flying."
  document.getElementById("definition").innerHTML = definition;
}

function showDef2() {
  const definition = "If a creature with trample would deal enough damage to its blockers to destroy them, it deals the remaning damage to the defending player. For example, if my 5/5 beast with trample was blocked by your 1/1 elf, my beast would kill the elf and deal four damage to you."
  document.getElementById("definition").innerHTML = definition;
}

function showDef3() {
  const definition = "Any amount of damage a creature with deathtouch would deal to a creature is enough to destroy it (the other creature). So, even if a 1/1 wih deathtouch and a 10/10 go up againt each other, they would both die. The 10/10 would naturally kill the 1/1, but the deathtouch would allow the 1/1 to kill the 10/10"
  document.getElementById("definition").innerHTML = definition;
}

function showDef4() {
  const definition = "This  creature deals combat damage before creatures without first strike. Say a 3/2 creature with first strike was in combat against a 4/3 creature without first strike. What would happen is that the 3/2 would deal damage first, dealing 3 damage to the 4/3 and killing him. If the 4/3 had survived, he would have been able to attack the 3/2 with first strike, but since he died too early the creature with first strike would survive."
  document.getElementById("definition").innerHTML = definition;
}

function showDef5() {
  const definition = "Any amount of damage this creature would deal causes you to gain that much life. So, if a 3/3 with lifelink dealt three damage to a player or a creature, you would gain 3 life. Note: if a 3/3 with lifelink deals damage to a 1/1, you still gain 3 life, because it's dealing three damage, even if the creature only has one toughness."
  document.getElementById("definition").innerHTML = definition;
}

function showDef6() {
  const definition = "Attacking doesn't cause this creature to tap. So, a 1/1 with vigilance could attack and not have to tap. Note: other abilities can still cause this creature to tap."
  document.getElementById("definition").innerHTML = definition;
}

function showDef7() {
  const definition = "This creature can block creatures with flying. However, it can be blocked by anything."
  document.getElementById("definition").innerHTML = definition;
}