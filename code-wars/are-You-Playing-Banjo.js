function areYouPlayingBanjo(name) {
    // Implement me
    const array = name.split('');
    
    if (name[0] === 'r' || name[0] === 'R'){
    return name + ' plays banjo';
  } 
    else return name + ' does not play banjo'
    
    }