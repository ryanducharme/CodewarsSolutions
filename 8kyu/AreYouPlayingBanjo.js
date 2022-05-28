function areYouPlayingBanjo(name) {
  if (name.toLowerCase().startsWith('r') || name.toLowerCase().startsWith('R')) {
    return name + " plays banjo";
  }
  else {
    return name + " does not play banjo";
  }
}