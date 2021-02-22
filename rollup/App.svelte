<script>
  import Test1 from "./example"; // Relative to file location
  import Test2 from "example"; // node_modules
</script>

<div>
  From the root directory:
  <Test1 />
</div>
<div>
  From the node_modules directory:
  <Test2 />
</div>
