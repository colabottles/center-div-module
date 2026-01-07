<template>
  <div>
    <h1>CenterDiv Tests</h1>

    <!-- Test 1: Basic centering -->
    <CenterDiv
      min-block-size="100vh"
      style="border: 1px solid red;"
    >
      <button>Test 1: Both Axes</button>
    </CenterDiv>

    <!-- Test 2: Horizontal only -->
    <CenterDiv
      axis="horizontal"
      min-block-size="200px"
      style="border: 1px solid blue;"
    >
      <button>Test 2: Horizontal</button>
    </CenterDiv>

    <!-- Test 3: Vertical only -->
    <CenterDiv
      axis="vertical"
      min-block-size="200px"
      style="border: 1px solid green;"
    >
      <button>Test 3: Vertical</button>
    </CenterDiv>

    <!-- Test 4: Custom element -->
    <CenterDiv
      as="article"
      min-block-size="200px"
      style="border: 1px solid purple;"
    >
      <p>Test 4: As Article</p>
    </CenterDiv>
  </div>
</template>
